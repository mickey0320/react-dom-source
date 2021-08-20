import { useContext } from "react";
import ReactRouterContext from "../react-router/reactRouterContext";

function Link({ children, to }) {
  const { history } = useContext(ReactRouterContext);
  return <span onClick={() => history.push(to)}>{children}</span>;
}

export default Link;
