import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Teachers from './components/Teachers/Teachers'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Router>
       <Header></Header>
        <Switch>
          <Route exact  path="/">
            <Home></Home>
            </Route>
          <Route path="/home">
           <Home></Home>
          </Route>
          <Route path="/about">
           <About></About>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/teachers">
            <Teachers></Teachers>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
