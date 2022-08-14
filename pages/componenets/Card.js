import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import styles from '../../styles/card.module.css'


export class Card extends React.Component {
    componentDidMount() {
    }

    render() {

        return (
            <div className={styles.card_container}  >
                <img src={this.props.data.img} alt="" />
                <p>{this.props.data.name}</p>

            </div>
        )
    }
}

export default Card;