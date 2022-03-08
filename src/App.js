import React from 'react';
import './App.scss'
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Features from './components/features/Features';
import Register from './components/register/Register';

function App() {
    return (
        <div className="app">
            <Topbar></Topbar>
            <div className='content'>
                <Intro></Intro>
                <Features></Features>
                <Register></Register>
            </div>
        </div>
    );
}

export default App;
