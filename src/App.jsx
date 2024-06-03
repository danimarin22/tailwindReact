import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Outlet } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';


function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <>
      <div className="flex">
        <Sidebar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
        <div className={`flex-1 ${sidebarToggle ? 'ml-64' : 'ml-16'} transition-all duration-300 ease-in-out`}>
          {/* <Navbar /> */}
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;