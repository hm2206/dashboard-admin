import React from 'react'
import Image from 'next/image'

const IndexSidebar = () => {

    return (
        <div className="sidebar-wrapper">
            <div>
                <div className="logo-wrapper">
                    <a href="index.html">
                        <div style={{ 
                                display: "inline-block",
                                maxWidth: "100%", 
                                overflow: "hidden", 
                                position: "relative", 
                                boxSizing: "border-box", 
                                margin: "0px"
                            }}
                        >
                            <div style={{ boxSizing: "border-box", display: "block", maxWidth: "100%" }}>
                                <Image alt="" 
                                    layout="fill"
                                    src={require("../../assets/images/logo/logo_dark.png")}
                                    style={{ 
                                        maxWidth: "100%", 
                                        display: "block", 
                                        margin: "0px", 
                                        border: "none", 
                                        padding: "0px"
                                    }}
                                />
                            </div>
                            <Image  alt=""
                                layout="fill"
                                src={require("../../assets/images/logo/logo_dark.png")}
                                decoding="async" 
                                data-nimg="true" 
                                className="img-fluid for-light" 
                                style={{ 
                                    position: "absolute", 
                                    inset: "0px",
                                    boxSizing: "border-box", 
                                    padding: "0px", 
                                    border: "none", 
                                    margin: "auto",
                                    display: "block",
                                    width: "0px",
                                    height: "0px", 
                                    minWidth: "100%",
                                    maxWidth: "100%", 
                                    minHeight: "100%", 
                                    maxHeight: "100%"
                                }} 
                            />
                        </div>
                        <div style={{ 
                                display: "inline-block", 
                                maxWidth: "100%", 
                                overflow: "hidden", 
                                position: "relative", 
                                boxSizing: "border-box", 
                                margin: "0px"
                            }}
                        >
                            <div style={{ 
                                    boxSizing: "border-box",
                                    display: "block",
                                    maxWidth: "100%"
                                }}
                            >
                                <Image alt=""
                                    layout="fill"
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTciIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" 
                                    style={{ 
                                        maxWidth: "100%", 
                                        display: "block", 
                                        margin: "0px", 
                                        border: "none", 
                                        padding: "0px"
                                    }}
                                />
                            </div>
                            <Image alt=""
                                layout="fill"
                                src="/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Fimages%2Flogo%2Flogo_dark.a025ecce56328f0818471b92b6bebcad.png&amp;w=256&amp;q=75" 
                                decoding="async" 
                                className="img-fluid for-dark" 
                                style={{ 
                                    position: "absolute", 
                                    inset: "0px", 
                                    boxSizing: "border-box", 
                                    padding: "0px", 
                                    border: "none", 
                                    margin: "auto", 
                                    display: "block", 
                                    width: "0px", 
                                    height: "0px", 
                                    minWidth: "100%", 
                                    maxWidth:" 100%", 
                                    minHeight: "100%",
                                    maxHeight: "100%"
                                }} 
                                srcset="/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Fimages%2Flogo%2Flogo_dark.a025ecce56328f0818471b92b6bebcad.png&amp;w=128&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Fimages%2Flogo%2Flogo_dark.a025ecce56328f0818471b92b6bebcad.png&amp;w=256&amp;q=75 2x"
                            />
                        </div>
                    </a>
                    <div className="back-btn">
                        <i className="fa fa-angle-left"></i>
                    </div>
                    <div className="toggle-sidebar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid status_toggle middle sidebar-toggle">
                            <rect x="3" y="3" width="7" height="7"></rect>
                            <rect x="14" y="3" width="7" height="7"></rect>
                            <rect x="14" y="14" width="7" height="7"></rect>
                            <rect x="3" y="14" width="7" height="7"></rect>
                        </svg>
                    </div>
                </div>
                <div className="logo-icon-wrapper">
                    <a href="index.html">
                        <div style={{ 
                                display: "inline-block", 
                                maxWidth: "100%", 
                                overflow: "hidden", 
                                position: "relative", 
                                boxSizing: "border-box", 
                                margin: "0px"
                            }}
                        >
                            <div style={{ 
                                    boxSizing: "border-box", 
                                    display: "block", 
                                    maxWidth: "100%"
                                }}
                            >
                                <Image alt=""
                                    layout="fill"
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" 
                                    style={{ 
                                        maxWidth: "100%", 
                                        display: "block", 
                                        margin: "0px", 
                                        border: "none", 
                                        padding: "0px"
                                    }}
                                />
                            </div>
                            <noscript></noscript>
                            <Image alt=""
                                layout="fill"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" 
                                decoding="async" 
                                className="img-fluid" 
                                style={{ 
                                    position: "absolute", 
                                    inset: "0px", 
                                    boxSizing: "border-box", 
                                    padding: "0px", 
                                    border: "none", 
                                    margin: "auto", 
                                    display: "block",
                                    width: "0px", 
                                    height: "0px", 
                                    minWidth: "100%", 
                                    maxWidth: "100%", 
                                    minHeight: "100%",
                                    maxHeight: "100%"
                                }}
                            />
                        </div>
                    </a>
                </div>
                <nav className="sidebar-main">
                    <div className="left-arrow disabled" id="left-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </div>
                    <div id="sidebar-menu">
                        <ul className="sidebar-links" id="simple-bar" data-simplebar="init" style={{ display: "block" }}>
                            <div className="simplebar-wrapper" style={{ margin: "0px" }}>
                                <div className="simplebar-height-auto-observer-wrapper">
                                    <div className="simplebar-height-auto-observer"></div>
                                </div>
                                <div className="simplebar-mask">
                                    <div className="simplebar-offset" style={{ right: "0px", bottom: "0px" }}>
                                        <div className="simplebar-content-wrapper" style={{ height: "100%", overflow: "hidden" }}>
                                            <div className="simplebar-content" style={{ padding: "0px" }}>
                                                <li className="back-btn">
                                                    <div className="mobile-back text-end">
                                                        <span>Back</span>
                                                        <i className="fa fa-angle-right ps-2" aria-hidden="true"></i>
                                                    </div>
                                                </li>
                                                <li className="sidebar-list">
                                                    <a className="sidebar-link sidebar-title" href="../theme/index.html">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
                                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                                        </svg>
                                                        <span>Dashboard s</span>
                                                        <div className="according-menu">
                                                            <i className="fa fa-angle-right"></i>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="sidebar-list">
                                                    <a className="sidebar-link sidebar-title active" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-anchor">
                                                            <circle cx="12" cy="5" r="3"></circle>
                                                            <line x1="12" y1="22" x2="12" y2="8"></line>
                                                            <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
                                                        </svg>
                                                        <span>Starter kit</span>
                                                        <div className="according-menu">
                                                            <i className="fa fa-angle-down"></i>
                                                        </div>
                                                    </a>
                                                    <ul className="sidebar-submenu" style={{ display: "block" }}>
                                                        <li>
                                                            <a className="submenu-title active" href="#">
                                                                color version
                                                                <span className="sub-arrow">
                                                                    <i className="fa fa-chevron-right"></i>
                                                                </span>
                                                                <div className="according-menu">
                                                                    <i className="fa fa-angle-down"></i>
                                                                </div>
                                                            </a>
                                                            <ul className="nav-sub-childmenu submenu-content" style={{ display: "block" }}>
                                                                <li>
                                                                    <a href="index.html">Layout Light</a>
                                                                </li>
                                                                <li>
                                                                    <a href="layout-dark.html" className="active">Layout Dark</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>     
                                                            <a className="submenu-title" href="#">
                                                                Page layout
                                                                <span className="sub-arrow">
                                                                    <i className="fa fa-chevron-right"></i>
                                                                </span>
                                                                <div className="according-menu">
                                                                    <i className="fa fa-angle-right"></i>
                                                                </div>
                                                            </a>
                                                            <ul className="nav-sub-childmenu submenu-content" style={{ display: "none" }}>
                                                                <li>
                                                                    <a href="boxed.html">Boxed</a>
                                                                </li>
                                                                <li>
                                                                    <a href="layout-rtl.html">RTL</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="hide-on-scroll.html">
                                                                <span>Hide menu on Scroll</span>
                                                            </a>
                                                        </li>
                                                        <li>     
                                                            <a className="submenu-title" href="#">
                                                                Footers
                                                                <span className="sub-arrow">
                                                                    <i className="fa fa-chevron-right"></i>
                                                                </span>
                                                                <div className="according-menu">
                                                                    <i className="fa fa-angle-right"></i>
                                                                </div>
                                                            </a>
                                                            <ul className="nav-sub-childmenu submenu-content" style={{ display: "none" }}>
                                                                <li>
                                                                    <a href="footer-light.html">Footer Light</a>
                                                                </li>
                                                                <li>
                                                                    <a href="footer-dark.html">Footer Dark</a>
                                                                </li>
                                                            <li>
                                                                <a href="footer-fixed.html">Footer Fixed</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="sidebar-list">
                                                <a className="sidebar-link sidebar-title" href="http://support.pixelstrap.com/help-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-headphones">
                                                        <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                                                        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                                                    </svg>
                                                    <span>Raise Support</span>
                                                    <div className="according-menu">
                                                        <i className="fa fa-angle-right"></i>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="sidebar-list">
                                                <a className="sidebar-link sidebar-title" href="../document/index.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text">
                                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                        <polyline points="14 2 14 8 20 8"></polyline>
                                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                                        <polyline points="10 9 9 9 8 9"></polyline>
                                                    </svg>
                                                    <span>Documentation</span>
                                                    <div className="according-menu">
                                                        <i className="fa fa-angle-right"></i>
                                                    </div>
                                                </a>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="simplebar-placeholder" style={{ width: "auto", height: "408px" }}></div>
                        </div>
                        <div className="simplebar-track simplebar-horizontal" style={{ visibility: "hidden" }}>
                            <div className="simplebar-scrollbar simplebar-visible" style={{ width: "0px", display: "none" }}></div>
                        </div>
                        <div className="simplebar-track simplebar-vertical" style={{ visibility: "hidden" }}>
                            <div className="simplebar-scrollbar simplebar-visible" style={{ height: "0px", display: "none" }}></div>
                        </div>
                    </ul>
                </div>
                <div className="right-arrow" id="right-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>
            </nav>
        </div>
    </div>
    )
}

export default IndexSidebar;