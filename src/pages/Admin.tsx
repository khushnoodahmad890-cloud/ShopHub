import { useEffect, useState } from "react";
import { getAllOrders } from "../services/orderService";

interface Order {
  id: number;
  name: string;
  email: string;
  total: number;
  status: string;
  created_at: string;
}

export default function Admin() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    loadOrders();
  }, []);

  async function loadOrders() {
    try {
      const data = await getAllOrders();
      setOrders(data);
    } catch (error) {
      console.error(error);
    }
  }

  const totalRevenue = orders.reduce(
    (sum, order) => sum + Number(order.total),
    0
  );

  return (
    <section className="admin-page">
      <div className="container">

        <h1 className="page-title">
          Admin Dashboard
        </h1>

        <div className="admin-cards">

          <div className="admin-card">
            <h2>Total Orders</h2>
            <h1>{orders.length}</h1>
          </div>

          <div className="admin-card">
            <h2>Total Revenue</h2>
            <h1>${totalRevenue.toFixed(2)}</h1>
          </div>

          <div className="admin-card">
            <h2>Customers</h2>
            <h1>--</h1>
          </div>

          <div className="admin-card">
            <h2>Products</h2>
            <h1>8</h1>
          </div>

        </div>

        <div className="admin-orders">

          <h2>Recent Orders</h2>

          <table>

            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {orders.map((order) => (
                <tr key={order.id}>

                  <td>#{order.id}</td>

                  <td>{order.name}</td>

                  <td>${Number(order.total).toFixed(2)}</td>

                  <td>{order.status}</td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>
    </section>
  );
}