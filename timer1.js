const cmdInput = process.argv.slice(2);

if (cmdInput) {
  for (const numbers of cmdInput) {
    if (!isNaN(numbers) && numbers > 0){
      let timer = numbers * 1000;
      setTimeout(() => {
        console.log("\x07")
      }, timer)
    }
  }
}
