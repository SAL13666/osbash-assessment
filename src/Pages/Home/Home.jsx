import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { useSelector } from "react-redux";
const Home = () => {
    const title = useSelector((state) => state.quiz.value.payload);
    console.log(title);
    return (
        <div className={styles.Home}>
            <h1>{title?.Name}</h1>
            <Link to={"/Quiz"} className={styles.StartButton}>Start Quiz</Link>
        </div>
    );
};

export default Home;