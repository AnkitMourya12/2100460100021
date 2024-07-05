import React, { useState } from 'react';
import axios from 'axios';

const AverageCalculator = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const fetchNumbers = async (type) => {
    try {
      const res = await axios.get(`http://localhost:9876/numbers/${type}`, {
        headers: {
          Authorization: `Bearer YOUR_ACCESS_TOKEN`
        }
      });
      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResponse(null);
    }
  };

  return (
    <div>
      <h1>Average Calculator Microservice</h1>
      <button onClick={() => fetchNumbers('p')}>Get Prime Numbers</button>
      <button onClick={() => fetchNumbers('f')}>Get Fibonacci Numbers</button>
      <button onClick={() => fetchNumbers('e')}>Get Even Numbers</button>
      <button onClick={() => fetchNumbers('r')}>Get Random Numbers</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {response && (
        <pre>
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default AverageCalculator;
