import { BrowserRouter, Route } from './react-router-dom'
// import { BrowserRouter , Route} from "react-router-dom";

import Home from './components/Home'
import Order from './components/Order'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/home" component={Home} />
        <Route path="/order/:id" component={Order} />
      </BrowserRouter> 
    </div>
  );
}

export default App;
