import {
  outlineCardsSection,
  blackSection,
  listSection,
  chatSection,
  chatSectionSecond,
  socialActivitySection
} from "./sections.js"
const header = { //копоненты хедера

}
const footer = { //копоненты футера

}

const data = {
  index: { //имя страницы
    title: 'Wowchatter',
    outlineCardsSection,
    blackSection,
    listSection,
    chatSection,
    chatSectionSecond,
    socialActivitySection
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