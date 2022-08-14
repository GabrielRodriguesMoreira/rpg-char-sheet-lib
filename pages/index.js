import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import { Card } from './componenets/Card'
import data from './componenets/data' assert {type: 'json'};


console.log(data)

export default function Characters(props) {
  return (
    <div key={Math.random()} className={styles.main}>
      {data.map(function (element) {
        return <Card data={element} />
      })}
    </div>
  )

}
