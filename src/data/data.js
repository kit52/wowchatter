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
          link: './index.html',
          submenu: false,
          selected: true
        },
        {
          name: 'Chats activity',
          submenu: true,
          items: [
            { name: "Telegram promotion", link: './telegram-promotion.html' },
            { name: "Discord promotion", link: './discord-promotion.html' }
          ],
          selected: false
        },
        {
          name: 'Social media activity',
          submenu: true,
          items: [
            { name: "Twitter activity", link: './twitter-activity.html' },
            { name: "Reddit activity", link: './reddit-activity.html' },
            { name: "YouTube activity", link: './youtube-activity.html' },
            { name: "Instagram activity", link: './instagram-activity.html' }
          ],
          selected: false
        },
        {
          name: 'Contact us',
          link: './contact-us.html',
          submenu: false,
          selected: false
        },
      ],
      mobile: [
        {
          name: "Home",
          link: './index.html'
        }, {
          name: "Telegram promotion ",
          link: './telegram-promotion.html'
        }, {
          name: "Discord promotion ",
          link: './discord-promotion.html'
        }, {
          name: "Twitter activity",
          link: './twitter-activity.html'
        }, {
          name: "Reddit activity",
          link: './reddit-activity.html'
        }, {
          name: "YouTube activity",
          link: './youtube-activity.html'
        }, {
          name: "Instagram activity",
          link: './instagram-activity.html'
        }, {
          name: "Contact us",
          link: './contact-us.html'
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
        link: './index.html',
        text: 'Home'
      },
      {

        text: 'Telegram promotion '
      }],
    header: {
      desctop: [
        {
          name: 'Home',
          link: './index.html',
          submenu: false,
          selected: false
        },
        {
          name: 'Chats activity',
          submenu: true,
          items: [
            { name: "Telegram promotion", link: './telegram-promotion.html' },
            { name: "Discord promotion", link: './discord-promotion.html' }
          ],
          selected: true
        },
        {
          name: 'Social media activity',
          submenu: true,
          items: [
            { name: "Twitter activity", link: './twitter-activity.html' },
            { name: "Reddit activity", link: './reddit-activity.html' },
            { name: "YouTube activity", link: './youtube-activity.html' },
            { name: "Instagram activity", link: './instagram-activity.html' }
          ],
          selected: false
        },
        {
          name: 'Contact us',
          link: './contact-us.html',
          submenu: false,
          selected: false
        },
      ],
      mobile: [
        {
          name: "Home",
          link: './index.html'
        }, {
          name: "Telegram promotion ",
          link: './telegram-promotion.html'
        }, {
          name: "Discord promotion ",
          link: './discord-promotion.html'
        }, {
          name: "Twitter activity",
          link: './twitter-activity.html'
        }, {
          name: "Reddit activity",
          link: './reddit-activity.html'
        }, {
          name: "YouTube activity",
          link: './youtube-activity.html'
        }, {
          name: "Instagram activity",
          link: './instagram-activity.html'
        }, {
          name: "Contact us",
          link: './contact-us.html'
        },
      ]
    },
    ...telegram

  },
  "discord-promotion": {
    title: 'Wowchatter',
    breadcrumbs: [
      {
        link: './index.html',
        text: 'Home'
      },
      {

        text: 'Discord promotion '
      }],
    header: {
      desctop: [
        {
          name: 'Home',
          link: './index.html',
          submenu: false,
          selected: false
        },
        {
          name: 'Chats activity',
          submenu: true,
          items: [
            { name: "Telegram promotion", link: './telegram-promotion.html' },
            { name: "Discord promotion", link: './discord-promotion.html' }
          ],
          selected: true
        },
        {
          name: 'Social media activity',
          submenu: true,
          items: [
            { name: "Twitter activity", link: './twitter-activity.html' },
            { name: "Reddit activity", link: './reddit-activity.html' },
            { name: "YouTube activity", link: './youtube-activity.html' },
            { name: "Instagram activity", link: './instagram-activity.html' }
          ],
          selected: false
        },
        {
          name: 'Contact us',
          link: './contact-us.html',
          submenu: false,
          selected: false
        },
      ],
      mobile: [
        {
          name: "Home",
          link: './index.html'
        }, {
          name: "Telegram promotion ",
          link: './telegram-promotion.html'
        }, {
          name: "Discord promotion ",
          link: './discord-promotion.html'
        }, {
          name: "Twitter activity",
          link: './twitter-activity.html'
        }, {
          name: "Reddit activity",
          link: './reddit-activity.html'
        }, {
          name: "YouTube activity",
          link: './youtube-activity.html'
        }, {
          name: "Instagram activity",
          link: './instagram-activity.html'
        }, {
          name: "Contact us",
          link: './contact-us.html'
        },
      ]
    },
    ...discord

  },

  "twitter-activity": {
    title: 'Wowchatter',
    breadcrumbs: [
      {
        link: './index.html',
        text: 'Home'
      },
      {

        text: 'Twitter activity '
      }],
    header: {
      desctop: [
        {
          name: 'Home',
          link: './index.html',
          submenu: false,
          selected: false
        },
        {
          name: 'Chats activity',
          submenu: true,
          items: [
            { name: "Telegram promotion", link: './telegram-promotion.html' },
            { name: "Discord promotion", link: './discord-promotion.html' }
          ],
          selected: false
        },
        {
          name: 'Social media activity',
          submenu: true,
          items: [
            { name: "Twitter activity", link: './twitter-activity.html' },
            { name: "Reddit activity", link: './reddit-activity.html' },
            { name: "YouTube activity", link: './youtube-activity.html' },
            { name: "Instagram activity", link: './instagram-activity.html' }
          ],
          selected: true
        },
        {
          name: 'Contact us',
          link: './contact-us.html',
          submenu: false,
          selected: false
        },
      ],
      mobile: [
        {
          name: "Home",
          link: './index.html'
        }, {
          name: "Telegram promotion ",
          link: './telegram-promotion.html'
        }, {
          name: "Discord promotion ",
          link: './discord-promotion.html'
        }, {
          name: "Twitter activity",
          link: './twitter-activity.html'
        }, {
          name: "Reddit activity",
          link: './reddit-activity.html'
        }, {
          name: "YouTube activity",
          link: './youtube-activity.html'
        }, {
          name: "Instagram activity",
          link: './instagram-activity.html'
        }, {
          name: "Contact us",
          link: './contact-us.html'
        },
      ]
    },
    ...twitter

  },
  "reddit-activity": {
    title: 'Wowchatter',
    breadcrumbs: [
      {
        link: './index.html',
        text: 'Home'
      },
      {

        text: 'Reddit activity '
      }],
    header: {
      desctop: [
        {
          name: 'Home',
          link: './index.html',
          submenu: false,
          selected: false
        },
        {
          name: 'Chats activity',
          submenu: true,
          items: [
            { name: "Telegram promotion", link: './telegram-promotion.html' },
            { name: "Discord promotion", link: './discord-promotion.html' }
          ],
          selected: false
        },
        {
          name: 'Social media activity',
          submenu: true,
          items: [
            { name: "Twitter activity", link: './twitter-activity.html' },
            { name: "Reddit activity", link: './reddit-activity.html' },
            { name: "YouTube activity", link: './youtube-activity.html' },
            { name: "Instagram activity", link: './instagram-activity.html' }
          ],
          selected: true
        },
        {
          name: 'Contact us',
          link: './contact-us.html',
          submenu: false,
          selected: false
        },
      ],
      mobile: [
        {
          name: "Home",
          link: './index.html'
        }, {
          name: "Telegram promotion ",
          link: './telegram-promotion.html'
        }, {
          name: "Discord promotion ",
          link: './discord-promotion.html'
        }, {
          name: "Twitter activity",
          link: './twitter-activity.html'
        }, {
          name: "Reddit activity",
          link: './reddit-activity.html'
        }, {
          name: "YouTube activity",
          link: './youtube-activity.html'
        }, {
          name: "Instagram activity",
          link: './instagram-activity.html'
        }, {
          name: "Contact us",
          link: './contact-us.html'
        },
      ]
    },
    ...reddit

  },
  "youtube-activity": {
    title: 'Wowchatter',
    breadcrumbs: [
      {
        link: './index.html',
        text: 'Home'
      },
      {

        text: 'Youtube activity '
      }],
    header: {
      desctop: [
        {
          name: 'Home',
          link: './index.html',
          submenu: false,
          selected: false
        },
        {
          name: 'Chats activity',
          submenu: true,
          items: [
            { name: "Telegram promotion", link: './telegram-promotion.html' },
            { name: "Discord promotion", link: './discord-promotion.html' }
          ],
          selected: false
        },
        {
          name: 'Social media activity',
          submenu: true,
          items: [
            { name: "Twitter activity", link: './twitter-activity.html' },
            { name: "Reddit activity", link: './reddit-activity.html' },
            { name: "YouTube activity", link: './youtube-activity.html' },
            { name: "Instagram activity", link: './instagram-activity.html' }
          ],
          selected: true
        },
        {
          name: 'Contact us',
          link: './contact-us.html',
          submenu: false,
          selected: false
        },
      ],
      mobile: [
        {
          name: "Home",
          link: './index.html'
        }, {
          name: "Telegram promotion ",
          link: './telegram-promotion.html'
        }, {
          name: "Discord promotion ",
          link: './discord-promotion.html'
        }, {
          name: "Twitter activity",
          link: './twitter-activity.html'
        }, {
          name: "Reddit activity",
          link: './reddit-activity.html'
        }, {
          name: "YouTube activity",
          link: './youtube-activity.html'
        }, {
          name: "Instagram activity",
          link: './instagram-activity.html'
        }, {
          name: "Contact us",
          link: './contact-us.html'
        },
      ]
    },
    ...youtube

  },
  "instagram-activity": {
    title: 'Wowchatter',
    breadcrumbs: [
      {
        link: './index.html',
        text: 'Home'
      },
      {

        text: 'Instagram activity '
      }],
    header: {
      desctop: [
        {
          name: 'Home',
          link: './index.html',
          submenu: false,
          selected: false
        },
        {
          name: 'Chats activity',
          submenu: true,
          items: [
            { name: "Telegram promotion", link: './telegram-promotion.html' },
            { name: "Discord promotion", link: './discord-promotion.html' }
          ],
          selected: false
        },
        {
          name: 'Social media activity',
          submenu: true,
          items: [
            { name: "Twitter activity", link: './twitter-activity.html' },
            { name: "Reddit activity", link: './reddit-activity.html' },
            { name: "YouTube activity", link: './youtube-activity.html' },
            { name: "Instagram activity", link: './instagram-activity.html' }
          ],
          selected: true
        },
        {
          name: 'Contact us',
          link: './contact-us.html',
          submenu: false,
          selected: false
        },
      ],
      mobile: [
        {
          name: "Home",
          link: './index.html'
        }, {
          name: "Telegram promotion ",
          link: './telegram-promotion.html'
        }, {
          name: "Discord promotion ",
          link: './discord-promotion.html'
        }, {
          name: "Twitter activity",
          link: './twitter-activity.html'
        }, {
          name: "Reddit activity",
          link: './reddit-activity.html'
        }, {
          name: "YouTube activity",
          link: './youtube-activity.html'
        }, {
          name: "Instagram activity",
          link: './instagram-activity.html'
        }, {
          name: "Contact us",
          link: './contact-us.html'
        },
      ]
    },
    ...instagram

  },
  "contact-us": {
    title: 'Wowchatter',
    breadcrumbs: [
      {
        link: './index.html',
        text: 'Home'
      },
      {
        text: 'Contact us '
      }],
    header: {
      desctop: [
        {
          name: 'Home',
          link: './index.html',
          submenu: false,
          selected: false
        },
        {
          name: 'Chats activity',
          submenu: true,
          items: [
            { name: "Telegram promotion", link: './telegram-promotion.html' },
            { name: "Discord promotion", link: './discord-promotion.html' }
          ],
          selected: false
        },
        {
          name: 'Social media activity',
          submenu: true,
          items: [
            { name: "Twitter activity", link: './twitter-activity.html' },
            { name: "Reddit activity", link: './reddit-activity.html' },
            { name: "YouTube activity", link: './youtube-activity.html' },
            { name: "Instagram activity", link: './instagram-activity.html' }
          ],
          selected: false
        },
        {
          name: 'Contact us',
          link: './contact-us.html',
          submenu: false,
          selected: true
        },
      ],
      mobile: [
        {
          name: "Home",
          link: './index.html'
        }, {
          name: "Telegram promotion ",
          link: './telegram-promotion.html'
        }, {
          name: "Discord promotion ",
          link: './discord-promotion.html'
        }, {
          name: "Twitter activity",
          link: './twitter-activity.html'
        }, {
          name: "Reddit activity",
          link: './reddit-activity.html'
        }, {
          name: "YouTube activity",
          link: './youtube-activity.html'
        }, {
          name: "Instagram activity",
          link: './instagram-activity.html'
        }, {
          name: "Contact us",
          link: './contact-us.html'
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