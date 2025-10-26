const parseArgs = () => {
  let argArr = [];
  let arg = 0;

  process.argv.forEach((val, index) => {
    if (index > 1) {
      if (index % 2 === 0) {
        arg = val.slice(2);
      } else {
        argArr.push(`${arg} is ${val}`);
      }
    }
  });

  console.log(argArr.join(', '));
};

parseArgs();
