class Pokedex{

    constructor(){
        this.pokemons = [];
    }

//function create one card
addPokemon(pokemon){
    this.pokemons.push(pokemon);
}

getPokeId(i){
    var id_poke= this.pokemons[i];//para buscar only
    console.log(id_poke)
    return id_poke;
}
getPokemonName(i){
    var name_poke= this.pokemons[i].name;
    console.log(name_poke)
    return name_poke;
}

getPokemonImgUrl(id_poke){
    try{
        var img_poke="https://pokeres.bastionbot.org/images/pokemon/"+id_poke+".png"
    }catch{
        var img_poke="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5937e90a5bafe882f5bc09e6/gatitos-cesta_0.jpg"
    }
    var img_poke="https://pokeres.bastionbot.org/images/pokemon/"+id_poke+".png"

    console.log(img_poke)
    return img_poke;
}
getPokemonType(i){
    var type_length=this.pokemons[i].types.length;
    if (type_length>1){
        var type_poke = [this.pokemons[i].types[0].type.name, this.pokemons[i].types[1].type.name];
        var type_poke_show=`Type 1: ${type_poke[0]}, Type 2: ${type_poke[1]}`;
        console.log(type_poke_show)
    } else{
        var type_poke= this.pokemons[i].types[0].type.name;
        var type_poke_show=`Type: ${type_poke}`;
        console.log(type_poke_show)
    }
    return type_poke_show;
}

getPokeHP(i){
    var hp_poke=this.pokemons[i].stats[0].base_stat;
    console.log(hp_poke)
    return hp_poke;
}

divsCartaGrande(){
    var infoDivs =''
    var infoDivs_i=''
    for (var i=0;i<this.pokemons.length;i++){
        infoDivs_i='<div class="card  col-4 mb-3 ">'
                //+'<div class="container">'
                    +`<img src= ${this.getPokemonImgUrl(this.getPokeId(i))} class="card-img-top" alt="...">`
                    +'<div class="card-body">'
                        +'<h5 class="card-title">'
                            +this.getPokemonName(i)
                        +'</h5>'
                        +'<p class="card-text">'
            //poner condicionante de length
                            +this.getPokemonType(i)
                        +'</p>'
                        +'<p class="card-text">'
                            +'HP: '+ this.getPokeHP(i)
                        +'</p>'
                    +'</div>'
                //+ '</div>'
            +'</div>'

        //console.log(infoDivs_i);
        infoDivs=infoDivs+infoDivs_i
        }
       //console.log(infoDivs)
    return infoDivs;
}

divsCartaChica(){
    var infoDivs =''
    var infoDivs_i=''
    for (var i=0;i<this.pokemons.length;i++){
        infoDivs_i='<div class="card  col-7 mb-5">'
                +`<img src= ${this.getPokemonImgUrl(this.getPokeId(i))} class="card-img-top" alt="...">`
                +'<div class="card-body">'
                    +'<h5 class="card-title">'
                        +this.getPokemonName(i)
                    +'</h5>'
                    +'<p class="card-text">'
        //poner condicionante de length
                        +this.getPokemonType(i)
                    +'</p>'
                    +'<p class="card-text">'
                        +'HP: '+ this.getPokeHP(i)
                    +'</p>'
                +'</div>'
            + '</div>'
        
        infoDivs=infoDivs+infoDivs_i
        }
    //console.log(infoDivs)
    return infoDivs;
}

start(){
        
    const espacio_libre = document.querySelector('.contenedor'); 
    var addCardBig = document.createElement('div')
    addCardBig.setAttribute('class','d-none d-lg-block d-xl-block d-md-none d-xs-none')  
    addCardBig.setAttribute('id','cartaGrande')            
    addCardBig.innerHTML = '<div class="row justify-content-center">' + this.divsCartaGrande();

    console.log(this.pokemons);
    //console.log(this.pokemons[0]);

    var addCardSmall = document.createElement('div')
    addCardSmall.setAttribute('class','d-xs-block d-sm-block d-md-block d-lg-none d-xl-none') 
    addCardSmall.setAttribute('id','cartaChica')        
    addCardSmall.innerHTML = '<div class="row justify-content-center">' + this.divsCartaChica();

    console.log(addCardBig);
    console.log(addCardSmall);

    console.log(espacio_libre);

    espacio_libre.appendChild( addCardBig );
    espacio_libre.appendChild( addCardSmall );
        
        //pokemons ya se vuelve parte intena, (osease this.pokemons par ahacer referencia futurea)
/*
        this.choiceCountries();
        this.winner = this.choiceWinner;
        // se va encargar de carga todo el juego
        const banderas = document.querySelector('.flags')
        const respuesta = document.getElementById('answer');
        const poblacion = document.getElementById('population');
        const capital = document.getElementById('capital');
        const textoPais = document.getElementById('country-name');
        banderas.innerHTML = "";
        respuesta.innerHTML = "";
        poblacion.innerHTML = "";
        capital.innerHTML = "";
        textoPais.innerHTML = this.winner.translations.es;
        const clickFlag=((event)=>{
            if(this.winner.name === event.target.id){
                //el usuario dio click a la bandera ganadora
                respuesta.innerHTML = "¡Correcto!"
                poblacion.innerHTML = "Poblacion: "+this.winner.population
                capital.innerHTML = "Capital: "+this.winner.capital
            }else{
                respuesta.innerHTML = "¡Incorrecto!"
            }
        });
        this.selectedCountries.forEach(country =>{
            const flag = this.buildFlag(country, clickFlag)
            banderas.appendChild(flag)
        })
        */
    }

}

export default Pokedex;