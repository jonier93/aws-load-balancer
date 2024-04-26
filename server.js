import Express from 'express'
import dir from 'path'

const app = Express()
const port = "8080"
let dir_path = dir.resolve()

app.listen(port, function(){
    console.log("Server started")
})

app.get("/", function(req, resp){
    resp.sendFile(dir_path + "/templates/index.html")
})