import { SignUpComponent } from '../components/SignUp_component'

export const SignUp = () => {
    return (
        <div className='sign_up_page'>
            <div className='block1'>
                <img src="images/site_icon.svg" alt="" />
                <h1>AmProger</h1>
            </div>
            <div className='block2'>
                <SignUpComponent />
            </div>
        </div>
    )
}
