import express from 'express';

const router = express.Router()

router.get('/', (req, res) => {

    res.send(
        '<h1>Login page</h1>'
    )
})


router.get('/add-system', (req, res) => {

    res.send(
        '<h1>Register a system</h1>'
    )
})


module.exports = router