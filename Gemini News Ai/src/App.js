import React from 'react';
import AdDisplay from './components/AdDisplay';

const App = () => {
    const adContent = {
        imageUrl: 'url_to_image',
        title: 'Ad Title',
        description: 'Description of the ad.',
    };

    return (
        <div className="app-container">
            <h1>Personalized Ads</h1>
            {/* Display Ad component */}
            <AdDisplay adContent={adContent} />
            {/* Add more components here */}
            {/* ... */}
        </div>
    );
}

export default App;
