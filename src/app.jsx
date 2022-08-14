import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/header';
import Pages from './pages/pages';
import Footer from './components/footer';
import {AuthProvider} from './context/authContext';
import './styles/main.scss';


function App() {
  return (
    <div className="App" >
      <AuthProvider>
        <Router>
          <Header />
          <Pages />
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
