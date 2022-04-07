const header = { //копоненты хедера

}
const footer = { //копоненты футера

}

const data = {
  index: { //имя страницы
    title: 'Wowchatter',
  },
}


for (const key in data) { //Объединение данных
  data[key] = {
    ...data[key],
    header,
    footer
  }
}

export default data