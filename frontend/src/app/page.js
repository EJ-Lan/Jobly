<<<<<<< HEAD
export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-500 text-white text-3xl font-bold">
      Tailwind is working 🎉
=======
"use client"; // needed to use client-side navigation

import Link from "next/link";
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
          {/* Link to register page */}
          <Link href="/register">
            <button className={styles.registerBtn}>Register</button>
          </Link>
        </div>
      </div>
>>>>>>> 669561161dfdbeb485b782775699ddc5560cf5a7
    </div>
  );
}
