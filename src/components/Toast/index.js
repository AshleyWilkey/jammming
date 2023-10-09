import React, { useState } from "react";
import styles from "./Toast.module.css";
/**
 *
 * @param {Object} props
 * @param {Boolean} props.show Show the Toast
 * @param {"error" | "success"} props.type Type of Toast
 * @param {String} props.message Message to display
 */

function Toast(props) {
  return (
    <div className={`${styles.Toast} ${styles["Toast-" + props.type]}`}>
      <p>{props.message}</p>
    </div>
  );
}

{
  /* <Toast show={true | false} type={"error" | "success"} message="Authenicated successfully" /> */
}

export default Toast;
