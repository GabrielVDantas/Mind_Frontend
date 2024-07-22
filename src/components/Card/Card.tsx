import React from "react";
import H3 from "../Text/H3";
import P from "../Text/P";
import styles from "./Card.module.css";
import Project from "../../interfaces/Project";

interface Card {
  project: Project;
}

const Card: React.FC<Card> = ({ project }) => {
  return (
    <article className={styles.cardContainer} key={project.id}>
      <H3 content={project.name} />
      <img src={project.base64CoverArt} />
      <P content={project.description} />
      <P content={`${project.goal}`} />
    </article>
  );
};

export default Card;
