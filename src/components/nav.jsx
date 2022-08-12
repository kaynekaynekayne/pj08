import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <h3>
                <Link to="/">around</Link>
            </h3>
            {/* <div>
                <Link to="/auth">Login</Link>
            </div> */}
        </nav>
    );
};

export default Nav;