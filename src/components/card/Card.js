import React from "react";
import styles from "./card.module.scss";

const Card = props => (
    <div className={
        props.status === "active" ? `${styles.card} ${styles.active}` : `${styles.card}`
    }>
        <p>{props.name}</p>
        <h2><span>$ </span>{props.fee}</h2>
        <ul>
            <li>{props.storage} Storage</li>
            <li>{props.users} Users Allowed</li>
            <li>Send up to {props.bandwidth} GB</li>
        </ul>
        <button>Learn More</button>
    </div>
);

export default Card;