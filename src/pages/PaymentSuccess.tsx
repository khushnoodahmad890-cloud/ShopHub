import { Link } from "react-router-dom";

export default function PaymentSuccess() {
  return (
    <section className="success-page">
      <div className="container success-container">

        <div className="success-icon">
          ✅
        </div>

        <h1>Payment Successful!</h1>

        <p>
          Thank you for your purchase.
          Your order has been placed successfully.
        </p>

        <Link to="/orders" className="btn">
          View My Orders
        </Link>

      </div>
    </section>
  );
}