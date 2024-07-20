const isFizz = (nb) => {
  return !(nb % 3);
}
  
const isBuzz = (nb) => {
  return !(nb % 5);
}

const fizzOrBuzz = (nb) => {
  return (isFizz(nb) && isBuzz(nb))
          ? "FizzBuzz"
          : isFizz(nb)
          ? "Fizz"
          : isBuzz(nb)
          ? "Buzz"
          : nb;
}

const fizzBuzz = (length) => {
  const range = [...Array(length).keys()].map( i => i + 1);

  range.map((nb) => {
    console.log(fizzOrBuzz(nb))
  })
}

fizzBuzz(20);