import styles from "./Navigation.module.css"
function Navigation(){
    return (
      <nav className={styles.navigation}>
        <div>
          <img src="./images/logo.png" alt="Do some coding logo" />
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
}
export default Navigation;