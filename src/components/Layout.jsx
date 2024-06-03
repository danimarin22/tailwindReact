import Navbar from "./Sidebar";
import PropTypes from 'prop-types';


export default function Layout({ sidebarToggle, setSidebarToggle }) {
    return (
        <div className={`${sidebarToggle ? " " : "ml-64"} w-full`}>
            <Navbar
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle} />
        </div>
    )
}
Layout.propTypes = {
    isSidebarOpen: PropTypes.bool.isRequired,
    setIsSidebarOpen: PropTypes.func.isRequired,
};