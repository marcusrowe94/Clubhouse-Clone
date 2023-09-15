import React from "react";
import style from "../style/welcome.module.css";
import {Link} from "react-router-dom";

export default function Welcome() {
  return (
    <div className={style.WelcomeContainer}>
      <h1>Welcome!</h1>
      <div className={style.WelcomeInfo}>
        <p>
          Hello My name is Marcus Rowe I am a Software engineer. Take this
          journey with me while I build a clone of Clubhouse!, a unique social
          media platform that lets multiple users communicate with another in
          real time .Sit tight! Clubhouse will be ready Soon
        </p>
        <p>
          On this version Clubhouse anyone can join with an invite from existing
          users. When a friend lets you join you will recieve a notification and
          a text letting you know you are all set and can begin enjoying the
          fun. Cant wait for you to join. See you on the other side!
        </p>
        <p>Welcome to Clubhouse!👋 </p>
      </div>
      <div className={style.actionBtn}>
        <Link
          exact
          to="/create_username"
          className="primaryBtn d-flex align-items-center mb-3">
            Create Your Username{" "}
            {/* <img src="" alt=""></img> */}
          </Link>
          <Link>Got invited? Sign In</Link>
      </div>
    </div>
  );
}
