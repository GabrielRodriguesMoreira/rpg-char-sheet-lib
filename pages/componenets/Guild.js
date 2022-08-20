import styles from '../../styles/map.module.css'

export function Guild(props) {
    const data = props.data;

    return (
        <div className={styles.map_container}  >
            <img src={data ? data.img : "alat"} alt="" />
            <p>{data ? data.name : "alt"}</p>
        </div>
    )

}

export default Guild;