import logo from './logo.svg';
import './App.css';
import Header from './comp/header';
import User from './comp/User';

// const Friends=[
//   { name:"ahmet",
//     id:1},
//   { name:"selim",
//     id:2},
//   { name:"gulbahar",
//     id:3},
//   { name:"omerinzi",
//     id:4}]

function App() {
return (
      <>
        <User 
          name="Harun" 
          surName="Korkmaz" 
          isLoggedIn={true} 
          age={21} 
          friends={["abc","bcd","cde","def","efg"]}
        />
    </>
);
}
// const name="harun";
// const surname="korkmaz";
// const isLoggedIn=false;
// const isLoggedIn2=true;
{/* <h1>

    {isLoggedIn2? `benim adim ${name} , soyadim ${surname}`:`Isminizi girmediniz `}
    </h1>
    <h1>
    {isLoggedIn && `benim adim ${name} , soyadim ${surname}`} 
    {!isLoggedIn && `Isminizi girmediniz`}
</h1> */}
export default App;
  // <>  değişkenleri render etme şeklimiz
  // {name} {surname} birincisi
  //  <h1>{`benim adim ${name} , soyadim ${surname}`}</h1> ikincisi

  // </>
{/* <Header />
class yerine className karışmaması için for yerine htmlFor gibi
<p className="abc">
Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard 
</p>

<label htmlFor="myInput">
  name 
  <input id="myInput"></input>
</label> */}


  //   return ( 
  //    <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         <Header />
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>

    
  // );