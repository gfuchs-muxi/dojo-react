import React from 'react'

import Input from '../../atoms/input'
import { JuliusButton } from '../../atoms/button'

const SearchKeyword = (props) => {
    return (

        <form className="form-inline my-2 my-lg-0">
            <Input />
            <JuliusButton>Pesquisar</JuliusButton>
        </form>

    )
}

export default SearchKeyword;