const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin'); 

//Creacion de modulo y la exportacion necesaria
module.exports = {
    //Crea una entrada para especificar el elemento principal a tener en cuenta
    entry: './src/index.js',
    //Sirve para especificar en donde 'enpujar' o guardar el elemento
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    //Permite saber los archivos con los que se trabajan
    resolve: {
        //Especifica las extenciones con las que se trabajan
        extensions: ['.js', '.jsx']
    },
    //Contiene las reglas de nuestro proyecto
    module: {
        rules: [
            {
                //Identificador para archivos js y jsx
                test: /\.(js|jsx)$/,
                //Exclucion de node_modules
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"    
                }
            },
            {
                //Regla que entien archivos html y los prepara
                test: /\.html$/,
                use:[{
                    loader: "html-loader"
                }]
            }
        ]       
    },
    //Entiende el archivo index.html de la carpeta public y el archivo index que se generara apartir de este en la carpeta dist que se mandara a pruccion
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            file: "./index.html"
        }),
        new FaviconsWebpackPlugin('./public/logo.png'),
    ]
}