import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'
import { Main } from '../components/Main'
import { Right_Bar } from '../components/Right_Bar'

export const Home = () => {
    return (
        <>
            <Header />
            <div className='main_div '>
                    <NavBar />
                    <Main />
                    <Right_Bar />   
            </div>
        </>
    )
}
