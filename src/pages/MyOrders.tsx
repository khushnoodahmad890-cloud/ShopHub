import { useEffect, useState } from "react";
import { getMyOrders } from "../services/orderService";
<<<<<<< HEAD
import OrderTimeline from "../components/OrderTimeline";
import type { Order } from "../types/order";

function MyOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOrders() {
      try {
        const data = await getMyOrders();
        setOrders(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadOrders();
  }, []);

  if (loading) {
    return (
      <section className="orders-section">
        <div className="container">
          <h1>Loading orders...</h1>
        </div>
      </section>
    );
  }

  return (
    <section className="orders-section">
      <div className="container">
        <div className="orders-header">
          <h1>My Orders</h1>
          <p>Track your previous purchases.</p>
        </div>

        {orders.length === 0 ? (
          <div className="empty-orders">
            <p>You haven't placed any orders yet.</p>
          </div>
        ) : (
          <div className="orders-grid">
            {orders.map((order) => (
              <div key={order.id} className="order-card">
                <div className="order-top">
                  <h3>Order #{order.id}</h3>

                  <span
                    className={`status status-${order.status.toLowerCase()}`}
                  >
                    {order.status}
                  </span>
                </div>

                <OrderTimeline status={order.status} />

                <div className="order-details">
                  <p>
                    Total: <strong>${order.total}</strong>
                  </p>

                  <p>
                    Date:{" "}
                    {new Date(order.created_at).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default MyOrders;
=======

interface Order {
  id: number;
  total: string;
  status: string;
  created_at: string;
}

function MyOrders() {

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {

    async function loadOrders() {

      try {

        const data = await getMyOrders();

        setOrders(data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    }


    loadOrders();

  }, []);




  if (loading) {

    return (

      <section className="orders-section">

        <div className="container">

          <h1>
            Loading orders...
          </h1>

        </div>

      </section>

    );

  }




  return (

    <section className="orders-section">

      <div className="container">


        <div className="orders-header">

          <h1>
            My Orders
          </h1>

          <p>
            Track your previous purchases.
          </p>

        </div>




        {orders.length === 0 ? (

          <div className="empty-orders">

            <p>
              You haven't placed any orders yet.
            </p>

          </div>


        ) : (


          <div className="orders-grid">


            {orders.map((order) => (

              <div
                key={order.id}
                className="order-card"
              >


                <div className="order-top">


                  <h3>
                    Order #{order.id}
                  </h3>


                  <span className="status">

                    {order.status}

                  </span>


                </div>



                <div className="order-details">

                  <p>
                    Total:
                    {" "}
                    <strong>
                      ${order.total}
                    </strong>
                  </p>


                  <p>
                    Date:
                    {" "}
                    {new Date(
                      order.created_at
                    ).toLocaleString()}

                  </p>


                </div>


              </div>

            ))}


          </div>


        )}


      </div>

    </section>

  );
}


export default MyOrders;
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
