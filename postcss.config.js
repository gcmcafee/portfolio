const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: [
        purgecss({
            content: ['./*.html'],
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
                ],
            },
        }),
        {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
                charset: (atRule) => {
                    if (atRule.name === 'charset') {
                        atRule.remove();
                    }
                },
            },
        },
    ],
};

