import { Header_user } from "../components/Header_user"
import { Main } from "../components/Main"
import { NavBar } from "../components/NavBar"
import { Right_Bar } from "../components/Right_Bar"

export const UserPage = () => {
  return (
    <div>
        <Header_user />
        <div className="main_div">
                <NavBar />
                <Main />
                <Right_Bar />
            </div>
    </div>
  )
}
