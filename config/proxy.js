/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
const serveUrlMap = {
    dev: 'http://127.0.0.1:7001/',
    pre: 'http://127.0.0.1:7001/',
    test: 'http://127.0.0.1:7001/',
    idc: 'http://127.0.0.1:7001/',
};
const { SERVE_ENV = 'idc' } = process.env;

export default {
  dev: {
    '/api/': {
      target: serveUrlMap[SERVE_ENV],
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
};
