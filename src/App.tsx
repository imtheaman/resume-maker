import { useRef } from 'react';
import { useAppSelector } from './store/store';
import Screen from './components/Resume/Screen';
import Header from './components/header/Header';
import Nav from './components/header/Nav';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import FillDetails from './components/fill-details/long-details/Experience';
import Layout from './components/templates/Templates';

const Home: React.FC = () => {
  const { spellCheck, screen } = useAppSelector(({ ui }) => ui);
  const printRef = useRef<HTMLDivElement>();
  return (
    <div>
      <main
        className='w-full flex flex-col items-center space-y-6 mb-6'
        spellCheck={spellCheck}
      >
        <Header />
        <nav className='flex w-full max-w-[1200px] justify-between items-center space-x-6'>
          <Nav />
          {/* @ts-ignore */}
          <ReactToPrint content={() => printRef.current}>
            <PrintContextConsumer>
              {({ handlePrint }) => (
                <button
                  disabled={screen !== 'resume'}
                  className='btn'
                  onClick={handlePrint}
                >
                  <FontAwesomeIcon
                    icon={faDownload}
                    width={20}
                    height={20}
                    className='mr-2'
                  />
                  <p>Download</p>
                </button>
              )}
            </PrintContextConsumer>
          </ReactToPrint>
        </nav>
        {/* @ts-ignore */}
        <Screen ref={printRef} />
      </main>

      <footer className='text-center mb-8 italic text-gray-500'>
        Made with 💖 by{' '}
        <a
          className='underline text-gray-800'
          href='https://github.com/urtheaman'
        >
          urtheaman
        </a>
        <span> (Open Sourced)</span>
      </footer>
    </div>
  );
};

export default Home;
