import {Router} from "express"

const controller = (req, res) => {
    res.send({message: "ok"})
}

const router = Router()

router
    .route('/signup')
    .get(controller)
    .post(controller)