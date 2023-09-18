import React from "react";
import { Container, Divider } from "ui";
import { Questions, ServiceMainPrices, WideImageWrapper } from "blocks";

import usg from "assets/images/usg_large.jpg";

import styles from "./ServiceDetails.module.scss";
import { ServicesApi } from "api";
import { useQuery } from "@tanstack/react-query";

const QUESTIONS = [
  {
    question: "В каких случаях проводится УЗИ?",
    answer:
      "С помощью ультразвукового исследования можно выявить множество заболеваний. Его данные позволяют получить специалисту дополнительные подтверждения наличия болезни или их отвергнуть, а также увидеть степень поражения органов при некоторых недугах.",
  },
  {
    question: "УЗИ при беременности",
    answer:
      "С помощью УЗИ можно провести фолликулометрию, диагностировать беременность на самой ранней стадии, изучить анатомию плода, его состояние, провести пренатальную диагностику, фолликулометрию, осуществить допплерометрию сосудов маточно-плацентарно-плодового комплекса, диагностировать заболевания матки и яичников, исследовать органы малого таза.",
  },
  {
    question: "УЗИ при заболевании почек",
    answer:
      "С помощью ультразвукового исследования возможно обнаружение кисты почки, представляющей собой жидкостное образование. Также определяются опухоли почек, гидронефроз, камни, возникающие при мочекаменной болезни. Можно выявить конкременты в мочеточниках или в просвете чашечно-лоханочной системы. Использование допплерографии позволяет изучить состояние почечных сосудов.",
  },
  {
    question: "УЗИ при заболеваниях яичек и мошонки",
    answer:
      "С помощью допплерографии при варикоцеле (расширение вен семенного канатика) можно сделать выводы о кровотоке. Используя это же исследование, специалисты Медлайф способны установить степень кровообращения при перекруте яичка. Незаменим метод УЗИ, когда нужно диагностировать опухоль яичка. Врачи, проведя исследование, могут установить факт наличия кровообращения при травмах мошонки.",
  },
  {
    question: "УЗИ при заболеваниях предстательной железы",
    answer:
      "Чтобы диагностировать заболевания предстательной железы, необходимо пройти трансректальное ультразвуковое исследование. Незаменимо оно и для диагностики рака предстательной железы. УЗИ позволяет выявить очаг поражения, измерить размер простаты, а значит, получить важнейшую информацию для раннего выявления рака. Еще одна из возможностей исследования, которую используют врачи — обнаружение доброкачественной гиперплазии предстательной железы (аденомы).",
  },
  {
    question: "УЗИ сердца",
    answer:
      "Ультразвуковое исследование сердца (эхокардиография) — высокоточное и безболезненное обследование, которое дает возможность с максимальной достоверностью получить данные о состоянии сердца и его функционировании. Диагностика большинства заболеваний сердечно-сосудистой системы может быть проведена с помощью УЗ-исследования сердца.",
  },
  {
    question: "УЗИ сосудов",
    answer:
      "Заболевания сосудов нижних конечностей, такие как варикозное расширение вен, атеросклероз, в последнее время занимают одно из первых мест среди всех болезней пациентов среднего и старшего возраста. Следует отметить, что возрастная граница так называемого среднего возраста неуклонно смещается от 40-летнего рубежа к 30-летнему. Достаточно сказать, что по статистике варикозным расширением вен нижних конечностей страдает каждая 5-я женщина и каждый 15- мужчина. Следует отметить, что в группу риска по данному заболеванию входят те, чья профессия связана с длительным пребыванием на ногах, например, парикмахеры, продавцы и другие. Провоцировать варикозную болезнь может беременность. Признаками сосудистой патологии верхних и нижних конечностей могут быть ощущение тяжести в рука и ногах, судороги, онемение, боли в конечностях, появление сосудистых звездочек, расширенных подкожных вен.",
  },
];

export const Ultrasonography: React.FC = () => {
  const { data } = useQuery(["getGroupWithServices"], () =>
    ServicesApi.getGroupWithServices("ultrasound_diagnostics")
  );

  return (
    <Container>
      <section className={styles.serviceDetails}>
        <h3 className={styles.title}>
          Для чего нужно ультразвуковое исследование
        </h3>
        <p className={styles.info}>
          Ультразвуковые исследования являются наиболее доступным, точным,
          информативным, а также сравнительно недорогим методом диагностики
          различных заболеваний и предшествующих заболеванию состояний. Даже
          если Вас ничего не беспокоит и не настораживает в своем организме,
          один раз в год необходимо делать УЗИ-обследования с целью выявления
          возможно развивающейся на ранней стадии патологии. Независимо от пола
          и возраста рекомендуется пройти следующие виды ультразвуковых
          исследований:
        </p>
        <WideImageWrapper img={usg} />

        <p className={styles.info}>
          <ul>
            <li>
              <strong>УЗИ щитовидной железы. </strong>Врач оценивает размеры,
              объем, структуру, наличие объемных образований: кист, узлов,
              изменение паращитовидных желез и окружающих лимфатических узлов.
            </li>
            <li>
              <strong>УЗИ органов брюшной полости </strong>(печени, желчного
              пузыря, поджелудочной железы, селезенки). Это оценка возрастной
              нормы в размерах, плотности и структуре. Даже небольшие изменения
              говорят о нарушении функции пищеварения. Часто врачи сталкиваются
              с так называемыми «Ультразвуковыми находками»: камнями в желчных
              протоках, желчном пузыре, печеночной ткани и паренхимы селезенки,
              раннее выявление которых позволит вовремя скорректировать режим и
              качество питания, а нередко и рекомендовать холецистэктомию во
              избежание осложнений ЖКБ (например перитонита). Многие виды
              новообразований паренхиматозных и полых органов также
              обнаруживаются на ультразвуковом исследовании и могут быть вовремя
              прооперированы в плановом прядке.
            </li>
            <li>
              <strong>УЗИ почек и мочевыделительной системы. </strong>Очень
              важно при повышении АД, затруднении или учащении мочеиспускания,
              появлении кровянистых или иных примесей в моче, болевых ощущений в
              области поясницы и надлобковой зоны.
            </li>
            <li>
              <strong>УЗИ молочных желез. </strong>Рекомендовано для девочек с
              наступлением менархе, перед началом приема оральных
              контрацептивов, при лактационных маститах УЗИ также безвредно,
              женщинам до 40-летнего возраста, а также после 40 лет параллельно
              с маммографией.
            </li>
            <li>
              <strong>УЗИ органов малого таза </strong>используется для
              диагностики и грамотного подбора терапии при следующих состояниях:
              бесплодие, подбор препаратов и отслеживание созревания фолликулов
              для стимуляции беременности, нарушение менструального цикла,
              болевой синдром различной локализации в полости малого таза,
              кровотечения, подозрения на беременность (исключить трубную
              беременность), тяжесть внизу живота, кровянистые выделения и любой
              дискомфорт в менопаузальном периоде, при отягощенном
              гинекологическом анамнезе, на ранних сроках беременности для
              оценки жизнедеятельности эмбриона (для исключения замершей
              беременности), на любых сроках беременности для оценки состояния
              плода (сердцебиение, шевеление, количество и качество околоплодных
              вод, характеристики плаценты).
            </li>
            <li>
              <strong>УЗИ предстательной железы и органов мошонки </strong>для
              мужчин является обязательным ежегодным обследованием, позволяет
              диагностировать как небольшие изменения воспалительного характера,
              так и злокачественные новообразования, наличие конкрементов в
              тканях предстательной железы и паренхиме яичек, расширение вен
              семенного канатика, варикоцеле и гидроцеле, что зачастую небходимо
              лечить оперативно.
            </li>
            <li>
              <strong>УЗИ мягких тканей. </strong>Позволяет быстро и
              безболезненно оценить подкожное и внутрикожное новообразование
              практически любой локализации, его взаимосвязь с окружающими
              тканями, прорастание либо его изолированность, структуру, размеры.
              Диагностика и осмотр в динамике посттравматических гематом,
              ушибов, растяжений, разрывов связок и мышц, липом, атером, гигром,
              воспалительных изменений в области послеоперационных рубцов, и
              прочих новобразований.
            </li>
            <li>
              <strong>УЗИ лимфатичеких узлов </strong>(паховых подмышечных, над-
              и подключичных, парастернальных, мезентериальных, всех групп
              шейных узлов и прочих). Позволяет диагностировать как
              самостоятельную патологию лимфатической системы, так и реактивные
              изменения в лимфоузлах (на фоне воспалительных заболеваний, после
              химио- и лучевой терапии).
            </li>
          </ul>
        </p>

        <Divider />
        {data && <ServiceMainPrices key="ultrasound_diagnostics" data={data.services} />}
        <Divider />
        <Questions questions={QUESTIONS} />
      </section>
    </Container>
  );
};
