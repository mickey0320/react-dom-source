import { pathToRegexp } from "path-to-regexp";

function matchPath(pathname, path = '', exact = false) {
  const { reg, keys } = compilePath(path, exact);
  const result = reg.exec(pathname);
  if (!result) return null;
  const matched = {
    isExact: exact && pathname === result[0],
    path,
    url: pathname,
  };
  matched.params = keys.reduce((memo, key, index) => {
    memo[key.name] = result[index + 1];
    return memo;
  }, {});

  return matched;
}

function compilePath(path, exact) {
  const strict = exact;
  const end = exact;
  let keys = [];
  const reg = pathToRegexp(path, keys, { sensitive: true, end, strict });

  return {
    reg,
    keys,
  };
}

export default matchPath;
