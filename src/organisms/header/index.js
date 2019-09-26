import React from 'react'

import NavbarMenu from '../../molecules/navbar-menu'
import SearchKeyword from '../../molecules/search-keyword'

const Header = (props) => {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Muxi</a>
                <NavbarMenu />
                <SearchKeyword />
            </nav> 

    )

}

export default Header