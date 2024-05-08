import Header from "./components/header/header";
import "./index.css"
import {meals} from "./components/data/Data"
import MEAL from "./aaaa";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {
      meals?.map((yemek)=>{
       return( <MEAL key={yemek.id} yemek={yemek} />)
       
      })

       
        }
      </div>
    

    </div>
  );
}

export default App;
