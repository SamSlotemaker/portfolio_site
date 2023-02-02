import React from "react";
import "./style.scss";

const MenuPage = () => {
  const onMouseOver = (e: any) => {
    e.target.classList.add("hovering");
  };

  const onMouseLeave = (e: any) => {
    e.target.classList.remove("hovering");
  };

  return (
    <section className="menu_page">
      <ul>
        <li className="menu_page_link">
          <a href="#">Sam.</a>
        </li>
        <li className="menu_page_link">
          <a href="#" onMouseEnter={onMouseOver} onMouseLeave={onMouseLeave}>
            <span>My</span>work
          </a>
        </li>
        <li className="menu_page_link">
          <a href="#" onMouseEnter={onMouseOver} onMouseLeave={onMouseLeave}>
            Contact
          </a>
        </li>
        <li className="menu_page_link">
          <a href="#" onMouseEnter={onMouseOver} onMouseLeave={onMouseLeave}>
            About
          </a>
        </li>
      </ul>
    </section>
  );
};

export default MenuPage;
