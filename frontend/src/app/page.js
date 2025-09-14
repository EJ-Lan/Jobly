import styles from "./page.module.css";

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.logo}>Jobly</h1>

      <div className={styles.loginCard}>
        <h2 className={styles.loginTitle}>Welcome Back</h2>
        <p className={styles.loginSubtitle}>
          If you are already a member, easily log in
        </p>

        <form className={styles.loginForm}>
          <input
            type="email"
            placeholder="Email"
            required
            className={styles.inputField}
          />
          <input
            type="password"
            placeholder="Password"
            required
            className={styles.inputField}
          />
          <button type="submit" className={styles.loginBtn}>
            Log In
          </button>
        </form>


        <div className={styles.registerLink}>
          <span>Don't have an account?</span>
          <button className={styles.registerBtn}>Register</button>
        </div>
      </div>
    </div>
  );
}
