const db = [
  {
    type: 'doctor',
    name: "Христорождественский Константин Абдурахманович",
    desc: `<p>Врач онколог, мамолог</p>`,
    image: "./assets/img/specialists/1.jpg",
    link: "#",
    price: {
      oldPrice: 1800,
      actualPrice: 2400,
      title: "Первичный прием"
    },
    serviceId: 12,
    isAdded: true
  },
  {
    type: 'doctor',
    name: "Габелио Алехандро Сергиевич",
    desc: `<p>Врач онколог, мамолог</p>`,
    link: "#",
    price: {
      actualPrice: 2400,
      title: "Первичный прием"
    },
    serviceId: 667,
    isAdded: false
  },
  {
    type: 'doctor',
    name: "Вишневский Винеамин Сергиевич",
    desc: `<p>Пидр, гомогей</p>`,
    link: "#",
    price: {
      oldPrice: 1800,
      actualPrice: 2400,
      title: "Конечный прием"
    },
    serviceId: 666,
    isAdded: false
  },
  {
    title: 'Направление',
  }
]


let cart = [666,12]

export const addProduct = (id) => {
  if (cart.indexOf(+id) === -1 ){
    cart.push(+id)
  }
}
export const deleteProduct = (id) => {
  cart = cart.filter(el => el !== +id)
}

export const clearCart = () => {
  cart = []
}

export const showCart = () => {
  return cart
}

export const getDoctorsFromCart = () => {
  return db.filter(el => cart.includes(el.serviceId) && el.type === 'doctor')
}
