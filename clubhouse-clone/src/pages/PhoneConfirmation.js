import React, { useState } from "react";
import style from "../style/phoneconfirmation.module.css";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";

export default function PhoneConfirmation() {
  const [value, setValue] = useState();
  return (
    <div className={style.PhoneConfirmationContainer}>
      <Link exact to="/" className={style.backBtn}>
        <img src="/images/left-arrow.png" alt="" />
      </Link>
      <h1> Enter Your Phone Number</h1>
      <PhoneInput
        international


        defaultCountry="US"

        value={value}
        onChange={setValue}
      ></PhoneInput>
      <p>
        {" "}
        By entering your number you are agreeing to our{" "}
        <span> Terms of Service and Privacy Policy. </span>
        Thanks!
      </p>
      <Link
        exact
        to="/code-confirm"
        className="primaryBtn d-flex align-items-center"
      >
        Next <img src="/images/right-arrow.png" alt="" className="right-arrow-1" />
      </Link>
    </div>
  );
}
