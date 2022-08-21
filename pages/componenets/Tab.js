import { AiFillCloseCircle } from 'react-icons/ai';
import styles from '../../styles/tab.module.css'
export function Tab(props) {
    const data = props.infos;

    return (
        <div className={styles.info_container} >
            <p onClick={() => { props.showinfo(data) }}>{data ? data.name : "alt"}</p>
            <button onClick={() => { props.removetab(data.id) }}><AiFillCloseCircle /></button>
        </div>
    )
}
export default Tab;