import './App.css';
import Map from './Map.js';

function App(props) {

  return (
    <div className="App">
      {props.value}
      <Map />
    </div>
  );

}



export default App;
