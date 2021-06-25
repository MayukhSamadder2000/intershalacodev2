import './App.css';

import Card from './components/Card/Card';

import img1 from './assets/cricket.jpg';
import img2 from './assets/football.jpg';



function App() {


  const image=[{img:img1,class:"card card1"},{img:img2,class:"card card2"}];

  return (
    <div className="App">
      <div className="heading">HIGHLIGHTS</div>
      <div className="rule"></div>
      <div className="cardContainer">
      {image.map((item)=>{
        return (
            <Card image={item.img} cls={item.class}/>
        )
      })}
      </div>
    </div>
  );
}

export default App;
