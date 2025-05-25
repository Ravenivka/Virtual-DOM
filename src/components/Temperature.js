import React, { useState } from 'react';

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (value) => {
    const converted = (value * 9/5) + 32;
    setFahrenheit(converted);
  };

  return (
    <div>
      <label>
        Celsius:
        <input
          type="number"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
          onBlur={(e) => handleCelsiusChange(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
                handleCelsiusChange(e.target.value);
            }
          }}
        />
      </label>
      <label>
        Fahrenheit:
        <input
          type="number"
          value={fahrenheit}
          onChange={(e) => setFahrenheit(e.target.value)}
          onBlur={(e) => {
            const converted = (e.target.value - 32) * 5/9;
            setCelsius(converted);
          }}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
                const converted = (e.target.value - 32) * 5/9;
                setCelsius(converted);                
            }
          }}
        />
      </label>
    </div>
  );
}