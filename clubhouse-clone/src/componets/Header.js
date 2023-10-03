import React from 'react';
import { Link } from 'react-router-dom';
import style from '../style/header.module.css';

export default function Header() {
    return (
        <div className={style.Header}>
          <Link exact to="/explore">
            <img src="/images/search.png" />
          </Link>
          <div className={style.navigation_items}>
            <Link to="/friends-invite">
                <img src="/images/inbox.png" />
            </Link>
            <Link to="/upcoming">
                <img src="/images/calendar.png" />
            </Link>
            <Link to="/activity">
                <img src="/images/notification.png" />
            </Link>
            <Link to="/profile">
                <img src="/images/pro.jpg" className='pro' />
            </Link>
          </div>
        </div>
      );
}
