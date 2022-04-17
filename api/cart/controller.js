import {
  deleteProduct,
  addProduct,
  showCart,
  clearCart,
  getDoctorsFromCart
} from "./cart.js";
import { app } from "../../server.js";

const getCart = (req, res) => {
  const cartIDs = showCart()
  const doctorsData = getDoctorsFromCart()

  app.render('ajax/cartDoctors.twig', {
    section: {
      title: 'Врачи',
      doctors: doctorsData,
    }
  },
    (err, html) => {
      return res.json({
        success: true,
        items: showCart(),
        markup: html
      })
    })
}
const deleteProductFromCart = (req, res) => {
  const productId = req.query.id ? req.query.id : null
  const isClear = req.query.all
  isClear ? clearCart() : deleteProduct(productId)
  const doctorsData = getDoctorsFromCart()

  app.render('ajax/cartDoctors.twig', {
    section: {
      title: 'Врачи',
      doctors: doctorsData,
    }
  },
    (err, html) => {
      return res.json({
        success: true,
        items: showCart(),
        markup: html
      })
    })
}
const addProductToCart = (req, res) => {
  const productId = req.query.id
  addProduct(productId)
  const doctorsData = getDoctorsFromCart()
  app.render('ajax/cartDoctors.twig', {
    section: {
      title: 'Врачи',
      doctors: doctorsData,
    }
  },
    (err, html) => {
      return res.json({
        success: true,
        items: showCart(),
        markup: html
      })
    })
}

export default {
  getCart,
  deleteProductFromCart,
  addProductToCart
}

