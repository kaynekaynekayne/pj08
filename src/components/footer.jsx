import React from 'react';
import { useAuth } from '../context/authContext';

const Footer = () => {
    const {user, logout}=useAuth();

    const handleLogout=async()=>{
        try{
            await logout();
        }catch(err){
            console.log(err.message);
        }
    }

    return (
        <footer>
            {user && 
                <button onClick={handleLogout}>Logout</button>
            }
        </footer>
    );
};

export default Footer;