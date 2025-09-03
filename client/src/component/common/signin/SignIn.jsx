import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

function Signin() {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.from(cardRef.current, {
      duration: 1,
      y: -50,
      opacity: 0,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      className="d-flex align-items-center justify-content-center p-4"
      style={{
        background: "linear-gradient(135deg, #2575fc 0%, #6a11cb 100%)",
      }}
    >
      <div
        ref={cardRef}
        className="card shadow-lg p-4"
        style={{ width: "400px", borderRadius: "20px" }}
      >
        <h3 className="text-center mb-4 text-primary">Sign In</h3>

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

        {/* Signin Button */}
        <Link to="/passenger/dashboard" className="btn btn-primary w-100">Sign In</Link>

        {/* Footer */}
        <p className="text-center mt-3 mb-0">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
