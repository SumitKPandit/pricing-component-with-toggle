import React from "react";
import styles from "./toggle.module.scss";

const Toggle = props => {
    return (
        <div onClick={props.changePrice} className={styles.toggle}>
            <div className={
                props.status === true ? `${styles.switch} ${styles.right}` : `${styles.switch} ${styles.left}`
            }></div>
        </div>
    );
}

export default Toggle;