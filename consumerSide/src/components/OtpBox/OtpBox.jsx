import React, { useContext, useRef, useState } from "react";
import "./OtpBox.css";
import { MyContext } from "../../App";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OtpBox = () => {
  const context = useContext(MyContext);
  const history = useNavigate();

  // State to store the 6-digit OTP as an array
  const [otp, setOtp] = useState(new Array(6).fill(""));

  // Refs for each input field to control focus programmatically
  const inputsRef = useRef([]);

  // Handle input change
  const handleChange = (element, index) => {
    // Get only the digit (remove non-digit characters)
    const value = element.value.replace(/\D/g, "");

    // If nothing entered, return early
    if (!value) return;

    // Clone current OTP array
    const newOtp = [...otp];
    // Only store the first character if multiple pasted
    newOtp[index] = value[0];
    setOtp(newOtp);

    // Move focus to next input box if not the last one
    if (index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  // Handle backspace, delete, and arrow keys
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      // If current box has a digit, clear it
      if (otp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
      }
      // Otherwise, move focus to the previous input
      else if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    } else if (e.key === "Delete") {
      const newOtp = [...otp];

      // If current box has a digit, clear it
      if (otp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
      }
      // Otherwise, move focus to the next input
      else if (index < 5) {
        inputsRef.current[index + 1].focus();
      }
    } else if (e.key === "ArrowLeft") {
      if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    } else if (e.key === "ArrowRight") {
      if (index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  // Handle paste event (e.g. user pastes 6-digit OTP)
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("Text").trim().slice(0, 6);

    // Validate if it's exactly 6 digits
    if (!/^\d{6}$/.test(pasteData)) return;

    const newOtp = pasteData.split("");
    setOtp(newOtp);

    // Set values manually for each input box
    newOtp.forEach((digit, i) => {
      if (inputsRef.current[i]) {
        inputsRef.current[i].value = digit;
      }
    });

    // Focus on the last input box
    if (inputsRef.current[5]) inputsRef.current[5].focus();
  };

  // Submit handler (can be connected to API)

  const otpSubmitStatus = () => {
    context.openAlertBox("success", `OTP verified : ${otp.join("")}`);
    history("/verify");
  };

  return (
    <div className="otp-container">
      <form action="">
        <div className="otp-inputs" onPaste={handlePaste}>
          {otp.map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1" // Only one digit per box
              ref={(el) => (inputsRef.current[index] = el)} // Assign input refs
              value={otp[index]}
              onChange={(e) => handleChange(e.target, index)} // On change handler
              onKeyDown={(e) => handleKeyDown(e, index)} // For backspace
              onWheel={(e) => e.preventDefault()} // Disable number change on scroll
              className="otp-box"
            />
          ))}
        </div>

        {/* Submit button */}
        <Button onClick={otpSubmitStatus} className="btn-orange w-[80%]">
          Submit OTP
        </Button>
      </form>
    </div>
  );
};

export default OtpBox;
