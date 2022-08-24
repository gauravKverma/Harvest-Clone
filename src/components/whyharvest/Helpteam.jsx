import React from "react";
import { Link } from "react-router-dom";
import styles from './helpteam.module.css';

const Helpteam = () => {
    return (
        <div className={styles.helpcontainer}>
            <div className={styles.helpText}>
                <h4> Help your time spend time wisely</h4>
                <p>
                Harvest time tracking makes it easy to capture time, gain insights
                from past projects, and get paid for your work.
                </p>
            </div>
            <div className={styles.btnContainer}>
                <Link to="#">
                <button className={styles.btnTry}>Try Harvest Free</button>
                </Link>
                <p>Free 30-day trial. No credit card required.</p>
            </div>
            <div className={styles.line}></div>

        </div>
    );
};

export default Helpteam;