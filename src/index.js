import './styles/main.scss';
//import 'bootstrap';
import Pokedex from './Pokedex';
import axios from 'axios';//axios es similar a request(callbacks) pero mas exqusita al usar promesas axios (promesas)


function init (){
    // aqui voy a hacer la llamda de la api por los datos
    //let pokemons=[]
    const pokedex = new Pokedex ();
    for( let i =0; i <152;i++){
        axios.get(`https://pokeapi.co/api/v2/pokemon/${i+1}/`)
        //addpokemon->push->push del areglo
        .then((response) => {//aqui se pasa la info de los paises
            console.log(response.status);
            //const pokeJSON=JSON.parse(response.data)
            pokedex.addPokemon(response.data);
            //console.log(response.data)
            if(i===151){
                pokedex.start();
            }
            //console.log(response.status)
        })
        //contador a 153 con push para la clase pokedex
        .catch( (err) =>{
            console.log(err)
        })
    }
    
    //console.log(pokemons)
}
init();