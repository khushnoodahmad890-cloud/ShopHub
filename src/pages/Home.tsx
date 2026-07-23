import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>

      {/* HERO */}

      <section className="hero">

        <div className="container hero-container">

          <div className="hero-content">

            <span className="hero-badge">
              🔥 New Collection 2026
            </span>


            <h1>
              Shop Smart.
              <br />
              Live Better.
            </h1>


            <p>
              Discover premium electronics at unbeatable prices.
              Fast delivery, secure checkout, and quality you can trust.
            </p>


            <div className="hero-buttons">

              <button
                className="btn"
                onClick={() => navigate("/products")}
              >
                Shop Now
              </button>


              <button
                className="btn secondary-btn"
                onClick={() => navigate("/products")}
              >
                Browse Products
              </button>

            </div>

          </div>

        </div>

      </section>



      {/* FEATURES */}

      <section className="features">

        <div className="container feature-grid">


          <div className="feature-card">

            <h3>
              🚚 Fast Delivery
            </h3>

            <p>
              Get your products delivered quickly.
            </p>

          </div>



          <div className="feature-card">

            <h3>
              🔒 Secure Payment
            </h3>

            <p>
              Safe and reliable checkout experience.
            </p>

          </div>



          <div className="feature-card">

            <h3>
              ⭐ Premium Quality
            </h3>

            <p>
              Only carefully selected products.
            </p>

          </div>


        </div>

      </section>


    </>
  );
}

export default Home;