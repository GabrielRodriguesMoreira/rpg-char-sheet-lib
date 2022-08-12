import styles from '../../styles/card.module.css'

export function Card(props) {
    return (
        <div className={styles.card_container}>
            <img src={props.img} alt="" />
            <p>{props.name}</p>
        </div>
    )
}

export default Card;