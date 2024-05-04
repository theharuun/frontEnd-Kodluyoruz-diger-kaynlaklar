import {useState , useEffect} from "react"
import Counter from "./components/Counter";
// useeffect değişiklikleri yakalayan ve ona göre bir bilgi içeren bir şey diyebilirz
function App() {
const [isVisible,setIsVisible]=useState(true);


  return (
    <div className="App">
    
   
    {isVisible &&<Counter />}

    
    <button onClick={()=>setIsVisible(!isVisible)}>toggle counter</button>
      
    </div>
  );
}
// görünürünü false old counter kaldırdık ana sayfadan
//lakin arkada çalışmaayya yazma isteği devam ediyor onuda counter.js dosyasında açıkladım
export default App;
