
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom'


function App() {

  const Page1 = () => {
    return(<div>Page 1</div>)
  }
  
  const Page2 = () => {
    return(<div>Page 2</div>)
  }

  const Home = () => {
    return(<div>Home</div>)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/page1">Page 1</Link></li>
          <li><Link to="/page2">Page 2</Link></li>
        </ul>
        <Routes>
          <Route path="/page1" element={<Page1 />}></Route>
          <Route path="/page2" element={< Page2 />}></Route>
          <Route path="/home" element={< Home />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
