import styles from "./App.module.css";
export default function App() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>This is a blog post</h2>
      <p className={styles.body}>This is the blog post body</p>
    </section>
  );
}
