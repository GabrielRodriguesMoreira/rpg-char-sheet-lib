import styles from '../../styles/card.module.css'

export function Card() {
    return (
        <div className={styles.card_container}>
            <img src="https://static.wikia.nocookie.net/lawler-rpg/images/2/2c/Dissidia_black_mage_of_light_by_isaiahjordan-d5hz8q6.png" alt="" />
            <p>Mage</p>
        </div>
    )
}

export default Card;