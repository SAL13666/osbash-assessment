import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { useSelector } from "react-redux";
const Home = () => {
    const title = useSelector((state) => state.quiz.value.Name);
    return (
        <div className={styles.Home}>
            <h1>{title}</h1>
            <Link to={"/Quiz"} className={styles.StartButton}>Start Quiz</Link>
        </div>
    );
};

export default Home;