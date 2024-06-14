export default defineEventHandler(() => {
  return {
    id: '',
    attributes: {
      slug: '/',
      published: true,
      widgets: [
        {
          is: 'BannerSmall',
          content: 'Free standard delivery when you spend £45 or more!',
          id: 1,
          parentId: 'root',
          slots: []
        },
        {
          is: 'BannerLarge',
          id: 2,
          parentId: 'root',
          slots: []
        }
      ]
    }
  }
})
