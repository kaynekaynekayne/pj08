import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Auth from './auth';
import NotFound from './notFound';
import {useAuth} from '../context/authContext';
import Home from './home';

const Pages = () => {
    const {user}=useAuth();

    return (
        <Routes>
            {user ? <Route path="/" element={<Home />} />
            : <Route path="/" element={<Auth />}/>
            }
            <Route path="*" element={<NotFound />}/>
        </Routes>
    );
};

export default Pages;