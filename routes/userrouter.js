import { getUsers } from "../controller/usercontroller.js";
import  Router  from "express";
const router = Router();

router.get("/", getUsers );

export default router;