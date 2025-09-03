import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock, faCarSide, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

function Signup() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // Animate left and right panels
    gsap.from(leftRef.current, {
      duration: 1,
      x: -100,
      opacity: 0,
      ease: "power3.out",
    });
    gsap.from(rightRef.current, {
      duration: 1,
      x: 100,
      opacity: 0,
      ease: "power3.out",
      delay: 0.3,
    });
  }, []);

  return (
    <div className="container-fluid "  style={{
            background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
          }}>
      <div className="row" >
        {/* Left Panel */}
        <div
          ref={leftRef}
          className="col-md-6 d-flex flex-column justify-content-center align-items-center text-white"
         
        >
          <FontAwesomeIcon icon={faCarSide} size="4x" className="mb-4" />
          <h2 className="fw-bold">Vehicle Live Tracker</h2>
          <p className="text-center px-5">
            <FontAwesomeIcon icon={faLocationDot} />  
            &nbsp; Track your vehicles in real-time with smart and simple UI.
          </p>
        </div>

        {/* Right Panel */}
        <div
          ref={rightRef}
          className="col-md-6 d-flex align-items-center justify-content-center mt-4 my-4"
        >
          <div
            className="card shadow-lg p-4 w-75"
            style={{ borderRadius: "20px" }}
          >
            <h3 className="text-center mb-4 text-primary">Create Account</h3>

            {/* Username */}
            <div className="mb-3 input-group">
              <span className="input-group-text bg-white">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
              />
            </div>

            {/* Email */}
            <div className="mb-3 input-group">
              <span className="input-group-text bg-white">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>

            {/* Password */}
            <div className="mb-3 input-group">
              <span className="input-group-text bg-white">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>

            {/* Signup Button */}
            <Link to="/passenger/dashboard" className="btn btn-primary w-100">Sign Up</Link>

            {/* Footer */}
            <p className="text-center mt-3 mb-0">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
