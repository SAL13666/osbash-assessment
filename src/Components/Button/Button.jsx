import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import PropTypes from 'prop-types';

const Button = ({title, link, onClick, to= "", disabled}) => {
    return (
        (link ? (
                <Link onClick={onClick} to={to} className={styles.Button}>{title}</Link>
        ) : (
            <button onClick={onClick} className={styles.Button} disabled={disabled}>
                {title}
            </button>
        ))
    );
};

Button.propTypes  = {
    title: PropTypes.string,
    link: PropTypes.bool,
    onClick: PropTypes.func,
    to: PropTypes.string,
    disabled: PropTypes.bool,
};

export default Button;