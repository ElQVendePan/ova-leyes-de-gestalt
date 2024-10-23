import React, { useEffect, useState } from 'react';

interface ProgressBarProps {
  visible?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({visible}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = ({}) => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${visible ? 'opacity-100 -bottom-1' : 'opacity-0 bottom-1'} absolute left-0 right-0 bg-gray-300 z-50 duration-100`}>
      <div
        className="h-1 bg-blue-600 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ProgressBar;