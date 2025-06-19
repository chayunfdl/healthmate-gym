import React, { useState, useEffect, useReducer, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { IMAGES } from "../constants/theme";

import Collapse from "react-bootstrap/Collapse";
import { MenuListArray2 } from "./MenuListArray2";

const Header2 = () => {
  /* for sticky header */
  const [headerFix, setheaderFix] = React.useState(false);
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setheaderFix(window.scrollY > 50);
    });
  }, []);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    var mainMenu = document.getElementById("OpenMenu");
    if (mainMenu) {
      if (sidebarOpen) {
        mainMenu.classList.add("show");
      } else {
        mainMenu.classList.remove("show");
      }
    }
  });

  // Menu dropdown list
  const reducer = (previousState, updatedState) => ({
    ...previousState,
    ...updatedState,
  });
  const initialState = {
    active: "",
    activeSubmenu: "",
  };
  const [state, setState] = useReducer(reducer, initialState);
  const handleMenuActive = (status) => {
    setState({ active: status });
    if (state.active === status) {
      setState({ active: "" });
    }
  };
  const handleSubmenuActive = (status) => {
    setState({ activeSubmenu: status });
    if (state.activeSubmenu === status) {
      setState({ activeSubmenu: "" });
    }
  };

  function AddActiveMenu() {
    MenuListArray2?.forEach((ell) => {
      if (ell.to === location.pathname) {
        setActiveMenu(ell.title);
      }
      ell.content?.forEach((ele) => {
        if (ele.to === location.pathname) {
          setActiveMenu(ell.title);
        }
      });
    });
  }
  useMemo(AddActiveMenu, [location.pathname]);
  return (
    <>
      <header
        className="site-header mo-left header header-transparent style-2"
        style={{ zIndex: 100 }}
      >
        <div
          className={`sticky-header main-bar-wraper navbar-expand-lg ${
            headerFix ? "is-fixed" : ""
          }`}
        >
          <div className="main-bar clearfix">
            <div className="container clearfix">
              {/* <!-- Website Logo --> */}
              <div className="logo-header mostion logo-light">
                <Link to="/">
                  <img src={IMAGES.logoWhite} alt="" />
                </Link>
              </div>
              <div className="logo-header mostion logo-dark">
                <Link to={"/"}>
                  <img className="select_logo" src={IMAGES.logo} alt="" />
                </Link>
              </div>
              <button
                className={`navbar-toggler navicon justify-content-end ${
                  sidebarOpen ? "open" : "collapsed"
                }`}
                type="button"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              {/* <!-- Extra Nav --> */}
              <div className="extra-nav">
                <div className="extra-cell">
                  <button
                    id="quik-search-btn"
                    type="button"
                    className="header-search-btn"
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                  <Link
                    to={"/appointment"}
                    className="btn btn-skew appointment-btn d-xl-block d-none"
                  >
                    <span>Appointment</span>
                  </Link>
                </div>
              </div>
              {/* <!-- Extra Nav --> */}

              {/* <!-- Search Form --> */}
              <div className="dz-quik-search">
                <form action="#">
                  <input
                    name="search"
                    value=""
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Keyword ..."
                  />
                  <span id="quik-search-remove">
                    <i className="fa-solid fa-xmark"></i>
                  </span>
                </form>
              </div>

              {/* <!-- Header Nav --> */}
              <div
                id="navbarNavDropdown"
                className={`header-nav navbar-collapse collapse justify-content-end ${
                  sidebarOpen ? "show" : ""
                }`}
              >
                <div className="logo-header logo-dark">
                  <Link to={"/"}>
                    <img src={IMAGES.logo} alt="" />
                  </Link>
                </div>
                <ul className="nav navbar-nav navbar navbar-left">
                  {MenuListArray2.map((item, index) => {
                    let menuClass = item.classChange;
                    if (menuClass !== "sub-menu-down") {
                      return (
                        <li
                          className={`${menuClass} ${
                            item.title === activeMenu ? "active" : ""
                          }`}
                          // className={`${ menuClass} ${ location.pathname == item.to ? 'active'  : '' }`}

                          key={index}
                        >
                          <Link to={item.to}>{item.title}</Link>
                        </li>
                      );
                    } else {
                      return (
                        <li
                          className={`${menuClass} ${
                            state.active === item.title ? "open active" : ""
                          } ${item.title === activeMenu ? "active" : ""}`}
                          // <li className={`${ menuClass} ${ location.pathname == item.to ? 'active'  : '' }`}
                          key={index}
                        >
                          {item.content && item.content.length > 0 ? (
                            <>
                              <Link
                                to={"#"}
                                onClick={() => {
                                  handleMenuActive(item.title);
                                }}
                              >
                                {item.title}
                              </Link>
                              <Collapse
                                in={state.active === item.title ? true : false}
                              >
                                <ul
                                  className={`sub-menu ${
                                    menuClass === "mm-collapse" ? "open" : ""
                                  }`}
                                >
                                  {item.content &&
                                    item.content.map((data, index) => {
                                      //console.log('path loc', data.to );
                                      return (
                                        <li
                                          key={index}
                                          className={`${
                                            state.activeSubmenu === data.title
                                              ? "open"
                                              : ""
                                          }`}
                                          //className={`${ menuClass} ${ location.pathname == data.to ? 'active'  : '' }`}
                                        >
                                          {data.content &&
                                          data.content.length > 0 ? (
                                            <>
                                              <Link
                                                to={data.to}
                                                onClick={() => {
                                                  handleSubmenuActive(
                                                    data.title
                                                  );
                                                }}
                                              >
                                                {data.title}
                                                <i className="fa fa-angle-right" />
                                              </Link>
                                              <Collapse
                                                in={
                                                  state.activeSubmenu ===
                                                  data.title
                                                    ? true
                                                    : false
                                                }
                                              >
                                                <ul
                                                  className={`sub-menu ${
                                                    menuClass === "mm-collapse"
                                                      ? "open"
                                                      : ""
                                                  }`}
                                                >
                                                  {data.content &&
                                                    data.content.map(
                                                      (data, index) => {
                                                        return (
                                                          <>
                                                            <li key={index}>
                                                              <Link
                                                                to={data.to}
                                                              >
                                                                {data.title}
                                                              </Link>
                                                            </li>
                                                          </>
                                                        );
                                                      }
                                                    )}
                                                </ul>
                                              </Collapse>
                                            </>
                                          ) : (
                                            <Link to={data.to}>
                                              {data.title}
                                            </Link>
                                          )}
                                        </li>
                                      );
                                    })}
                                </ul>
                              </Collapse>
                            </>
                          ) : (
                            <Link to={item.to}>{item.title}</Link>
                          )}
                        </li>
                      );
                    }
                  })}
                </ul>
                <div className="dz-social-icon">
                  <ul>
                    <li>
                      <Link target="_blank" to="https://www.facebook.com/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>{" "}
                    <li>
                      <Link target="_blank" to="https://twitter.com/?lang=en">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>{" "}
                    <li>
                      <Link target="_blank" to="https://www.linkedin.com/">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>{" "}
                    <li>
                      <Link
                        target="_blank"
                        to="https://www.instagram.com/?hl=en"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Main Header End --> */}
      </header>
    </>
  );
};

export default Header2;
