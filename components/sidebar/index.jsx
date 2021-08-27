import React, { Fragment } from 'react';
import { ArrowRight, ArrowLeft, Grid, Home } from 'react-feather';
import Link from 'next/link'
import Image from 'next/image'
import menus from '../../data/menu.json'
import { connect } from 'react-redux'
import { stateInitial, wrapperScreen } from '../../redux/thunks/screenThunk'
import Show from '../utils/show'

const Sidebar = ({ wrapper, dark, wrapperScreen }) => {
  
  return (
    <Fragment>
      <div className={`bg-overlay1`}></div>
      <div className={`sidebar-wrapper ${wrapper ? 'close_icon' : ''}`} id="sidebar-wrapper">
        <div className="logo-wrapper">
          <Link href="hola">
            <a>
              <Show condicion={dark}
                predeterminado={<Image className="img-fluid for-light" src={require("../../assets/images/logo/logo.png")} alt="" />}
              >
                <Image className="img-fluid for-dark" src={require("../../assets/images/logo/logo_dark.png")} alt="" />
              </Show>
            </a>
          </Link>
          <div className="back-btn cursor-pointer" onClick={wrapperScreen}><i className="fa fa-angle-left"></i></div>
          <div className="toggle-sidebar" onClick={wrapperScreen}>
            <Grid className="status_toggle middle sidebar-toggle" />
          </div>
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
                {menus?.map((menu, index) =>
                  <Fragment key={`item-menu-sidebar-${index}`}>
                    <li className="sidebar-main-title">
                      <div>
                        <h6 className="lan-1">{menu?.text}</h6>
                        <p className="lan-2">{menu?.description}</p>
                      </div>
                    </li>
                    {/* sidebar list */}
                    {menu?.children?.map((child, indexC) => 
                      <li className="sidebar-list" key={`list-child-primary-${indexC}`}>
                        {/* sub */}
                        <a href="" className={`sidebar-link sidebar-title --active`}>
                          {/* icono */}
                          <Home/>
                          {/* titulo */}
                          <span className="lan-1">{child?.text}</span>
                          {/* badge */}
                          <label className="badge badge-warning">{child?.info}</label>
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
                          {child?.children?.map((item, indexI) => 
                            <li key={`list-menu-item-child-${indexI}`}>
                              <a href="javascript" className={`${true ? '--active' : ''}`}>{item?.text}
                                <span className="sub-arrow">
                                  <i className="fa fa-chevron-right"></i>
                                </span>
                              </a>
                            </li>
                          )}
                        </ul>
                      </li>   
                    )}
                  </Fragment>
                )}
              </ul>
            </div>
            <div className="right-arrow" onClick={/*scrollToRight*/null}><ArrowRight /></div>
        </nav>
      </div>
    </Fragment>
  );
}

const mapStateToProps = (state = { screen: stateInitial }) => ({
  ...state.screen
})

const mapDispatchToProps = {
  wrapperScreen
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);