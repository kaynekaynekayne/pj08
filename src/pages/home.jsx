import React from 'react';
import { useAuth } from '../context/authContext';

const Home = () => {

    const {logout}=useAuth();

    const handleLogout=async()=>{
        try{
            await logout();
        }catch(err){
            console.log(err.message);
        }
    }

    return (
        <div>
            HOME

            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;