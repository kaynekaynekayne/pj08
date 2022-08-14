import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <h3>
                    <Link to="/">around</Link>
                </h3>
                {/* <h3>
                    <Link to="/xx">XX</Link>
                </h3> */}
            </nav>
        </header>
    );
};

export default Header;