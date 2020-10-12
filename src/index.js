import './styles/main.scss';
//import 'bootstrap';
import Pokedex from './Pokedex';
import axios from 'axios';//axios es similar a request(callbacks) pero mas exqusita al usar promesas axios (promesas)


function init (){
    // aqui voy a hacer la llamda de la api por los datos
    let pokemons=[]
    for( let i =0; i <152;i++){
        axios.get(`https://pokeapi.co/api/v2/pokemon/${i+1}/`)
        .then((response) => {//aqui se pasa la ifno de los paises
            console.log(response.status);
            pokemons.push(response.data);
        })
        .catch( (err) =>{
            console.log(err.status)
        })
    }
    const pokedex = new Pokedex (pokemons);
    //console.log(pokemons)
    pokedex.start();
}
init();