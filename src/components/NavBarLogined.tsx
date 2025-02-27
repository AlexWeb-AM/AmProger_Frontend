import { useEffect, useState } from 'react';
import { FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom'; 
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store'; 
import { getUser } from '../slices/userSlice';

export const NavBarLogined = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>('posts'); 
  const dispatch = useDispatch<AppDispatch>(); 
  const { user, loading } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (!user && !loading) {
      dispatch(getUser()); 
    }
  }, [dispatch, user, loading]);

  useEffect(() => {
    switch (true) {
      case location.pathname === '/':
        setActiveTab('posts');
        break;
      case location.pathname.endsWith('/posts'):
        setActiveTab('posts');
        break;
      case location.pathname.endsWith('/news'):
        setActiveTab('news');
        break;
      case location.pathname.endsWith('/quiz'):
        setActiveTab('quiz');
        break;
      case location.pathname.endsWith('/compaines'):
        setActiveTab('companies');
        break;
      case location.pathname.endsWith('/events'):
        setActiveTab('events');
        break;
      case location.pathname.endsWith('/languages'):
        setActiveTab('languages');
        break;
      case location.pathname.endsWith('/themes'):
        setActiveTab('themes');
        break;
      default:
        setActiveTab('');
    }
  }, [location]);

  const routeId = user?.routeId
  

  return (
    <div className="nav_bar">
      <div className="nav">
        <ul>
          <li>
            <Link to={`/user/${routeId}/posts`}>
              <button className={activeTab === 'posts' ? 'bg' : ''}>
                <img src="../../public/images/posts_icon.svg" alt="Posts Icon" /> Posts
              </button>
            </Link>
          </li>
          <li>
            <Link to={`/user/${routeId}/news`}>
              <button className={activeTab === 'news' ? 'bg' : ''}>
                <img src="../../public/images/news_icon.svg" alt="News Icon" /> News
              </button>
            </Link>
          </li>
          <li>
            <Link to={`/user/${routeId}/quiz`}>
              <button className={activeTab === 'quiz' ? 'bg' : ''}>
                <img src="../../public/images/mozg.svg" alt="Quiz Icon" /> Quizzes
              </button>
            </Link>
          </li>
          <li>
            <Link to={`/user/${routeId}/companies`}>
              <button className={activeTab === 'companies' ? 'bg' : ''}>
                <img src="../../public/images/compaines.svg" alt="Companies Icon" />Companies
              </button>
            </Link>
          </li>
          <li>
            <Link to={`/user/${routeId}/events`}>
              <button className={activeTab === 'events' ? 'bg' : ''}>
                <img src="../../public/images/calendar.svg" alt="Events Icon" /> Events
              </button>
            </Link>
          </li>
        </ul>
      </div>

      <div className="bottom_div">
        <div>
          <FaTelegram className='icon' />
          <FaXTwitter className='icon'/>
        </div>
      </div>
    </div>
  );
};
