import R from 'ramda';

// Object.getOwnPropertyNames in Node.JS 0.10 and 0.12 returns these
// properties, but strict mode forbid to access them,
// so checking if its a Function or not throwing an Error
const strictModeIncompatibleProps = ['caller', 'callee', 'arguments'];

// errorText :: String -> Ctor1 -> Ctor2 -> a
const errorText = (name, Ctor1, Ctor2, param) => {
  const expected1 = R.type(Ctor1()); // eslint-disable-line
  const expected2 = R.type(Ctor2()); // eslint-disable-line
  return `\`${name}\` should be an \`${expected1}\` or an \`${expected2}\`, but got \`${param}\``;
};

// bind :: Ctor || Object -> Object -> String -> Object
const bind = R.curry((input, state, name) =>
  R.assoc(name, input[name].bind(input), state));

// binded :: Ctor || Object -> Object
function binded(input) {
  return R.pipe(
    R.unless(
      R.or(R.is(Object), R.is(Function)),
      () => { throw new TypeError(errorText('input', Object, Function, input)); }
    ),
    Object.getOwnPropertyNames,
    R.without(strictModeIncompatibleProps),
    R.filter(R.propSatisfies(R.is(Function), R.__, input)),
    R.reduce(bind(input), {})
  )(input);
}

export default binded;
