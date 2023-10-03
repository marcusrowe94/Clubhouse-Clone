import React from "react";
import style from "../style/phoneconfirmation.module.css";
import { Link } from "react-router-dom";

export default function CodeConfirm() {
  return (
    <div className={style.PhoneConfirmationContainer}>
      <div className="text-center">
        <Link exact to="/get-username" className={style.backBtn}>
          <img src="/images/left-arrow.png" alt="" />
        </Link>
        <h1
          style={{
            width: "100%",
            maxWidth: "200px",
            marginBottom: "1em",
          }}
        >
          {" "}
          Enter Code Here
        </h1>
          <input
            type="text"
            style={{
              width: "100%",
              border: "none",
              textAlign: "center",
              outline: "none",
            }}
          ></input>
        <p className="mt-2">
          {" "}
          Haven't received it? <span> Tap to resend</span>{" "}
        </p>
      </div>
      <Link
        exact
        to="/allow_notification"
        className="primaryBtn d-flex align-items-center"
      >
        Next{" "}
        <img src="/images/right-arrow.png" alt="" className="right-arrow-1" />
      </Link>
    </div>
  );
}
