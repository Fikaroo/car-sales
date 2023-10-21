import styles from "./page.module.css";
import CarPurchase from "./components/CarPurchase/CarPurchase";

export default function Home() {
  return (
    <main className={styles.main}>
      <CarPurchase />
    </main>
  );
}
