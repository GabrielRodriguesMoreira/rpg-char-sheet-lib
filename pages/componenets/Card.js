import styles from '../../styles/card.module.css'
import { Cardinfos } from './Cardinfos';
export function Card(props) {
    function showinfos() {
        console.log('oi')
    }
    return (
        <div className={styles.card_container} onClick={showinfos}>
            <img src={props.arr.img} alt="" />
            <p>{props.arr.name}</p>
        </div>
    )
}

export default Card;