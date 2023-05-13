import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const radios = [
  {
    id: 1,
    img: 'https://images-cn.ssl-images-amazon.cn/images/I/415m3Oz18vL.jpg',
    description: 'Doctor Who Cyberman AM/FM LED 淋浴收音机',
    brand: 'DOCTOR WHO',
  },
  {
    id: 2,
    img: 'https://images-cn.ssl-images-amazon.cn/images/I/2157C8S1TDL.jpg',
    description: 'iRiver U10 扩展坞底座 白色',
    brand: 'Iriver 艾利和',
  },
  {
    id: 3,
    img: 'https://images-cn.ssl-images-amazon.cn/images/I/51wA8an-z8L.jpg',
    description: 'AKG Pro Audio Pro Audio Perception 220 专业录音室麦克风',
    brand: 'AKG',
  },
];

function Radio(prop) {
  console.log(prop);
  const { img, description, brand, children } = prop;
  return (
    <div className='radio'>
      <div style={{ width: '200px', height: '200px' }}>
        <img src={img}></img>
      </div>
      <h3>{description}</h3>
      <p>{brand}</p>
      {children}
    </div >
  )
}

const Radios = function () {
  return (
    <div className='radios'>
      {
        radios.map((radio) => {
          return (
            <Radio {...radio} key={radio.id}>
              <div style={{ color: 'red' }}>
                <a href='http://www.baidu.com'>go baidu</a>
              </div>
            </Radio>
          )
        })
      }
    </div >
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Radios />
);