import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {useAuth} from '../context/authContext';
import Home from './home';
import Auth from './auth';
import Searched from './searched';
import Info from './info';
import NotFound from './notFound';

const Pages = () => {
    const {user}=useAuth();

    return (
        <Routes>
            {user ? <Route path="/" element={<Home />} />
            : <Route path="/" element={<Auth />}/>
            }
            <Route path="/searched/:keyword" element={<Searched />}/>
            <Route path="/info/:id" element={<Info />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    );
};

export default Pages;