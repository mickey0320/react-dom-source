function createBrowserHistory() {
  const globalHistory = window.history;
  let listeners = [];

  function go(n) {
    globalHistory.go(n);
  }
  function goBack() {
    globalHistory.goBack(-1);
  }
  function goForward() {
    globalHistory.goForward();
  }

  function listen(listener) {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }

  function notify(newState) {
    Object.assign(history, newState);
    history.length = globalHistory.length;
    listeners.forEach((l) => l(history.location));
  }

  function push(pathname, state) {
    const action = "PUSH";
    if (typeof pathname === "object") {
      pathname = pathname.pathname;
      state = pathname.state;
    }
    globalHistory.pushState(state, null, pathname);
    const location = { pathname, state };
    notify({ location, action });
  }

  const history = {
    go,
    goBack,
    goForward,
    listen,
    push,
    location: {
      pathname: window.location.pathname,
      state: window.location.state,
    },
  };

  return history;
}

export default createBrowserHistory;
