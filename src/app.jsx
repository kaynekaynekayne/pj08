import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/header';
import Pages from './pages/pages';
import Footer from './components/footer';
import {AuthProvider} from './context/authContext';
import './styles/main.scss';
import Search from './components/search';


function App() {
  return (
    <div className="App" >
      <AuthProvider>
        <Router>
          <Header />
          <Search />
          <Pages />
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
