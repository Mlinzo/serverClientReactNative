const express = require("express")

const PORT = process.env.PORT ?? 5000
const app = express()

app.get('*', (req, res) => {
	res.json({message: 'Hello world from GET requst!'})
})

app.post('*', (req, res) => {
	res.json({message: 'Hello world from POST requst!'})
})

app.listen(PORT, ()=> {
	console.log("server started on " + PORT)	
})