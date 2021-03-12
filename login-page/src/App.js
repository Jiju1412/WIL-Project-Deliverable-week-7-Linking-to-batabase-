import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Components/Login'
import Registration from './Components/registration';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <>
            <Route path="/" exact component={Login}/>
            <Route path="/login" component={Login}/>
            <Route path="/registration" exact component={Registration}/>
          </>
        </Router>
        {/* <Login />
        <Registration /> */}
      </header>
    </div>
  );
}

export default App;
