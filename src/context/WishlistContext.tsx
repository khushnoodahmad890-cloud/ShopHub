import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  getWishlistIds,
  addToWishlist as apiAddToWishlist,
  removeFromWishlist as apiRemoveFromWishlist,
} from "../services/wishlistService";
import { useAuth } from "./AuthContext";

interface WishlistContextType {
  wishlistIds: number[];
  isWishlisted: (productId: number) => boolean;
  toggleWishlist: (productId: number) => Promise<void>;
  loading: boolean;
}

const WishlistContext = createContext<WishlistContextType | null>(null);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const { token } = useAuth();

  const [wishlistIds, setWishlistIds] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token) {
      setWishlistIds([]);
      return;
    }

    async function loadIds() {
      try {
        setLoading(true);
        const ids = await getWishlistIds();
        setWishlistIds(ids);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadIds();
  }, [token]);

  function isWishlisted(productId: number) {
    return wishlistIds.includes(productId);
  }

  async function toggleWishlist(productId: number) {
    const alreadyIn = isWishlisted(productId);

    // Optimistic update.
    setWishlistIds((prev) =>
      alreadyIn ? prev.filter((id) => id !== productId) : [...prev, productId]
    );

    try {
      if (alreadyIn) {
        await apiRemoveFromWishlist(productId);
      } else {
        await apiAddToWishlist(productId);
      }
    } catch (err) {
      // Roll back on failure.
      setWishlistIds((prev) =>
        alreadyIn
          ? [...prev, productId]
          : prev.filter((id) => id !== productId)
      );
      throw err;
    }
  }

  return (
    <WishlistContext.Provider
      value={{ wishlistIds, isWishlisted, toggleWishlist, loading }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error("useWishlist must be used inside WishlistProvider");
  }

  return context;
}
