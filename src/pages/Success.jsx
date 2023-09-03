import React from 'react'
import success from "../assets/success.png"
import {Link} from "react-router-dom"

const Success = () => {

  return (
    <div className='grid place-items-center w-full lg:h-screen h-full
     font-raleway bg-[#F7F7F7]'>
      <div className='max-w-5xl rounded flex flex-col'>
           {/* <span className='text-green-600 text-5xl'>Payment successful</span>
           <br />
           <span className='text-yellow-600 align-items-center mt-8 text-2x font-bold'>
            Your order is in our system
           </span> */}
           <div className="d-flex flex-column align-items-center justify-content-center vh-10">
            <span className="text-success display-4 mb-4">Payment Successful</span>
            <span className="text-warning h4 font-weight-bold">Your Order is Confirmed</span>
        </div>
           {/* <div className='flex justify-end items-center mx-auto my-12 w-60'>
            <img src={success} alt=""/>
           </div> */}
            <div className="d-flex justify-content-center align-items-center my-5">
         <img src={success} alt="Success" className="img-fluid rounded-circle" style={{ maxWidth: '200px' }} />
              </div>
           {/* <div className='my-10 mx-auto align-items-center'>
            <Link to="/" className='underline text-xl underline-offset-4 align-items-center'>
              Back to Home Page
            </Link>
           </div> */}
           <div className='d-flex justify-content-center align-items-center vh-10'>
      <div className='text-center'>
        <Link to="/" className='text-decoration-none'>
          <h2 className='mb-4'>Back to Home Page</h2>
        </Link>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Success
