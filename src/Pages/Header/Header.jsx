import React, { useEffect, useState } from "react";
import navListData from "../../data/navListData";
import "./header.css";

function HeaderBar() {
  const [scrollY, setScrollY] = useState(0);
  const [navList, setNavList] = useState(navListData);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const handleNavOnClick = (id) => {
    const newNavList = navList.map((nav) => {
      nav.active = false;
      if (nav._id == id) {
        nav.active = !nav.active;
      }
      return nav;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header id="head" className={`${scrollY > 100 ? "active" : ""}`}>
      <a href="/" className="logo">
        AFlam
      </a>

      {/* <div className="list-icon">
        <ion-icon name="list-outline" className="list"></ion-icon>
      </div> */}

      <ul className="nav">
        {navList.map((nav) => {
          return (
            <li key={nav._id} onClick={() => handleNavOnClick(nav._id)}>
              <a href={nav.link} className={`${nav.active ? "active" : ""}`}>
                {nav.name}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="search">
        <input type="text" placeholder="Search" />
        <ion-icon name="search-outline"></ion-icon>
      </div>

      <a href="#" className=" mainBtn">
        <ion-icon name="log-out-outline"></ion-icon> Sign in
      </a>
    </header>
  );
}

export default HeaderBar;
