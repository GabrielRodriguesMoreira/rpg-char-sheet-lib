import { AiFillCloseCircle } from 'react-icons/ai';
import styles from '../../styles/cardinfo.module.css'
export function Cardinfos(props) {
    const data = props.infos;

    function pix() {
        props.removetab(data.id)
    }

    return (
        <div className={styles.info_container}>
            <p onClick={() => { props.func({ name: data.name, img: data.img }) }}>{data ? data.name : "alt"}</p>
            <button onClick={pix}><AiFillCloseCircle /></button>
        </div>
    )
}
export default Cardinfos;