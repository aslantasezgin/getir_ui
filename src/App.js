import './App.css';
import Header from './components/Header/header.component.';
import Slider from './components/Slider/slider.component';
import Categories from './components/Categories/Categories.Component';
import Campaigns from './components/Campaigns/Campaigns.Component';
import Info from './components/Info/Info.Component';
import Footer from './components/Footer/Footer.Component';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>
      <Categories></Categories>
      <Campaigns></Campaigns>
      <Info></Info>
      <Footer></Footer>
    </div>
  );
}

export default App;
