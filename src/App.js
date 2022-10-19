import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div>
        <h1>
          Example heading{' '}
          <Badge bg="secondary" as="Button">
            New
          </Badge>
        </h1>
      </div>
    </div>
  );
}

export default App;
