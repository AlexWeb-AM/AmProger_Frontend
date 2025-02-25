import React from 'react'
import { LoginComponent } from '../components/Login_component'

export const Login = () => {

    return (
        <div className='sign_up_page'>
            <div className='block1'>
                <img src="images/site_icon.svg" alt="" />
                <h1>AmProger</h1>
            </div>
            <div className='block2'>
                <LoginComponent />
            </div>
        </div>
    )
}
