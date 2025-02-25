import { Header_user } from "../components/Header_user"
import { Main } from "../components/Main"
import { NavBarLogined } from "../components/NavBarLogined"
import { Right_Bar } from "../components/Right_Bar"

export const UserPage = () => {
  return (
    <div>
        <Header_user />
        <div className="main_div">
                <NavBarLogined />
                <Main />
                <Right_Bar />
            </div>
    </div>
  )
}
