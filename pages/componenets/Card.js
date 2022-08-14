import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import styles from '../../styles/card.module.css'


export class Card extends React.Component {

    componentDidMount() {
        console.log("yohalo")
    }

    render() {
        var data = this.props.data;
        return (
            <div className={styles.card_container}  >
                <img src={data ? data.img : "alat"} alt="" />
                <p>{data ? data.name : "alt"}</p>
            </div>
        )
    }
}

export default Card;