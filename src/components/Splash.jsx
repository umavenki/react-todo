import { useNavigate } from "react-router-dom";
import styles from "./Splash.module.css";
function Splash() {
  const nav = useNavigate();
  return (
    <div className={styles.splash}>
      <h1 className={styles.title}>New TodoList App</h1>
      <button className={styles.navButton} onClick={() => nav("/Home")}>
        Home
      </button>
    </div>
  );
}
export default Splash;
