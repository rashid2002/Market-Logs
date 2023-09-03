import React, { useRef } from "react";
import { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Register = () => {
  // const signupNameRef = useRef();
  // const signupPasswordRef = useRef();
  // const signupEmailRef = useRef();

  // const submitHandler = (e) => {
  //   e.preventDefault();
  // };

  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const navigate = useNavigate();

  const submitHandler = (e) => {
      e.preventDefault();
      axios.post('http://localhost:5000/register',{name,email,password})
      .then(result=>{console.log(result)
      navigate('/login')
      })
      .catch(error=>console.log(error))

  }

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    onChange={(e)=>setName(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    //ref={signupEmailRef}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    //ref={signupPasswordRef}
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Sign Up
                </button>
              </form>
              <Link to="/login">Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
