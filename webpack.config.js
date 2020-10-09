const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin =  require('mini-css-extract-plugin');
module.exports = {
    module:{
        rules:[ //Aqui voy a caragar todos los loader que necesito para que webpack trabaje como quiera
            {
                test: /\.html$/, // expresion regular ---> busca todos los archivos que terminen en .html
                use : [
                    {
                        loader: "html-loader", //Este va a traducir todo el html para que webpack lo entienda
                        options: {minimize:true}
                    }
                ]
                //test ---> que tengo que buscar
                //use ----> de lo que encontre que loader voy a aplicar
            },
            {
                test: /\.js$/,//busca todos los archivos js en mi proyecto
                exclude: /node_modules/,//le digo que no busque en la carpeta de node_modules
                use:{
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,//busca todos los archivos sass en mi proyecto
                use:[
                    "style-loader",//procesa stilos en linea
                    "css-loader",// procesa estilos en archivos css
                    "sass-loader"//procesa estilos en archivos scss
                ]//los loader el orden si importa
                    
                
            },
            {
                test: /\.(png|jpg|gif|svg|jpeg)$/,//busca todos los archivos tipo imagenes en mi proyecto
                use:
                    ["file-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/index.html", //Que archivo de html va a ser el base para mi proyecto
            filename:"./index.html"// Que unico archivo de html se va a generar
        }),
        new MiniCssExtractPlugin({//esto es opcional, solo es para cuando se tienen muchas lineas y se quiere optimizar
            filename:"[name].css",// Que unico archivo de html se va a generar,
            chunkFilename:"[id].css"//solo es el caso si hay mucho css o hay mucha lineas de css
        })
    ]
}