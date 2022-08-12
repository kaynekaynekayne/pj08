import {BrowserRouter as Router} from 'react-router-dom';
import Nav from './components/nav';
import Pages from './pages/pages';
import {AuthProvider} from './context/authContext';
import './styles/main.scss';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Nav />
          <Pages />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
