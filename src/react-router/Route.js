import { useContext } from "react";
import ReactRouterContext from "./reactRouterContext";
import matchPath from "./matchPath";

function Route({ path, component, exact, computedMatch }) {
  const { location } = useContext(ReactRouterContext);
  const match = computedMatch
    ? computedMatch
    : matchPath(location.pathname, path, exact);
  if (!match) return null;
  const RouteComponent = component;
  const routeProps = {
    location,
    match,
  };
  if (match) {
    return <RouteComponent {...routeProps} />;
  }
  return null;
}

export default Route;
