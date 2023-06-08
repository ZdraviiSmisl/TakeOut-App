import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${styles.Card} ${props.classNames}`}>{props.children}</div>
  );
};

export default Card;
