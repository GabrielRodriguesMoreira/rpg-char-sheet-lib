import styles from "../../styles/aside.module.css"
import Link from 'next/link'
import { GrFormSearch } from 'react-icons/gr';

export function Aside() {


    return (
        <aside className={styles.aside}>
            <div className={styles.logo}> <img src="https://www.rederpg.com.br/wp/wp-content/uploads/2020/05/DD-Logo.png" alt="" /></div>
            <fieldset>
                <input type="text" placeholder='Search Something' />
                <GrFormSearch className={styles.icon} />
            </fieldset>
            <nav>
                <Link {...{
                    href: "../",
                    query: {
                        message: "message"
                    }
                }} as="/" >
                    <a >CHARACTERS</a>
                </Link>
                <Link href="../../componenets/Maps">
                    <a>MAPS</a>
                </Link>
                <a href="#">GUILDS</a>
                <a href="#">HISTORIES</a>
                <a href="#">DICES</a>
            </nav>
        </aside>
    )
}

export default Aside;