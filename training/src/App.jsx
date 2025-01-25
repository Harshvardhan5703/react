import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Card from './components/Card';
import Counter from './components/Counter';
import CloudAnimation from './components/Cloud';
import Tooltip from './components/ToolTip';
import constant from './components/constant';
import { motion } from 'framer-motion';
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
                    <CloudAnimation/>
                    <Card/>
                    <Counter/>
                    <h1>Welcome to my React Website!</h1>
                    <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="mt-16 text-center flex flex-col items-center"
                >
                    <h1 className="text-2xl font-semibold relative z-10 heading-effect lg:text-3xl mt-24">
                        Technologies
                    </h1>
                    <p className="text-start max-w-[20rem] mt-5 md:max-w-[30rem] lg:max-w-[750px] lg:text-lg">
                        I use a wide range of tools to tackle each hurdle in the
                        most efficient manner possible.
                    </p>
                    <div className="grid grid-cols-6 text-3xl gap-4 mt-5 bg-boxes border-white/10 border-[1px] px-8 py-3 rounded-2xl lg:text-4xl md:grid-cols-9">
                        {constant.techs.map((item, idx) => {
                            return (
                                <Tooltip key={idx} message={item.name}>
                                    <div className="hover:text-primary cursor-pointer transition-all">
                                        {item.icon}
                                    </div>
                                </Tooltip>
                            );
                        })}
                    </div>
                </motion.div>
                </div>
            )}
        </div>
    );
};

export default App;
