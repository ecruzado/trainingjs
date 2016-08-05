module.exports = {
    entry: [
        "./util.js",
        "./app.js"
    ],
    output: {
        filename: "bundle.js"
    },
    watch: true,

    module: {
        preloaders:[
            {
                test:/\.js$/,
                exclude: '/node_modules/',
                loader: 'jshint-loader'
            }
        ],
        loaders:[
            {
                test: /\.es6$/,
                exclude: '/node_modules/',
                loader: 'babel-loader'
            }
        ]
    },
    
    //by default webpack load .js files
    resolve:{
        extensions:['','.js','.es6']
    }
}