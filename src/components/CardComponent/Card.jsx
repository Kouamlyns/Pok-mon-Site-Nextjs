"use client"

import { FaRegHeart,FaHeart } from "react-icons/fa";
import {useState} from "react";
const pokemonList = [
    { name: "Pikachu", type: "Electric", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" },
    { name: "Charmander", type: "Fire", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" },
    { name: "Squirtle", type: "Water", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" },
    { name: "Bulbasaur", type: "Grass", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" },
    { name: "Jigglypuff", type: "Fairy", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png" },
    { name: "Meowth", type: "Normal", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png" },
    { name: "Psyduck", type: "Water", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png" },
    { name: "Machop", type: "fighting", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png" },
    { name: "Geodude", type: "rock", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png" },
    { name: "Eevee", type: "Normal", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png" },
    { name: "Vilpix", type: "Fire", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png" },
    { name: "smorlax", type: "Normal", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png" },
    { name: "Gender", type: "Ghost", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png" },
    { name: "Lapras", type: "Water", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png" },
    { name: "Ponyta", type: "Fire", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png" },
    { name: "Sandshrew", type: "Ground", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png" },
    { name: "Poliwag", type:"Water", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png" },
    { name: "Magnemite", type: "Electric/Steel", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png" },
    { name: "Onix", type: "Rock/Ground", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png" },
    { name: "Kabuto", type:"Rock/Water", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/140.png" },
    ];
const Card =({name,type,img})=>{
    const [isclick, setIsClick] = useState(false)
    return(
        <>
        <div className="w-[300px] h-[400px] bg-[#c6c4be] shadow-lg rounded-lg overflow-hidden relative ">
            <img src={img} alt="Pokemon"  className="w-full h-2/3 object-cover " />
            <div className="p-4">
                <h2 className="text-xl font-bold"> {name} </h2>
                <p className="text-green-600">{type}</p>
                <button className="mt-4 w-full px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors "> Catch </button>
            </div>
            <div className="absolute top-1 right-2">
            {
                isclick ? <FaHeart size={30} color={"#E6836A"} className=" cursor-pointer transition-transform " onClick={()=> {setIsClick(false)} }/> : <FaHeart size={30} color={"#fff"} className="cursor-pointer" onClick={()=>{setIsClick(true)}}/>
            }
            </div>
        </div>
        
        </>
        
    );
    
}
//export default Card;
const CardList = () => {   
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {pokemonList.map((poke, index) => (
        <Card key={index} name={poke.name} type={poke.type} img={poke.img} />
            ))}
    </div>
    );
};

export default CardList;