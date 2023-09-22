import React from "react";
import { Container } from "ui";
import { PageLayout } from "../PageLayout";

import styles from "./Legal.module.scss";

export const CitizenPage: React.FC = () => (
  <PageLayout title="Обеспечение прав граждан в сфере охраны здоровья">
    <Container>
      <div className={styles.legalTop}>
        <p>РОССИЙСКАЯ ФЕДЕРАЦИЯ</p>
        <p>ФЕДЕРАЛЬНЫЙ ЗАКОН</p>
        <br />
        <p>О ПОРЯДКЕ РАССМОТРЕНИЯ ОБРАЩЕНИЙ ГРАЖДАН РОССИЙСКОЙ ФЕДЕРАЦИИ</p>
      </div>
      <div className={styles.legalBottom}>
        <p>Принят</p>
        <p>Государственной Думой</p>
        <p>21 апреля 2006 года</p>
        <p>Одобрен</p>
        <p>Советом Федерации</p>
        <p>26 апреля 2006 года</p>
      </div>
      <div className={styles.legalMiddle}>
        <p>Список изменяющих документов</p>
        <p>(в ред. Федеральных законов от 29.06.2010 N 126-ФЗ,</p>
        <p>
          от 27.07.2010 N 227-ФЗ, от 07.05.2013 N 80-ФЗ, от 02.07.2013 N 182-ФЗ,
        </p>
        <p>
          от 24.11.2014 N 357-ФЗ, от 03.11.2015 N 305-ФЗ, от 27.11.2017 N
          355-ФЗ,
        </p>
        <p>от 27.12.2018 N 528-ФЗ,</p>
        <p>с изм., внесенными Постановлением Конституционного Суда РФ</p>
        <p>от 18.07.2012 N 19-П)</p>
      </div>
      <div className={styles.infoBlock}>
        <p className={styles.firstLevelItem}>
          Статья 1. Сфера применения настоящего Федерального закона
        </p>
        <p className={styles.info}>
          1. Настоящим Федеральным законом регулируются правоотношения,
          связанные с реализацией гражданином Российской Федерации (далее также
          — гражданин) закрепленного за ним Конституцией Российской Федерации
          права на обращение в государственные органы и органы местного
          самоуправления, а также устанавливается порядок рассмотрения обращений
          граждан государственными органами, органами местного самоуправления и
          должностными лицами.
        </p>
        <p className={styles.info}>
          2. Установленный настоящим Федеральным законом порядок рассмотрения
          обращений граждан распространяется на все обращения граждан, за
          исключением обращений, которые подлежат рассмотрению в порядке,
          установленном федеральными конституционными законами и иными
          федеральными законами.
        </p>
        <p className={styles.info}>
          3. Установленный настоящим Федеральным законом порядок рассмотрения
          обращений граждан распространяется на правоотношения, связанные с
          рассмотрением обращений иностранных граждан и лиц без гражданства, за
          исключением случаев, установленных международным договором Российской
          Федерации или федеральным законом.
        </p>
        <p className={styles.info}>
          4. Установленный настоящим Федеральным законом порядок рассмотрения
          обращений граждан государственными органами, органами местного
          самоуправления и должностными лицами распространяется на
          правоотношения, связанные с рассмотрением указанными органами,
          должностными лицами обращений объединений граждан, в том числе
          юридических лиц, а также на правоотношения, связанные с рассмотрением
          обращений граждан, объединений граждан, в том числе юридических лиц,
          осуществляющими публично значимые функции государственными и
          муниципальными учреждениями, иными организациями и их должностными
          лицами.
        </p>
        <p className={styles.info}>
          (часть 4 введена Федеральным законом от 07.05.2013 N 80-ФЗ)
        </p>
      </div>
      <div className={styles.infoBlock}>
        <p className={styles.firstLevelItem}>
          Статья 2. Право граждан на обращение
        </p>
        <p className={styles.info}>
          1. Граждане имеют право обращаться лично, а также направлять
          индивидуальные и коллективные обращения, включая обращения объединений
          граждан, в том числе юридических лиц, в государственные органы, органы
          местного самоуправления и их должностным лицам, в государственные и
          муниципальные учреждения и иные организации, на которые возложено
          осуществление публично значимых функций, и их должностным лицам.
        </p>
        <p className={styles.info}>
          (часть 1 в ред. Федерального закона от 07.05.2013 N 80-ФЗ)
        </p>
        <p className={styles.info}>
          2. Граждане реализуют право на обращение свободно и добровольно.
          Осуществление гражданами права на обращение не должно нарушать права и
          свободы других лиц.
        </p>
        <p className={styles.info}>
          3. Рассмотрение обращений граждан осуществляется бесплатно.
        </p>
      </div>
      <div className={styles.infoBlock}>
        <p className={styles.firstLevelItem}>
          Статья 3. Правовое регулирование правоотношений, связанных с
          рассмотрением обращений граждан
        </p>
        <p className={styles.info}>
          1. Правоотношения, связанные с рассмотрением обращений граждан,
          регулируются Конституцией Российской Федерации, международными
          договорами Российской Федерации, федеральными конституционными
          законами, настоящим Федеральным законом и иными федеральными законами.
        </p>
        <p className={styles.info}>
          2. Законы и иные нормативные правовые акты субъектов Российской
          Федерации могут устанавливать положения, направленные на защиту права
          граждан на обращение, в том числе устанавливать гарантии права граждан
          на обращение, дополняющие гарантии, установленные настоящим
          Федеральным законом.
        </p>
      </div>
      <div className={styles.infoBlock}>
        <p className={styles.firstLevelItem}>
          Статья 4. Основные термины, используемые в настоящем Федеральном
          законе
        </p>
        <p className={styles.info}>
          Для целей настоящего Федерального закона используются следующие
          основные термины:
        </p>
        <p className={styles.info}>
          1) обращение гражданина (далее — обращение) — направленные в
          государственный орган, орган местного самоуправления или должностному
          лицу в письменной форме или в форме электронного документа
          предложение, заявление или жалоба, а также устное обращение гражданина
          в государственный орган, орган местного самоуправления;
        </p>
        <p className={styles.info}>
          (в ред. Федерального закона от 27.07.2010 N 227-ФЗ)
        </p>
        <p className={styles.info}>
          2) предложение — рекомендация гражданина по совершенствованию законов
          и иных нормативных правовых актов, деятельности государственных
          органов и органов местного самоуправления, развитию общественных
          отношений, улучшению социально-экономической и иных сфер деятельности
          государства и общества;
        </p>
        <p className={styles.info}>
          3) заявление — просьба гражданина о содействии в реализации его
          конституционных прав и свобод или конституционных прав и свобод других
          лиц, либо сообщение о нарушении законов и иных нормативных правовых
          актов, недостатках в работе государственных органов, органов местного
          самоуправления и должностных лиц, либо критика деятельности указанных
          органов и должностных лиц;
        </p>
        <p className={styles.info}>
          4) жалоба — просьба гражданина о восстановлении или защите его
          нарушенных прав, свобод или законных интересов либо прав, свобод или
          законных интересов других лиц;
        </p>
        <p className={styles.info}>
          5) должностное лицо — лицо, постоянно, временно или по специальному
          полномочию осуществляющее функции представителя власти либо
          выполняющее организационно-распорядительные,
          административно-хозяйственные функции в государственном органе или
          органе местного самоуправления.
        </p>
      </div>
      <div className={styles.infoBlock}>
        <p className={styles.firstLevelItem}>
          Статья 5. Права гражданина при рассмотрении обращения
        </p>
        <p className={styles.info}>
          При рассмотрении обращения государственным органом, органом местного
          самоуправления или должностным лицом гражданин имеет право:
        </p>
        <p className={styles.info}>
          1) представлять дополнительные документы и материалы либо обращаться с
          просьбой об их истребовании, в том числе в электронной форме;
        </p>
        <p className={styles.info}>
          (в ред. Федерального закона от 27.07.2010 N 227-ФЗ)
        </p>
        <p className={styles.info}>
          2) знакомиться с документами и материалами, касающимися рассмотрения
          обращения, если это не затрагивает права, свободы и законные интересы
          других лиц и если в указанных документах и материалах не содержатся
          сведения, составляющие государственную или иную охраняемую федеральным
          законом тайну;
        </p>
        <p className={styles.info}>
          3) получать письменный ответ по существу поставленных в обращении
          вопросов, за исключением случаев, указанных в статье 11 настоящего
          Федерального закона, а в случае, предусмотренном частью 5.1 статьи 11
          настоящего Федерального закона, на основании обращения с просьбой о
          его предоставлении, уведомление о переадресации письменного обращения
          в государственный орган, орган местного самоуправления или
          должностному лицу, в компетенцию которых входит решение поставленных в
          обращении вопросов;
        </p>
        <p className={styles.info}>
          (в ред. Федерального закона от 27.11.2017 N 355-ФЗ)
        </p>
        <p className={styles.info}>
          4) обращаться с жалобой на принятое по обращению решение или на
          действие (бездействие) в связи с рассмотрением обращения в
          административном и (или) судебном порядке в соответствии с
          законодательством Российской Федерации;
        </p>
        <p className={styles.info}>
          5) обращаться с заявлением о прекращении рассмотрения обращения.
        </p>
      </div>
      <div className={styles.infoBlock}>
        <p className={styles.firstLevelItem}>
          Статья 6. Гарантии безопасности гражданина в связи с его обращением
        </p>
        <p className={styles.info}>
          1. Запрещается преследование гражданина в связи с его обращением в
          государственный орган, орган местного самоуправления или к
          должностному лицу с критикой деятельности указанных органов или
          должностного лица либо в целях восстановления или защиты своих прав,
          свобод и законных интересов либо прав, свобод и законных интересов
          других лиц.
        </p>
        <p className={styles.info}>
          2. При рассмотрении обращения не допускается разглашение сведений,
          содержащихся в обращении, а также сведений, касающихся частной жизни
          гражданина, без его согласия. Не является разглашением сведений,
          содержащихся в обращении, направление письменного обращения в
          государственный орган, орган местного самоуправления или должностному
          лицу, в компетенцию которых входит решение поставленных в обращении
          вопросов.
        </p>
      </div>
      <div className={styles.infoBlock}>
        <p className={styles.firstLevelItem}>
          Статья 7. Требования к письменному обращению
        </p>
        <p className={styles.info}>
          1. Гражданин в своем письменном обращении в обязательном порядке
          указывает либо наименование государственного органа или органа
          местного самоуправления, в которые направляет письменное обращение,
          либо фамилию, имя, отчество соответствующего должностного лица, либо
          должность соответствующего лица, а также свои фамилию, имя, отчество
          (последнее — при наличии), почтовый адрес, по которому должны быть
          направлены ответ, уведомление о переадресации обращения, излагает суть
          предложения, заявления или жалобы, ставит личную подпись и дату.
        </p>
        <p className={styles.info}>
          2. В случае необходимости в подтверждение своих доводов гражданин
          прилагает к письменному обращению документы и материалы либо их копии.
        </p>
        <p className={styles.info}>
          3. Обращение, поступившее в государственный орган, орган местного
          самоуправления или должностному лицу в форме электронного документа,
          подлежит рассмотрению в порядке, установленном настоящим Федеральным
          законом. В обращении гражданин в обязательном порядке указывает свои
          фамилию, имя, отчество (последнее — при наличии), адрес электронной
          почты, по которому должны быть направлены ответ, уведомление о
          переадресации обращения. Гражданин вправе приложить к такому обращению
          необходимые документы и материалы в электронной форме.
        </p>
        <p className={styles.info}>
          (часть 3 в ред. Федерального закона от 27.11.2017 N 355-ФЗ)
        </p>
      </div>
      <div className={styles.infoBlock}>
        <p className={styles.firstLevelItem}>
          Статья 8. Направление и регистрация письменного обращения
        </p>
        <p className={styles.info}>
          1. Гражданин направляет письменное обращение непосредственно в тот
          государственный орган, орган местного самоуправления или тому
          должностному лицу, в компетенцию которых входит решение поставленных в
          обращении вопросов.
        </p>
        <p className={styles.info}>
          2. Письменное обращение подлежит обязательной регистрации в течение
          трех дней с момента поступления в государственный орган, орган
          местного самоуправления или должностному лицу.
        </p>
        <p className={styles.info}>
          3. Письменное обращение, содержащее вопросы, решение которых не входит
          в компетенцию данных государственного органа, органа местного
          самоуправления или должностного лица, направляется в течение семи дней
          со дня регистрации в соответствующий орган или соответствующему
          должностному лицу, в компетенцию которых входит решение поставленных в
          обращении вопросов, с уведомлением гражданина, направившего обращение,
          о переадресации обращения, за исключением случая, указанного в части 4
          статьи 11 настоящего Федерального закона.
        </p>
        <p className={styles.info}>
          3.1. Письменное обращение, содержащее информацию о фактах возможных
          нарушений законодательства Российской Федерации в сфере миграции,
          направляется в течение пяти дней со дня регистрации в территориальный
          орган федерального органа исполнительной власти в сфере внутренних дел
          и высшему должностному лицу субъекта Российской Федерации
          (руководителю высшего исполнительного органа государственной власти
          субъекта Российской Федерации) с уведомлением гражданина, направившего
          обращение, о переадресации его обращения, за исключением случая,
          указанного в части 4 статьи 11 настоящего Федерального закона.
        </p>
        <p className={styles.info}>
          (часть 3.1 введена Федеральным законом от 24.11.2014 N 357-ФЗ; в ред.
          Федерального закона от 27.12.2018 N 528-ФЗ)
        </p>
        <p className={styles.info}>
          (часть 3 в ред. Федерального закона от 27.11.2017 N 355-ФЗ)
        </p>
        <p className={styles.info}>
          4. В случае, если решение поставленных в письменном обращении вопросов
          относится к компетенции нескольких государственных органов, органов
          местного самоуправления или должностных лиц, копия обращения в течение
          семи дней со дня регистрации направляется в соответствующие
          государственные органы, органы местного самоуправления или
          соответствующим должностным лицам.
        </p>
        <p className={styles.info}>
          5. Государственный орган, орган местного самоуправления или
          должностное лицо при направлении письменного обращения на рассмотрение
          в другой государственный орган, орган местного самоуправления или
          иному должностному лицу может в случае необходимости запрашивать в
          указанных органах или у должностного лица документы и материалы о
          результатах рассмотрения письменного обращения.
        </p>
        <p className={styles.info}>
          6. Запрещается направлять жалобу на рассмотрение в государственный
          орган, орган местного самоуправления или должностному лицу, решение
          или действие (бездействие) которых обжалуется.
        </p>
        <p className={styles.info}>
          7. В случае, если в соответствии с запретом, предусмотренным частью 6
          настоящей статьи, невозможно направление жалобы на рассмотрение в
          государственный орган, орган местного самоуправления или должностному
          лицу, в компетенцию которых входит решение поставленных в обращении
          вопросов, жалоба возвращается гражданину с разъяснением его права
          обжаловать соответствующие решение или действие (бездействие) в
          установленном порядке в суд.
        </p>
      </div>
      <div className={styles.infoBlock}>
        <p className={styles.firstLevelItem}>
          Статья 9. Обязательность принятия обращения к рассмотрению
        </p>
        <p className={styles.info}>
          1. Обращение, поступившее в государственный орган, орган местного
          самоуправления или должностному лицу в соответствии с их компетенцией,
          подлежит обязательному рассмотрению.
        </p>
        <p className={styles.info}>
          2. В случае необходимости рассматривающие обращение государственный
          орган, орган местного самоуправления или должностное лицо может
          обеспечить его рассмотрение с выездом на место.
        </p>
      </div>
      <div className={styles.infoBlock}>
        <p className={styles.firstLevelItem}>
          Статья 10. Рассмотрение обращения
        </p>
        <p className={styles.info}>
          1. Государственный орган, орган местного самоуправления или
          должностное лицо:
        </p>
        <p className={styles.info}>
          1) обеспечивает объективное, всестороннее и своевременное рассмотрение
          обращения, в случае необходимости — с участием гражданина,
          направившего обращение;
        </p>
        <p className={styles.info}>
          2) запрашивает, в том числе в электронной форме, необходимые для
          рассмотрения обращения документы и материалы в других государственных
          органах, органах местного самоуправления и у иных должностных лиц, за
          исключением судов, органов дознания и органов предварительного
          следствия;
        </p>
        <p className={styles.info}>
          (в ред. Федерального закона от 27.07.2010 N 227-ФЗ)
        </p>
        <p className={styles.info}>
          3) принимает меры, направленные на восстановление или защиту
          нарушенных прав, свобод и законных интересов гражданина;
        </p>
        <p className={styles.info}>
          4) дает письменный ответ по существу поставленных в обращении
          вопросов, за исключением случаев, указанных в статье 11 настоящего
          Федерального закона;
        </p>
        <p className={styles.info}>
          5) уведомляет гражданина о направлении его обращения на рассмотрение в
          другой государственный орган, орган местного самоуправления или иному
          должностному лицу в соответствии с их компетенцией.
        </p>
        <p className={styles.info}>
          2. Государственный орган, орган местного самоуправления или
          должностное лицо по направленному в установленном порядке запросу
          государственного органа, органа местного самоуправления или
          должностного лица, рассматривающих обращение, обязаны в течение 15
          дней предоставлять документы и материалы, необходимые для рассмотрения
          обращения, за исключением документов и материалов, в которых
          содержатся сведения, составляющие государственную или иную охраняемую
          федеральным законом тайну, и для которых установлен особый порядок
          предоставления.
        </p>
        <p className={styles.info}>
          3. Ответ на обращение подписывается руководителем государственного
          органа или органа местного самоуправления, должностным лицом либо
          уполномоченным на то лицом.
        </p>
        <p className={styles.info}>
          4. Ответ на обращение направляется в форме электронного документа по
          адресу электронной почты, указанному в обращении, поступившем в
          государственный орган, орган местного самоуправления или должностному
          лицу в форме электронного документа, и в письменной форме по почтовому
          адресу, указанному в обращении, поступившем в государственный орган,
          орган местного самоуправления или должностному лицу в письменной
          форме. Кроме того, на поступившее в государственный орган, орган
          местного самоуправления или должностному лицу обращение, содержащее
          предложение, заявление или жалобу, которые затрагивают интересы
          неопределенного круга лиц, в частности на обращение, в котором
          обжалуется судебное решение, вынесенное в отношении неопределенного
          круга лиц, ответ, в том числе с разъяснением порядка обжалования
          судебного решения, может быть размещен с соблюдением требований части
          2 статьи 6 настоящего Федерального закона на официальном сайте данных
          государственного органа или органа местного самоуправления в
          информационно-телекоммуникационной сети «Интернет».
        </p>
        <p className={styles.info}>
          (часть 4 в ред. Федерального закона от 27.11.2017 N 355-ФЗ)
        </p>
      </div>
      <div className={styles.infoBlock}>
        <p className={styles.firstLevelItem}>
          Статья 11. Порядок рассмотрения отдельных обращений
        </p>
        <p className={styles.info}>
          1. В случае, если в письменном обращении не указаны фамилия
          гражданина, направившего обращение, или почтовый адрес, по которому
          должен быть направлен ответ, ответ на обращение не дается. Если в
          указанном обращении содержатся сведения о подготавливаемом,
          совершаемом или совершенном противоправном деянии, а также о лице, его
          подготавливающем, совершающем или совершившем, обращение подлежит
          направлению в государственный орган в соответствии с его компетенцией.
        </p>
        <p className={styles.info}>
          (в ред. Федерального закона от 02.07.2013 N 182-ФЗ)
        </p>
        <p className={styles.info}>
          2. Обращение, в котором обжалуется судебное решение, в течение семи
          дней со дня регистрации возвращается гражданину, направившему
          обращение, с разъяснением порядка обжалования данного судебного
          решения.
        </p>
        <p className={styles.info}>
          (в ред. Федерального закона от 29.06.2010 N 126-ФЗ)
        </p>
        <p className={styles.info}>
          3. Государственный орган, орган местного самоуправления или
          должностное лицо при получении письменного обращения, в котором
          содержатся нецензурные либо оскорбительные выражения, угрозы жизни,
          здоровью и имуществу должностного лица, а также членов его семьи,
          вправе оставить обращение без ответа по существу поставленных в нем
          вопросов и сообщить гражданину, направившему обращение, о
          недопустимости злоупотребления правом.
        </p>
        <p className={styles.info}>
          4. В случае, если текст письменного обращения не поддается прочтению,
          ответ на обращение не дается и оно не подлежит направлению на
          рассмотрение в государственный орган, орган местного самоуправления
          или должностному лицу в соответствии с их компетенцией, о чем в
          течение семи дней со дня регистрации обращения сообщается гражданину,
          направившему обращение, если его фамилия и почтовый адрес поддаются
          прочтению.
        </p>
        <p className={styles.info}>
          (в ред. Федерального закона от 29.06.2010 N 126-ФЗ)
        </p>
        <p className={styles.info}>
          4.1. В случае, если текст письменного обращения не позволяет
          определить суть предложения, заявления или жалобы, ответ на обращение
          не дается и оно не подлежит направлению на рассмотрение в
          государственный орган, орган местного самоуправления или должностному
          лицу в соответствии с их компетенцией, о чем в течение семи дней со
          дня регистрации обращения сообщается гражданину, направившему
          обращение.
        </p>
        <p className={styles.info}>
          (часть 4.1 введена Федеральным законом от 27.11.2017 N 355-ФЗ)
        </p>
        <p className={styles.info}>
          5. В случае, если в письменном обращении гражданина содержится вопрос,
          на который ему неоднократно давались письменные ответы по существу в
          связи с ранее направляемыми обращениями, и при этом в обращении не
          приводятся новые доводы или обстоятельства, руководитель
          государственного органа или органа местного самоуправления,
          должностное лицо либо уполномоченное на то лицо вправе принять решение
          о безосновательности очередного обращения и прекращении переписки с
          гражданином по данному вопросу при условии, что указанное обращение и
          ранее направляемые обращения направлялись в один и тот же
          государственный орган, орган местного самоуправления или одному и тому
          же должностному лицу. О данном решении уведомляется гражданин,
          направивший обращение.
        </p>
        <p className={styles.info}>
          (в ред. Федерального закона от 02.07.2013 N 182-ФЗ)
        </p>
        <p className={styles.info}>
          5.1. В случае поступления в государственный орган, орган местного
          самоуправления или должностному лицу письменного обращения,
          содержащего вопрос, ответ на который размещен в соответствии с частью
          4 статьи 10 настоящего Федерального закона на официальном сайте данных
          государственного органа или органа местного самоуправления в
          информационно-телекоммуникационной сети «Интернет», гражданину,
          направившему обращение, в течение семи дней со дня регистрации
          обращения сообщается электронный адрес официального сайта в
          информационно-телекоммуникационной сети «Интернет», на котором
          размещен ответ на вопрос, поставленный в обращении, при этом
          обращение, содержащее обжалование судебного решения, не возвращается.
        </p>
        <p className={styles.info}>
          (часть 5.1 введена Федеральным законом от 27.11.2017 N 355-ФЗ)
        </p>
        <p className={styles.info}>
          6. В случае, если ответ по существу поставленного в обращении вопроса
          не может быть дан без разглашения сведений, составляющих
          государственную или иную охраняемую федеральным законом тайну,
          гражданину, направившему обращение, сообщается о невозможности дать
          ответ по существу поставленного в нем вопроса в связи с
          недопустимостью разглашения указанных сведений.
        </p>
        <p className={styles.info}>
          7. В случае, если причины, по которым ответ по существу поставленных в
          обращении вопросов не мог быть дан, в последующем были устранены,
          гражданин вправе вновь направить обращение в соответствующий
          государственный орган, орган местного самоуправления или
          соответствующему должностному лицу.
        </p>
      </div>
      <div className={styles.infoBlock}>
        <p className={styles.firstLevelItem}>
          Статья 12. Сроки рассмотрения письменного обращения
        </p>
        <p className={styles.info}>
          1. Письменное обращение, поступившее в государственный орган, орган
          местного самоуправления или должностному лицу в соответствии с их
          компетенцией, рассматривается в течение 30 дней со дня регистрации
          письменного обращения, за исключением случая, указанного в части 1.1
          настоящей статьи.
        </p>
        <p className={styles.info}>
          (в ред. Федерального закона от 24.11.2014 N 357-ФЗ)
        </p>
        <p className={styles.info}>
          1.1. Письменное обращение, поступившее высшему должностному лицу
          субъекта Российской Федерации (руководителю высшего исполнительного
          органа государственной власти субъекта Российской Федерации) и
          содержащее информацию о фактах возможных нарушений законодательства
          Российской Федерации в сфере миграции, рассматривается в течение 20
          дней со дня регистрации письменного обращения.
        </p>
        <p className={styles.info}>
          (часть 1.1 введена Федеральным законом от 24.11.2014 N 357-ФЗ)
        </p>
        <p className={styles.info}>
          2. В исключительных случаях, а также в случае направления запроса,
          предусмотренного частью 2 статьи 10 настоящего Федерального закона,
          руководитель государственного органа или органа местного
          самоуправления, должностное лицо либо уполномоченное на то лицо вправе
          продлить срок рассмотрения обращения не более чем на 30 дней, уведомив
          о продлении срока его рассмотрения гражданина, направившего обращение.
        </p>
      </div>
      <div className={styles.infoBlock}>
        <p className={styles.firstLevelItem}>Статья 13. Личный прием граждан</p>
        <p className={styles.info}>
          1. Личный прием граждан в государственных органах, органах местного
          самоуправления проводится их руководителями и уполномоченными на то
          лицами. Информация о месте приема, а также об установленных для приема
          днях и часах доводится до сведения граждан.
        </p>
        <p className={styles.info}>
          2. При личном приеме гражданин предъявляет документ, удостоверяющий
          его личность.
        </p>
        <p className={styles.info}>
          3. Содержание устного обращения заносится в карточку личного приема
          гражданина. В случае, если изложенные в устном обращении факты и
          обстоятельства являются очевидными и не требуют дополнительной
          проверки, ответ на обращение с согласия гражданина может быть дан
          устно в ходе личного приема, о чем делается запись в карточке личного
          приема гражданина. В остальных случаях дается письменный ответ по
          существу поставленных в обращении вопросов.
        </p>
        <p className={styles.info}>
          4. Письменное обращение, принятое в ходе личного приема, подлежит
          регистрации и рассмотрению в порядке, установленном настоящим
          Федеральным законом.
        </p>
        <p className={styles.info}>
          5. В случае, если в обращении содержатся вопросы, решение которых не
          входит в компетенцию данных государственного органа, органа местного
          самоуправления или должностного лица, гражданину дается разъяснение,
          куда и в каком порядке ему следует обратиться.
        </p>
        <p className={styles.info}>
          6. В ходе личного приема гражданину может быть отказано в дальнейшем
          рассмотрении обращения, если ему ранее был дан ответ по существу
          поставленных в обращении вопросов.
        </p>
        <p className={styles.info}>
          7. Отдельные категории граждан в случаях, предусмотренных
          законодательством Российской Федерации, пользуются правом на личный
          прием в первоочередном порядке.
        </p>
        <p className={styles.info}>
          (часть 7 введена Федеральным законом от 03.11.2015 N 305-ФЗ)
        </p>
      </div>
      <div className={styles.infoBlock}>
        <p className={styles.firstLevelItem}>
          Статья 14. Контроль за соблюдением порядка рассмотрения обращений
        </p>
        <p className={styles.info}>
          Государственные органы, органы местного самоуправления и должностные
          лица осуществляют в пределах своей компетенции контроль за соблюдением
          порядка рассмотрения обращений, анализируют содержание поступающих
          обращений, принимают меры по своевременному выявлению и устранению
          причин нарушения прав, свобод и законных интересов граждан.
        </p>
      </div>
      <div className={styles.infoBlock}>
        <p className={styles.firstLevelItem}>
          Статья 15. Ответственность за нарушение настоящего Федерального закона
        </p>
        <p className={styles.info}>
          Лица, виновные в нарушении настоящего Федерального закона, несут
          ответственность, предусмотренную законодательством Российской
          Федерации.
        </p>
      </div>
      <div className={styles.infoBlock}>
        <p className={styles.firstLevelItem}>
          Статья 16. Возмещение причиненных убытков и взыскание понесенных
          расходов при рассмотрении обращений
        </p>
        <p className={styles.info}>
          1. Гражданин имеет право на возмещение убытков и компенсацию
          морального вреда, причиненных незаконным действием (бездействием)
          государственного органа, органа местного самоуправления или
          должностного лица при рассмотрении обращения, по решению суда.
        </p>
        <p className={styles.info}>
          2. В случае, если гражданин указал в обращении заведомо ложные
          сведения, расходы, понесенные в связи с рассмотрением обращения
          государственным органом, органом местного самоуправления или
          должностным лицом, могут быть взысканы с данного гражданина по решению
          суда.
        </p>
      </div>
      <div className={styles.infoBlock}>
        <p className={styles.firstLevelItem}>
          Статья 17. Признание не действующими на территории Российской
          Федерации отдельных нормативных правовых актов Союза ССР
        </p>
        <p className={styles.info}>
          Признать не действующими на территории Российской Федерации:
        </p>
        <p className={styles.info}>
          1) Указ Президиума Верховного Совета СССР от 12 апреля 1968 года N
          2534-VII «О порядке рассмотрения предложений, заявлений и жалоб
          граждан» (Ведомости Верховного Совета СССР, 1968, N 17, ст. 144);
        </p>
        <p className={styles.info}>
          2) Закон СССР от 26 июня 1968 года N 2830-VII «Об утверждении Указа
          Президиума Верховного Совета СССР «О порядке рассмотрения предложений,
          заявлений и жалоб граждан» (Ведомости Верховного Совета СССР, 1968, N
          27, ст. 237);
        </p>
        <p className={styles.info}>
          3) Указ Президиума Верховного Совета СССР от 4 марта 1980 года N
          1662-X «О внесении изменений и дополнений в Указ Президиума Верховного
          Совета СССР «О порядке рассмотрения предложений, заявлений и жалоб
          граждан» (Ведомости Верховного Совета СССР, 1980, N 11, ст. 192);
        </p>
        <p className={styles.info}>
          4) Закон СССР от 25 июня 1980 года N 2365-X «Об утверждении Указов
          Президиума Верховного Совета СССР о внесении изменений и дополнений в
          некоторые законодательные акты СССР» (Ведомости Верховного Совета
          СССР, 1980, N 27, ст. 540) в части, касающейся утверждения Указа
          Президиума Верховного Совета СССР «О внесении изменений и дополнений в
          Указ Президиума Верховного Совета СССР «О порядке рассмотрения
          предложений, заявлений и жалоб граждан»;
        </p>
        <p className={styles.info}>
          5) Указ Президиума Верховного Совета СССР от 2 февраля 1988 года N
          8422-XI «О внесении дополнений в Указ Президиума Верховного Совета
          СССР «О порядке рассмотрения предложений, заявлений и жалоб граждан»
          (Ведомости Верховного Совета СССР, 1988, N 6, ст. 94);
        </p>
        <p className={styles.info}>
          6) Закон СССР от 26 мая 1988 года N 9004-XI «Об утверждении Указов
          Президиума Верховного Совета СССР о внесении изменений и дополнений в
          законодательные акты СССР» (Ведомости Верховного Совета СССР, 1988, N
          22, ст. 361) в части, касающейся утверждения Указа Президиума
          Верховного Совета СССР «О внесении дополнений в Указ Президиума
          Верховного Совета СССР «О порядке рассмотрения предложений, заявлений
          и жалоб граждан».
        </p>
      </div>
      <div className={styles.infoBlock}>
        <p className={styles.firstLevelItem}>
          Статья 18. Вступление в силу настоящего Федерального закона
        </p>
        <p className={styles.info}>
          Настоящий Федеральный закон вступает в силу по истечении 180 дней
          после дня его официального опубликования.
        </p>
      </div>
      <br />
      <div className={styles.legalBottom}>
        <p>Президент</p>
        <p>Российской Федерации</p>
        <p>В.ПУТИН</p>
      </div>
      <div className={styles.legalLeft}>
        <p>Москва, Кремль</p>
        <p>2 мая 2006 года</p>
        <p>N 59-ФЗ</p>
      </div>
    </Container>
  </PageLayout>
);
