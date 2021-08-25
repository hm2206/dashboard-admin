import React, { useEffect, useState } from 'react';
import langs from '../../data/langs.json';
import Show from '../utils/show'

const LangBar = () => {

    const [show_menu, setShowMenu] = useState(false);
    const [current_lang, setCurrentLang] = useState({});

    const toggleMenu = () => setShowMenu(prev => (!prev))

    const handleSelectLang = (key) => {
        let result = langs.find(obj => obj.key == key);
        setCurrentLang(result || {});
    }

    const handleDefaultLang = () => {
        let local_lang = localStorage.getItem('lang');
        if (!local_lang) {
            local_lang = 'en';
            localStorage.setItem('lang', local_lang);
        }

        handleSelectLang(local_lang);
    }

    useEffect(() => {
        handleDefaultLang()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const isObject = Object.keys(current_lang).length;

    return (
        <li className="language-nav">
            <div className={`translate_wrapper ${show_menu ? 'active' : ''}`}>
                <div className="current_lang">
                    <div className="lang" onClick={toggleMenu}>
                        <Show condicion={isObject}
                            predeterminado={"SEL"}
                        >
                            <i className={`flag-icon ${current_lang?.icon}`}></i>
                            <span className="lang-txt">{current_lang?.key}</span>
                        </Show>
                    </div>
                </div>
                <div className={`more_lang ${show_menu ? 'active' : ''}`}>
                    {langs?.map((lang, index) => 
                        <div className="lang" key={`lang-${index}`}
                            onClick={() => handleSelectLang(lang?.key)}
                        >
                            <i className={`flag-icon ${lang?.icon}`}></i><span className="lang-txt">{lang?.text} <span> {lang?.prefix}</span></span>
                        </div>
                    )}
                </div>
            </div>
        </li>
    )
}

export default LangBar;