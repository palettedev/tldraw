if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js')
      let s = Promise.resolve()
      return (
        i[e] ||
          (s = new Promise(async (s) => {
            if ('document' in self) {
              const i = document.createElement('script')
              ;(i.src = e), document.head.appendChild(i), (i.onload = s)
            } else importScripts(e), s()
          })),
        s.then(() => {
          if (!i[e]) throw new Error(`Module ${e} didn’t register its module`)
          return i[e]
        })
      )
    },
    s = (s, i) => {
      Promise.all(s.map(e)).then((e) => i(1 === e.length ? e[0] : e))
    },
    i = { require: Promise.resolve(s) }
  self.define = (s, c, t) => {
    i[s] ||
      (i[s] = Promise.resolve().then(() => {
        let i = {}
        const n = { uri: location.origin + s.slice(1) }
        return Promise.all(
          c.map((s) => {
            switch (s) {
              case 'exports':
                return i
              case 'module':
                return n
              default:
                return e(s)
            }
          })
        ).then((e) => {
          const s = t(...e)
          return i.default || (i.default = s), i
        })
      }))
  }
}
define('./sw.js', ['./workbox-ea903bce'], function (e) {
  'use strict'
  importScripts('worker-6L8AMbRb0NKpPgic9tDJq.js'),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/VerveineRegular.woff',
          revision: '858cc7add1765cbcfb0439e275fd167b',
        },
        {
          url: '/_next/static/6L8AMbRb0NKpPgic9tDJq/_buildManifest.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/6L8AMbRb0NKpPgic9tDJq/_ssgManifest.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/245.0b8b5b2c6276314320c8.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/245.0b8b5b2c6276314320c8.js.map',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/249-6f03b7a81bcbd0038729.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/249-6f03b7a81bcbd0038729.js.map',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/326-3c7a0e1d438e42f6840a.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/326-3c7a0e1d438e42f6840a.js.map',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/433-4af653dbe4f101dcf043.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/433-4af653dbe4f101dcf043.js.map',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/448.75c2f81459cefda29a33.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/448.75c2f81459cefda29a33.js.map',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/500.add46b3673e39a4bea2f.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/500.add46b3673e39a4bea2f.js.map',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/517-ef5a73f6d009b76efe08.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/517-ef5a73f6d009b76efe08.js.map',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/605.f3864658d8634b76f25b.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/605.f3864658d8634b76f25b.js.map',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/679.243b85dfdec37fa00017.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/679.243b85dfdec37fa00017.js.map',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/725.ba6f1f8d1ef9761d5764.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/725.ba6f1f8d1ef9761d5764.js.map',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/768.3eb2d8f1c748e19b3191.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/768.3eb2d8f1c748e19b3191.js.map',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/847.bd02d1a1772e5f87b99d.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/847.bd02d1a1772e5f87b99d.js.map',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/94.a2f19400fba005dc6c4f.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/94.a2f19400fba005dc6c4f.js.map',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/945.27ce1a50bfc1ce339fd4.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/945.27ce1a50bfc1ce339fd4.js.map',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/965.d0b65414f207ca0dc6a2.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/965.d0b65414f207ca0dc6a2.js.map',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/ee9ce975.ee18cda6cbd28d404e39.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/ee9ce975.ee18cda6cbd28d404e39.js.map',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/framework-0fd486a5f941532fdde0.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/framework-0fd486a5f941532fdde0.js.map',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/main-e948a5ffef40ef3bf54a.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/main-e948a5ffef40ef3bf54a.js.map',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/pages/_app-a1d000020e93919862ee.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/pages/_app-a1d000020e93919862ee.js.map',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/pages/_error-fa66bd2a1f1976f8f4ba.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/pages/_error-fa66bd2a1f1976f8f4ba.js.map',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/pages/create-error-dbbfb7ded30741dbea75.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/pages/create-error-dbbfb7ded30741dbea75.js.map',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/pages/index-77ea2f4dd2a17b027e3c.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/pages/index-77ea2f4dd2a17b027e3c.js.map',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/pages/shhh-c685061b2f91817cb318.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/pages/shhh-c685061b2f91817cb318.js.map',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/pages/signout-1aa15c2b9eebca4b25ca.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/pages/signout-1aa15c2b9eebca4b25ca.js.map',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/pages/sponsorware-7ed3c2cbeca2692c04bd.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/pages/sponsorware-7ed3c2cbeca2692c04bd.js.map',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/polyfills-2eea1e1f8ec955b73e03.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/polyfills-2eea1e1f8ec955b73e03.js.map',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/webpack-781ce7a400ed0d5cf690.js',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/chunks/webpack-781ce7a400ed0d5cf690.js.map',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/css/50297e5ab72b54dddbcb.css',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/_next/static/css/50297e5ab72b54dddbcb.css.map',
          revision: '6L8AMbRb0NKpPgic9tDJq',
        },
        {
          url: '/android-chrome-192x192.png',
          revision: '57c9c4cd91d24d48b7ffdda0768fd225',
        },
        {
          url: '/android-chrome-512x512.png',
          revision: '8d2454e6cf551f8ca1e1d5670b13a8d1',
        },
        {
          url: '/android-chrome-maskable-192x192.png',
          revision: '71c93ce0b34d2fbb4c6654a9131a3d9d',
        },
        {
          url: '/android-chrome-maskable-512x512.png',
          revision: '4265b8c09997b16ac1493500b43f3755',
        },
        {
          url: '/apple-touch-icon.png',
          revision: '8081d08be3673ec33dbeecab06706b2b',
        },
        {
          url: '/favicon-16x16.png',
          revision: 'ac17d75b1ee007781212853a57b88285',
        },
        {
          url: '/favicon-32x32.png',
          revision: '360bc7cd4706c0657917f3b78fed6b71',
        },
        { url: '/favicon.ico', revision: 'b2bf6bb7b4d0234f3e6df44fd7d5707e' },
        { url: '/flat.png', revision: 'e0460141713b5c94104ce19b36c4b462' },
        {
          url: '/icons/grab.svg',
          revision: 'a1ca9e5c31d1edd2558ab075f72fde4e',
        },
        {
          url: '/icons/pointer.svg',
          revision: 'dff260f896fe23adb83341639fdf93be',
        },
        {
          url: '/icons/resize.svg',
          revision: '0a3cb701d15731e25919783801d18f95',
        },
        {
          url: '/images/hello.mp4',
          revision: 'b716f249cc6c781c91b0ac9dc23423b3',
        },
        { url: '/manifest.json', revision: '3e9972cc640a3e24648a6620cfc03650' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: i,
              state: c,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|mp4)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-media-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    )
})
//# sourceMappingURL=sw.js.map