module.exports = {
    title:'Welcome to dyf’s blog!',
    description:'Time waits for no man.',
    base:'/',
    dest: './docs/dist',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
     ],
    themeConfig: {
      sidebarDepth:0,
      nav: [
        { text: '编程', link: '/code/' },
        { text: '生活', link: '/life/' },
        { text: '关于', link: 'https://github.com/YuFengDing' },
      ],
      sidebar: {
          '/code/':[
              'firstcode',
              'git'
          ],
          '/life/':[
            'godfather'
          ]
      }
    }
  }