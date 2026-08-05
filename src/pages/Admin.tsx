import { useEffect, useState } from "react";

import ProductManager from "../components/ProductManager";
import { useToast } from "../context/ToastContext";
import { ApiError } from "../services/api";
import { getProducts } from "../services/productService";
import { getUserCount } from "../services/authService";
import {
  getAllOrders,
  updateOrderStatus,
} from "../services/orderService";
import type { AdminOrder } from "../types/order";

export default function Admin() {
  const [orders, setOrders] = useState<AdminOrder[]>([]);
  const [productCount, setProductCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);

  const { showToast } = useToast();

  useEffect(() => {
    loadOrders();
    loadProducts();
    loadCustomers();
  }, []);

  async function loadProducts() {
    try {
      const data = await getProducts();
      setProductCount(data.length);
    } catch (error) {
      console.error(error);
    }
  }

  async function loadCustomers() {
    try {
      const data = await getUserCount();
      setCustomerCount(data.customers);
    } catch (error) {
      console.error(error);
    }
  }

  async function loadOrders() {
    try {
      const data = await getAllOrders();
      setOrders(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleStatusChange(orderId: number, status: string) {
    try {
      await updateOrderStatus(orderId, status);
      showToast(`Order #${orderId} marked as ${status}`, "success");
      loadOrders();
    } catch (error) {
      const message =
        error instanceof ApiError
          ? error.message
          : "Failed to update order status";

      showToast(message, "error");
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
            <h1>{customerCount}</h1>
          </div>

          <div className="admin-card">
            <h2>Products</h2>
            <h1>{productCount}</h1>
          </div>

        </div>

        <ProductManager />

        <div className="admin-orders">

          <h2>Recent Orders</h2>

          <div className="table-wrapper">
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

                    <td>
                      <select
                        value={order.status}
                        onChange={(e) =>
                          handleStatusChange(order.id, e.target.value)
                        }
                      >
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
