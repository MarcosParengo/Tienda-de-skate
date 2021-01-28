import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BnavBar from './components/bootsnavbar';
import ItemListContainer from './containers/ItemListContainer'

const App = () => {
  return (
    <div className="App">
      <BnavBar link={"https://www.thrashermagazine.com/"}/>
      <ItemListContainer greeting="Hola cliente"/>    
    </div>
  );
}
export default App;