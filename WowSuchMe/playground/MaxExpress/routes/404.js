const express = require('express')

const router = express.Router()

router.get('*',(request,response,next) => {
    response.status(404).send(`<h1>Fancy 404 page</h1>`)
})

module.exports = router;