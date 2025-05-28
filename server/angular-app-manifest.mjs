
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/yuvicrafts/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/yuvicrafts/home",
    "route": "/yuvicrafts"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HHTPTBWS.js"
    ],
    "route": "/yuvicrafts/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FFCADF7D.js"
    ],
    "route": "/yuvicrafts/shop"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GRVX64UP.js"
    ],
    "route": "/yuvicrafts/cart"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 22388, hash: '1d5c5631881fcde88f0ff8440cc41dfeae79eaa59fe19a53a65796d09ab06328', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 18362, hash: '5d9d8a1a9b4b65daeb2573cb57e4eaaee5a421c3825a58fb7845e7b55e68d6c7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 31631, hash: '661c22cb503630215bae454d05bae6ecb486ebff012090da07147b4baf3e9408', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'shop/index.html': {size: 46708, hash: '22fbe7dbf413d675144a44859ee7179fe00709af8f40748431881abcfdb7e7bc', text: () => import('./assets-chunks/shop_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 28941, hash: '689b919c4e26f2bc86d5006bd1d838acf8f8596f8d8ac6af8640bf26c90e7958', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
