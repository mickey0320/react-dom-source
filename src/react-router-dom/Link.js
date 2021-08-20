import { useContext } from "react";
import { __ReactRouterContext as ReactRouterContext } from "../react-router";

function Link({ children, to, ...rest }) {
  const { history } = useContext(ReactRouterContext);
  const handleClick = (e) => {
    e.preventDefault();
    history.push(to);
  };

  return (
    <a onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

export default Link;
