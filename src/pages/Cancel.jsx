import React from 'react'
import cancel from "../assets/cancel.png"
import {Link} from "react-router-dom"

const Cancel = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
    <div className="max-w-5xl bg-white rounded p-5 shadow-sm text-center">
      <h1 className="text-danger display-3 mb-4">Something went wrong!!</h1>
      <p className="text-danger h5 font-weight-bold">Please retry after sometime</p>
      <div className="d-flex justify-content-end mt-4">
        <img src={cancel} alt="Cancel" width="100" />
      </div>
      <div className="my-4">
        <Link to="/" className="btn btn-primary btn-lg">
          Back to Home
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Cancel
