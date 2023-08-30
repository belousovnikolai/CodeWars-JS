function compose(...args) {
  let val = args[0];

  for (let i = 1; i < args.length; i += 1) {
    val = args[i](val);
  }
  return val;
}
