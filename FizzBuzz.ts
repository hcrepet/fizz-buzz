const isFizz = (val: number) => {
  return !(val % 3);
}
  
const isBuzz = (val: number) => {
  return !(val % 5);
}

const fizzOrBuzz = (val: number) => {
  return (isFizz(val) && isBuzz(val))
          ? "FizzBuzz"
          : isFizz(val)
          ? "Fizz"
          : isBuzz(val)
          ? "Buzz"
          : val;
}

const fizzBuzz = (length: number) => {
  const range = [...Array(length).keys()].map( i => i + 1);

  range.map((val) => {
    console.log(fizzOrBuzz(val))
  })
}

fizzBuzz(20);