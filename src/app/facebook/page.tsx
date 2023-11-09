"use client";
import styles from "./style.module.css";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

const facebook = () => {
  const router = useRouter();
  const handleBtn = () => {
    router.push("/");
  };
  return (
    <div>
      <p className={styles.title}>Facebook</p>
      <div className={styles.container}>
        <Button variant="primary">Hỏi Dân IT</Button>
        <Button variant="warning" onClick={() => handleBtn()}>
          {" "}
          back home
        </Button>
      </div>
    </div>
  );
};

export default facebook;
