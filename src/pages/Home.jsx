import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Swift, doorstep delivery for your convenience. Experience quick and reliable service, bringing what you need to your door in no time...",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Experience excellence at Super Dine In. Indulge in delectable dishes, impeccable service, and an ambiance that elevates your dining journey...",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Seamless collection made simple. Enjoy effortless 'easy pick up' for your orders, enhancing your shopping experience with convenience and speed...",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "VEGETABLE") {
      const filteredProducts = products.filter(
        (item) => item.category === "Vegetable"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "FRUITS") {
      const filteredProducts = products.filter(
        (item) => item.category === "Fruits"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h4 className="mb-3 text-success">Easy way to make an order</h4>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait <br /> Vegetables at
                   your door Just Cook and eat
                </h1>

                <p>
                  <h2 className="text-success">
                    Welcome to the Vegetable Market
                  </h2>
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods">See all Vegetables</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                "Relax at home while we handle your vegetable market needs.
                Visit our website for fresh produce and convenient shopping."
              </p>
              <p className="feature__text">
                "Nurture your well-being with our curated vegetable market.
                Quality produce, delivered hassle-free to your doorstep. Embrace
                convenience today!"{" "}
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Vegetables/Fruits</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "VEGETABLE" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("VEGETABLE")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Vegetable
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "FRUITS" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("FRUITS")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Fruits
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  V&F
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Fresh Vegetables & Fruits ?</span>
                </h2>
                <p className="tasty__treat-desc">
                  "Experience the unrivaled goodness of our fresh vegetables and
                  fruits. Handpicked at peak ripeness, our produce bursts with
                  flavor and nutrients. Elevate your health and savor the
                  natural taste that only comes from the finest quality
                  ingredients."
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Fresh and good
                      Vegetables & Fruits...
                    </p>
                    <p className="choose__us-desc">
                      "Discover exquisite freshness and quality in our
                      vegetables and fruits. Elevate your meals with nature's
                      finest offerings. Taste the difference today!"
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Quality support
                    </p>
                    <p className="choose__us-desc">
                      "Exceptional assistance ensuring your satisfaction.
                      Dedicated to delivering top-notch service for your needs.
                      Experience our quality support today."
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Order from any
                      location{" "}
                    </p>
                    <p className="choose__us-desc">
                      "Seamless ordering, no matter your location. Enjoy our
                      wide selection of products and have them delivered
                      wherever you are."
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>Hot Vegetables & Fruits</h2>
            </Col>
            

            {hotPizza.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
     

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">
                  Testimonial ,{" "}
                  <b>
                    <u>Team INFINITY</u>
                  </b>
                </h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  "Customers rave about our online vegetable market! They love
                  the fresh selection, easy ordering, and prompt delivery. A
                  game-changer for their grocery experience."
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
            {/* <div className="hero__btns d-flex align-items-center gap-5 mt-4">
              <h1>Welcome to the Machine Learning Model </h1>

              <button className="order__btn d-flex align-items-center justify-content-between ">
                <Link to="https://prediction-czyubeqkvxqmbb38cuxmef.streamlit.app/">Click On it</Link>
              </button>
                </div> */}

          </Row>
        </Container>
      </section>
    </Helmet>
    




  );
};

export default Home;
