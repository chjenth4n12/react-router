import React from 'react';
import { Route, Link } from 'react-router-dom';

const Menus = [
    {
        name : 'Home',
        to : '/',
        exact : true
    },
    {
        name : 'About',
        to : '/about',
        exact : true
    },
    {
        name : 'Contact',
        to : '/contact',
        exact : true
    }
]
const MyLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to} exact={activeOnlyWhenExact} children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to}>{label}</Link>
                    </li>
                );
            }}
        />
    );
}

var ShowMenu = (Menus) => {
    var result = null;
    if (Menus.length > 0) {
        result = Menus.map((menu, index) => {
            return (
                <MyLink label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} key={index} />
            );
            
        });
    }
    return result;
}

function Menu() {
    return (
        <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
                {/* <li className="active">
                    <NavLink 
                        // activeStyle={{
                        //     backgroundColor : 'white',
                        //     color : 'red'
                        // }}
                        // activeClassName="active" 
                        exact
                        to="/">Home</NavLink>
                    
                </li> */}
                { ShowMenu(Menus) }
            </ul>
        </nav>
    );
}

export default Menu;