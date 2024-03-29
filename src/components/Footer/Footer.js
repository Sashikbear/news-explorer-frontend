import './Footer.css';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__copyright'>
        &copy; 2021 Supersite, Powered by News API
      </p>

      <div className='footer__links-wrapper'>
        <ul className='footer__links-text'>
          <li className='footer__link-text'>
            <Link
              to={'/'}
              style={{ textDecoration: 'inherit', color: '#1A1B22' }}
            >
              {'Home'}
            </Link>
          </li>
          <li className='footer__link-text'>
            {' '}
            <a
              href='https://www.practicum100.org/'
              style={{ textDecoration: 'inherit', color: '#1A1B22' }}
            >
              Practicum by Yandex
            </a>
          </li>
        </ul>
        <ul className='footer__links-icons'>
          <li className='footer__link-icon'>
            <a href='https://github.com/Sashikbear'>
              {' '}
              <svg
                width='22'
                height='21'
                viewBox='0 0 22 21'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M11 0.894745C5.41702 0.894745 0.894775 5.42319 0.894775 11C0.894775 15.4664 3.79174 19.2505 7.80531 20.5904C8.30778 20.6834 8.49388 20.3733 8.49388 20.1003C8.49388 19.8584 8.48768 19.2257 8.48148 18.382C5.67136 18.9899 5.07584 17.0297 5.07584 17.0297C4.61679 15.8634 3.95303 15.5533 3.95303 15.5533C3.03493 14.9267 4.02127 14.9391 4.02127 14.9391C5.03241 15.0136 5.5721 15.9813 5.5721 15.9813C6.47159 17.5259 7.93558 17.0793 8.51249 16.8188C8.60554 16.1674 8.86608 15.7208 9.15144 15.4664C6.90582 15.2121 4.54855 14.3436 4.54855 10.4727C4.54855 9.36853 4.93936 8.46904 5.59071 7.76186C5.48526 7.50752 5.13787 6.47776 5.68997 5.08821C5.68997 5.08821 6.53983 4.81527 8.46907 6.12417C9.27551 5.90085 10.1378 5.78919 11 5.78299C11.8561 5.78919 12.7246 5.90085 13.531 6.12417C15.4602 4.81527 16.3101 5.08821 16.3101 5.08821C16.8622 6.47776 16.5148 7.50752 16.4094 7.76186C17.0545 8.46904 17.4453 9.36853 17.4453 10.4727C17.4453 14.356 15.0818 15.2059 12.83 15.4602C13.1898 15.7704 13.5186 16.3907 13.5186 17.3336C13.5186 18.686 13.5062 19.7716 13.5062 20.1065C13.5062 20.3795 13.6861 20.6896 14.201 20.5904C18.2145 19.2505 21.1053 15.4664 21.1053 11.0062C21.1053 5.42319 16.5831 0.894745 11 0.894745Z'
                  fill='#191717'
                />
              </svg>
            </a>
          </li>
          <li className='footer__link-icon'>
            <a href='https://www.linkedin.com/in/alexandra-gritsenko-2a3429208/'>
              {' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='22'
                height='21'
                fill='#191717'
                className='bi bi-linkedin'
                viewBox='0 0 16 16'
              >
                <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />{' '}
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
