import React from "react";
import { Container } from "ui";
import { PageLayout } from "../PageLayout";

import styles from "./Legal.module.scss";

export const LawPage: React.FC = () => (
  <PageLayout title="Правила предоставления медицинскими организациями платных медицинских услуг">
    <Container>
      <div className={styles.legalTop}>
        <p>ПРАВИТЕЛЬСТВО РОССИЙСКОЙ ФЕДЕРАЦИИ</p>
        <br />
        <p>ПОСТАНОВЛЕНИЕ</p>
        <p>от 4 октября 2012 г. N 1006</p>
        <br />
        <p>ОБ УТВЕРЖДЕНИИ ПРАВИЛ</p>
        <p>ПРЕДОСТАВЛЕНИЯ МЕДИЦИНСКИМИ ОРГАНИЗАЦИЯМИ ПЛАТНЫХ</p>
        <p>МЕДИЦИНСКИХ УСЛУГ</p>
      </div>
      <br />
      <p className={styles.firstLevelItem}>
        В соответствии с частью 7 статьи 84 Федерального закона «Об основах
        охраны здоровья граждан в Российской Федерации» и статьей 39.1 Закона
        Российской Федерации «О защите прав потребителей» Правительство
        Российской Федерации постановляет:
      </p>
      <p className={styles.firstLevelItem}>
        Утвердить прилагаемые Правила предоставления медицинскими организациями
        платных медицинских услуг.
      </p>
      <p className={styles.firstLevelItem}>
        Признать утратившим силу постановление Правительства Российской
        Федерации от 13 января 1996 г. N 27 «Об утверждении Правил
        предоставления платных медицинских услуг населению медицинскими
        учреждениями» (Собрание законодательства Российской Федерации, 1996, N
        3, ст. 194).
      </p>
      <p className={styles.firstLevelItem}>
        Настоящее постановление вступает в силу с 1 января 2013 г.
      </p>
      <div className={styles.legalBottom}>
        <p>Председатель Правительства</p>
        <p>Российской Федерации</p>
        <p>Д.МЕДВЕДЕВ</p>
        <br />
        <p>Утверждены</p>
        <p>постановлением Правительства</p>
        <p>Российской Федерации</p>
        <p>от 4 октября 2012 г. N 1006</p>
      </div>
      <div className={styles.legalTop}>
        <p>ПРАВИЛА</p>
        <p>ПРЕДОСТАВЛЕНИЯ МЕДИЦИНСКИМИ ОРГАНИЗАЦИЯМИ ПЛАТНЫХ</p>
        <p>МЕДИЦИНСКИХ УСЛУГ</p>
      </div>
      <div className={styles.infoBlock}>
        <p className={styles.firstLevelItem}>
          1. Настоящие Правила определяют порядок и условия предоставления
          медицинскими организациями гражданам платных медицинских услуг.
        </p>
        <p className={styles.firstLevelItem}>
          2. Для целей настоящих Правил используются следующие основные понятия:
        </p>
        <ul className={styles.subList}>
          <li>
            «платные медицинские услуги» — медицинские услуги, предоставляемые
            на возмездной основе за счет личных средств граждан, средств
            юридических лиц и иных средств на основании договоров, в том числе
            договоров добровольного медицинского страхования (далее — договор);
          </li>
          <li>
            «заказчик» — физическое (юридическое) лицо, имеющее намерение
            заказать (приобрести) либо заказывающее (приобретающее) платные
            медицинские услуги в соответствии с договором в пользу потребителя;
          </li>
          <li>
            «потребитель» — физическое лицо, имеющее намерение получить либо
            получающее платные медицинские услуги лично в соответствии с
            договором. Потребитель, получающий платные медицинские услуги,
            является пациентом, на которого распространяется действие
            Федерального закона «Об основах охраны здоровья граждан в Российской
            Федерации»;
          </li>
          <li>
            «исполнитель» — медицинская организация, предоставляющая платные
            медицинские услуги потребителям.
          </li>
        </ul>
        <p className={styles.info}>
          Понятие «медицинская организация» употребляется в настоящих Правилах в
          значении, определенном в Федеральном законе «Об основах охраны
          здоровья граждан в Российской Федерации».
        </p>
        <p className={styles.firstLevelItem}>
          3. Платные медицинские услуги предоставляются медицинскими
          организациями на основании перечня работ (услуг), составляющих
          медицинскую деятельность и указанных в лицензии на осуществление
          медицинской деятельности, выданной в установленном порядке.
        </p>
        <p className={styles.firstLevelItem}>
          4. Требования к платным медицинским услугам, в том числе к их объему и
          срокам оказания, определяются по соглашению сторон договора, если
          федеральными законами, иными нормативными правовыми актами Российской
          Федерации не предусмотрены другие требования.
        </p>
        <p className={styles.firstLevelItem}>
          5. Настоящие Правила в наглядной и доступной форме доводятся
          исполнителем до сведения потребителя (заказчика).
        </p>
      </div>
      <div className={styles.infoBlock}>
        <p className={styles.firstLevelItem}>
          II. Условия предоставления платных медицинских услуг
        </p>
        <p className={styles.firstLevelItem}>
          6. При заключении договора потребителю (заказчику) предоставляется в
          доступной форме информация о возможности получения соответствующих
          видов и объемов медицинской помощи без взимания платы в рамках
          программы государственных гарантий бесплатного оказания гражданам
          медицинской помощи и территориальной программы государственных
          гарантий бесплатного оказания гражданам медицинской помощи (далее —
          соответственно программа, территориальная программа).
        </p>
        <p className={styles.info}>
          Отказ потребителя от заключения договора не может быть причиной
          уменьшения видов и объемов медицинской помощи, предоставляемых такому
          потребителю без взимания платы в рамках программы и территориальной
          программы.
        </p>
        <p className={styles.firstLevelItem}>
          7. Медицинские организации, участвующие в реализации программы и
          территориальной программы, имеют право предоставлять платные
          медицинские услуги:
        </p>
        <ul className={styles.subList}>
          <li>
            на иных условиях, чем предусмотрено программой, территориальными
            программами и (или) целевыми программами, по желанию потребителя
            (заказчика), включая в том числе:
            <p className={styles.info} />
            <p className={styles.info}>
              установление индивидуального поста медицинского наблюдения при
              лечении в условиях стационара;
            </p>
            <p className={styles.info}>
              применение лекарственных препаратов, не входящих в перечень
              жизненно необходимых и важнейших лекарственных препаратов, если их
              назначение и применение не обусловлено жизненными показаниями или
              заменой из-за индивидуальной непереносимости лекарственных
              препаратов, входящих в указанный перечень, а также применение
              медицинских изделий, лечебного питания, в том числе
              специализированных продуктов лечебного питания, не предусмотренных
              стандартами медицинской помощи;
            </p>
          </li>
          <li>
            при предоставлении медицинских услуг анонимно, за исключением
            случаев, предусмотренных законодательством Российской Федерации;
          </li>
          <li>
            гражданам иностранных государств, лицам без гражданства, за
            исключением лиц, застрахованных по обязательному медицинскому
            страхованию, и гражданам Российской Федерации, не проживающим
            постоянно на ее территории и не являющимся застрахованными по
            обязательному медицинскому страхованию, если иное не предусмотрено
            международными договорами Российской Федерации;
          </li>
          <li>
            при самостоятельном обращении за получением медицинских услуг, за
            исключением случаев и порядка, предусмотренных статьей 21
            Федерального закона «Об основах охраны здоровья граждан в Российской
            Федерации», и случаев оказания скорой, в том числе скорой
            специализированной, медицинской помощи и медицинской помощи,
            оказываемой в неотложной или экстренной форме.
          </li>
        </ul>
        <p className={styles.firstLevelItem}>
          8. Порядок определения цен (тарифов) на медицинские услуги,
          предоставляемые медицинскими организациями, являющимися бюджетными и
          казенными государственными (муниципальными) учреждениями,
          устанавливается органами, осуществляющими функции и полномочия
          учредителей.
        </p>
        <p className={styles.firstLevelItem}>
          Медицинские организации иных организационно-правовых форм определяют
          цены (тарифы) на предоставляемые платные медицинские услуги
          самостоятельно.
        </p>
        <p className={styles.firstLevelItem}>
          9. При предоставлении платных медицинских услуг должны соблюдаться
          порядки оказания медицинской помощи, утвержденные Министерством
          здравоохранения Российской Федерации.
        </p>
        <p className={styles.firstLevelItem}>
          10. Платные медицинские услуги могут предоставляться в полном объеме
          стандарта медицинской помощи, утвержденного Министерством
          здравоохранения Российской Федерации, либо по просьбе потребителя в
          виде осуществления отдельных консультаций или медицинских
          вмешательств, в том числе в объеме, превышающем объем выполняемого
          стандарта медицинской помощи.
        </p>
      </div>
      <div className={styles.infoBlock}>
        <p className={styles.firstLevelItem}>
          III. Информация об исполнителе и предоставляемых им медицинских
          услугах
        </p>
        <p className={styles.firstLevelItem}>
          11. Исполнитель обязан предоставить посредством размещения на сайте
          медицинской организации в информационно-телекоммуникационной сети
          «Интернет», а также на информационных стендах (стойках) медицинской
          организации информацию, содержащую следующие сведения:
        </p>
        <ul className={styles.subList}>
          <li>
            для юридического лица — наименование и фирменное наименование (если
            имеется);
            <p className={styles.info}>
              для индивидуального предпринимателя — фамилия, имя и отчество
              (если имеется);
            </p>
          </li>
          <li>
            адрес места нахождения юридического лица, данные документа,
            подтверждающего факт внесения сведений о юридическом лице в Единый
            государственный реестр юридических лиц, с указанием органа,
            осуществившего государственную регистрацию;
            <p className={styles.info}>
              адрес места жительства и адрес места осуществления медицинской
              деятельности индивидуального предпринимателя, данные документа,
              подтверждающего факт внесения сведений об индивидуальном
              предпринимателе в Единый государственный реестр индивидуальных
              предпринимателей, с указанием органа, осуществившего
              государственную регистрацию;
            </p>
          </li>
          <li>
            сведения о лицензии на осуществление медицинской деятельности (номер
            и дата регистрации, перечень работ (услуг), составляющих медицинскую
            деятельность медицинской организации в соответствии с лицензией,
            наименование, адрес места нахождения и телефон выдавшего ее
            лицензирующего органа);
          </li>
          <li>
            перечень платных медицинских услуг с указанием цен в рублях,
            сведения об условиях, порядке, форме предоставления медицинских
            услуг и порядке их оплаты;
          </li>
          <li>
            порядок и условия предоставления медицинской помощи в соответствии с
            программой и территориальной программой;
          </li>
          <li>
            сведения о медицинских работниках, участвующих в предоставлении
            платных медицинских услуг, об уровне их профессионального
            образования и квалификации;
          </li>
          <li>
            режим работы медицинской организации, график работы медицинских
            работников, участвующих в предоставлении платных медицинских услуг;
          </li>
          <li>
            адреса и телефоны органа исполнительной власти субъекта Российской
            Федерации в сфере охраны здоровья граждан, территориального органа
            Федеральной службы по надзору в сфере здравоохранения и
            территориального органа Федеральной службы по надзору в сфере защиты
            прав потребителей и благополучия человека.
          </li>
        </ul>
        <p className={styles.firstLevelItem}>
          12. Информация, размещенная на информационных стендах (стойках),
          должна быть доступна неограниченному кругу лиц в течение всего
          рабочего времени медицинской организации, предоставляющей платные
          медицинские услуги. Информационные стенды (стойки) располагаются в
          доступном для посетителей месте и оформляются таким образом, чтобы
          можно было свободно ознакомиться с размещенной на них информацией.
        </p>
        <p className={styles.firstLevelItem}>
          13. Исполнитель предоставляет для ознакомления по требованию
          потребителя и (или) заказчика:
        </p>
        <ul className={styles.subList}>
          <li>
            копию учредительного документа медицинской организации —
            юридического лица, положение о ее филиале (отделении, другом
            территориально обособленном структурном подразделении), участвующем
            в предоставлении платных медицинских услуг, либо копию свидетельства
            о государственной регистрации физического лица в качестве
            индивидуального предпринимателя;
          </li>
          <li>
            копию лицензии на осуществление медицинской деятельности с
            приложением перечня работ (услуг), составляющих медицинскую
            деятельность медицинской организации в соответствии с лицензией.
          </li>
        </ul>
        <p className={styles.firstLevelItem}>
          14. При заключении договора по требованию потребителя и (или)
          заказчика им должна предоставляться в доступной форме информация о
          платных медицинских услугах, содержащая следующие сведения:
        </p>
        <ul className={styles.subList}>
          <li>
            порядки оказания медицинской помощи и стандарты медицинской помощи,
            применяемые при предоставлении платных медицинских услуг;
          </li>
          <li>
            информация о конкретном медицинском работнике, предоставляющем
            соответствующую платную медицинскую услугу (его профессиональном
            образовании и квалификации);
          </li>
          <li>
            информация о методах оказания медицинской помощи, связанных с ними
            рисках, возможных видах медицинского вмешательства, их последствиях
            и ожидаемых результатах оказания медицинской помощи;
          </li>
          <li>другие сведения, относящиеся к предмету договора.</li>
        </ul>
        <p className={styles.firstLevelItem}>
          15. До заключения договора исполнитель в письменной форме уведомляет
          потребителя (заказчика) о том, что несоблюдение указаний
          (рекомендаций) исполнителя (медицинского работника, предоставляющего
          платную медицинскую услугу), в том числе назначенного режима лечения,
          могут снизить качество предоставляемой платной медицинской услуги,
          повлечь за собой невозможность ее завершения в срок или отрицательно
          сказаться на состоянии здоровья потребителя.
        </p>
      </div>
      <div className={styles.infoBlock}>
        <p className={styles.firstLevelItem}>
          IV. Порядок заключения договора и оплаты медицинских услуг
        </p>
        <p className={styles.firstLevelItem}>
          16. Договор заключается потребителем (заказчиком) и исполнителем в
          письменной форме.
        </p>
        <p className={styles.firstLevelItem}>17. Договор должен содержать:</p>
        <ul className={styles.subList}>
          <li>
            сведения об исполнителе:
            <p className={styles.info}>
              наименование и фирменное наименование (если имеется) медицинской
              организации — юридического лица, адрес места нахождения, данные
              документа, подтверждающего факт внесения сведений о юридическом
              лице в Единый государственный реестр юридических лиц, с указанием
              органа, осуществившего государственную регистрацию;
            </p>
            <p className={styles.info}>
              фамилия, имя и отчество (если имеется) индивидуального
              предпринимателя, адрес места жительства и адрес места
              осуществления медицинской деятельности, данные документа,
              подтверждающего факт внесения сведений об индивидуальном
              предпринимателе в Единый государственный реестр индивидуальных
              предпринимателей, с указанием органа, осуществившего
              государственную регистрацию;
            </p>
            <p className={styles.info}>
              номер лицензии на осуществление медицинской деятельности, дата ее
              регистрации с указанием перечня работ (услуг), составляющих
              медицинскую деятельность медицинской организации в соответствии с
              лицензией, наименование, адрес места нахождения и телефон
              выдавшего ее лицензирующего органа;
            </p>
          </li>
          <li>
            фамилию, имя и отчество (если имеется), адрес места жительства и
            телефон потребителя (законного представителя потребителя);
            <p className={styles.info}>
              фамилию, имя и отчество (если имеется), адрес места жительства и
              телефон заказчика — физического лица;
            </p>
            <p className={styles.info}>
              наименование и адрес места нахождения заказчика — юридического
              лица;
            </p>
          </li>
          <li>
            перечень платных медицинских услуг, предоставляемых в соответствии с
            договором;
          </li>
          <li>
            стоимость платных медицинских услуг, сроки и порядок их оплаты;
          </li>
          <li>условия и сроки предоставления платных медицинских услуг;</li>
          <li>
            должность, фамилию, имя, отчество (если имеется) лица, заключающего
            договор от имени исполнителя, и его подпись, фамилию, имя, отчество
            (если имеется) потребителя (заказчика) и его подпись. В случае если
            заказчик является юридическим лицом, указывается должность лица,
            заключающего договор от имени заказчика;
          </li>
          <li>ответственность сторон за невыполнение условий договора;</li>
          <li>порядок изменения и расторжения договора;</li>
          <li>порядок изменения и расторжения договора;</li>
        </ul>
        <p className={styles.firstLevelItem}>
          18. Договор составляется в 3 экземплярах, один из которых находится у
          исполнителя, второй — у заказчика, третий — у потребителя. В случае
          если договор заключается потребителем и исполнителем, он составляется
          в 2 экземплярах.
        </p>
        <p className={styles.firstLevelItem}>
          19. На предоставление платных медицинских услуг может быть составлена
          смета. Ее составление по требованию потребителя (заказчика) или
          исполнителя является обязательным, при этом она является неотъемлемой
          частью договора.
        </p>
        <p className={styles.firstLevelItem}>
          20. В случае если при предоставлении платных медицинских услуг
          требуется предоставление на возмездной основе дополнительных
          медицинских услуг, не предусмотренных договором, исполнитель обязан
          предупредить об этом потребителя (заказчика).
        </p>
        <p className={styles.info}>
          Без согласия потребителя (заказчика) исполнитель не вправе
          предоставлять дополнительные медицинские услуги на возмездной основе.
        </p>
        <p className={styles.firstLevelItem}>
          21. В случае если при предоставлении платных медицинских услуг
          потребуется предоставление дополнительных медицинских услуг по
          экстренным показаниям для устранения угрозы жизни потребителя при
          внезапных острых заболеваниях, состояниях, обострениях хронических
          заболеваний, такие медицинские услуги оказываются без взимания платы в
          соответствии с Федеральным законом «Об основах охраны здоровья граждан
          в Российской Федерации».
        </p>
        <p className={styles.firstLevelItem}>
          22. В случае отказа потребителя после заключения договора от получения
          медицинских услуг договор расторгается. Исполнитель информирует
          потребителя (заказчика) о расторжении договора по инициативе
          потребителя, при этом потребитель (заказчик) оплачивает исполнителю
          фактически понесенные исполнителем расходы, связанные с исполнением
          обязательств по договору.
        </p>
        <p className={styles.firstLevelItem}>
          23. Потребитель (заказчик) обязан оплатить предоставленную
          исполнителем медицинскую услугу в сроки и в порядке, которые
          определены договором.
        </p>
        <p className={styles.firstLevelItem}>
          24. Потребителю (заказчику) в соответствии с законодательством
          Российской Федерации выдается документ, подтверждающий произведенную
          оплату предоставленных медицинских услуг (контрольно-кассовый чек,
          квитанция или иной бланк строгой отчетности (документ установленного
          образца)).
        </p>
        <p className={styles.firstLevelItem}>
          25. Исполнителем после исполнения договора выдаются потребителю
          (законному представителю потребителя) медицинские документы (копии
          медицинских документов, выписки из медицинских документов), отражающие
          состояние его здоровья после получения платных медицинских услуг.
        </p>
        <p className={styles.firstLevelItem}>
          26. Заключение договора добровольного медицинского страхования и
          оплата медицинских услуг, предоставляемых в соответствии с указанным
          договором, осуществляются в соответствии с Гражданским кодексом
          Российской Федерации и Законом Российской Федерации «Об организации
          страхового дела в Российской Федерации».
        </p>
      </div>
      <div className={styles.infoBlock}>
        <p className={styles.firstLevelItem}>
          27. Исполнитель предоставляет платные медицинские услуги, качество
          которых должно соответствовать условиям договора, а при отсутствии в
          договоре условий об их качестве — требованиям, предъявляемым к услугам
          соответствующего вида.
        </p>
        <p className={styles.info}>
          В случае если федеральным законом, иными нормативными правовыми актами
          Российской Федерации предусмотрены обязательные требования к качеству
          медицинских услуг, качество предоставляемых платных медицинских услуг
          должно соответствовать этим требованиям.
        </p>
        <p className={styles.firstLevelItem}>
          28. Платные медицинские услуги предоставляются при наличии
          информированного добровольного согласия потребителя (законного
          представителя потребителя), данного в порядке, установленном
          законодательством Российской Федерации об охране здоровья граждан.
        </p>
        <p className={styles.firstLevelItem}>
          29. Исполнитель предоставляет потребителю (законному представителю
          потребителя) по его требованию и в доступной для него форме
          информацию:
        </p>
        <ul className={styles.subList}>
          <li>
            о состоянии его здоровья, включая сведения о результатах
            обследования, диагнозе, методах лечения, связанном с ними риске,
            возможных вариантах и последствиях медицинского вмешательства,
            ожидаемых результатах лечения;
          </li>
          <li>
            об используемых при предоставлении платных медицинских услуг
            лекарственных препаратах и медицинских изделиях, в том числе о
            сроках их годности (гарантийных сроках), показаниях
            (противопоказаниях) к применению.
          </li>
        </ul>
        <p className={styles.firstLevelItem}>
          30. Исполнитель обязан при оказании платных медицинских услуг
          соблюдать установленные законодательством Российской Федерации
          требования к оформлению и ведению медицинской документации и учетных и
          отчетных статистических форм, порядку и срокам их представления.
        </p>
      </div>
      <div className={styles.infoBlock}>
        <p className={styles.firstLevelItem}>
          VI. Ответственность исполнителя и контроль за предоставлением платных
          медицинских услуг
        </p>
        <p className={styles.firstLevelItem}>
          31. За неисполнение либо ненадлежащее исполнение обязательств по
          договору исполнитель несет ответственность, предусмотренную
          законодательством Российской Федерации.
        </p>
        <p className={styles.firstLevelItem}>
          32. Вред, причиненный жизни или здоровью пациента в результате
          предоставления некачественной платной медицинской услуги, подлежит
          возмещению исполнителем в соответствии с законодательством Российской
          Федерации.
        </p>
        <p className={styles.firstLevelItem}>
          33. Контроль за соблюдением настоящих Правил осуществляет Федеральная
          служба по надзору в сфере защиты прав потребителей и благополучия
          человека в рамках установленных полномочий.
        </p>
      </div>
    </Container>
  </PageLayout>
);