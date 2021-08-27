import React, { Fragment } from 'react';
import Show from '../utils/show';
import Link from 'next/link'

const Menu = ({ menu }) => {

    const NavLink = ({ child }) => {
        return (
            <Link href={`${child.key}`}>
                <a className={`sidebar-link sidebar-title --active`}>
                    {/* icono */}
                    {child.icon || null}
                    {/* titulo */}
                    <span className="lan-1">{child?.text}</span>
                    {/* badge */}
                    <label className="badge badge-warning">{child?.info}</label>
                </a>
            </Link>
        )
    }

    const NavSub = ({ child }) => {
        return (
            <>
                <a href="" className={`sidebar-link sidebar-title --active`}>
                    {/* icono */}
                    {child.icon || null}
                    {/* titulo */}
                    <span className="lan-1">{child?.text}</span>
                    {/* badge */}
                    <label className="badge badge-warning">{child?.info}</label>
                    {/* menu acordion */}
                    <div className="according-menu">
                        {true ?
                        <i className="fa fa-angle-down"></i>
                        : <i className="fa fa-angle-right"></i>
                        }
                    </div>
                </a>
                {/* sub menu */}
                <ul className="sidebar-submenu" >
                    {child?.children?.map((item, indexI) => 
                    <li key={`list-menu-item-child-${indexI}`}>
                        <a href="javascript" className={`${true ? '--active' : ''}`}>{item?.text}
                        <span className="sub-arrow">
                            <i className="fa fa-chevron-right"></i>
                        </span>
                        </a>
                    </li>
                    )}
                </ul>
            </>
        )
    }

    return (
        <Fragment>
            <li className="sidebar-main-title">
                <div>
                <h6 className="lan-1">{menu?.text}</h6>
                <p className="lan-2">{menu?.description}</p>
                </div>
            </li>
            {/* sidebar list */}
            {menu?.children?.map((child, indexC) => 
                <li className="sidebar-list" key={`list-child-primary-${indexC}`}>
                    {/* sub */}
                    <Show condicion={child.type == 'sub'}
                        predeterminado={<NavLink child={child}/>}
                    >
                        <NavSub child={child}/>
                    </Show>
                </li>   
            )}
        </Fragment>
    )
}

export default Menu;