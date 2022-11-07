const e = require('express');
const express = require('express')
const app = express()
const port = 3000
const prompt = require('prompt');
prompt.start();

app.get('/', (req, res) => {

    let text = 'umer'
    let key = 1

    if (text.toLowerCase() === text){
        console.log("this is lowercase")
    }
    else
    {
        console.log("this is uppercase")
    }
    
    function cipher(text, key){
        let result = ''
        for (let i = 0; i < text.length; i++)
        {
            let char = text[i];
            if (char.toUpperCase(text[i]))
            {
                let ch =  String.fromCharCode((char.charCodeAt(0) + key-65) % 26 + 65);
                result += ch;
            }
            else
            {
                let ch = String.fromCharCode((char.charCodeAt(0) + key-97) % 26 + 97);
                result += ch;
            }
        }
        return result;
    }

    console.log(cipher('umer',1))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})