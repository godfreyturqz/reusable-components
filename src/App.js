import './App.css';
import AllButtons from './components/Buttons/AllButtons';
import AllCards from './components/Cards/AllCards';
import AllImageContainers from './components/ImageContainer/AllImageContainers';


function App() {
  return (
    <div className="App">
      <h1>JUST PLAIN TEMPLATES</h1><br/>
      <h3>Author's notes:</h3><br/>
      <p>1. Parameters like width, padding and margins shall be set by the user.</p><br/>
      <p>2. </p><br/>
      
      <AllButtons/>
      <AllCards/>
      <AllImageContainers/>
    </div>
  );
}

export default App;