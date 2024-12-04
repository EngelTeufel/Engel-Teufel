import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedNumber = ({ value, duration = 2000, suffix = '' }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Funktion zum Parsen des Wertes
  const parseValue = (val) => {
    if (typeof val === 'string' && val.includes('M')) {
      return parseFloat(val.replace('M€', '').replace(',', '.')) * 1000000;
    }
    const numericValue = val.toString().replace(/[^0-9.,]/g, '');
    return parseFloat(numericValue.replace(',', '.'));
  };

  // Funktion zum Formatieren des Wertes
  const formatValue = (val, originalValue) => {
    // Wenn der originale Wert ein M€ enthält
    if (typeof originalValue === 'string' && originalValue.includes('M€')) {
      const millions = val / 1000000;
      return millions.toLocaleString('de-DE', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
      }).replace('.', ',') + ' Mio€';
    }
    
    // Wenn der originale Wert Tsd.€ enthält
    if (typeof originalValue === 'string' && originalValue.includes('Tsd.€')) {
      return val.toLocaleString('de-DE', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }) + ' Tsd.€';
    }
    
    // Standardformatierung für andere Zahlen
    return Math.round(val).toString() + suffix;
  };

  useEffect(() => {
    if (inView) {
      const numericValue = parseValue(value);
      const startTime = Date.now();
      const startValue = 0;

      const updateValue = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        
        if (elapsed < duration) {
          const progress = 1 - Math.pow(1 - elapsed / duration, 3);
          const nextValue = startValue + (numericValue - startValue) * progress;
          setCurrentValue(nextValue);
          requestAnimationFrame(updateValue);
        } else {
          setCurrentValue(numericValue);
        }
      };

      requestAnimationFrame(updateValue);
    }
  }, [inView, value, duration]);

  return <span ref={ref}>{formatValue(currentValue, value)}</span>;
};

export default AnimatedNumber;
