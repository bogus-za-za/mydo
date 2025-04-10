import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "参考文档",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
      { text: '前端', link: '/前端参考' },
      { text: '后端', link: '/后端参考' },
      { text: '数据库', link: '/数据库参考' },
      // { text: 'Examples', link: '/markdown-examples' }
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        // text: 'Examples',
        // items: [
        //   { text: 'Markdown Examples', link: '/markdown-examples' },
        //   { text: 'Runtime API Examples', link: '/api-examples' }
        // ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
