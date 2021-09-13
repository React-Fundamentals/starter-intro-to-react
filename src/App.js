// With CSS Modules, you can use the same CSS class name in different files without worrying about naming clashes, because CSS Modules scope the styles to the component. Learn more about CSS Modules: https://css-tricks.com/css-modules-part-1-need/
import styles from "./App.module.css";

function App() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>This is a blog post</h2>
      <p className={styles.body}>This is the blog post body</p>
    </section>
  );
}

export default App;
