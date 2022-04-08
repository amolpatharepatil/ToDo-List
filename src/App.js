import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";
import {TodoItem} from "./MyComponents/TodoItem";


function App() {
  let todos =[
    {
      sno:1,
      title:"Go to the Market",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno:2,
      title:"Go to the Mall",
      desc: "You need to go to the mall to get this job done"
    },
    {
      sno:3,
      title:"Go to the Ghat",
      desc: "You need to go to the ghat to get this job done"
    },
  ]
  return (
 <>
  <Header title="My Todos List" searchBar={true}/>
  <Todos  todos={todos}/>
  <Footer/>
  </>
  );
}

export default App;
