const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'UW Find - Cognitive Search',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Utterworks Find - Cognitive Search Engine",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  base: '/find-docs/',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    logo: '/guide/img/M_logo_new_black_3.png',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Sign up',
        link: 'https://prod.find.utterworks.com'
      }
    ],
    sidebar: [
        {
          path: '/guide/',
          title: 'Introduction',
          collapsable: true,
          sidebarDepth: 3,
        },
        {
          title: 'User Guide',
          collapsable: true,
          sidebarDepth: 5,
          children: [ 
            '/guide/user-guide/01-register',
            '/guide/user-guide/02-create-app',
            '/guide/user-guide/03-configure-project',
            '/guide/user-guide/04-add-users'
          ],
          initialOpenGroupIndex: 0 
        }
      ],

  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
