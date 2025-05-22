import React from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import logo from "../assets/img/logoRound.png";
import "bootstrap-icons/font/bootstrap-icons.css";

export const Home = () => (
  <div
    style={{
      minHeight: "100vh",
      background: "linear-gradient(to right, #ffe0f1, #e0f7ff)",
    }}
  >
    {/* Hero */}
    <section className="py-5 text-center">
      <div className="container">
        <div
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "100%",
            overflow: "hidden",
            boxShadow: "0 0 10px #FF00FF, 0 0 20px #FF00FF, 0 0 60px #FF00FF",
            backgroundColor: "#FF00FF",
            margin: "0 auto",
            marginBottom: "30px",
          }}
        >
          <img
            src={logo}
            alt="Sip & Search logo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: "scale(1.02)",
            }}
          />
        </div>

        <h1 className="display-4 fw-bold mb-3" style={{ color: "#333" }}>
          Welcome to Sip &amp; Search
        </h1>
        <p
  className="mb-4"
  style={{
    color: "#555",
    fontSize: "1.1rem",
    fontFamily: "'Orbitron', sans-serif"
  }}
>
  The best place to discover your next favorite cocktail and find the nearest spot to enjoy it.
</p>

      </div>
    </section>

    {/* Divider */}
    <hr
      className="mx-auto my-4"
      style={{
        width: "60%",
        borderColor: "rgba(0, 0, 0, 0.48)",
      }}
    />

    {/* Feature cards */}
    <section className="py-4">
      <div className="container">
        <div className="row gy-4 justify-content-center align-items-stretch">
          {/* Quick Search */}
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div
              className="p-4 rounded shadow-sm text-center d-flex flex-column justify-content-between flex-fill"
              style={{
                background: "rgba(255,0,255,0.05)",
                border: "1px solid rgba(255,0,255,0.2)",
              }}
            >
              <h4 className="mb-2">Quick Cocktail Search</h4>
              <p className="text-muted mb-3">
                Type any drink name to pull up recipes, ingredients, and glassware details.
              </p>
              <Link
                to="/search"
                className="btn"
                style={{
                  background: "#FF00FF",
                  borderColor: "#FF00FF",
                  color: "#fff",
                }}
              >
                Search Cocktails
              </Link>
            </div>
          </div>

          {/* Customize by Ingredients */}
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div
              className="p-4 rounded shadow-sm text-center d-flex flex-column justify-content-between flex-fill"
              style={{
                background: "rgba(0,191,255,0.05)",
                border: "1px solid rgba(0,191,255,0.2)",
              }}
            >
              <h4 className="mb-2">Customize by Ingredients</h4>
              <p className="text-muted mb-3">
                Select what’s in your pantry and get tailored cocktail matches—no extra shopping required.
              </p>
              <Link
                to="/custom"
                className="btn"
                style={{
                  background: "#FF00FF",
                  borderColor: "#FF00FF",
                  color: "#fff",
                }}
              >
                Customize Ingredients
              </Link>
            </div>
          </div>

          {/* Browse All Cocktails */}
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div
              className="p-4 rounded shadow-sm text-center d-flex flex-column justify-content-between flex-fill"
              style={{
                background: "rgba(0,200,100,0.05)",
                border: "1px solid rgba(0,200,100,0.2)",
              }}
            >
              <h4 className="mb-2">Find Places to Drink</h4>
              <p className="text-muted mb-3">
                Explore and find any spot in the world to enjoy any cocktail or drink from our data.
              </p>
              <Link
                to="/find-spots"
                className="btn"
                style={{
                  background: "#FF00FF",
                  borderColor: "#FF00FF",
                  color: "#fff",
                }}
              >
                Browse Cocktails
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Carousel */}
    <main className="py-5">
      <div className="container" style={{ maxWidth: 900 }}>
        <ImageCarousel />
      </div>
    </main>

    {/* Description */}
    <hr
      className="mx-auto my-4"
      style={{
        width: "60%",
        borderColor: "rgba(0, 0, 0, 0.48)",
      }}
    />
    <section className="py-5">
      <div className="container" style={{ maxWidth: 1000 }}>
        <h2 className="text-center fw-semibold mb-5">How It Works</h2>
        <div className="row gx-4 gy-4">
          {[
            {
              icon: "bi bi-search",
              title: "Quick Search",
              text: "Type any drink name to see recipes, glassware & ingredients.",
            },
            {
              icon: "bi bi-list-check",
              title: "Customize Ingredients",
              text: "Select what’s in your pantry and get tailored cocktail matches.",
            },
            {
              icon: "bi bi-globe",
              title: "Browse Catalog",
              text: "Explore our full collection to discover new favorites.",
            },
            {
              icon: "bi bi-geo-alt",
              title: "Find Nearby Spots",
              text: "Locate bars & lounges serving your chosen drink.",
            },
          ].map((item, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-3">
              <div className="h-100 p-4 text-center border rounded shadow-sm">
                <i
                  className={`${item.icon} fs-1 mb-3`}
                  style={{ color: "#FF00FF" }}
                />
                <h5 className="fw-bold">{item.title}</h5>
                <p className="text-muted small">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);
