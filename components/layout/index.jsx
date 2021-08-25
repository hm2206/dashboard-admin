import React from 'react'
import Image from 'next/image'
import Navbar from '../navbar'
import Sidebar from '../sidebar'
import Footer from '../footer'

const IndexLayout = ({ children = null, title = "Hola a react" }) => {

    return (
        <>
            {/* <!-- tap on top starts--> */}
            <div className="tap-top">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-up">
                    <polyline points="17 11 12 6 7 11"></polyline>
                    <polyline points="17 18 12 13 7 18"></polyline>
                </svg>
            </div>
            {/* <!-- tap on tap ends--> */}
            {/* <!-- page-wrapper Start--> */}
            <div className="page-wrapper null compact-wrapper" id="pageWrapper">
                <Navbar/>                   
                {/* <!-- Page Body Start--> */}
                <div className="page-body-wrapper horizontal-menu">
                    {/* <!-- Page Sidebar Start--> */}
                    <Sidebar/>
                    {/* <!-- Page Sidebar Ends--> */}
                    <div className="page-body">
                        {/* <div className="container-fluid">
                            <div className="page-title">
                                <div className="row">
                                    <div className="col-6">
                                        <h3>Layout dark</h3>
                                    </div>
                                    <div className="col-6">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="index.html" >                                       
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                                <polyline points="9 22 9 12 15 12 15 22"></polyline></svg></a>
                                            </li>
                                            <li className="breadcrumb-item">Color version</li>
                                            <li className="breadcrumb-item active">Layout dark</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <div className="container-fluid">
                            <div className="row starter-main">
                                <div className="col-sm-12">
                                    {children}
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <!-- footer start--> */}
                    <Footer/>
                </div>
            </div>
        </>
    );
}

export default IndexLayout;