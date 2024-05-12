import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "../Layout";
import Home from '../../pages/Home';
import Apropos from '../../pages/Apropos';
import Error from '../../components/Error';

function AppRouter() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/a-propos' element={<Apropos />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default AppRouter