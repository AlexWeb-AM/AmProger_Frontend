
export const Header_user = () => {
  return (
    <header className='header'>
        <div className='container'>
            <div className="logo_div">
                <img src="../../public/images/logo.svg" alt="" />
            </div>
            <div className='search_div'>
                    <form>
                        <input placeholder='Փնտրել' type="text" />
                    </form>
            </div>
          <div className="user_profile_div">
            <div className="button_write_post">
              Գրել պոստ
            </div>
            <div className="radius_div">
                AB
            </div>
        </div>
        </div>
    </header>
  )
}

