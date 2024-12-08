import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Card from './components/Card';
import Counter from './components/Counter';

const App = () => {
    const [progress, setProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let interval;
        if (!isLoaded) {
            interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        setIsLoaded(true);
                        clearInterval(interval);
                        return 100;
                    }
                    return prev + 5; // Increment progress smoothly
                });
            }, 50); // Adjust this for smoothness
        }
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [isLoaded]);

    return (
        <div>
            {!isLoaded ? (
                <Loader progress={progress} />
            ) : (
                <div>
                    {/* Your website content */}
                    <Card/>
                    <Counter/>
                    <h1>Welcome to my React Website!</h1>
                </div>
            )}
        </div>
    );
};

export default App;
