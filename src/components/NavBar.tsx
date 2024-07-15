import React from "react";
import styles from '../styles/components/navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import baratoLogo from "../assets/images/logo.png";

const NavBar: React.FC = () =>{
    return(
        <nav className={styles.navBar}>
            <ul className={styles.navList}>
                <li> <img src={baratoLogo} alt="Logomarca da empresa Barato Coletivo."/> </li>
                <li> <FontAwesomeIcon className={styles.shoppingButton} icon={faShoppingCart} size="2x" color="white" /> </li>
            </ul>
        </nav>
    );
}

export default NavBar;