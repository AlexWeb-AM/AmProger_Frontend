import React, { useEffect, useState } from 'react';
import { FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router';

export const NavBar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>('posts'); 

  useEffect(() => {
    switch (true) {
      case location.pathname === '/':
        setActiveTab('posts');
        break;
      case location.pathname.endsWith('/posts'):
        setActiveTab('posts');
        break;
      case location.pathname === '/news':
        setActiveTab('news');
        break;
      case location.pathname === '/quiz':
        setActiveTab('quiz');
        break;
      case location.pathname === '/companies':
        setActiveTab('companies');
        break;
      case location.pathname === '/events':
        setActiveTab('events');
        break;
      case location.pathname === '/languages':
        setActiveTab('languages');
        break;
      case location.pathname === '/themes':
        setActiveTab('themes');
        break;
      default:
        setActiveTab('');
    }
  }, [location]);

  return (
    <div className="nav_bar">
      <div className="nav">
        <ul>
          <li>
            <Link to='/'>
            <button className={activeTab === 'posts' ? 'bg' : ''}>
              <img src="../../public/images/posts_icon.svg" alt="Posts Icon" /> Պոստեր
            </button>
            </Link>
          </li>
          <li>
          <Link to='/news'>
            <button className={activeTab === 'news' ? 'bg' : ''}>
              <img src="../../public/images/news_icon.svg" alt="News Icon" /> Նորություններ
            </button>
            </Link>
          </li>
          <li>
          <Link to='/quiz'>
            <button className={activeTab === 'quiz' ? 'bg' : ''}>
              <img src="../../public/images/mozg.svg" alt="Quiz Icon" /> Վիկտորինաներ
            </button>
            </Link>
          </li>
          <li>
          <Link to='/companies'>
            <button className={activeTab === 'companies' ? 'bg' : ''}>
              <img src="../../public/images/compaines.svg" alt="Companies Icon" /> Ընկերություններ
            </button>
            </Link>
          </li>
          <li>
          <Link to='/events'>
            <button className={activeTab === 'events' ? 'bg' : ''}>
              <img src="../../public/images/calendar.svg" alt="Events Icon" /> Իրադարձություններ
            </button>
            </Link>
          </li>
          <li>
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
