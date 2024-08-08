import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../utils/people.json';

const LottieAnimation = () => {
  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
      <Lottie
        options={{
          animationData: animationData,
          loop: true,
          autoplay: true,
        }}
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default LottieAnimation;
