import  { useState, useEffect } from 'react';
import { FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const NavBar = () => {
  const [divMessage, setDivMessage] = useState<boolean>(false);

  useEffect(() => {
    if (divMessage) {
      toast.info('Message Displayed!', { position: 'top-right' });
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
                <img src="../../public/images/posts_icon.svg" alt="Posts Icon" /> Պոստեր
              </button>
            </Link>
          </li>
          <li>
            <button onClick={() => { setDivMessage(true); }}>
              <img src="../../public/images/news_icon.svg" alt="News Icon" /> Նորություններ
            </button>
          </li>
          <li>
            <button onClick={() => { setDivMessage(true); }}>
              <img src="../../public/images/mozg.svg" alt="Quiz Icon" /> Վիկտորինաներ
            </button>
          </li>
          <li>
            <button onClick={() => { setDivMessage(true); }}>
              <img src="../../public/images/compaines.svg" alt="Companies Icon" /> Ընկերություններ
            </button>
          </li>
          <li>
            <button onClick={() => { setDivMessage(true); }}>
              <img src="../../public/images/calendar.svg" alt="Events Icon" /> Իրադարձություններ
            </button>
          </li>
          <li></li>
        </ul>
      </div>

      <ToastContainer theme='dark' />
    </div>
  );
};
