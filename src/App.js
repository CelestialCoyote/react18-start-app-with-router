import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useHistory } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import Page1 from './pages/Page1/Page1';
import Page2 from './pages/Page2/Page2';
import NoPage from './pages/NoPage/NoPage';


const App = () => {

    return (
        <BrowserRouter>
            <div className="app">
                <div>React Start Project</div>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="page1" element={<Page1 />} />
                        <Route path="page2" element={<Page2 />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};


export default App;
