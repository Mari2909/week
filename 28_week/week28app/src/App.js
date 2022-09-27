import React, { useState } from 'react';
import json from './components/data.js';
import './App.css';
import Card from './components/Card.js';


let datas = JSON.parse(json);

function App() {

  const [pressed, setPressed] = useState(null);

  const handleChange = (index) => {
    setPressed(index);
  }

  return (
    <div className="App">
      {
        datas.map((data, index) =>
          <Card
            value={pressed === index ? 'card selected' : 'card'}
            onClick={() => handleChange(index)}
            key={data.tariff}
            tariff={data.tariff}
            price={data.price}
            traffiс={data.traffiс}
            footer={data.footer}
          >
          </Card>
        )
      }
    </div>
  );
}

export default App;