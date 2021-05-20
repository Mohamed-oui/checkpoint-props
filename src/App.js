import './App.css';
import Profile from './Components/profile/Profile';
import image from "./image.jpg"
function App() {
//   const data = [
// {
//   fullname="Albert Einstein",
//   bio=<img src=""/>,
//   profession=""
// }
//   ];
  return (
    <div className="App">
     <Profile fullname="Albert Einstein" bio={image} profession="Physicien théoricien"/>
    </div>
  );
}

export default App;
