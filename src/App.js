import React, { useState, useEffect } from 'react';
import { Routes, Route, useHistory } from 'react-router-dom';
//import Layout from './pages/Layout/Layout';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Page1 from './pages/Page1/Page1';
import Page2 from './pages/Page2/Page2';
import NoPage from './pages/NoPage/NoPage';


const App = () => {

    return (
        <div className="app">
            <Header />
            <Routes>
                {/*<Route path="/" element={<Layout />}>*/}
                    {/*<Route index element={<Home />} />*/}
                    <Route path="/" element={<Home />} />
                    <Route path="page1" element={<Page1 />} />
                    <Route path="page2" element={<Page2 />} />
                    <Route path="*" element={<NoPage />} />
                {/*</Route>*/}
            </Routes>
        </div>
    );
};


export default App;
