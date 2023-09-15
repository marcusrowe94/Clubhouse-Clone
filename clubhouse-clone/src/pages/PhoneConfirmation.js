import React, {useState} from "react";
import style from "../style/phoneconfirmation.module.css"
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";

export default function PhoneConfirmation (){
 const [value, setValue] = useState()
 return (
    <div className={style.PhoneConfirmationContainer}>
        <Link exact to="/" className={style.backBtn}>
            <img src="" alt="" />
        </Link>
        <h1> Enter Your Phone Number</h1>
        <PhoneInput international defaultCountry="US" value={value}>

        </PhoneInput>
        <p> By entering your number you are agreeing to our{" "}
            <span> Terms of Service and Privacy Policy. </span>
            Thanks!

        </p>
    </div>

 )
}
