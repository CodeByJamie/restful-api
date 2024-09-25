// run `node index.js` in the terminal

const app = require('express')();
const PORT = 3000;

app.listen(
    PORT,
    () => console.log(`Server is ready at http:localhost:${PORT}`)
)