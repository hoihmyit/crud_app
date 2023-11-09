import styles from "./style/style.module.css";
import type { Metadata } from "next";
import Image from "next/image";
import Subheader from "../app/subheader"

export const metadata: Metadata = {
  title: "Home Page",
  description: "Home page",
};

export default function Home() {
  return (
    <>
      <Subheader />
      {/* <section className={styles.header}>
        <div className={styles.title}>The Modern Landing page for</div>
        <div className={styles.subtitle}>React developers</div>
        <div className={styles.tagline}>
          The easiest way to build a React landing page in seconds.
        </div>
        <div className={styles.btn}>Download Your Free Theme</div>
      </section> */}
      <div className={styles.Container}>
        <section className={styles.body}>
          <div className={styles.title}>Information Technology</div>
          <div className={styles.tagline}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            malesuada nisi tellus, non imperdiet nisi tempor at.
          </div>

          <div className={styles.view}>
            <div className={styles.group}>
              <div className={styles.namedetail}>Information</div>
              <div className={styles.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse bibendum, nunc non posuere consectetur, justo erat
                semper enim, non hendrerit dui odio id enim.
              </div>
            </div>
            <Image src="/Vector.png" alt="lỗi" width={374.24} height={306.74} />
          </div>

          <div className={styles.view}>
            <div className={styles.group}>
              <div className={styles.namedetail}>Information</div>
              <div className={styles.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse bibendum, nunc non posuere consectetur, justo erat
                semper enim, non hendrerit dui odio id enim.
              </div>
            </div>
            <Image
              className={styles.leftImage}
              src="/Feature.png"
              alt="lỗi"
              width={374.24}
              height={306.74}
            />
          </div>

          <div className={styles.view}>
            <div className={styles.group}>
              <div className={styles.namedetail}>Information</div>
              <div className={styles.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse bibendum, nunc non posuere consectetur, justo erat
                semper enim, non hendrerit dui odio id enim.
              </div>
            </div>
            <Image
              src="/Feature3.png"
              alt="lỗi"
              width={374.24}
              height={306.74}
            />
          </div>
        </section>

        <section className={styles.Interaction}>
          <div className={styles.interaction_content}>
            <div className={styles.Interaction_title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className={styles.Interaction_start}>
              Start your Free Trial.
            </div>
          </div>
          <div className={styles.interaction_btn}>Get Started</div>
        </section>
      </div>
    </>
  );
}
