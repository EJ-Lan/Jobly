"use client"; // needed for client-side interactivity
import Link from "next/link";
import styles from "../page.module.css"; // reuse the same CSS

export default function RegisterPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.logo}>Jobly</h1>

      <div className={styles.loginCard}>
        <h2 className={styles.loginTitle}>Create Account</h2>
        <p className={styles.loginSubtitle}>
          Join Jobly today and start managing your jobs!
        </p>

        <form className={styles.loginForm}>
          <input
            type="text"
            placeholder="Full Name"
            required
            className={styles.inputField}
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            required
            className={styles.inputField}
          />
          <button type="submit" className={styles.loginBtn}>
            Register
          </button>
        </form>

        <div className={styles.registerLink}>
          <span>Already have an account?</span>
          {/* Link back to login page */}
          <Link href="/">
            <button className={styles.registerBtn}>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
