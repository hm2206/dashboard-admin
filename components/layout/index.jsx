import React, { useEffect } from 'react'
import Navbar from '../navbar'
import Breadcrumb from './breadcrumb'
import Sidebar from '../sidebar'
import Footer from '../footer'
import { ChevronUp } from 'react-feather'
import { connect } from 'react-redux'
import { stateInitial, resizeScreen } from '../../redux/thunks/screenThunk'

const IndexLayout = ({ children = null, resizeScreen }) => {

    const isObjectWindow = typeof window == 'object';

    useEffect(() => {
        if (isObjectWindow) resizeScreen()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isObjectWindow])

    useEffect(() => {
        if (isObjectWindow) window?.addEventListener('resize', resizeScreen);
        return () => isObjectWindow ? window?.removeEventListener('resize', resizeScreen) : null
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isObjectWindow]);

    return (
        <>
            {/* <!-- tap on top starts--> */}
            <div className="tap-top">
                <ChevronUp/>
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
                        <div className="container-fluid">
                            {children}
                        </div>
                    </div>
                    {/* <!-- footer start--> */}
                    <Footer/>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state = { screen: stateInitial }) => ({
    ...state.screen
})

const mapDispatchToProps = { resizeScreen }

export default connect(mapStateToProps, mapDispatchToProps)(IndexLayout);