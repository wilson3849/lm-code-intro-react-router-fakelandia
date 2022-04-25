
import { NavLink, Outlet } from 'react-router-dom';

const Navbar: React.FC = () => {

    let activeStyle = {
        color: "yellow", 
        padding: "1rem",
        textDecoration: "none"
    };

    let noStyle = {
        color: "white",
        padding: "1rem",
        textDecoration: "none"
    }; 

    return (
    <>
    <header className="App-header">
        <div>
            FAKELANDA<br/>JUSTICE<br/>DEPARTMENT
        </div>
        <div>
            <div>        
                <nav>
                    <NavLink 
                        to="/"
                        aria-label="Home"
                        style={({isActive}) =>
                            isActive ? activeStyle : noStyle
                        }>Home</NavLink>
                    <NavLink 
                        to="/Misdemeanours"
                        aria-label="Misdemeanours"
                        style={({isActive}) =>
                            isActive ? activeStyle : noStyle
                        }>Misdemeanours</NavLink>
                    <NavLink 
                        to="/Confess"
                        aria-label="Confess"
                        style={({isActive}) =>
                            isActive ? activeStyle : noStyle
                        }>Confess To Us</NavLink>
                </nav>
            </div>
        </div>
    </header>
    <main>
        <Outlet />
    </main>
    </>
    )
};

export default Navbar;