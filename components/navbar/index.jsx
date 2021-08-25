import React from 'react';
import RightBar from './rightBar'
import Image from 'next/image'

const NavbarIndex = () => {

    return (
        <div className="page-header">
            <div className="header-wrapper row m-0">
                <form className="form-inline search-full col" action="#" method="get">
                    <div className="form-group w-100">
                    <div className="Typeahead Typeahead--twitterUsers">
                        <div className="u-posRelative">
                            <span className="twitter-typeahead" style={{ position: "relative", display: "inline-block" }}></span>
                            <input className="demo-input Typeahead-input form-control-plaintext w-100 tt-hint"/>
                        
                            <div className="spinner-border Typeahead-spinner" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x close-search"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </div>
                        <div className="Typeahead-menu"><div className="tt-dataset tt-dataset-0"></div></div>
                    </div>
                    </div>
                </form>
                <div className="header-logo-wrapper col-auto p-0">
                    <div className="logo-wrapper"><a href="index.html" >
                        <Image className="img-fluid" src={require("../../assets/images/logo/logo.png")} alt=""/></a></div>
                    <div className="toggle-sidebar" checked="checked"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-align-center status_toggle middle sidebar-toggle"><line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line></svg></div>
                </div>

                {/* navbar left */}
                <div className="left-header col horizontal-wrapper ps-0"></div>
                
                {/* navbar right */}
                <RightBar/>

            </div>
        </div>
    )
}

export default NavbarIndex;