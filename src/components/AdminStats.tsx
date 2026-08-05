interface Props {
  totalOrders: number;
  totalRevenue: number;
  totalProducts: number;
  totalCustomers: number;
}

export default function AdminStats({
  totalOrders,
  totalRevenue,
  totalProducts,
  totalCustomers,
}: Props) {
  return (
    <div className="admin-cards">
      <div className="admin-card">
        <h2>Total Orders</h2>
        <h1>{totalOrders}</h1>
      </div>

      <div className="admin-card">
        <h2>Total Revenue</h2>
        <h1>${totalRevenue.toFixed(2)}</h1>
      </div>

      <div className="admin-card">
        <h2>Customers</h2>
        <h1>{totalCustomers}</h1>
      </div>

      <div className="admin-card">
        <h2>Products</h2>
        <h1>{totalProducts}</h1>
      </div>
    </div>
  );
}