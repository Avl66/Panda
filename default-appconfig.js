const sites = require('./sites.js')
const amplience = require('./amplience.config.js')
module.exports = {
    app: {
        // Customize how your 'site' and 'locale' are displayed in the url.
        url: {
            // Determine where the siteRef is located. Valid values include 'path|query_param|none'. Defaults to: 'none'
            // site: 'none',
            // Determine where the localeRef is located. Valid values include 'path|query_param|none'. Defaults to: 'none'
            locale: 'none',
            // This boolean value dictates whether or not default site or locale values are shown in the url. Defaults to: false
            // showDefaults: true
        },
        // The default site for your app. This value will be used when a siteRef could not be determined from the url
        defaultSite: 'RACEComposable',
        // Provide aliases for your sites. These will be used in place of your site id when generating paths throughout the application.
        // siteAliases: {
        //     RefArch: 'us'
        // },
        // The sites for your app, which is imported from sites.js
        sites,
        // Amplience Config
        amplience,
        // Commerce api config
        commerceAPI: {
            proxyPath: `/mobify/proxy/api`,
            parameters: {
                clientId: 'aa942ca6-8d29-4d81-92e9-181d7fa00aac',
                organizationId: 'f_ecom_zzrh_022',
                shortCode: 'kv7kzm78',
                siteId: 'RACEComposable'
            }
        },
        // Einstein api config
        einsteinAPI: {
            proxyPath: `/mobify/proxy/einstein`,
            einsteinId: 'undefined',
            siteId: 'RACEComposable'
        },
        externalAPIsConfiguration : {
            enableAlgoliaSearch: false
        }
    },
    // This list contains server-side only libraries that you don't want to be compiled by webpack
    externals: [],
    // Page not found url for your app
    pageNotFoundURL: '/page-not-found',
    // Enables or disables building the files necessary for server-side rendering.
    ssrEnabled: true,
    // This list determines which files are available exclusively to the server-side rendering system 
    // and are not available through the /mobify/bundle/ path.
    ssrOnly: ['ssr.js', 'ssr.js.map', 'node_modules/**/*.*'],
    // This list determines which files are available to the server-side rendering system 
    // and available through the /mobify/bundle/ path.
    ssrShared: [
        'static/ico/favicon.ico',
        'static/robots.txt',
        '**/*.js',
        '**/*.js.map',
        '**/*.json'
    ],
    // Additional parameters that configure Express app behavior.
    ssrParameters: {
        ssrFunctionNodeVersion: '14.x',
        proxyConfigs: [
            {
                host: 'kv7kzm78.api.commercecloud.salesforce.com',
                path: 'api'
            },
            {
                host: 'zzrh-022.sandbox.us01.dx.commercecloud.salesforce.com',
                path: 'ocapi'
            },
            {
                host: 'api.cquotient.com',
                path: 'einstein'
            },
            {
                host: 'CFK36QSUU5-dsn.algolia.net',
                path: 'algolia'
            }
        ]
    }
}