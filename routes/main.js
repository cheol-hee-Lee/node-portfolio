const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    // res.send('hello world')
    const data = {
        greeting: 'Welcome to my web site!',
        introduction: 'I am a web developer from California',
        languages: [
            {
                name: "javascript",
                year: 5
            },
            {
                name: "java",
                year: 4
            },
            {
                name: "python",
                year: 3
            }
        ]
    }
    res.render('landing', data)
})


module.exports = router