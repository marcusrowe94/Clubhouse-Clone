import React from "react";
import { Link } from "react-router-dom";
import Header from "../componets/Header";
import DailyInfoCard from "../componets/DailyInfoCard";
import style from "../style/home.module.css";
import RoomInfoCard from "../componets/RoomInfoCard";
export default function Home() {
  return (
    <>

<Header/>
<div className={style.home_container}>
<DailyInfoCard/>
<RoomInfoCard/>
   </div>

    </>
  )
}
