import React from "react";
import { Container, Divider } from "ui";
import { Questions, ServiceMainPrices, WideImageWrapper } from "blocks";

import tomographyProcess from "assets/images/tomography_large.jpg";
import tomographImage from "assets/images/tomography.jpg";

import styles from "./ServiceDetails.module.scss";

const QUESTIONS = [
  {
    question: "Сколько КТ можно делать в течение 1 года?",
    answer:
      "В соответствии с действующими нормами радиационной безопасности (ФЗ РФ «О радиационной безопасности населения»), а также данными PubMed, СанПин и НРБ, суммарная доза рентгенологического излучения в год не должна превышать 15-20 мЗв. В исключительных ситуациях, при наличии жизненных показаний к КТ, лучевая нагрузка может быть увеличена. Таким образом, пациенту следует знать, что в год не рекомендуется",
  },
  {
    question:
      "Насколько эффективна КТ легких при постановке диагноза COVID-19?",
    answer:
      "Компьютерная томография легких считается основным методом диагностики вирусной пневмонии, ассоциированной с COVID-19, наряду с лабораторными анализами и консультацией специалиста. Вирусная пневмония — наиболее распространенное осложнение новой коронавирусной инфекции, которое является ведущей причиной летальных исходов. При наличии у пациента симптомов острого респираторного заболевания (кашель, одышка, затрудненное дыхание), следует исключить воспаление легких. Только на компьютерной томографии грудной клетки можно выявить даже незначительные (5% и менее) признаки нарушения пневматизации легких — лишнюю жидкость (экссудат) в альвеолах, фиброз, уплотнение интерстиция. По форме, локализации, плотности «матовых стекол», а также по другим признакам (при их наличии), врач может дать первичное дифференциальное заключение — действительно ли пневмония вызвана вирусом SARS-CoV-2 или иным вирусом, бактерией, грибком. Однако у некоторых пациентов специфические признаки коронавируса на КТ выражены недостаточно (ранняя стадия заболевания, небольшие изменения). Вид возбудителя инфекционного заболевания определяется с помощью лабораторных анализов. Часто на КТ видны признаки присоединения бактериальной инфекции Staphylococcus aureus (MSSA, MRSA), Streptococcus pneumoniae или Haemophilus influenza к имеющимся воспалительным очагам новой коронавирусной инфекции.",
  },
  {
    question: "Можно ли делать два КТ подряд?",
    answer:
      "Иногда после первого обследования возникает необходимость повторить КТ, но уже с контрастом, чтобы уточнить, подтвердить или опровергнуть более ранний результат. Также маленький перерыв между КТ может быть в том случае, если нужно проконтролировать результаты лечения или хирургического вмешательства. В таком случае повторное исследование целесообразно и безопасно, то есть не превышает допустимой нормы рентгеновского излучения. Чтобы возникла угроза для жизни и здоровья, нужно делать около 50 компьютерных томограмм головного мозга или 10 КТ брюшной полости подряд.",
  },
  {
    question: "Сопровождается ли проведение КТ болезненными ощущениями?",
    answer:
      "Процедура КТ абсолютно безболезненна, проводится бесконтактным методом. Единственное неудобство — это необходимость неподвижно лежать в течение нескольких минут.",
  },
  {
    question: "Сколько времени длится компьютерная томография?",
    answer:
      "Время диагностики напрямую зависит от технических возможностей томографа, зоны исследования, перечня задач, которые стоят перед врачом. В среднем исследование длится 5-20 минут, обработка результатов занимает от 1 до 3 часов. Иногда, в сложных диагностических ситуациях, обработка результатов КТ-исследования может занять значительно больше времени, что продиктовано необходимостью проведения консилиума специалистов.",
  },
  {
    question: "Что лучше - КТ или МРТ?",
    answer:
      "Учитывая немалое количество подводных камней, важно соблюдать основной принцип – метод исследования определяет и назначает врач. Если действие КТ основано на рентгеновском излучении, то в основе МРТ лежит эффект магнитного резонанса, не несущего риска облучения. МРТ не позволяет отчётливо анализировать состояние паренхимы лёгких, поэтому исследование органов грудной клетки и легких — это всегда КТ. Зато МРТ позволяет лучше оценить связки, мениски, поэтому суставы, особенно коленный, голеностопный — прерогатива МРТ. В свою очередь компьютерная томография лучше определяет состояние костной ткани. Большинство отделов позвоночника и спинного мозга опять-таки требует проведения магнитного резонанса, а вот пояснично-крестцовый отдел предпочтительнее изучать при помощи компьютерной томографии. При плановой диагностике, определении кист, постинсультных изменений, внутричерепных новообразований показана МРТ, но, если речь идёт о неотложной диагностике (инсульт, гематома) в этом случае информативна только КТ.",
  },
];

export const Tomography: React.FC = () => {
  return (
    <Container>
      <section className={styles.serviceDetails}>
        <h3 className={styles.title}>Для чего нужна компьютерная томография</h3>
        <p className={styles.info}>
          Чтобы провести полную диагностику различных органов человека не всегда
          достаточно сдать анализы. С помощью компьютерной томографии можно
          исследовать практически любой орган — от мозга до костей. Часто
          компьютерную томографию используют для уточнения патологий, выявленных
          другими методами. Например, при гайморите сначала делают
          рентгенографию придаточных пазух носа, а затем для уточнения диагноза
          проводят компьютерную томографию.
        </p>
        <WideImageWrapper img={tomographyProcess} />

        <p className={styles.info}>
          В отличие от обычного рентгена, на котором лучше всего видны кости и
          воздухоносные структуры (легкие), на КТ отлично видны и мягкие ткани
          (томография мозга, печень, и т.д.), это дает возможность
          диагностировать болезни на ранних стадиях, например, обнаружить
          опухоль, пока она еще небольших размеров и поддается хирургическому
          лечению.
        </p>
        <div className={styles.additionalInfo}>
          <p className={styles.description}>
            С появлением спиральных и мультиспиральных томографов компьютерная
            томография сосудов применяется в настоящее время все чаще. Как
            правило, требуется внутривенное введение контрастного вещества,
            которое позволяет получить расширенную информацию о состоянии
            организма.
          </p>
          <div className={styles.imageWrapper}>
            <img src={tomographImage} alt="" />
          </div>
        </div>
        <Divider />
        <ServiceMainPrices />
        <Divider />
        <Questions questions={QUESTIONS} />
      </section>
    </Container>
  );
};
