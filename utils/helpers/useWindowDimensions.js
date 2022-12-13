import { useState, useEffect } from 'react';

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({width: undefined, height: undefined});

  useEffect(() => {
    setWindowDimensions({height: window.innerHeight})
    function handleResize() {
      setWindowDimensions({height: window.innerHeight});
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}