import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    `)
    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to='/'>{data.site.siteMetadata.title}</Link>

            </h1>
            <ul className={headerStyles.navList}>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeItem} to='/'>Home</Link></li>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeItem} to='/about'>About</Link></li>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeItem} to='/blog'>Blog</Link></li>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeItem} to='/contact'>Contact</Link></li>
            </ul>
        </header>

    )
}


export default Header;
