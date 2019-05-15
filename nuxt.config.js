const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/style/main.css', '~/assets/style/app.styl'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/vuetify'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@ax2/dayjs-module',
    'cookie-universal-nuxt'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          name: 'custom',
          path: '*',
          component: resolve(__dirname, 'pages/error.vue')
        },
        {
          name: 'index',
          path: '/',
          component: resolve(__dirname, 'pages/index.vue')
        },
        {
          name: 'login',
          path: '/login',
          component: resolve(__dirname, 'pages/login.vue')
        },
        {
          name: 'calendarView',
          path: '/calendarView',
          component: resolve(__dirname, 'pages/calendarView.vue')
        }
      )
    }
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    transpile: ['vuetify/lib'],

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      config.plugins.push(new VuetifyLoaderPlugin())
    }
  }
}
