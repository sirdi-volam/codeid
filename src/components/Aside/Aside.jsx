import React from 'react'
import './Aside.css'
import logo from './images/logo.png'
import avatar from './images/avatar.svg'

export const Aside = () => {
  return (
    <>
      <container className="aside-container" id="aside1">
        <div className="logo">
          <img src={logo} alt="logo" className="logo-img" />
        </div>
        <div className="profile">
          <div className="avatar">
            <img src={avatar} alt="avatar" className="avatar-img" />
          </div>
          <div className="profile-name">
            <p className="profile-name_text">
              Идрис Малов
            </p>
          </div>
          <div className="profile-desc">
            <p className="profile-desc_text">
              блог front-end разработчика
            </p>
          </div>
          <div className="about-button">
            <button className="myWork_btn">Подписаться</button>
            <button className="sendMe_btn">Написать мне</button>
          </div>
        </div>
      </container>
    </>
  )
}
