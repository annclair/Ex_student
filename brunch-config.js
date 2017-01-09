'use strict'
exports.config = {
    paths: {
        watched: ['public'],
        public: 'public'
    },
    files: {
        javascripts: {
            joinTo: {
                'js/vendor.min.js': /^node_modules/,
                'js/app.min.js': /^public\/js/
            },
            order: {
                before: [
                    'public/js/app.js',
                    'public/js/**/*.md.js',
                    'public/js/components/**/*.js'
                ]
            }
        },
        stylesheets: {
            joinTo: {
                'scss/vendor.min.css': [],
                'css/app.min.css': /^public\/scss/
            }
        }
    },
    npm: {
        enabled: true,
        compilers: ['angular', 'angular-ui-router']
    },
    modules: {
        wrapper: false,
        definition: 'commonjs'
    },
    conventions: {
        ignored: ['public/**/*.min.js']
    },
    plugins: {
        copycat: {
            "js": ['node_modules/angular/angular.min.js',
            'node_modules/angular-ui-router/release/angular-ui-router.min.js'],
            verbose: true,
            onlyChanged: true
        },
        autoReload: {
            match: {

                javascripts: ['*.js']
            }
        }
    },
    overrides: {
        production: {
            sourceMaps: true,
            plugins: {
                autoReload: {
                    enabled: true
                }
            }
        }
    }
    // plugins: {
    //     babel: {
    //         ignore: [
    //             /^(node_modules)/
    //         ]
    //     }
    // }
}
