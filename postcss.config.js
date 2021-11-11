import cssnano from "cssnano";

import autoprefixer from "autoprefixer";

import css_mqpacker from "css-mqpacker";

module.exports = {
    plugins: [
        autoprefixer,
        cssnano({
            preset: 'default',
        }),
        css_mqpacker,
    ]
};