import express from 'express'
const router = express.Router();
import cartController from './controller.js'
const jsonParser = express.json();

router.get('/cart', cartController.getCart)
router.delete('/cart', cartController.deleteProductFromCart)
router.post('/cart', cartController.addProductToCart)

export default router
