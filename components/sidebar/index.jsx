import React, { Fragment } from 'react';
import { ArrowRight, ArrowLeft, Grid, Home } from 'react-feather';
import Link from 'next/link'
import Image from 'next/image'
import menus from '../../data/menu'
import { connect } from 'react-redux'
import { stateInitial, wrapperScreen } from '../../redux/thunks/screenThunk'
import Show from '../utils/show'
import Menu from './menu';

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
                  <Menu key={`list-menu-${index}`}
                    menu={menu}
                  />
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