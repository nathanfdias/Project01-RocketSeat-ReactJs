import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';
import { PencilLine } from 'phosphor-react';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/500px_photo_%2854366390%29.jpeg/1200px-500px_photo_%2854366390%29.jpeg'/>
            <div className={styles.profile}>
                <Avatar hasBorder={true} src="https://github.com\nathanfdias.png"/>
                <strong>Nathan Dias</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href='#'>
                    <PencilLine />
                    Editar Perfil
                </a>
            </footer>

        </aside>
    )
}