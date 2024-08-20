import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Mustaf Abtidon</h2>
          <h3>Software Developer</h3>
          <p>
            I'm Mustaf Abtidon, a passionate Software Developer. My journey into
            software development is driven by my love for problem-solving and
            learning. I thrive on challenges and enjoy creating clear, organized
            code with proper documentation.
          </p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <StaticImage src="../images/banner.png" alt="mustaf" layout="fixed"  />
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
