import React, { useEffect, useState } from 'react';
import LangBar from './langBar';
import NotifyBar from './notifyBar';
import UserBar from './userBar';
import { Maximize } from 'react-feather';
import { connect } from 'react-redux'
import { stateInitial, toggleTheme } from '../../redux/thunks/screenThunk'

const RightBar = ({ dark, toggleTheme }) => {

    return (
        <div className="nav-right col-8 pull-right right-header p-0">
            <ul className="nav-menus">
                {/* Cambio de idioma */}
                <LangBar/>
                {/* notify */}
                <NotifyBar/>
                {/* toggle theme */}
                <li>
                    <div className="mode" onClick={toggleTheme}>
                        <i className={`fa ${dark ? 'fa-lightbulb-o' : 'fa-moon-o'}`}></i>
                    </div>
                </li>
                <li className="maximize">
                    <a className="text-dark" href="#!" >
                        <Maximize/>
                    </a>
                </li>
                {/* user bar */}
                <UserBar/>
            </ul>
        </div>
    )
}

const mapStateToProps = (state = { screen: stateInitial }) => ({
    ...state.screen
})

const mapDispatchToProps = {
    toggleTheme,
}

export default connect(mapStateToProps, mapDispatchToProps)(RightBar);