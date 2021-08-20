import { BrowserRouter, Route, Switch, Redirect, Link } from "./react-router-dom";
// import { BrowserRouter , Route} from "react-router-dom";

import Home from "./components/Home";
import Order from "./components/Order";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/home">home</Link>
        <Link to="/order/100">order</Link>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/order/:id" component={Order} />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
