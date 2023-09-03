// import React from "react";

// const Contact = () => {
//   return <div>Contact</div>;
// };


import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
const Contact = () => {

  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [subject,setSubject] = useState();
  const [message, setMessage] = useState();
  const [msg,setMsg] = useState('');

  const submitHandler1 = (e) => {
    e.preventDefault();
      axios.post('http://localhost:5000/contact',{name,email,subject,message})
      .then(result=>{console.log(result)
        
      }).then(result=>{console.log(result)})
      .catch(error=>console.log(error))
  }

  return (
    // 4. return the following code snippet
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler1}>
              <p class="mb-3 mt-2" style={{color:"green",marginLeft:"57px"}}><b>{msg}</b></p>
                <div className="form__group  ">
                  <h3 className="mb-3  text-success">Get in touch</h3>
                  <p className="mb-5 text-danger">
                    You can contact us any way that is convenient for you. We
                    are available 24/7 via fax or email.
                  </p>
                  
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
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Subject"
                    required
                    onChange={(e)=>setSubject(e.target.value)} />
                </div>
                <div className="form__group">
                  <textarea
                    placeholder="Message"
                    required
                    onChange={(e)=>setMessage(e.target.value)}></textarea>
                </div>
                <button type="submit" className="addTOCart__btn">
                  Send
                </button>
                
                <p className="mt-3">
                  <Link to="/">Go Back</Link>
                </p>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>

  );
}
// 5. export the Contact component
export default Contact;
