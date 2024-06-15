export default defineEventHandler(() => {
  return {
    id: '',
    attributes: {
      slug: '/',
      title: 'Homepage',
      published: true,
      widgets: [
        {
          is: 'BannerSmall',
          content: 'Free standard delivery when you spend £45 or more!',
          id: 1,
          parentId: 'root',
          slots: [],
          children: []
        },
        {
          is: 'ContainerCarousel',
          id: 14,
          parentId: 'root',
          slots: [2],
          children: [],
          options: {
            perPage: 1
          },
          showArrows: false,
          fullBleed: true,
          class: 'hero'
        },
        {
          is: 'BannerLarge',
          id: 2,
          parentId: '14',
          slots: [],
          children: []
        },
        {
          is: 'ContainerCarousel',
          title: 'Shop Latest Drops',
          subtitle: 'Mens',
          id: 3,
          parentId: 'root',
          slots: [4],
          children: [],
          class: 'pl-4 pr-0 lg:p-4',
          options: {
            perPage: 3
          }
        },
        {
          is: 'CardSimple',
          id: 4,
          parentId: 3,
          slots: [],
          children: []
        },
        {
          is: 'ContainerCarousel',
          title: 'Shop by Category',
          subtitle: 'Mens',
          id: 5,
          parentId: 'root',
          slots: [6],
          children: []
        },
        {
          is: 'CardSimple',
          id: 6,
          parentId: 3,
          slots: [],
          children: []
        },
        {
          is: 'BannerSmall',
          content: 'Free standard delivery when you spend £45 or more!',
          id: 7,
          parentId: 'root',
          slots: [],
          children: []
        },
        {
          is: 'BannerLarge',
          id: 8,
          parentId: 'root',
          slots: [],
          children: []
        },
        {
          is: 'ContainerCarousel',
          title: 'Shop Latest Drops',
          subtitle: 'Womens',
          id: 9,
          parentId: 'root',
          slots: [4],
          children: []
        },
        {
          is: 'CardSimple',
          id: 10,
          parentId: 9,
          slots: [],
          children: []
        },
        {
          is: 'ContainerCarousel',
          title: 'Shop by Category',
          subtitle: 'Womens',
          id: 11,
          parentId: 'root',
          slots: [4],
          children: [],
          options: {
            perPage: 3
          }
        },
        {
          is: 'CardSimple',
          id: 12,
          parentId: 11,
          slots: [],
          children: []
        },
        {
          is: 'BannerLarge',
          id: 13,
          parentId: 'root',
          slots: [],
          children: []
        }
      ]
    }
  }
})
