var inputs = process.argv.slice(2);

for (const input of inputs) {  
  if (parseFloat(input) >= 0) {
  setTimeout(() => process.stdout.write('beep'), input * 1000);
  }
}