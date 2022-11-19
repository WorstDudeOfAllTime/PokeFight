import styles from './../styles/FighterBoard.module.css'
import Image from 'next/image'
const FighterBoard = ({fighterData}) => {
  console.log(fighterData)
  return <div className={styles.fighterBoard}>
  <div className={styles.fighterTitleBox}>
    <h1>{fighterData && fighterData.name.slice(0,1).toUpperCase() + fighterData.name.slice(1,(fighterData.name.length))}</h1>
  </div>
  <div className={styles.fighterBox}>
  {fighterData && <Image src={fighterData.sprites.front_default} height="250" width="250"/>}
    <div className={styles.statBox}>
      <h2>Height: {fighterData && (fighterData.height === 5.58 ? fighterData.height : (Math.round(fighterData.height*.33)))} feet</h2>
      <h2>Weight: {fighterData && (fighterData.weight === '170' ? fighterData.weight : (Math.floor(fighterData.weight/4.54)))} lbs</h2>
    </div>
  </div>
  </div>
}

export default FighterBoard;