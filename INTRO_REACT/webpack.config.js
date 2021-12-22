const path = require('path');

module.exports = {
    entry : './src/index.js',
    output :{
        path : path.join(__dirname, 'build'), // folder name
        filename : 'bundle.js',
    } ,
   mode : 'production' ,   // development or production
    module : {
        rules: [
            {
                test : /\.css$/,  // file ends with .css
                use : ["style-loader" , "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                {
                    loader: 'file-loader',
                },
                ],
            },
        ]
    }
};