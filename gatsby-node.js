exports.onCreateBabelConfig = ({ actions: { setBabelPlugin } }) => {
  setBabelPlugin({ name: 'babel-plugin-tailwind' });
  setBabelPlugin({ name: 'babel-plugin-emotion' });
};

exports.onCreateWebpackConfig = ({
  actions,
}) => {
  const { setWebpackConfig } = actions;
  setWebpackConfig({
    externals: {
      jquery: 'jQuery', // important: 'Q' capitalized
    }
  })
}