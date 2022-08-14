import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import styles from '../../styles/card.module.css'


export function Card(props) {

    const data = props.data;

    return (
        <div className={styles.card_container}  >
            <img src={data ? data.img : "alat"} alt="" />
            <p>{data ? data.name : "alt"}</p>
        </div>
    )

}

export default Card;