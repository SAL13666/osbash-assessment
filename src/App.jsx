import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { fetchData } from "./Utilities/App/App.utilites";
import { setData } from "./Store/Quiz/quizSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
      ( async () => {
        const data = await fetchData(); // i used this approch so that it matches real world scenario i could also have put the json file in the src/assets and imported it 
        dispatch(setData(data))
      })() 
  }, [dispatch]); 
  return (
      <div className={styles.App}>
        <Outlet/>
      </div>
  )
}

export default App;
