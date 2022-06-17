export default {
  chainWebpack(memo) {
    memo.plugins.delete('copy');
  },
};
