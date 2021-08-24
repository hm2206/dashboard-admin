import React from 'react';

const DefaultLayout = ({ header = null, sidebar = null, children = null }) => {

    return (
        <div className="page-wrapper compact-wrapper">
            <div className="page-header close_icon">
                {header}
            </div>
            <div className="page-body-wrapper" id="sidebar-wrapper">
                {sidebar}
                <div className="page-body">
                    {children}
                </div>
                <footer className="footer"></footer>
            </div>
        </div>
    )
}

export default DefaultLayout;