interface Props {
  stock: number;
  lowStockThreshold?: number;
}

export default function StockBadge({ stock, lowStockThreshold = 5 }: Props) {
  if (stock <= 0) {
    return <span className="stock-badge out-of-stock">Out of Stock</span>;
  }

  if (stock <= lowStockThreshold) {
    return (
      <span className="stock-badge low-stock">Only {stock} left</span>
    );
  }

  return <span className="stock-badge in-stock">In Stock</span>;
}
