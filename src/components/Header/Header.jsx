import React from "react";
import './Header.css'

export const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <ul className="header-nav_list">
            <li className="header-nav_item">
              <a href="/">Главная</a>
            </li>
            <li className="header-nav_item">
              <a href="#articles">Статьи</a>
            </li>
          </ul>
        </nav>
        <div className="header-profile">
          <input type="search" placeholder="Поиск по блогу..." className="header-search_input" />
            <a href="#profile" className="header-profile_link">
              Профиль
            </a>
        </div>
      </header>
    </>
  )
}