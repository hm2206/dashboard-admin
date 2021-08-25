import React, { useEffect, useState } from 'react';
import LangBar from './langBar';
import NotifyBar from './notifyBar';
import UserBar from './userBar';
import { Maximize } from 'react-feather';

const RightBar = () => {

    const [current_theme, setCurrentTheme] = useState("light")

    const defaultTheme = () => {
        let theme = localStorage.getItem('theme');
        if (!theme) {
            theme = 'light';
            localStorage.setItem('theme', theme);
        }

        toggleTheme(theme);
    }

    const toggleTheme = (theme = 'light') => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
        setCurrentTheme(theme)
    }

    useEffect(() => {
        defaultTheme()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="nav-right col-8 pull-right right-header p-0">
            <ul className="nav-menus">
                {/* Cambio de idioma */}
                <LangBar/>
                {/* notify */}
                <NotifyBar/>
                {/* toggle theme */}
                <li>
                    <div className="mode" onClick={() => toggleTheme(current_theme == 'light' ? 'dark-only' : 'light')}>
                        <i className={`fa ${current_theme == 'light' ? 'fa-moon-o' : 'fa-lightbulb-o'}`}></i>
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

export default RightBar;