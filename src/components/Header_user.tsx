import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store'; 
import { useEffect } from 'react';
import { getUser } from '../slices/userSlice';

export const Header_user = () => {
  const dispatch = useDispatch<AppDispatch>(); 
  const { user, loading } = useSelector((state: RootState) => state.user);

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
          <img src="images/logo.svg" alt="Logo" />
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
            {user && getInitials(user.name)}
          </div>
        </div>
      </div>
    </header>
  );
};
