import React from "react";
import { Container, Divider } from "ui";
import { Questions, ServiceMainPrices, WideImageWrapper } from "blocks";

import cardiogramProcess from "assets/images/cardiogram_large.jpg";

import styles from "./ServiceDetails.module.scss";

const QUESTIONS = [
  {
    question: "Какие болезни сердца показывает ЭКГ?",
    answer:
      "ЭКГ – один из наиболее точных методов для диагностики нарушений ритма. С ее помощью можно выявить причину нарушения ритма, местонахождение патологического очага возбуждения, вид аритмии. Также хорошо на электрокардиограмме отображается частичная или полная блокада проводящих путей сердца. Важную роль электрокардиография играет в диагностике острого инфаркта миокарда. Изменения при инфаркте четко отображаются на ленте, в сочетании с клиникой это позволяет своевременно начать лечение и во многих случаях спасти больного. Поэтому у врачей или фельдшеров скорой помощи на вызовах к больным с жалобами на боли в сердце всегда при себе портативный аппарат, чтобы иметь возможность сделать кардиограмму сердца на дому.",
  },
  {
    question: "ЭКГ под нагрузкой?",
    answer:
      "ЭКГ под нагрузкой (стресс-тест, или тредмил-тест) делают для уточнения диагноза ишемической болезни сердца, для контроля сердечной деятельности после аортокоронарного шунтирования при инфаркте миокарда, для постановки диагноза и отслеживания динамики некоторых пороков сердца. Исследование проводится и здоровым людям – профессиональным спортсменам, летчикам гражданской и военной авиации, кандидатам на службу в силовых структурах, контрактную службу в армии. Чтобы подготовиться к ЭКГ с нагрузкой, следует отказаться от чая, кофе, алкогольных и энергетических напитков, курения в течение суток до процедуры. Последний прием пищи должен быть за 3-4 часа до записи электрокардиограммы. Интенсивные физические нагрузки необходимо прекратить за двое суток до исследования. Мужчинам за трое суток до процедуры нужно отказаться от приема средств, улучшающих потенцию («Виагра», «Сиалис»).",
  },
  {
    question: "Отличие ЭКГ от ЭХО-КГ?",
    answer:
      "Эхо-КГ, или эхокардиография, которую называют также УЗИ сердца – процедура, которая кардинально отличается от ЭКГ. Эхокардиография – ультразвуковое неинвазивное исследование сердца и сосудов. Высокочастотный звук, испускаемый датчиком эхокардиографа, проходя через ткани сердца, отражается от них и регистрируется этим же датчиком. Результат выводится в виде изображения на монитор. УЗИ и ЭКГ – разные методы, поэтому нельзя сказать, что лучше проверять состояние сердца каким-то из них. Для оценки деятельности сердечн",
  },
  {
    question: "Показания для электрокардиографии",
    answer: (
      <span>
        <p>
          Сделать ЭКГ стоит при наличии любого из симптомов, который может быть
          вызван проблемами в работе сердца:
        </p>
        <ul>
          <li>боль в районе груди;</li>
          <li>повышенное давление;</li>
          <li>жжение или дискомфорт в области сердца;</li>
          <li>одышка;</li>
          <li>ощутимые перебои сердцебиения;</li>
          <li>случаи потери сознания.</li>
        </ul>
        <p>
          Помимо этого выполнение ЭКГ (как и периодическое посещение кардиолога
          для профилактики) необходимо при:
        </p>
        <ul>
          <li>
            достижении 40-летнего возраста (риск заболеваний сердца возрастает);
          </li>
          <li>перенесенном инфаркте и/или инсульте;</li>
          <li>
            наличии таких заболеваний, как сахарный диабет, ревматизм,
            хронические болезни и т.д.;
          </li>
          <li>
            неблагополучных результатах анализов крови, включая пониженный
            гемоглобин, повышенный холестерин и т.д.;
          </li>
          <li>планировании хирургической операции.</li>
        </ul>
        <p>
          Также электрокардиографию обязательно нужно делать беременным женщинам
          и профессиональным спортсменам. Противопоказаний для такой манипуляции
          нет, то есть сделать ЭКГ можно пациентам в любом состоянии и без
          каких-либо ограничений в плане возраста.
        </p>
      </span>
    ),
  },
];

export const Cardiogram: React.FC = () => {
  return (
    <Container>
      <section className={styles.serviceDetails}>
        <h3 className={styles.title}>Для чего нужен электрокардиограф</h3>
        <p className={styles.info}>
          Электрокардиограф – прибор для регистрации электрических импульсов,
          образующихся при работе сердца. Используются для проведения
          диагностического обследования и мониторинга сердечной деятельности при
          лечении – электрокардиографии.
        </p>
        <WideImageWrapper img={cardiogramProcess} />

        <p className={styles.info}>
          В настоящее время электрокардиограф — обязательный атрибут любой
          бригады скорой и неотложной медицинской помощи, реанимационных или
          кардиологических служб, поликлиники и госпиталя. Контроль над
          функционированием сердца с помощью регистрации электрокардиограмм
          (ЭКГ) нужен не только пациентам кардиологических клиник при
          прохождении курса лечения, но и здоровым людям для выявления
          отклонений в сердечно-сосудистой системе на ранних стадиях.
          Электрокардиограф необходим также спортсменам, военнослужащим,
          пожарным и представителям других профессий, чья деятельность сопряжена
          с повышенными физическими и психологическими нагрузками.
        </p>
        <Divider />
        <ServiceMainPrices />
        <Divider />
        <Questions questions={QUESTIONS} />
      </section>
    </Container>
  );
};