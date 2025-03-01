import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { useEffect, useState } from 'react';
import { getUser } from '../slices/userSlice';
import { LuBookmark } from 'react-icons/lu';
import { Settings, LogOut } from 'lucide-react'
import { Link, useNavigate } from 'react-router';
import { NotePencil } from '@phosphor-icons/react'
import { logoutUser } from '../slices/authSlice';

export const Header_user = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>();
  const { user, loading } = useSelector((state: RootState) => state.user);
  const [menu, setMenu] = useState<boolean>(false)
  useEffect(() => {
    if (!user && !loading) {
      dispatch(getUser());
    }
  }, [dispatch, user, loading]);

  const getInitials = (fullName: string) => {
    const nameParts = fullName.split(' ');
    const initials = nameParts.map(part => part.charAt(0).toUpperCase()).join('');
    return initials;
  };



  return (
    <header className='header'>
      <div className='container'>
        <div className="logo_div">
          <img src="/images/logo.svg" alt="Logo" />
        </div>
        <div className='search_div'>
          <form>
            <input placeholder='Search' type="text" />
          </form>
        </div>
        <div className="user_profile_div">
          <Link to={`/user/${user?.routeId}/create-post`}>
            <div className="button_write_post">
              Create Post
            </div>
          </Link>
          <div onClick={() => { setMenu(!menu) }} className="radius_div">
            {user && getInitials(user.name)}
          </div>
        </div>
      </div>
      {menu && (<div className='menu_div'>
        <Link to={`/user/${user?.routeId}/saved`}><button><LuBookmark className='icon_menu' /> Saved</button></Link>
        <Link to={`/user/${user?.routeId}/user_posts`}><button><NotePencil size={30} /> Posts</button></Link>
        <Link to={`/user/${user?.routeId}/settings`}><button><Settings className='icon_menu' />Settings</button></Link>
        <button onClick={() => {
  dispatch(logoutUser());
  setMenu(false);
  navigate('/');
}}>
  <LogOut className='icon_menu' />Logout
</button>

      </div>)}
    </header>
  );
};
