import React, { useState, useEffect } from "react";
import style from "../style/roominfocard.module.css";
// import { Link } from "react-router-dom";
import {BsChatDots, BsChatDotsFill, BsFillPersonFill} from "react-icons/bs";
import data from "../data/roomCard.json";
export default function RoomInfoCard(props) {
  return (
    <>
      {data.map((room) => (
        <div>
          <div>
            <div className={style.roomCardContainer}>
              <h6>{room.title}</h6>
              <h2>{room.sub_title}</h2>
              <div className={style.roomMembers}>
                <div>
                    <img src="/images/pro.jpg" alt="room image" />
                    <img src="/images/pro.jpg" alt="room image" />

                </div>
                <div>
                    {room.members.map((member) => (
                        <p>
                            {member.first_name} {member.last_name}<BsChatDots/>
                        </p>
                       ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      ))}
    </>
  );
}
