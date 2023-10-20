import Image from "next/image";
import styles from "./page.module.css";
import {
  Slider,
  SliderContent,
  SliderTrigger,
} from "./components/ui/slider/slider";

export default function Home() {
  return (
    <main className={styles.main}>
      <Slider>
        <SliderTrigger>Open</SliderTrigger>
        <SliderContent>
          <div></div>
        </SliderContent>
      </Slider>
    </main>
  );
}
