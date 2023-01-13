
import './App.css';
import Miapp from './components/Miapp';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/logo.png'


function App() {
  return (
    <div className="App">
 
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              style={{borderRadius: '100%'}}
            />{' '}
            Desafio React-Prueba
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Miapp />
    </div>
  );
}

export default App;
