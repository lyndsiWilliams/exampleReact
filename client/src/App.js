import './App.css';
import { Card } from 'antd';
import { useState } from 'react';

const { Meta } = Card;

function App() {
  const [value, setValue] = useState('0');
  const addNumber = (number) => {
    setValue(value => parseInt(value) + parseInt(number));
  };

  const variable = 'something'
  const fetch = ['$3', '$5', '$9001'];
  return (
    <div className="App">
      This is mine now {variable}<br/>
      {fetch.join(', ')}
      <button onClick={() => addNumber(1)}>{value}</button>
      <Card
        hoverable
        style={{ width: 140 }}
        cover={<img style={{ width: 140 }} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>,
    </div>
  );
}

export default App;
