
import { NavBarLogined } from '../components/NavBarLogined'
import { Main_News } from '../components/Main_News'
import { Right_Bar } from '../components/Right_Bar'
import { Header_user } from '../components/Header_user'

export const News = () => {
  return (
    <div className='news_age'>
        <Header_user />
        <div className='main_div'>
                <NavBarLogined />
                <Main_News />
                <Right_Bar />
        </div>
    </div>
  )
}
