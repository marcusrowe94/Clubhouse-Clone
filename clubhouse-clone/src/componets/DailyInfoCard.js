import React from "react";
import style from "../style/dailyinfocard.module.css";
import data from "../data/dailyCard.json";

export default function DailyInfoCard() {
  console.log(data);
  return (
    <div className={style.dailyInfoCardContainer}>
      {data.map((item =>
        <div>
          <span className=""> {item.time} </span>
          <div>
            <span className=""> {item.title}</span>
            <p>{item.description}</p>
          </div>
        </div>
    ))}
    </div>
  );
}
