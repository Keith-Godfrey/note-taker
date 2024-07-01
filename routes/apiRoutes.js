const { v4:uuidv4 } = require('uuid');
const { readFromFile, readAndAppend, readAndDelete } = require('../helpers/fsUtils');
const router = require("express").Router()

router.get("/notes", (req,res) => {
    readFromFile("./db/db.json").then(data => res.json(JSON.parse(data)))
})
router.post("/notes", (req,res) => {
    const{ title, text} = req.body
    if(title && text) {
        const newNote = {
            title, text, id:uuidv4()
        }
        readAndAppend(newNote, "./db/db.json")
        res.json("note added")
    }
    else{
        res.json("error adding note")
    }
} )
module.exports = router