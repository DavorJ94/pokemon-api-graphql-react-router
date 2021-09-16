import styles from "../styles/Missing.module.css";
import { Link } from "react-router-dom";

function MissingPage() {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.headLine}>Ooops...</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go back to the{" "}
        <Link className={styles.link} to="/">
          homepage
        </Link>
      </p>
    </div>
  );
}

export default MissingPage;
