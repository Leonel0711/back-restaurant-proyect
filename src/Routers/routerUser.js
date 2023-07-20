import { Router } from 'express'

export const router = new Router()
router.get("/", (req, res) => {
    res.render("pageUser/index")
})
