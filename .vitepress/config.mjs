import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "链知",
  description: "A VitePress Site",
  base: '/vblog6/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '示例', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown演示', link: '/markdown-examples' },
          { text: '运行API演示', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jm3wc' }
    ],
    footer: {
      copyright: 'Copyright © 2023-present CWL'
    }
  }
})
