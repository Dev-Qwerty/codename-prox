import {Router} from "express"

const controller = (req, res) => {
    res.send({message: "ok"})
}

const router = Router()

// worker/profile
router
    .route('/profile')
    .get(controller)

// /worker/editprofile
router
    .route('/editprofile')
    .get(controller)
    .post(controller)

// /worker/settings
router
    .route('/settings')
    .get(controller)
    .post(controller)


export default router
