import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FighterBoard from '../components/FighterBoard.js'
import Button from './../components/Button.js'
import {useState, useEffect} from 'react';

export default function Home() {  
  const [pokemon, setPokemon] = useState("");
  const fighterObj = {name: "Kris Bertolino",
sprites: {
  front_default: '/../public/mepng.png'
},
height: 5.58,
weight: '170'
}
  useEffect(()=>{
    pokeGrabber();
  }, [])

  const pokeGrabber = async () => {
    const Pokenum = Math.floor(Math.random() * 900);
    const pokePull = await fetch(`https://pokeapi.co/api/v2/pokemon/${Pokenum}`);
    const pokeData = await pokePull.json();
    setPokemon(pokeData);
    console.log(pokeData);
  }
  return (
    <div className={styles.container}>
      <div className={styles.appInfo}>
        <Button buttonName={"Generate Pokemon"} buttonFunc={pokeGrabber}></Button>
      </div>
      <div className={styles.fighterBoardContainer}>
        <FighterBoard fighterData={fighterObj}></FighterBoard>
        <FighterBoard fighterData={pokemon ? pokemon : null}></FighterBoard>
      </div>
    </div>
  )
}
