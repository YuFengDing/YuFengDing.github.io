const config = require('../library/catalog.json')
module.exports = {
    title:'dyf的个人网站👏',
    description:'技术 | 生活 | 有趣',
    base:'/',
    dest: './docs/dist',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
     ],
    themeConfig: {
      nav: [
        { text: 'CSS', link: '/library/css/' },
        { text: 'Javascript', link: '/library/js/' },
        { text: 'leetcode', link: '/library/leetcode/' },
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
        '/library/leetcode/':[
          {
            title:'leetcode',
            sidebarDepth:0,          
            collapsable:true,
            children:config.leetcode
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