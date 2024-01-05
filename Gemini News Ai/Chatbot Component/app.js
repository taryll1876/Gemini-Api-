import React from 'react';
import AdDisplay from './components/AdDisplay';
import Chatbot from './components/Chatbot';

const App = () => {
    return (
        <div className="app-container">
            <h1>Personalized Ads</h1>
            <AdDisplay />
            {/* Add the Chatbot component */}
            <Chatbot />
        </div>
    );
};

export default App;
