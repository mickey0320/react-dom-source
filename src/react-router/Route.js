import { useContext } from "react";
import ReactRouterContext from "./reactRouterContext";
import matchPath from "./matchPath";

function Route({ path, component, exact = false }) {
  const { location } = useContext(ReactRouterContext);
  const matched = matchPath(location.pathname, path, exact);
  if (!matched) return null;
  const RouteComponent = component;
  const routeProps = {
    location,
    matched,
  };
  if (matched) {
    return <RouteComponent {...routeProps} />;
  }
  return null;
}

export default Route;
