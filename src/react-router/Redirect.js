import { useContext } from "react";
import ReactRouterContext from "./reactRouterContext";
import Lifecycle from "./Lifecycle";

function Redirect({ to }) {
  const { history } = useContext(ReactRouterContext);
  
  return <Lifecycle onMount={() => history.push(to)} />;
}

export default Redirect;
