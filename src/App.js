import './App.css';
import Header from './components/Header/header.component.';
import Slider from './components/Slider/slider.component';
import Categories from './components/Categories/Categories.Component';
import Campaigns from './components/Campaigns/Campaigns.Component';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>
      <Categories></Categories>
      <Campaigns></Campaigns>
    </div>
  );
}

export default App;
