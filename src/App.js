import "./App.css";
import { useRef, useEffect } from "react";

function App() {
  const containerRef = useRef(null);
  const progressRef = useRef(null);

  const scrollHandler = () => {
    let scrollDistance = -containerRef.current.getBoundingClientRect().top;
    let progressWidth =
      (scrollDistance /
        (containerRef.current.getBoundingClientRect().height -
          document.documentElement.clientHeight)) *
      100;

    progressRef.current.style.width = progressWidth + "%";
    if (progressWidth < 0) {
      progressRef.current.style.width = 0 + "%";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, []);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="progress-bar" ref={progressRef}></div>
      <div className="container" ref={containerRef}>
        <h2>Keep scrolling</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          amet dolorem perspiciatis impedit repellat nemo esse voluptas numquam
          laborum qui ab tempore velit alias maxime incidunt voluptatum rem
          reiciendis, repudiandae distinctio quod adipisci doloribus hic. Rem
          provident culpa saepe at numquam porro molestiae cumque cum corporis
          doloribus quasi omnis dolorem enim asperiores sunt ad error vero,
          placeat laborum veniam? Quasi corporis impedit dignissimos magni
          perferendis ea quos quas officiis quaerat quod saepe esse eos,
          voluptate in nulla enim animi pariatur nisi ipsam hic, nihil illum!
          Delectus tempora perspiciatis quis. Debitis, error itaque. Incidunt
          aperiam sapiente provident deserunt quo. Ducimus itaque nobis
          quibusdam eveniet, eum et sint, ab assumenda ipsam amet magni
          asperiores doloremque? Exercitationem iure optio explicabo
          perspiciatis neque quidem, pariatur ratione fugit cumque, beatae iste
          error libero voluptatem praesentium sunt cum quaerat quasi sequi in
          doloremque assumenda reiciendis architecto natus dolores. Soluta
          suscipit quod excepturi praesentium, optio iure voluptatibus quaerat
          quia explicabo! Libero voluptatum autem in voluptatibus veniam, vero
          ea commodi quo quos nesciunt eveniet non aliquid dolorum delectus
          corporis possimus quam facilis mollitia voluptates, et minus ab
          incidunt dolore. Totam amet vero nostrum consequatur nesciunt? Illum
          est neque voluptatem dicta voluptatum eaque itaque voluptates,
          accusantium inventore voluptate ratione assumenda voluptas hic quod
          accusamus atque? Quaerat dolores est quia accusantium, sint soluta,
          quam atque unde necessitatibus id cum exercitationem consectetur quasi
          laudantium, iure distinctio delectus debitis repellendus tempore dolor
          magnam. Harum architecto facere quod voluptatibus unde ut eius
          corporis deleniti! Laborum nam corrupti alias labore voluptatem,
          repellat laudantium, explicabo modi quis molestias quam sed a nemo
          velit quae natus maiores quaerat magnam cumque amet, beatae
          reprehenderit doloribus tempora! Porro amet molestiae, nesciunt totam
          deserunt eligendi, accusamus laudantium dolorem quae, atque ab vel
          quas? Doloremque voluptates velit odio a, rerum ratione porro. Commodi
          ea ullam illo voluptatibus inventore non corrupti placeat vitae, sint,
          deleniti minima ipsam, voluptatem maxime officia harum asperiores.
          Quod eos corporis est veniam ex! Quas eligendi, fugiat adipisci
          delectus pariatur sunt eum laudantium obcaecati, numquam quibusdam
          corrupti ab culpa placeat voluptatum blanditiis ratione nemo dolor
          nulla accusamus nam, voluptates molestias doloremque vel! Expedita ex
          corporis maiores obcaecati dolore cum, iusto consequuntur et dolor
          labore nisi. Hic pariatur nihil quos, ipsam iste, qui magni officia
          soluta adipisci mollitia iure laborum a ut perspiciatis exercitationem
          sit aperiam sed libero eaque? Aliquam tempora ex ratione magni nulla
          labore perspiciatis, exercitationem rerum nam cum omnis modi
          blanditiis magnam voluptatibus, quas atque dolore repellendus. Veniam
          adipisci quisquam autem dolore eius cumque necessitatibus consequuntur
          ut tempora temporibus! Nisi excepturi praesentium voluptate
          exercitationem. Mollitia facilis adipisci incidunt dolore esse. Neque,
          architecto accusantium ducimus at quod sit tenetur explicabo ut, esse
          vero non consectetur facilis eveniet laboriosam fugiat officia
          excepturi aspernatur unde ex dignissimos fugit culpa quia odit soluta.
          Dicta veritatis cupiditate aliquid molestias, natus corrupti
          aspernatur sunt necessitatibus velit. Veniam iste soluta, inventore,
          aliquam ut tempore voluptas non optio ullam illum, neque nesciunt
          voluptatem natus beatae necessitatibus aperiam reiciendis quis
          quibusdam ratione? Sequi cupiditate harum odio animi magni distinctio?
          Saepe rerum, distinctio laborum repellat deserunt reprehenderit
          similique perferendis excepturi magnam, molestiae ad nihil dolores
          veritatis maiores reiciendis. Rerum culpa eligendi cumque ratione
          facere sunt provident est. Eum repellat natus, id sit, nulla
          temporibus assumenda beatae numquam sequi, exercitationem illum
          pariatur quidem? Error doloribus cupiditate asperiores quam eum in
          dolore repellat numquam? Reiciendis odit quo veniam magni. Illo
          corporis, dignissimos harum rem ipsum corrupti provident numquam
          molestias expedita ipsa autem nihil? Dignissimos labore temporibus
          alias minus eum repellendus deleniti numquam nihil molestias velit
          dolores ut veniam explicabo voluptas nesciunt nam illo assumenda,
          fugiat excepturi optio illum quo iure tempora quas. Nulla fugiat totam
          alias commodi. Nostrum, deserunt harum facere dolore eveniet
          accusantium laboriosam quia, corporis fugit quo tempora voluptates
          quam culpa? Id cupiditate rerum in dolores nulla voluptatum doloremque
          aperiam, iure consequatur fugiat velit odio asperiores omnis ut,
          tempore sed delectus, ducimus ea ratione quod accusantium magnam.
          Voluptate aspernatur ad exercitationem, illo praesentium soluta odio
          minus et iste corporis nulla commodi iure veritatis mollitia, sed
          laborum, sunt quos ducimus. Molestias error, delectus architecto iusto
          dolore vel illum nihil ea omnis nostrum! Ea odit praesentium unde
          voluptatibus quisquam vero dolorem quidem esse, illum non autem
          assumenda maiores, natus iusto tempora ullam mollitia provident labore
          debitis similique fugiat laudantium distinctio id maxime! Animi,
          placeat ab recusandae tempora nulla iste, eaque laboriosam sunt
          ratione atque reprehenderit voluptatibus obcaecati saepe aliquid nemo
          ullam officia veniam voluptates a ipsum excepturi inventore nesciunt
          repellendus nobis. Inventore deserunt in aut, aliquid at possimus quo
          quas neque ipsam similique quis ipsa doloribus animi commodi quidem
          cum unde cupiditate eos repudiandae optio omnis, voluptatibus ipsum
          blanditiis odio? Delectus voluptatibus tempora, magni eligendi modi
          quae sapiente veniam accusamus possimus deleniti! Hic delectus nobis
          deleniti illo asperiores accusamus facere provident neque rerum
          reiciendis excepturi, quam error assumenda labore ut. Voluptatum
          inventore cupiditate facere mollitia recusandae! Reiciendis?
        </p>
        <h3>Heading 2</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          laborum rerum ratione fugit voluptate maiores, nobis modi. Dolor
          libero dicta minus, porro laborum maiores harum! Adipisci error facere
          ratione minima deleniti. Iste nulla cumque nisi blanditiis numquam
          consequatur debitis veniam, placeat repudiandae fuga, accusantium sed
          nihil aliquam doloribus consequuntur expedita laudantium? Veritatis,
          veniam. Sed quibusdam neque labore quos asperiores nihil facilis iste
          consequatur dolorum optio aspernatur quis aperiam impedit eos laborum
          ut provident est minima quam modi, nam eveniet corrupti, beatae
          perspiciatis! Porro voluptates nesciunt est in quo veniam aspernatur
          id illum laborum similique, eos incidunt? Inventore eos dolor sed.
          Repellendus, aliquid. Ab sapiente consequatur molestias reiciendis
          soluta, nulla rem quae hic! Dignissimos eligendi nesciunt
          exercitationem quam, adipisci recusandae esse nisi officia modi
          deserunt veritatis distinctio asperiores atque, repellat quis porro
          aliquam eos ipsum soluta praesentium ex a nam cumque rem? Voluptatum
          id exercitationem reiciendis aut ea nam, tenetur, facere sed odit
          aspernatur saepe. Quaerat enim doloribus quae dignissimos quis et
          quasi iusto ex corrupti non sequi, sit architecto, nam tempora
          cupiditate inventore repudiandae alias incidunt deserunt! Eos deserunt
          similique dolores velit provident sit porro sapiente, ipsam culpa,
          error quis asperiores neque ea unde hic qui repellendus rem ipsa
          molestias odit molestiae quo dicta! Nesciunt animi recusandae eaque
          deserunt non saepe odit sint perferendis eligendi tempora nemo placeat
          quia, voluptatem aliquam hic deleniti natus neque unde illo soluta
          amet. Veniam omnis ea mollitia quo nesciunt recusandae? Minus
          consectetur adipisci eum. Explicabo laudantium veniam officiis dolore
          omnis a facilis autem? Veniam quia nam dolorem ipsam quis illum
          temporibus id excepturi, necessitatibus ullam, dolorum pariatur
          aspernatur. Velit nobis et ea sunt, ad perspiciatis totam illo nostrum
          autem distinctio minima aut odio ratione est eos, accusantium repellat
          ipsam. Illo, velit assumenda veritatis eveniet in accusantium quod
          sint minima modi tenetur quaerat necessitatibus laudantium facilis aut
          omnis soluta. Molestiae earum doloremque facilis adipisci fugit
          quisquam facere? Maxime in dolore expedita quos deleniti corporis
          labore natus dignissimos ea et voluptate sint dolores, necessitatibus
          nostrum reprehenderit dicta enim animi! Eos, at. Esse voluptates optio
          nisi cum itaque fuga nam impedit deleniti veritatis recusandae,
          commodi voluptas unde perspiciatis officiis reiciendis. Officia rerum
          expedita quo nobis, aliquid similique facilis facere neque inventore,
          quos, optio est accusantium? Eos eum expedita tenetur laboriosam porro
          perspiciatis fuga, non nihil laborum adipisci repudiandae eveniet sint
          a soluta sapiente quaerat, dicta atque consequuntur dignissimos animi
          voluptatibus ut veritatis consectetur! Quidem, perspiciatis eius ea
          temporibus asperiores enim laborum et nisi obcaecati impedit quae odio
          illum doloremque cupiditate tempore quo nihil mollitia accusantium
          nobis. Exercitationem, quo modi cumque error eveniet aliquam
          doloremque aspernatur sed veritatis nisi. Accusantium recusandae
          obcaecati ab veritatis ratione tempore quos a, culpa incidunt soluta,
          iure voluptatibus enim suscipit cum provident nisi vero fugit
          explicabo nulla porro unde aliquid! Nemo voluptates totam in minima
          esse impedit itaque voluptatibus distinctio eos hic ratione
          repellendus harum, sint pariatur! Expedita sapiente nam voluptatem
          voluptate laborum neque cupiditate culpa, ducimus dolorem. Doloremque
          eos quas soluta saepe nihil sequi voluptas quidem rerum architecto,
          error aspernatur? Repellendus nisi dolore a itaque illo dicta laborum
          qui, soluta aliquam ipsum libero. Reprehenderit, nemo est! Eos
          asperiores accusamus qui dolor ex animi, iusto repudiandae alias quae
          ratione unde error, provident inventore quas, dignissimos magnam!
          Quas, debitis. Dolor nulla repudiandae harum assumenda eveniet maxime,
          error, reiciendis dolores suscipit id alias corrupti expedita aliquam
          delectus culpa praesentium debitis architecto nobis! Eaque dolorem
          perferendis molestiae ullam assumenda, id veniam illum totam
          distinctio, soluta et ducimus dolor, nam natus illo. Nobis repellat
          dolorem quasi accusantium quis recusandae labore qui vero voluptates
          error obcaecati ratione, modi reprehenderit sunt voluptas itaque.
          Dignissimos beatae voluptate eum nihil iste!
        </p>
        <h4>Heading 3</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
          molestiae iure saepe accusantium praesentium consectetur fuga, quo
          voluptates reprehenderit odio commodi quam officiis quae quas sunt!
          Commodi ea voluptatem esse illo hic facilis veniam! Cumque animi
          reprehenderit consectetur libero reiciendis magnam quam ipsam neque
          vitae minima dolorem saepe nihil dolorum fuga facere alias atque
          beatae fugiat soluta dolor, officia quae mollitia! Incidunt enim
          cumque, numquam minus consequuntur quae qui corporis, veritatis
          distinctio dolor obcaecati libero accusamus doloremque voluptate non.
          Magni magnam perferendis reprehenderit, aut vel consectetur
          dignissimos, quos nesciunt excepturi iste voluptatum voluptas quis non
          sapiente est a beatae in corporis laboriosam perspiciatis, modi nam
          dicta tenetur. Vel laboriosam ipsa cupiditate optio perferendis
          assumenda veniam accusantium quaerat. Aliquid officia similique
          perspiciatis rerum cupiditate inventore maxime incidunt possimus,
          praesentium dolor nam ab quod facere iste doloremque earum sunt,
          dolorem consequuntur eum sit dolore magni voluptates minus laudantium.
          Magnam ad saepe eligendi? Quaerat atque, quam nesciunt tenetur eius
          quisquam aperiam alias ex ipsa ab laborum reiciendis corporis sint
          corrupti provident! Voluptate pariatur eius iusto cum eligendi odio
          error quisquam, repellendus obcaecati ex, dolor facilis nemo officia,
          voluptatum similique sunt blanditiis eveniet iste quas at quam est
          exercitationem ea eaque! Iusto, ab? Quia accusamus eos ut rerum,
          corporis odio architecto fuga placeat repellat, provident totam beatae
          quisquam ducimus alias ad illum? Doloribus, ab? Minima eveniet ab nam
          sequi delectus consequuntur asperiores doloribus, fugit aspernatur
          laboriosam sapiente natus illum ullam quaerat nostrum itaque velit
          quis corrupti distinctio consectetur officiis quia? Vitae eius debitis
          laboriosam ipsa iusto id, hic vel ratione vero! Repudiandae molestias
          voluptate, quaerat ab vero qui nostrum eveniet ut harum recusandae
          reprehenderit ipsam aliquid natus voluptates neque tenetur iste autem
          aperiam ea, corporis non distinctio? Praesentium facilis libero
          necessitatibus neque reiciendis a maiores numquam explicabo, minus
          sapiente, doloremque, facere tempora? Consequatur dicta neque
          distinctio incidunt cum recusandae? Reprehenderit assumenda ipsam quas
          officia unde nostrum ducimus expedita. Laboriosam est delectus et
          numquam accusantium incidunt possimus iusto? Soluta maxime, sed
          incidunt recusandae odio porro praesentium eligendi aperiam eveniet
          iusto autem ea esse reiciendis ut numquam aut totam inventore
          cupiditate nulla veritatis? Incidunt velit assumenda, doloribus,
          tempora dolor maiores laborum consequatur reprehenderit laboriosam et
          modi earum aspernatur tenetur consequuntur excepturi illum
          voluptatibus hic voluptatum dolorem neque beatae laudantium. Nihil,
          cupiditate consectetur deleniti neque, atque animi placeat nostrum
          consequatur quaerat vel commodi fuga sunt magnam, veniam enim?
          Aliquam, nam eos harum pariatur sunt ad omnis tenetur.
        </p>
        <h4>Heading 4</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius tempore
          voluptatem eos. Ducimus, velit numquam perspiciatis culpa sint fugit
          asperiores nisi veniam blanditiis eaque repudiandae molestias illum
          cupiditate error voluptatem quasi, quod animi amet id quas illo,
          nostrum aspernatur molestiae maxime? Molestias suscipit facilis
          eligendi quod labore impedit quidem id aspernatur illum rem, harum
          praesentium ipsum tenetur debitis doloremque dolorem fugit veniam. Ex
          laborum temporibus velit excepturi praesentium. Vel at, tempore non
          labore repudiandae asperiores deleniti? Inventore reiciendis, quidem
          repudiandae magni rerum minima doloribus labore natus eligendi
          voluptatibus. Vitae sit quaerat soluta eum quasi nostrum molestiae
          voluptas. Nobis animi eius perspiciatis assumenda mollitia, unde
          debitis, laborum voluptates accusantium quisquam consequatur amet
          repudiandae, sed molestiae ut? Fuga id optio earum ut explicabo itaque
          esse nostrum dolor, similique accusantium hic dolores veritatis
          suscipit, sequi odio facere aperiam nobis doloribus. Quaerat, aperiam.
          Molestias error cupiditate non esse nihil totam laborum quisquam ut
          dolores aut! Necessitatibus enim ut culpa rem iusto? Assumenda est
          quos laboriosam itaque minima error quisquam ut culpa similique! Nulla
          vitae consequuntur ab nemo illo, id eveniet atque quae reiciendis
          doloribus corrupti? Maiores excepturi corporis non voluptatibus quas,
          commodi aperiam facilis enim voluptates ipsam. Dolor aut sint quos ut.
          Laboriosam fugit magni at veritatis molestiae quisquam distinctio.
          Ipsa excepturi alias dolorum, veritatis qui esse incidunt sit. Itaque
          quibusdam iste quis pariatur ea illo quidem autem exercitationem porro
          mollitia? Corrupti repudiandae soluta expedita deserunt, temporibus
          omnis dicta voluptatum quasi quisquam nostrum modi distinctio ipsam
          aperiam itaque eligendi commodi eum similique vero consectetur eaque
          excepturi delectus possimus beatae? Exercitationem nostrum sit unde
          qui quod minima maiores ea, deleniti cumque voluptatum doloribus
          similique corrupti laudantium optio mollitia culpa eaque tenetur vel
          iure eius pariatur voluptatem accusantium saepe. Tempore distinctio
          cum totam nulla atque repellat magnam ea, possimus adipisci. Sunt
          exercitationem eaque aspernatur eum nisi numquam tempora nulla,
          pariatur cumque minus culpa fuga neque quas magni, harum iste? Ut
          doloremque quidem quis rem iure ipsam dicta, quae qui harum libero et
          nulla, praesentium velit perferendis ducimus beatae! Soluta recusandae
          tempora ex. Soluta eligendi beatae esse possimus nihil, omnis impedit
          magni ex et illo laborum ipsam hic voluptas natus numquam accusantium?
          Harum autem rerum facilis vero labore dignissimos, deleniti dolor
          nesciunt aspernatur ipsam similique mollitia reiciendis vitae totam
          tempora officiis quod cupiditate ipsa expedita quae quibusdam iusto ad
          reprehenderit itaque! Placeat aspernatur quo incidunt aliquam. Debitis
          consequuntur unde temporibus voluptatem iste sunt culpa et. Suscipit
          qui adipisci quo exercitationem, possimus voluptate aliquid dolore
          laudantium error ullam dicta ab? Corrupti ducimus, molestiae aliquid
          ipsam ullam alias accusamus consequatur eius, cum numquam dolore
          deserunt? Amet debitis dolorum quibusdam, nihil minima voluptate
          praesentium, atque inventore asperiores magni quasi voluptatibus illo
          quo, fuga porro reiciendis quisquam numquam eius eveniet accusantium
          dolor. Maiores fugit illo earum eligendi esse voluptates nostrum optio
          repudiandae vitae ut, laborum aspernatur nulla totam, impedit error
          maxime quaerat repellat magni voluptate. Unde, possimus quis! Sunt
          vitae suscipit dolore asperiores cumque ut ad in. Totam dignissimos
          sequi soluta et molestias amet veritatis sapiente commodi enim alias,
          ab illum?
        </p>
        <h4>Heading 5</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          officia sequi error enim sint, optio sit aliquam assumenda neque
          mollitia tenetur ab magnam modi, nulla dolor? Explicabo facere
          laudantium alias neque laborum dicta, repellendus reiciendis voluptate
          sed magni ad veniam, possimus impedit sunt saepe ipsum? Nisi rerum,
          adipisci fuga temporibus odit minus iste ea recusandae provident
          nostrum nobis placeat maiores doloremque autem modi mollitia!
          Inventore iure odio officia provident repudiandae saepe culpa, iste,
          optio velit deleniti quisquam nobis, ab non delectus minima animi
          aliquam dolorem dolorum quo sunt soluta laborum dolores itaque. Modi
          obcaecati molestias hic neque nesciunt eum, placeat necessitatibus
          assumenda non explicabo nemo illum sequi minima numquam odit vero
          libero eos consequuntur quas, corrupti tempore minus! Accusamus sint
          in neque tempore natus libero non quo suscipit quisquam! Cumque
          eveniet dolore natus excepturi commodi, quis molestias doloribus
          voluptates in sunt repudiandae velit a accusamus quae ipsam libero
          obcaecati minus reiciendis aliquid repellat porro ut. Voluptatum,
          consequatur quidem autem voluptates in neque? Vero nihil
          necessitatibus, quis eius perspiciatis exercitationem iusto eos
          repellat amet error eaque facere quas ea eum, deleniti, maxime soluta
          molestiae molestias. A magnam exercitationem non eius deleniti
          laudantium, numquam excepturi consequuntur quis omnis itaque nam
          fugiat aut repellat inventore veritatis quae optio dolorem? Quia a
          inventore odio ipsum, fuga natus sunt sapiente! Labore veniam
          voluptates earum nesciunt, dolores corrupti mollitia aliquid
          perspiciatis sunt itaque ut, et inventore harum corporis minima! Sint
          consectetur corrupti rerum totam, distinctio expedita nisi ipsum?
          Nesciunt nam veniam doloribus reiciendis, nobis ea non nulla enim
          molestiae praesentium sint, exercitationem ipsam modi culpa eligendi
          fuga, porro laboriosam quas soluta quae rem facilis cumque voluptatem.
          Blanditiis deserunt, ducimus minima ad ipsam quisquam corrupti aliquam
          laborum. Corrupti dolorum dolore necessitatibus velit commodi facere
          eum adipisci, officia eligendi suscipit ea exercitationem debitis quae
          quam repellendus amet nam. Libero, quia repellat. Ex, tempora.
          Eligendi molestias obcaecati porro et ipsam praesentium unde quas
          nobis doloribus earum natus inventore totam qui at quos dolorem,
          minima voluptas culpa ex modi, veniam nisi. Voluptates amet distinctio
          ab consequuntur accusamus et architecto voluptatem provident
          doloribus, repellendus reprehenderit dolorem voluptatibus corporis
          nostrum nulla temporibus maiores sunt adipisci quasi aspernatur. Dolor
          iure sunt doloribus esse aspernatur soluta praesentium inventore,
          incidunt dignissimos nesciunt placeat voluptas nulla dolore impedit
          adipisci corporis laborum quas distinctio illum dicta non expedita
          fuga cupiditate eius. Molestias officia aliquid consectetur temporibus
          soluta architecto impedit modi earum omnis dolore sapiente enim, eum
          placeat exercitationem laboriosam nostrum accusantium, nulla, fugit
          eveniet ad. Ipsum quas blanditiis sed nulla aspernatur voluptate
          facilis porro ratione dignissimos, enim nesciunt hic, facere doloribus
          animi accusamus doloremque voluptas deserunt iste ut voluptates
          similique obcaecati, dolores culpa error. Incidunt, cupiditate tempore
          doloribus ipsa, hic quaerat, quisquam corporis inventore aliquam
          consectetur soluta! Quas, excepturi rerum doloribus quis facilis
          officia ea, tempore nam id minus provident odit odio, eaque commodi
          obcaecati officiis laborum. Iste suscipit, sint inventore qui
          provident autem commodi consectetur vitae, adipisci quo voluptatibus
          magni voluptatem debitis sed facilis placeat necessitatibus vero
          officiis ratione labore sapiente aperiam. Error deleniti
          necessitatibus aspernatur sit impedit dolores eos ipsa molestiae vitae
          non neque consectetur, quasi quo id quas mollitia laudantium quod,
          esse, assumenda repellendus ipsam in libero illo minima. Accusantium
          nihil odio ipsum enim, laudantium quasi accusamus sint deserunt
          blanditiis qui quas nulla? Suscipit voluptate aspernatur animi
          excepturi totam iste ipsam molestiae repellat, veniam veritatis rem ad
          eaque, eos repellendus nam quia dolores pariatur officiis quisquam at?
          Hic, iusto. Assumenda molestiae esse eum ipsum autem, quis obcaecati,
          ipsa placeat, nemo iure reprehenderit ducimus deleniti quas fugit
          quidem! Laudantium assumenda itaque, ex sit odio voluptas veniam
          aspernatur, facere, error ab ipsum iure fugit quod hic. Consectetur
          alias exercitationem incidunt? Laboriosam distinctio incidunt quis sit
          soluta ratione ut molestias, eligendi maxime similique reprehenderit
          sint et quo, vel architecto quaerat beatae voluptatibus deleniti
          minima pariatur quae! Ut tempore minima, sequi accusantium suscipit at
          doloremque officia ducimus cum blanditiis nulla illo, neque obcaecati
          impedit molestias rem voluptates distinctio dolore consectetur
          veritatis natus minus cumque possimus nihil. Esse earum in numquam
          blanditiis voluptate deserunt ipsa soluta corrupti repellendus? Natus
          saepe quis atque accusantium maiores laudantium expedita magnam sequi,
          ullam cum quos sint beatae vero aliquid labore? Consequatur veniam
          voluptas dolores, iste eaque dolorem cupiditate, officiis, minima
          soluta molestiae temporibus?
        </p>
      </div>
      <p className="back-top" onClick={backToTop}>
        Back To The Top
      </p>
    </>
  );
}

export default App;
