import './App.css';
import Header from './components/Header/Header';
import MealDetails from './components/Pages/MealDetails/MealDetails';
import Random from './components/Pages/Random/Random'


function App() {
  return (
    <div>
      <Header></Header>
      <h2 className='popular-item'>Popular Items</h2>
      <Random></Random>
    </div>
  );
}

export default App;
