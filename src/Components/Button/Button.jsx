import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import styles from "./Button.module.css";

const Button = ({ title, link, onClick, to = "", disabled }) => {
    return (
        <>
            {link ? (
                <Link onClick={onClick} to={to} className={styles.Button} aria-label={title} tabIndex={0}>
                    {title}
                </Link>
            ) : (
                <button onClick={onClick} className={styles.Button} disabled={disabled} aria-label={title} tabIndex={0}>
                    {title}
                </button>
            )}
        </>
    );
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.bool,
    onClick: PropTypes.func,
    to: PropTypes.string,
    disabled: PropTypes.bool,
};

export default Button;
