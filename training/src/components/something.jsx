import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
const Something = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      duration: 1,
      x: 100,
      rotation: 360,
      backgroundColor: "#4ade80", // Tailwind's green-400
      ease: 'power2.out',
    });
  }, []);

  return (
    <div>
      <div
        ref={boxRef}
        className='bg-red-500 w-4 h-10 rounded-sm'
      >
        hj
      </div>
    </div>
  );
};

export default Something;
