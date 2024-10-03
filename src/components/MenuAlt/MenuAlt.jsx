import React from 'react'
import styles from '../MenuAlt/MenuAlt.module.css'
import { useNavigate, useLocation } from 'react-router-dom'

const MenuAlt = (props) => {
    const navigation = useLocation()

    console.log(navigation.pathname)
    const links = [
        {
            titulo: "Fale Conosco",
            link: "/faleconosco"
        },
        {
            titulo: "Sobre Nós",
            link: "/sobrenos"
        },
        {
            titulo: "Entrar",
            link: "/login"
        },
    ]

    return (
        <div>

            <div className={styles.header}>
                <div className={styles.logo}>
                    <a href={'/'}>FitBalance</a>
                </div>

                <nav className={styles.nav}>
                    <ul>
                        {links.map(link => link.link == navigation.pathname ? null : <li><a href={link.link}>{link.titulo}</a></li>) }
                    </ul>
                </nav>
            </div>
            
        </div>
    )
}

export default MenuAlt


            {/* <div className={styles.header}>
                <div className={styles.logo}>
                    <a href="#">FitBalance</a>
                </div>

                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <a href={'/faleconosco'}>Fale Conosco</a>
                        </li>
                        <li>
                            <a href="#">Sobre Nós</a>
                        </li>
                        <li>
                            <a href={'/login'}>Entrar</a>
                        </li>
                    </ul>
                </nav> 

                <div class="hamburger">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
            </div> */}