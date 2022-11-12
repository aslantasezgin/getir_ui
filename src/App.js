import './App.css';
import Header from './components/Header/header.component.';
import Slider from './components/Slider/slider.component';
import Categories from './components/Categories/Categories.Component';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>
      <Categories></Categories>
    </div>
  );
}

export default App;
