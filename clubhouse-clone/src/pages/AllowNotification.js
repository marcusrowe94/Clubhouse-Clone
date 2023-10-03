import React from "react";
import style from "../style/phoneconfirmation.module.css";
import { Link } from "react-router-dom";

export default function AllowNotification() {
  return (
    <div className={style.PhoneConfirmationContainer}>
      <div className="text-center">
        <h1 className="mb-4"> Last important Step!</h1>
        <h1 className="mb-3">
          Enable notifications to know when people are talking!
        </h1>
        <div className={style.NotificationContainer}>
          <div className="p-3">
            <h3> "Clubhouse" Would Like To Send You Notifications</h3>
            <p>Notifications may include alerts, sounds and icon</p>
          </div>
          <div className={style.actionBtn}>
            <Link exact to="/home">
                Don't Allow
            </Link>
            <Link exact to="/home">
             Allow
            </Link>
            <img src="/images/pointer.png" alt="notification" className={style.pointer}/>
          </div>
        </div>
      </div>
    </div>
  );
}
