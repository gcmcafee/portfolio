module.exports = {
  plugins:
    process.env.NODE_ENV === 'production'
      ? [
          'postcss-flexbugs-fixes',
          [
            'postcss-preset-env',
            {
              autoprefixer: {
                flexbox: 'no-2009',
              },
              stage: 3,
              features: {
                'custom-properties': false,
              },
            },
          ],
          [
            '@fullhuman/postcss-purgecss',
            {
              content: [
                  './pages/**/*.{js,jsx,ts,tsx}',
                  './components/**/*.{js,jsx,ts,tsx}',
              ],
              defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
              safelist: {
                greedy: [
                    /show/,
                    /collapsing/,
                    /tooltip/,
                    /navbar-light/,
                    /swiper-slide-active/,
                    /swiper-pagination-clickable/,
                    /swiper-pagination-bullet/,
                    /swiper-pagination-bullet-active/,
                    /swiper-wrapper/,
                    /ge/,
                    /seaport/,
                    /abaco/,
                    /fleet/,
                    /georges/,
                    /headquarters/,
                    /foresight/,
                    /electra/,
                    /spotlink/,
                    /warwicks/,
                    /navbar/,
                    /navbar-toggler/,
                    /navbar-toggler-icon/,
                    /navbar-collapse/,
                    /navbar-dark/,
                    /fixed-top/
                ],
              },
            }
          ],
        ]
      : [
          // No transformations in development
        ],
}