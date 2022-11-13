import styles from "./styles.module.css";

function Home() {
  return (
    <section className={styles.home_section} id="home">
      <p className={styles.greet}>Hey, Hi my name is</p>
      <h1 className={styles.heading_1}>Siddharth Khuntwal.</h1>
      <h1 className={styles.heading_2}>I build for the Community.</h1>
      <p className={styles.desc}>
        I'm a budding software developer who specializes in design, builds,
        solves. I create content and write tech blogs, I have built product
        documentation at{" "}
        <a href="https://ravenapp.dev/" className={styles.color1}>
          Raven
        </a>
        . I am a community person and currently I am leading Google Developers
        Club at my University.
      </p>
      <a href="#work">
        <button className={styles.btn}>Check out my work !</button>
      </a>
    </section>
  );
}

export default Home;
