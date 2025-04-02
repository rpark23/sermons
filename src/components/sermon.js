"use client"
import { useRef } from "react";
import styles from "../styles/page.module.css";

export default function Sermon(props) {
  const audioRef = useRef(null);
  const {title, date, pastor, scripture, scriptureLink} = props;
  const sermonDate = date.replaceAll("/", "_");
  
  return (
    <div className={styles.sermonContainer}>
      <h3>{title} &#40;{date}&#41; - {pastor}</h3>
      <audio className={styles.sermon} ref={audioRef} controls>
        <source src={`/sermons/${sermonDate}.mp3`} type="audio/mp3" />
      </audio>
      <a href={scriptureLink} target="_blank" rel="noopener noreferrer">{scripture}</a>
    </div>
  );
}
