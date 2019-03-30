const config = require('../library/catalog.json')
module.exports = {
    title:'Welcome to dyf’s blog!',
    description:'Time waits for no man.',
    base:'/',
    dest: './docs/dist',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
     ],
    themeConfig: {
      
      nav: [
        { text: 'CSS', link: '/library/css/' },
        { text: 'Javascript', link: '/library/js/' },
        { text: '服务端', link:'/library/server/' },
        { text: '工具集', link:'/library/utils/' },
        { text: '因吹斯汀', link:'/library/interesting/' },
      ],
      sidebar: {
        '/library/css/':[
        {
          title:'CSS基础',
          sidebarDepth:0,
          collapsable:true,
          children:config.css
        }],
        '/library/js/':[
        {
          title:'Javascript基础',
          sidebarDepth:0,          
          collapsable:true,
          children:config.js
        }],
        '/library/server/':[
        {
          title:'服务端',
          sidebarDepth:0,                    
          collapsable:true,
          children:config.server
        }],
        '/library/utils/':[
        {
          title:'工具集',
          collapsable:true,
          children:config.utils
        }],
        '/library/interesting/':[
        {
          title:'因吹斯汀',
          
          collapsable:false,
          children:config.interesting
        }],
      }
    }
  }