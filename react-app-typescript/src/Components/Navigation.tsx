import { useState } from "react"
import {NavLink} from 'react-router-dom'

export function NavigationMenu()
{
    type PageInformation = {
        pageName: string,
        pageRoute: string
    }
    const links: PageInformation [] = [
        {pageName: 'Home', pageRoute: '/'},
        {pageName: 'Page 1', pageRoute: '/page-1'},
        {pageName: 'Page 2', pageRoute: '/page-2'},
        {pageName: 'Sandbox', pageRoute: '/sandbox'}
    ];
    return (
        <div className="navigationMenu">
            {links.map((pageData:PageInformation) => {
                return (
                    <NavLink key={"link" + pageData.pageName} to={pageData.pageRoute}>{pageData.pageName}</NavLink>
                )
            })}
        </div>
    );
}

