export default {
    input: 'dist/index.js',
    sourcemap: false,
    output: {
        file: 'dist/bundles/nl2br-pipe-module.umd.js',
        format: 'umd',
        name: 'nl2br.pipe.module',
        globals: {
            '@angular/core': 'ng.core',
            '@angular/common': 'ng.common',
            '@angular/platform-browser': 'ng.platform-browser'
        }
    }
}