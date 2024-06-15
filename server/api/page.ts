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
          is: 'BannerLarge',
          id: 2,
          parentId: 'root',
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
        }
      ]
    }
  }
})
