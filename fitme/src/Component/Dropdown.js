import '../Css/Dropdown.css'
import { Box } from '@chakra-ui/react'
import React from 'react';



export default function Dropdown({ value, title }) {

    return (

        <Box w={150}>
            <button class="hover-button">{title}</button>
            <div class="dropdown" >
                {
                    value.map((el) => (
                        <p key={el} className='item'>{el}</p>
                    ))
                }
            </div>
        </Box>

    )
}