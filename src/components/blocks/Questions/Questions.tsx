import React from "react";
import { Container, Accordion } from "ui";

import styles from "./Questions.module.scss";
import { IQuestions } from "interfaces";

export const Questions: React.FC<IQuestions> = ({ questions }) => {
  return (
    <Container>
      <section className={styles.questions}>
        <h3 className={styles.title}>Часто задаваемые вопросы</h3>
        {questions.map(({ question, answer }) => (
          <Accordion key={question} title={question} content={answer} />
        ))}
      </section>
    </Container>
  );
};
