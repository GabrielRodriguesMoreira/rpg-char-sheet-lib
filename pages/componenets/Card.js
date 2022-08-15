import React, { useEffect, useState } from 'react';
import styles from '../../styles/card.module.css'

import date from './data' assert {type: 'json'};

export function Card(props) {

    const data = props.data;

    return (
        <div className={styles.card_container} onClick={() => { props.say("cu") }}>
            <img src={data ? data.img : "alat"} alt="" />
            <p>{data ? data.name : "alt"}</p>
        </div>
    )

}

export default Card;