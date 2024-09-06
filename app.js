const express = require('express');
const PORT = 5000;

// Now lets import the connection folder . main it use regular and mandatory 





const app = express();

app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Welcome')
})

app.listen(PORT, () =>{
    console.log((`Server is running the port is ${PORT}`))
})