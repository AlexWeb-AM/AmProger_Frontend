import { Link } from 'react-router'

export const Header = () => {

    return (
        <header className='header'>
            <div className="container">
                <div className='logo_div'>
                    <img src="images/logo.svg" alt="" />
                </div>
                <div className='search_div'>
                    <form>
                        <input placeholder='Search' type="text" />
                    </form>
                </div>
                <div className='buttons_div'>
                    <Link to='/signup' ><button className='button1'>Sign Up</button></Link>
                    <Link to='/login' ><button className='button2'>Login</button></Link>
                </div>
            </div>
        </header>
    )
}
