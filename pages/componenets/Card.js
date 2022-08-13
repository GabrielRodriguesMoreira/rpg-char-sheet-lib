
import { useEffect, useState } from 'react';
import styles from '../../styles/card.module.css'


export function Card(props) {

    const [data, setdata] = useState('')

    useEffect(() => {
        setdata(props.data)
    }, [])

    return (
        <div className={styles.card_container} >
            <img src={data.img} alt="" />
            <p>{data.name}</p>
        </div>
    )
}

export default Card;