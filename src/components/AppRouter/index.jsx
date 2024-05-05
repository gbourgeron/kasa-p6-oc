import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Apropos from '../../pages/Apropos';
import Error from '../../components/Error';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function AppRouter() {
    return (
        <Router>
        <Header />
        <Footer />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/a-propos' element={<Apropos />} />
            <Route path='*' element={<Error />} />
        </Routes>
    </Router>
    )
}

export default AppRouter