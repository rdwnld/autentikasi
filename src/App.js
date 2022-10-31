import { Container } from 'react-bootstrap'
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Mform from './Components/Mform/Mform'
import SignUp from './Components/SignUp/SignUp'
import SignIn from './Components/SignIn/SignIn'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container className='ca'>
          <div className='main-form shadow px-5 py-3 rounded'>
            <Mform />

            <Routes>
              <Route index element={<SignIn />} />
              <Route path="SignUp" element={<SignUp />} />
            </Routes>

          </div>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
