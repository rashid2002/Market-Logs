import React, { useRef } from "react";
import { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const navigate = useNavigate();

  const submitHandler = (e) => {
      e.preventDefault();
      axios.post('http://localhost:5000/login',{email,password})
      .then(result=>{console.log(result)
        if(result.data === "Success"){
          navigate('/home')
        }
      })
      .catch(error=>console.log(error))

  }

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    //ref={loginNameRef}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    //ref={loginPasswordRef}
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Login
                </button>
              </form>
              <Link to="/register">
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
