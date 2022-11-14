// import { StickyNote2Sharp } from "@mui/icons-material";
import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
  return (
    <section id="about">
      <Heading index="01" heading="About Me" />
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.desc}>
            Hey, Hi I'm Siddharth and I am a Creator, Developer & Designer. I
            create content on {""}
            <a
              href="https://www.youtube.com/@siddlyf"
              className={styles.color1}
            >
              YouTube{" "}
            </a>
            {""}
            and write some cool{" "}
            <a href="https://www.sidlyf.com/" className={styles.color1}>
              Blogs{" "}
            </a>
            about trending tech and my experience. Also, I'm a Fullstack MERN
            developer specialising in Front-End technologies. I'm also a digital
            artist by night, I like to poke around with colours and bring my
            ideas to life.
          </p>
          <p className={styles.desc}>
            Currently I'm a Pre-Final year student pursuing B.Tech in Computer
            Science at{" "}
            <a href="https://lnct.ac.in/" className={styles.color1}>
              {" "}
              Lakshmi Narain College Of Technology, Bhopal, India.
            </a>{" "}
            <br></br>I have built accessible, inclusive products at start-ups
            like{" "}
            <a href="https://ravenapp.dev/" className={styles.color1}>
              Raven
            </a>{" "}
            &{" "}
            <a href="##" className={styles.color1}>
              DS Dairy Systems.
            </a>{" "}
            Also a community evangelist currently leading the local{" "}
            <a
              href="https://gdsc.community.dev/lakshmi-narain-college-of-technology-lnct-bhopal/"
              className={styles.color1}
            >
              GDSC (Google Developers Club)
            </a>{" "}
            chapter at my university with over 1K+ community members.
          </p>
        </div>

        <div className={styles.right}>
          <img
            src="./images/sidlyf-1.jpg"
            alt="profile"
            className={styles.profile_img}
          />
          <div className={styles.img_border}></div>
        </div>
      </div>
    </section>
  );
}

export default About;
