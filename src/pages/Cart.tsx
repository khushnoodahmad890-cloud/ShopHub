import { X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  const handleCheckout = () => {
    navigate("/payment");
  };

  return (
    <section className="cart-section">
      <div className="container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} />

                  <div className="cart-info">
                    <h3>{item.title}</h3>

                    <p>${item.price}</p>

                    <div className="cart-actions">
                      <button onClick={() => decreaseQuantity(item.id)}>
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        disabled={item.quantity >= item.stock}
                        title={
                          item.quantity >= item.stock
                            ? "No more stock available"
                            : undefined
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <strong>
                    ${(Number(item.price) * item.quantity).toFixed(2)}
                  </strong>

                  <button
                    className="cart-item-remove"
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Remove ${item.title}`}
                    title="Remove item"
                  >
                    <X size={18} />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Summary</h2>

              <h3>Total: ${totalPrice.toFixed(2)}</h3>

              <button className="btn" onClick={handleCheckout}>
                Proceed to Checkout
              </button>

              <button className="remove-btn" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
