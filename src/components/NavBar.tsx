import  { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const NavBar = () => {
  const [divMessage, setDivMessage] = useState<boolean>(false);

  useEffect(() => {
    if (divMessage) {
      toast.info('First Login to your account', { position: 'top-right' });
      setDivMessage(false); 
    }
  }, [divMessage]);

  return (
    <div className="nav_bar">
      <div className="nav">
        <ul>
          <li>
            <Link to='/'>
              <button className='bg'>
                <img src="images/posts_icon.svg" alt="Posts Icon" /> Posts
              </button>
            </Link>
          </li>
          <li>
            <button onClick={() => { setDivMessage(true); }}>
              <img src="images/news_icon.svg" alt="News Icon" /> News
            </button>
          </li>
          <li>
            <button onClick={() => { setDivMessage(true); }}>
              <img src="images/mozg.svg" alt="Quiz Icon" /> Quizzes
            </button>
          </li>
          <li>
            <button onClick={() => { setDivMessage(true); }}>
              <img src="images/compaines.svg" alt="Companies Icon" /> Companies
            </button>
          </li>
          <li>
            <button onClick={() => { setDivMessage(true); }}>
              <img src="images/calendar.svg" alt="Events Icon" /> Events
            </button>
          </li>
          <li></li>
        </ul>
      </div>

      <ToastContainer theme='dark' />
    </div>
  );
};
