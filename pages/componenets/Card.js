import styles from '../../styles/card.module.css'
import { Cardinfos } from './Cardinfos';
export function Card(props) {

    return (
        <div className={styles.card_container} >
            <img src={props.arr.img} alt="" />
            <p>{props.arr.name}</p>
        </div>
    )
}

export default Card;