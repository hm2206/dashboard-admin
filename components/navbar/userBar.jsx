import React from 'react';
import Image from 'next/image'
import { User, Settings, LogOut } from 'react-feather'
import { translate } from 'react-switch-lang'
import { useSelector } from 'react-redux';
import Link from 'next/link'
import Show from '../../components/utils/show'

const UserBar = ({ t }) => {

    const { user } = useSelector(store => store?.auth)

    const options = [
        { 
            key: "account",
            url: "/",
            text: "layout.setting.account",
            icon: <User/>
        },
        { 
            key: "setting",
            text: "layout.setting.setting",
            icon: <Settings/>
        },
        { 
            key: "logout",
            text: "layout.setting.logout",
            icon: <LogOut/>
        },
    ]

    return (
        <li className="profile-nav onhover-dropdown p-0 me-0">
            <div className="media profile-media"><Image className="b-r-10" src={require("../../assets/images/dashboard/profile.jpg")} alt=""/>
            <div className="media-body"><span>{user?.username}</span>
                <p className="mb-0 font-roboto">Admin <i className="middle fa fa-angle-down"></i></p>
            </div>
            </div>
            <ul className="profile-dropdown onhover-show-div">
                {options?.map((opt, index) => 
                    <li key={`item-menu-user-${index}`}>
                        <Show condicion={opt.url}
                            predeterminado={<a href="#">{opt?.icon} <span>{t(opt?.text)} </span></a>}
                        >
                            <Link href={`${opt.url}`}>
                                <a>{opt?.icon} <span>{t(opt?.text)} </span></a>
                            </Link>
                        </Show>
                    </li>    
                )}    
            </ul>
        </li>
    )
}

export default translate(UserBar);