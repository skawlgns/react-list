import React from "react";
import Lists from "./components/lists/lists";
import styles from "./app.module.css";
import "@fortawesome/fontawesome-free/js/all.js";

function App() {
  return (
    <div className={styles.wrap}>
      <heade className={styles.head}>
        <i class="fas fa-shopping-cart"></i>
        <span className={styles.span}>마트가서 뭐 사지?</span>
      </heade>
      <Lists />
    </div>
  );
}

export default App;
