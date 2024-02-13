// Import components and assets for consume in the   project
import Header from "./components/header";
import Card from "./components/card";
import one from './assets/01.jpg'
import two from './assets/02.jpg'
import three from './assets/03.jpg'
import four from './assets/04.jpg'
import five from './assets/05.jpg'
import six from './assets/06.jpg'
import seven from './assets/07.jpg'
import eight from './assets/08.jpg'
import Footer from "./components/footer";

function App() {
  // Create object representation menu for the project

  const requests =[
    {id:'1',name:'The Best',price:'20,50',image:one},
    {id:'2',name:'Mega Hamburger',price:'12,44',image:two},
    {id:'3',name:'Ultra Hamburger',price:'11,50',image:three},
    {id:'4',name:'Super Hamburger',price:'10,60',image:four},
    {id:'5',name:'Power Hamburger',price:'21,00',image:five},
    {id:'6',name:'Hamburger',price:'15,50',image:six},
    {id:'7',name:'Portion of French Fries',price:'8,00',image:seven},
    {id:'6',name:'SAVORY',price:'6,00',image:eight},
  ]


  return (
    // Consuming Header, Card and Footer. In the card I used ".map" for consume object representation 
    <div className="App">
      <Header/>
      <div className="menu">
        {requests.map((requests)=>(
            <Card  
            name={requests.name}
            img={requests.image}
            price={requests.price}
            />
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
