function recursive(count) {
  if (count === 0) {
    return 0;
  }
  return count + recursive(count - 1);
}

function tail(count, total) {
  if (undefined === total) {
    total = 0;
  }
  if (count === 0) {
    return total;
  }
  return tail(count - 1, total + count);
}

function simulateTailRecursionOf(method) {
  // Extract function name
  var name = /function\s+([\w0-9_]+)\s*\(/.exec(method)[1];
  // Build a new function which replaces the recursive call with a hook
  var hookedFactory = new Function(
    name,
    "return " + method.toString().replace(name, "")
  );
  // The hook will take care of remembering parameters but does not return anything
  var parameters = [].slice.call(arguments, 1);
  function hook() {
    parameters = [].slice.call(arguments);
    // No returns means returns undefined
  }
  var hookedMethod = hookedFactory(hook);
  // Simulate tail recursion by looping until we get a result
  var result;
  do {
    result = hookedMethod.apply(this, parameters);
  } while (result === undefined);
  return result;
}
