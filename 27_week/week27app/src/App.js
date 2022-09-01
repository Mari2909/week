import React from 'react';
import json from './components/date.js';
import './App.css';
import Card from './components/Card.js';


let datas = JSON.parse(json);

function App() {
  return (
    <div className="App">
      {
        datas.map((data) =>
          <Card
            tariff={data.tariff}
            price={data.price}
            traffiс={data.traffiс}
            footer={data.footer}
            isSelected={data.isSelected}
          >
          </Card>
        )
      }
    </div>
  );
}

export default App;