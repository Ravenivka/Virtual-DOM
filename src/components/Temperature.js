import React, { useState } from 'react';
import './Temperature.css';

import TextField from '@mui/material/TextField';

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (value) => {
    const converted = (value * 9/5) + 32;
    if (value == '') {
        setFahrenheit('');
    } else {
        setFahrenheit(converted);
    }    
  };

    const handleFahrenheitChange = (value) => {
    const converted = (value - 32) * 5/9;
    if (value == '') {
        setCelsius('');
    } else {
        setCelsius(converted);
    }    
  };
  

  return (
    <div>
        <h2 className='header'>Температурный калькулятор</h2>
        
        <div className='degree'>
            
            <TextField label="Celsius:" variant="outlined"  className='field'               
                value={celsius}
                onChange={(e) => setCelsius(e.target.value)}
                onBlur={(e) => handleCelsiusChange(e.target.value)}
                onKeyUp={(e) => {
                  if (e.key === 'Enter') {
                      handleCelsiusChange(e.target.value);
                  }
                }}
            />        
        
            <TextField label="Fahrenheit:" variant="outlined" className='field'  
                  value={fahrenheit}
                  onChange={(e) => setFahrenheit(e.target.value)}
                  onBlur={(e) => handleFahrenheitChange(e.target.value)}                  
                  onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                          handleFahrenheitChange(e.target.value)  ;            
                    }
                  }}
            />
            
        </div>
    </div>
  );
}