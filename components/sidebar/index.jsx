import React, { Fragment } from 'react';
import { ArrowRight, ArrowLeft, Grid, Home } from 'react-feather';
import Link from 'next/link'
import Image from 'next/image'


const Sidebar = (props) => {
  
  return (
    <Fragment>
       <div className={`bg-overlay1`} onClick={() => {closeOverlay()}} ></div>
      <div className="sidebar-wrapper" id="sidebar-wrapper">
        <div className="logo-wrapper">
          <Link href="hola">
            <a>
              <Image className="img-fluid for-light" src={require("../../assets/images/logo/logo.png")} alt="" />
              {/* <Image className="img-fluid for-dark" src={require("../../assets/images/logo/logo_dark.png")} alt="" /> */}
            </a>
          </Link>
          <div className="back-btn" onClick={null}><i className="fa fa-angle-left"></i></div>
          <div className="toggle-sidebar" onClick={null}><Grid className="status_toggle middle sidebar-toggle" /></div>
        </div>
        <div className="logo-icon-wrapper">
          <Link href="">
            <a><Image className="img-fluid" src={require("../../assets/images/logo/logo-icon.png")} alt="" /></a>
          </Link>
        </div>
        <nav className="sidebar-main" id="sidebar-main">
            <div className="left-arrow" onClick={null/*scrollToLeft*/}><ArrowLeft /></div>
            <div id="sidebar-menu" style={/*wrapper.split(' ').includes('horizontal-wrapper')*/ false ? { 'marginLeft': "200px" } : { margin: '0px' }}>
              <ul className="sidebar-links custom-scrollbar">
                <li className="back-btn">
                  <div className="mobile-back text-right"><span>{"Back"}</span><i className="fa fa-angle-right pl-2" aria-hidden="true"></i></div>
                </li>
                {/* iter menu */}
                <li className="sidebar-main-title">
                  <div>
                    <h6 className="lan-1">General</h6>
                    <p className="lan-2">Dashboards,Widgets & Layout</p>
                  </div>
                </li>
                <li className="sidebar-list">
                  {/* sub */}
                  <a href="" className={`sidebar-link sidebar-title --active`}>
                    {/* icono */}
                    <Home/>
                    {/* titulo */}
                    <span className="lan-1">Dashboard</span>
                    {/* badge */}
                    <label className="badge badge-warning">v-1.0.0</label>
                    {/* menu acordion */}
                    <div className="according-menu">
                        {true ?
                          <i className="fa fa-angle-down"></i>
                          : <i className="fa fa-angle-right"></i>
                        }
                      </div>
                  </a>
                  {/* sub menu */}
                  <ul className="sidebar-submenu" >
                    <li>
                      <a href="javascript" className={`${true ? 'active' : ''}`}>titulo
                        <span className="sub-arrow">
                          <i className="fa fa-chevron-right"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="right-arrow" onClick={/*scrollToRight*/null}><ArrowRight /></div>
        </nav>
      </div>
    </Fragment>
  );
}

export default Sidebar;