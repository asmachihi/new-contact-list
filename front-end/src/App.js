import { Switch,Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Profil from './Components/Profil/Profil'
import ContactList from './Components/Contact-List/ContactList';
import EditPerson from './Components/Contact-Card/EditPerson';


function App() {
  return (
    <div className="App">
       <NavBar/><br/>
       <EditPerson/>
       <br/><br/>
       
       <Switch>
         <Route exact path="/" component={ContactList}/>
         <Route path="/signIn" component={Login}/>
         <Route path="/signUp" component={Register} />
         <Route path="/profile" component={Profil}/>
       </Switch>
    </div>
  );
}

export default App;
