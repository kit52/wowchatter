import {
  outlineCardsSection,
  blackSection,
  listSection,
  chatSection,
  chatSectionSecond,
  socialActivitySection,
  accordionSection,
  telegram,
  discord
} from "./sections.js"
const header = { //копоненты хедера

}
const footer = { //копоненты футера

}

const data = {
  index: { //имя страницы
    title: 'Wowchatter',
    header: {
      desctop: [
        {
          name: 'Home',
          link: '#',
          submenu: false,
          selected: true
        },
        {
          name: 'Chats activity',
          submenu: true,
          items: [
            { name: "Telegram promotion", link: '' },
            { name: "Discord promotion", link: '' }
          ],
          selected: false
        },
        {
          name: 'Social media activity',
          submenu: true,
          items: [
            { name: "Twitter activity", link: '#' },
            { name: "Reddit activity", link: '#' },
            { name: "YouTube activity", link: '#' },
            { name: "Instagram activity", link: '#' }
          ],
          selected: false
        },
        {
          name: 'Contact us',
          link: '#',
          submenu: false,
          selected: false
        },
      ],
      mobile: [
        {
          name: "Home",
          link: '#'
        }, {
          name: "Telegram promotion ",
          link: '#'
        }, {
          name: "Discord promotion ",
          link: '#'
        }, {
          name: "Twitter activity",
          link: '#'
        }, {
          name: "Reddit activity",
          link: '#'
        }, {
          name: "YouTube activity",
          link: '#'
        }, {
          name: "Instagram activity",
          link: '#'
        }, {
          name: "Contact us",
          link: '#'
        },
      ]
    },
    outlineCardsSection,
    blackSection,
    listSection,
    chatSection,
    chatSectionSecond,
    socialActivitySection,
    accordionSection
  },
  "telegram-promotion": {
    title: 'Wowchatter',
    breadcrumbs: [
      {
        link: '#',
        text: 'Home'
      },
      {
        link: '#',
        text: 'Telegram promotion '
      }],
    header: {
      desctop: [
        {
          name: 'Home',
          link: '#',
          submenu: false,
          selected: false
        },
        {
          name: 'Chats activity',
          submenu: true,
          items: [
            { name: "Telegram promotion", link: '' },
            { name: "Discord promotion", link: '' }
          ],
          selected: true
        },
        {
          name: 'Social media activity',
          submenu: true,
          items: [
            { name: "Twitter activity", link: '#' },
            { name: "Reddit activity", link: '#' },
            { name: "YouTube activity", link: '#' },
            { name: "Instagram activity", link: '#' }
          ],
          selected: false
        },
        {
          name: 'Contact us',
          link: '#',
          submenu: false,
          selected: false
        },
      ],
      mobile: [
        {
          name: "Home",
          link: '#'
        }, {
          name: "Telegram promotion ",
          link: '#'
        }, {
          name: "Discord promotion ",
          link: '#'
        }, {
          name: "Twitter activity",
          link: '#'
        }, {
          name: "Reddit activity",
          link: '#'
        }, {
          name: "YouTube activity",
          link: '#'
        }, {
          name: "Instagram activity",
          link: '#'
        }, {
          name: "Contact us",
          link: '#'
        },
      ]
    },
    ...telegram

  },
  "discord-promotion": {
    title: 'Wowchatter',
    breadcrumbs: [
      {
        link: '#',
        text: 'Home'
      },
      {
        link: '#',
        text: 'Discord promotion '
      }],
    header: {
      desctop: [
        {
          name: 'Home',
          link: '#',
          submenu: false,
          selected: false
        },
        {
          name: 'Chats activity',
          submenu: true,
          items: [
            { name: "Telegram promotion", link: '' },
            { name: "Discord promotion", link: '' }
          ],
          selected: true
        },
        {
          name: 'Social media activity',
          submenu: true,
          items: [
            { name: "Twitter activity", link: '#' },
            { name: "Reddit activity", link: '#' },
            { name: "YouTube activity", link: '#' },
            { name: "Instagram activity", link: '#' }
          ],
          selected: false
        },
        {
          name: 'Contact us',
          link: '#',
          submenu: false,
          selected: false
        },
      ],
      mobile: [
        {
          name: "Home",
          link: '#'
        }, {
          name: "Telegram promotion ",
          link: '#'
        }, {
          name: "Discord promotion ",
          link: '#'
        }, {
          name: "Twitter activity",
          link: '#'
        }, {
          name: "Reddit activity",
          link: '#'
        }, {
          name: "YouTube activity",
          link: '#'
        }, {
          name: "Instagram activity",
          link: '#'
        }, {
          name: "Contact us",
          link: '#'
        },
      ]
    },
    ...discord

  }
}


for (const key in data) { //Объединение данных
  data[key] = {
    ...data[key],

    footer
  }
}

export default data