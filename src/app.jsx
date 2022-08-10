import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/header';
import Pages from './pages/pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Pages />
      </Router>
    </div>
  );
}

export default App;
