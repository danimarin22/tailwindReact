import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';


function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false)

  const handleResize = () => {
    if (window.innerWidth < 800) {
      setIsNavbarVisible(true)
    }
    else {
      setIsNavbarVisible(false)
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <div className={`flex ${isNavbarVisible ? 'flex-col' : 'flex-row'}`}>
        {
          !isNavbarVisible ? <Sidebar /> : <Navbar />
        }
        <div className={`flex-1 ${isNavbarVisible ? 'ml-0' : 'ml-16'} transition-all duration-300 ease-in-out`}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;