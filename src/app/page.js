import styles from "../styles/page.module.css";
import Sermon from "../components/sermon"
import { IoOpenOutline } from "react-icons/io5";


export default function Home() {
  return (
    <div>
    <div className={styles.page}>
      <h2>What We Really Need</h2>
      <Sermon title="I Need to Be Happy" date="04/06/25" pastor="Iron Kim" scripture="Psalm 1:1-6" 
        scriptureLink="https://bible.com/bible/59/PSA.1.1-6" />
      <Sermon title="I Need to be Better" date="03/30/25" pastor="David Jones" scripture="Philippians 2:1-11" 
        scriptureLink="https://www.bible.com/bible/59/PHP.2.1-11" />
      <Sermon title="I Need to be Free" date="03/23/25" pastor="Rod Miles" scripture="Galatians 5:13-15" 
        scriptureLink="https://www.bible.com/bible/59/GAL.5.13-15" />
      <Sermon title="I Need to Feel Good" date="03/16/25" pastor="Iron Kim" scripture="Ecclesiastes 2:1-11" 
        scriptureLink="https://www.bible.com/bible/59/ECC.2.1-11" />
      <Sermon title="I Need to Be Great" date="03/09/25" pastor="Iron Kim" scripture="Genesis 11:1-9" 
        scriptureLink="https://www.bible.com/bible/59/GEN.11.1-9" />
    </div>
    <div className={styles.footer}>
      <a href="https://gracepres.com/sermons/" target="_blank" rel="noopener noreferrer">All Grace Pres Sermons</a>
    </div>
    </div>
  );
}
