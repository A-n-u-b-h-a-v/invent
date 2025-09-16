import { getProducts,createProducts } from './../controllers/productController';
import { Router } from "express";

const router=Router()

router.get("/",getProducts)
router.post("/",createProducts)

export default router;
