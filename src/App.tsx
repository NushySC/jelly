import React from 'react';
import './styles/App.scss';
import Hero from './components/hero';
import Main from './components/main';

function App() {
    return (
        <div className="app">
            <Hero />
            <Main />
        </div>
    );
}

export default App;
