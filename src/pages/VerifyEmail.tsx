import {VerifyEmailComponent }from '../components/VerfiyEmailComponent'

export const VerifyEmail = () => {
  return (
    <div className='sign_up_page'>
        <div className='block1'>
            <img src="../../public/images/site_icon.svg" alt="logo" />
            <h1>AmProger</h1>
        </div>
        <div className='block2'>
            <VerifyEmailComponent />
        </div>
    </div>
  )
}
