import {
  outlineCardsSection,
  blackSection,
  listSection,
  chatSection,
  chatSectionSecond,
  socialActivitySection,
  accordionSection,
  telegram,
  discord,
  twitter,
  reddit,
  youtube,
  instagram,
  contactUs
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
          link: '/',
          submenu: false,
          selected: true
        },
        {
          name: 'Chats activity',
          submenu: true,
          items: [
            { name: "Telegram promotion", link: '/telegram-promotion' },
            { name: "Discord promotion", link: '/discord-promotion' }
          ],
          selected: false
        },
        {
          name: 'Social media activity',
          submenu: true,
          items: [
            { name: "Twitter activity", link: '/twitter-activity' },
            { name: "Reddit activity", link: '/reddit-activity' },
            { name: "YouTube activity", link: '/youtube-activity' },
            { name: "Instagram activity", link: '/instagram-activity' }
          ],
          selected: false
        },
        {
          name: 'Contact us',
          link: '/contact-us',
          submenu: false,
          selected: false
        },
      ],
      mobile: [
        {
          name: "Home",
          link: '/'
        }, {
          name: "Telegram promotion ",
          link: '/telegram-promotion'
        }, {
          name: "Discord promotion ",
          link: '/discord-promotion'
        }, {
          name: "Twitter activity",
          link: '/twitter-activity'
        }, {
          name: "Reddit activity",
          link: '/reddit-activity'
        }, {
          name: "YouTube activity",
          link: 'youtube-activity'
        }, {
          name: "Instagram activity",
          link: '/instagram-activity'
        }, {
          name: "Contact us",
          link: '/contact-us'
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
        link: '/',
        text: 'Home'
      },
      {

        text: 'Telegram promotion '
      }],
    header: {
      desctop: [
        {
          name: 'Home',
          link: '/',
          submenu: false,
          selected: false
        },
        {
          name: 'Chats activity',
          submenu: true,
          items: [
            { name: "Telegram promotion", link: '/telegram-promotion' },
            { name: "Discord promotion", link: '/discord-promotion' }
          ],
          selected: true
        },
        {
          name: 'Social media activity',
          submenu: true,
          items: [
            { name: "Twitter activity", link: '/twitter-activity' },
            { name: "Reddit activity", link: '/reddit-activity' },
            { name: "YouTube activity", link: 'youtube-activity' },
            { name: "Instagram activity", link: '/instagram-activity' }
          ],
          selected: false
        },
        {
          name: 'Contact us',
          link: '/contact-us',
          submenu: false,
          selected: false
        },
      ],
      mobile: [
        {
          name: "Home",
          link: '/'
        }, {
          name: "Telegram promotion ",
          link: '/telegram-promotion'
        }, {
          name: "Discord promotion ",
          link: '/discord-promotion'
        }, {
          name: "Twitter activity",
          link: '/twitter-activity'
        }, {
          name: "Reddit activity",
          link: '/reddit-activity'
        }, {
          name: "YouTube activity",
          link: '/youtube-activity'
        }, {
          name: "Instagram activity",
          link: '/instagram-activity'
        }, {
          name: "Contact us",
          link: '/contact-us'
        },
      ]
    },
    ...telegram

  },
  "discord-promotion": {
    title: 'Wowchatter',
    breadcrumbs: [
      {
        link: '/',
        text: 'Home'
      },
      {

        text: 'Discord promotion '
      }],
    header: {
      desctop: [
        {
          name: 'Home',
          link: '/',
          submenu: false,
          selected: false
        },
        {
          name: 'Chats activity',
          submenu: true,
          items: [
            { name: "Telegram promotion", link: '/telegram-promotion' },
            { name: "Discord promotion", link: '/discord-promotion' }
          ],
          selected: true
        },
        {
          name: 'Social media activity',
          submenu: true,
          items: [
            { name: "Twitter activity", link: '/twitter-activity' },
            { name: "Reddit activity", link: '/reddit-activity' },
            { name: "YouTube activity", link: '/youtube-activity' },
            { name: "Instagram activity", link: '/instagram-activity' }
          ],
          selected: false
        },
        {
          name: 'Contact us',
          link: '/contact-us',
          submenu: false,
          selected: false
        },
      ],
      mobile: [
        {
          name: "Home",
          link: '/'
        }, {
          name: "Telegram promotion ",
          link: '/telegram-promotion'
        }, {
          name: "Discord promotion ",
          link: '/discord-promotion'
        }, {
          name: "Twitter activity",
          link: '/twitter-activity'
        }, {
          name: "Reddit activity",
          link: '/reddit-activity'
        }, {
          name: "YouTube activity",
          link: '/youtube-activity'
        }, {
          name: "Instagram activity",
          link: '/instagram-activity'
        }, {
          name: "Contact us",
          link: '/contact-us'
        },
      ]
    },
    ...discord

  },

  "twitter-activity": {
    title: 'Wowchatter',
    breadcrumbs: [
      {
        link: '/',
        text: 'Home'
      },
      {

        text: 'Twitter activity '
      }],
    header: {
      desctop: [
        {
          name: 'Home',
          link: '/',
          submenu: false,
          selected: false
        },
        {
          name: 'Chats activity',
          submenu: true,
          items: [
            { name: "Telegram promotion", link: '/telegram-promotion' },
            { name: "Discord promotion", link: '/discord-promotion' }
          ],
          selected: false
        },
        {
          name: 'Social media activity',
          submenu: true,
          items: [
            { name: "Twitter activity", link: '/twitter-activity' },
            { name: "Reddit activity", link: '/reddit-activity' },
            { name: "YouTube activity", link: '/youtube-activity' },
            { name: "Instagram activity", link: '/instagram-activity' }
          ],
          selected: true
        },
        {
          name: 'Contact us',
          link: '/contact-us',
          submenu: false,
          selected: false
        },
      ],
      mobile: [
        {
          name: "Home",
          link: '/'
        }, {
          name: "Telegram promotion ",
          link: '/telegram-promotion'
        }, {
          name: "Discord promotion ",
          link: '/discord-promotion'
        }, {
          name: "Twitter activity",
          link: '/twitter-activity'
        }, {
          name: "Reddit activity",
          link: '/reddit-activity'
        }, {
          name: "YouTube activity",
          link: '/youtube-activity'
        }, {
          name: "Instagram activity",
          link: '/instagram-activity'
        }, {
          name: "Contact us",
          link: '/contact-us'
        },
      ]
    },
    ...twitter

  },
  "reddit-activity": {
    title: 'Wowchatter',
    breadcrumbs: [
      {
        link: '/',
        text: 'Home'
      },
      {

        text: 'Reddit activity '
      }],
    header: {
      desctop: [
        {
          name: 'Home',
          link: '/',
          submenu: false,
          selected: false
        },
        {
          name: 'Chats activity',
          submenu: true,
          items: [
            { name: "Telegram promotion", link: '/telegram-promotion' },
            { name: "Discord promotion", link: '/discord-promotion' }
          ],
          selected: false
        },
        {
          name: 'Social media activity',
          submenu: true,
          items: [
            { name: "Twitter activity", link: '/twitter-activity' },
            { name: "Reddit activity", link: '/reddit-activity' },
            { name: "YouTube activity", link: '/youtube-activity' },
            { name: "Instagram activity", link: '/instagram-activity' }
          ],
          selected: true
        },
        {
          name: 'Contact us',
          link: '/contact-us',
          submenu: false,
          selected: false
        },
      ],
      mobile: [
        {
          name: "Home",
          link: '/'
        }, {
          name: "Telegram promotion ",
          link: '/telegram-promotion'
        }, {
          name: "Discord promotion ",
          link: '/discord-promotion'
        }, {
          name: "Twitter activity",
          link: '/twitter-activity'
        }, {
          name: "Reddit activity",
          link: '/reddit-activity'
        }, {
          name: "YouTube activity",
          link: '/youtube-activity'
        }, {
          name: "Instagram activity",
          link: '/instagram-activity'
        }, {
          name: "Contact us",
          link: '/contact-us'
        },
      ]
    },
    ...reddit

  },
  "youtube-activity": {
    title: 'Wowchatter',
    breadcrumbs: [
      {
        link: '/',
        text: 'Home'
      },
      {

        text: 'Youtube activity '
      }],
    header: {
      desctop: [
        {
          name: 'Home',
          link: '/',
          submenu: false,
          selected: false
        },
        {
          name: 'Chats activity',
          submenu: true,
          items: [
            { name: "Telegram promotion", link: '/telegram-promotion' },
            { name: "Discord promotion", link: '/discord-promotion' }
          ],
          selected: false
        },
        {
          name: 'Social media activity',
          submenu: true,
          items: [
            { name: "Twitter activity", link: '/twitter-activity' },
            { name: "Reddit activity", link: '/reddit-activity' },
            { name: "YouTube activity", link: '/youtube-activity' },
            { name: "Instagram activity", link: '/instagram-activity' }
          ],
          selected: true
        },
        {
          name: 'Contact us',
          link: '/contact-us',
          submenu: false,
          selected: false
        },
      ],
      mobile: [
        {
          name: "Home",
          link: '/'
        }, {
          name: "Telegram promotion ",
          link: '/telegram-promotion'
        }, {
          name: "Discord promotion ",
          link: '/discord-promotion'
        }, {
          name: "Twitter activity",
          link: '/twitter-activity'
        }, {
          name: "Reddit activity",
          link: '/reddit-activity'
        }, {
          name: "YouTube activity",
          link: '/youtube-activity'
        }, {
          name: "Instagram activity",
          link: '/instagram-activity'
        }, {
          name: "Contact us",
          link: '/contact-us'
        },
      ]
    },
    ...youtube

  },
  "instagram-activity": {
    title: 'Wowchatter',
    breadcrumbs: [
      {
        link: '/',
        text: 'Home'
      },
      {

        text: 'Instagram activity '
      }],
    header: {
      desctop: [
        {
          name: 'Home',
          link: '/',
          submenu: false,
          selected: false
        },
        {
          name: 'Chats activity',
          submenu: true,
          items: [
            { name: "Telegram promotion", link: '/telegram-promotion' },
            { name: "Discord promotion", link: '/discord-promotion' }
          ],
          selected: false
        },
        {
          name: 'Social media activity',
          submenu: true,
          items: [
            { name: "Twitter activity", link: '/twitter-activity' },
            { name: "Reddit activity", link: '/reddit-activity' },
            { name: "YouTube activity", link: '/youtube-activity' },
            { name: "Instagram activity", link: '/instagram-activity' }
          ],
          selected: true
        },
        {
          name: 'Contact us',
          link: '/contact-us',
          submenu: false,
          selected: false
        },
      ],
      mobile: [
        {
          name: "Home",
          link: '/'
        }, {
          name: "Telegram promotion ",
          link: '/telegram-promotion'
        }, {
          name: "Discord promotion ",
          link: '/discord-promotion'
        }, {
          name: "Twitter activity",
          link: '/twitter-activity'
        }, {
          name: "Reddit activity",
          link: '/reddit-activity'
        }, {
          name: "YouTube activity",
          link: '/youtube-activity'
        }, {
          name: "Instagram activity",
          link: '/instagram-activity'
        }, {
          name: "Contact us",
          link: '/contact-us'
        },
      ]
    },
    ...instagram

  },
  "contact-us": {
    title: 'Wowchatter',
    breadcrumbs: [
      {
        link: '/',
        text: 'Home'
      },
      {
        text: 'Contact us '
      }],
    header: {
      desctop: [
        {
          name: 'Home',
          link: '/',
          submenu: false,
          selected: false
        },
        {
          name: 'Chats activity',
          submenu: true,
          items: [
            { name: "Telegram promotion", link: '/telegram-promotion' },
            { name: "Discord promotion", link: '/discord-promotion' }
          ],
          selected: false
        },
        {
          name: 'Social media activity',
          submenu: true,
          items: [
            { name: "Twitter activity", link: '/twitter-activity' },
            { name: "Reddit activity", link: '/reddit-activity' },
            { name: "YouTube activity", link: '/youtube-activity' },
            { name: "Instagram activity", link: '/instagram-activity' }
          ],
          selected: false
        },
        {
          name: 'Contact us',
          link: '/contact-us',
          submenu: false,
          selected: true
        },
      ],
      mobile: [
        {
          name: "Home",
          link: '/'
        }, {
          name: "Telegram promotion ",
          link: '/telegram-promotion'
        }, {
          name: "Discord promotion ",
          link: '/discord-promotion'
        }, {
          name: "Twitter activity",
          link: '/twitter-activity'
        }, {
          name: "Reddit activity",
          link: '/reddit-activity'
        }, {
          name: "YouTube activity",
          link: '/youtube-activity'
        }, {
          name: "Instagram activity",
          link: '/instagram-activity'
        }, {
          name: "Contact us",
          link: '/contact-us'
        },
      ]
    },
    contactUs

  },
}


for (const key in data) { //Объединение данных
  data[key] = {
    ...data[key],

    footer
  }
}

export default data