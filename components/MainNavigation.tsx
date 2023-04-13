import React from "react";
import NavLinks from "../components/shared/NavLink";
import MainHeader from "../components/shared/MainHeader";

const MainNavigation = (props:any) => {
  
  return (
    <React.Fragment>
      <MainHeader>
        <button className="main-navigation__menu-btn">
          <span />
          <span />
          <span />
        </button>
        <nav className="main-navigation__header-nav">
          <NavLinks/>
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;