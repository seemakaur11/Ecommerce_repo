import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import Login from './components/Login';
import Register from './components/Register';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import { useEffect } from 'react';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Floor from './components/Floor';
import SupplyAndInstall from './components/SupplyAndInstall';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/flooring' element={<Floor />} />
          <Route
            path='/supply-and-installation'
            element={<SupplyAndInstall />}
          />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
