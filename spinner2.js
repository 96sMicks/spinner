let actionsArray = [('\r|   '), ('\r|   '), ('\r/   '), ('\r-   '), ('\r\\   '), ('\r|   '), ('\r/   '), ('\r-   '), ('\r\\   '),('\r|   ')];
let counter = 100;

for (const action of actionsArray) {
  if (action) {
    counter += 400
    }
      setTimeout(() => {
        process.stdout.write(action);
  }, counter);
};

