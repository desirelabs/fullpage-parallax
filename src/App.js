import React, { Component } from "react";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";

import {
  Title,
  Description,
  ColoredSeparator,
  SectionWrapper,
  Section,
  LeftPan,
  LeftPanInner,
  RightPan,
  RightPanInner
} from "../UI/Sections";

import { Triptic } from "../UI/Triptic";
import Image from "../UI/Image";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentSlide: "0",
      loaded: false,
      sections: []
    };
  }

  onLeave = (origin, destination, direction) => {
    const { index } = destination;
    this.setState({
      currentSlide: index.toString()
    });
  };

  componentDidMount() {
    let timer = setTimeout(() => {
      this.setState({ loaded: true });
      clearTimeout(timer);
    }, 300);
  }

  render() {
    return (
      <ReactFullpage
        licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
        scrollOverflow
        navigation
        easing="ease"
        css3
        scrollingSpeed="700"
        onLeave={this.onLeave}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <SectionWrapper>
                <Section>
                  <LeftPan>
                    <LeftPanInner>
                      <Title>Du style</Title>
                      <ColoredSeparator color="blue" />
                      <Description>
                        Des lignes épurées et un look soigné
                      </Description>
                    </LeftPanInner>
                  </LeftPan>
                  <RightPan>
                    <RightPanInner>
                      <Image index="0" current={this.state.currentSlide} />
                    </RightPanInner>
                  </RightPan>
                </Section>
              </SectionWrapper>
              <SectionWrapper>
                <Section>
                  <LeftPan>
                    <LeftPanInner>
                      <Title>Du style</Title>
                      <ColoredSeparator color="blue" />
                      <Description>
                        Des lignes épurées et un look soigné
                      </Description>
                    </LeftPanInner>
                  </LeftPan>
                  <RightPan>
                    <RightPanInner>
                      <Image index="1" current={this.state.currentSlide} />
                    </RightPanInner>
                  </RightPan>
                </Section>
              </SectionWrapper>
              <SectionWrapper>
                <Section>
                  <LeftPan>
                    <LeftPanInner>
                      <Title>Du style</Title>
                      <ColoredSeparator color="blue" />
                      <Description>
                        Des lignes épurées et un look soigné
                      </Description>
                    </LeftPanInner>
                  </LeftPan>
                  <RightPan>
                    <RightPanInner>
                      <Triptic />
                    </RightPanInner>
                  </RightPan>
                </Section>
              </SectionWrapper>
              <SectionWrapper>
                <Section>
                  <LeftPan>
                    <LeftPanInner>
                      <Title>Du style</Title>
                      <ColoredSeparator color="blue" />
                      <Description>
                        Des lignes épurées et un look soigné
                      </Description>
                    </LeftPanInner>
                  </LeftPan>
                  <RightPan>
                    <RightPanInner>
                      RightPan 3
                      <p>
                        Nam quibusdam, quos audio sapientes habitos in Graecia,
                        placuisse opinor mirabilia quaedam (sed nihil est quod
                        illi non persequantur argutiis): partim fugiendas esse
                        nimias amicitias, ne necesse sit unum sollicitum esse
                        pro pluribus; satis superque esse sibi suarum cuique
                        rerum, alienis nimis implicari molestum esse;
                        commodissimum esse quam laxissimas habenas habere
                        amicitiae, quas vel adducas, cum velis, vel remittas;
                        caput enim esse ad beate vivendum securitatem, qua frui
                        non possit animus, si tamquam parturiat unus pro
                        pluribus.
                      </p>
                      <p>
                        Haec igitur lex in amicitia sanciatur, ut neque rogemus
                        res turpes nec faciamus rogati. Turpis enim excusatio
                        est et minime accipienda cum in ceteris peccatis, tum si
                        quis contra rem publicam se amici causa fecisse
                        fateatur. Etenim eo loco, Fanni et Scaevola, locati
                        sumus ut nos longe prospicere oporteat futuros casus rei
                        publicae. Deflexit iam aliquantum de spatio curriculoque
                        consuetudo maiorum.
                      </p>
                      <p>
                        Quaestione igitur per multiplices dilatata fortunas cum
                        ambigerentur quaedam, non nulla levius actitata
                        constaret, post multorum clades Apollinares ambo pater
                        et filius in exilium acti cum ad locum Crateras nomine
                        pervenissent, villam scilicet suam quae ab Antiochia
                        vicensimo et quarto disiungitur lapide, ut mandatum est,
                        fractis cruribus occiduntur.
                      </p>
                      <p>
                        Horum adventum praedocti speculationibus fidis rectores
                        militum tessera data sollemni armatos omnes celeri
                        eduxere procursu et agiliter praeterito Calycadni
                        fluminis ponte, cuius undarum magnitudo murorum adluit
                        turres, in speciem locavere pugnandi. neque tamen
                        exiluit quisquam nec permissus est congredi.
                        formidabatur enim flagrans vesania manus et superior
                        numero et ruitura sine respectu salutis in ferrum.
                      </p>
                      <p>
                        Martinus agens illas provincias pro praefectis aerumnas
                        innocentium graviter gemens saepeque obsecrans, ut ab
                        omni culpa inmunibus parceretur, cum non inpetraret,
                        minabatur se discessurum: ut saltem id metuens
                        perquisitor malivolus tandem desineret quieti coalitos
                        homines in aperta pericula proiectare.
                      </p>
                      <p>
                        Auxerunt haec vulgi sordidioris audaciam, quod cum
                        ingravesceret penuria commeatuum, famis et furoris
                        inpulsu Eubuli cuiusdam inter suos clari domum
                        ambitiosam ignibus subditis inflammavit rectoremque ut
                        sibi iudicio imperiali addictum calcibus incessens et
                        pugnis conculcans seminecem laniatu miserando
                        discerpsit. post cuius lacrimosum interitum in unius
                        exitio quisque imaginem periculi sui considerans
                        documento recenti similia formidabat.
                      </p>
                      <p>
                        Saraceni tamen nec amici nobis umquam nec hostes
                        optandi, ultro citroque discursantes quicquid inveniri
                        poterat momento temporis parvi vastabant milvorum
                        rapacium similes, qui si praedam dispexerint celsius,
                        volatu rapiunt celeri, aut nisi impetraverint, non
                        inmorantur.
                      </p>
                      <p>
                        Quid enim tam absurdum quam delectari multis inanimis
                        rebus, ut honore, ut gloria, ut aedificio, ut vestitu
                        cultuque corporis, animante virtute praedito, eo qui vel
                        amare vel, ut ita dicam, redamare possit, non admodum
                        delectari? Nihil est enim remuneratione benevolentiae,
                        nihil vicissitudine studiorum officiorumque iucundius.
                      </p>
                      <p>
                        Quaestione igitur per multiplices dilatata fortunas cum
                        ambigerentur quaedam, non nulla levius actitata
                        constaret, post multorum clades Apollinares ambo pater
                        et filius in exilium acti cum ad locum Crateras nomine
                        pervenissent, villam scilicet suam quae ab Antiochia
                        vicensimo et quarto disiungitur lapide, ut mandatum est,
                        fractis cruribus occiduntur.
                      </p>
                      <p>
                        Mensarum enim voragines et varias voluptatum inlecebras,
                        ne longius progrediar, praetermitto illuc transiturus
                        quod quidam per ampla spatia urbis subversasque silices
                        sine periculi metu properantes equos velut publicos
                        signatis quod dicitur calceis agitant, familiarium
                        agmina tamquam praedatorios globos post terga trahentes
                        ne Sannione quidem, ut ait comicus, domi relicto. quos
                        imitatae matronae complures opertis capitibus et
                        basternis per latera civitatis cuncta discurrunt.
                      </p>
                      <p>
                        Quanta autem vis amicitiae sit, ex hoc intellegi maxime
                        potest, quod ex infinita societate generis humani, quam
                        conciliavit ipsa natura, ita contracta res est et
                        adducta in angustum ut omnis caritas aut inter duos aut
                        inter paucos iungeretur.
                      </p>
                      <p>
                        Erat autem diritatis eius hoc quoque indicium nec
                        obscurum nec latens, quod ludicris cruentis delectabatur
                        et in circo sex vel septem aliquotiens vetitis
                        certaminibus pugilum vicissim se concidentium
                        perfusorumque sanguine specie ut lucratus ingentia
                        laetabatur.
                      </p>
                      <p>
                        Quam ob rem cave Catoni anteponas ne istum quidem ipsum,
                        quem Apollo, ut ais, sapientissimum iudicavit; huius
                        enim facta, illius dicta laudantur. De me autem, ut iam
                        cum utroque vestrum loquar, sic habetote.
                      </p>
                      <p>
                        Et Epigonus quidem amictu tenus philosophus, ut
                        apparuit, prece frustra temptata, sulcatis lateribus
                        mortisque metu admoto turpi confessione cogitatorum
                        socium, quae nulla erant, fuisse firmavit cum nec
                        vidisset quicquam nec audisset penitus expers forensium
                        rerum; Eusebius vero obiecta fidentius negans, suspensus
                        in eodem gradu constantiae stetit latrocinium illud
                        esse, non iudicium clamans.
                      </p>
                      <p>
                        Illud autem non dubitatur quod cum esset aliquando
                        virtutum omnium domicilium Roma, ingenuos advenas
                        plerique nobilium, ut Homerici bacarum suavitate
                        Lotophagi, humanitatis multiformibus officiis
                        retentabant.
                      </p>
                      <p>
                        Nam quibusdam, quos audio sapientes habitos in Graecia,
                        placuisse opinor mirabilia quaedam (sed nihil est quod
                        illi non persequantur argutiis): partim fugiendas esse
                        nimias amicitias, ne necesse sit unum sollicitum esse
                        pro pluribus; satis superque esse sibi suarum cuique
                        rerum, alienis nimis implicari molestum esse;
                        commodissimum esse quam laxissimas habenas habere
                        amicitiae, quas vel adducas, cum velis, vel remittas;
                        caput enim esse ad beate vivendum securitatem, qua frui
                        non possit animus, si tamquam parturiat unus pro
                        pluribus.
                      </p>
                      <p>
                        Haec igitur lex in amicitia sanciatur, ut neque rogemus
                        res turpes nec faciamus rogati. Turpis enim excusatio
                        est et minime accipienda cum in ceteris peccatis, tum si
                        quis contra rem publicam se amici causa fecisse
                        fateatur. Etenim eo loco, Fanni et Scaevola, locati
                        sumus ut nos longe prospicere oporteat futuros casus rei
                        publicae. Deflexit iam aliquantum de spatio curriculoque
                        consuetudo maiorum.
                      </p>
                      <p>
                        Quaestione igitur per multiplices dilatata fortunas cum
                        ambigerentur quaedam, non nulla levius actitata
                        constaret, post multorum clades Apollinares ambo pater
                        et filius in exilium acti cum ad locum Crateras nomine
                        pervenissent, villam scilicet suam quae ab Antiochia
                        vicensimo et quarto disiungitur lapide, ut mandatum est,
                        fractis cruribus occiduntur.
                      </p>
                      <p>
                        Horum adventum praedocti speculationibus fidis rectores
                        militum tessera data sollemni armatos omnes celeri
                        eduxere procursu et agiliter praeterito Calycadni
                        fluminis ponte, cuius undarum magnitudo murorum adluit
                        turres, in speciem locavere pugnandi. neque tamen
                        exiluit quisquam nec permissus est congredi.
                        formidabatur enim flagrans vesania manus et superior
                        numero et ruitura sine respectu salutis in ferrum.
                      </p>
                      <p>
                        Martinus agens illas provincias pro praefectis aerumnas
                        innocentium graviter gemens saepeque obsecrans, ut ab
                        omni culpa inmunibus parceretur, cum non inpetraret,
                        minabatur se discessurum: ut saltem id metuens
                        perquisitor malivolus tandem desineret quieti coalitos
                        homines in aperta pericula proiectare.
                      </p>
                      <p>
                        Auxerunt haec vulgi sordidioris audaciam, quod cum
                        ingravesceret penuria commeatuum, famis et furoris
                        inpulsu Eubuli cuiusdam inter suos clari domum
                        ambitiosam ignibus subditis inflammavit rectoremque ut
                        sibi iudicio imperiali addictum calcibus incessens et
                        pugnis conculcans seminecem laniatu miserando
                        discerpsit. post cuius lacrimosum interitum in unius
                        exitio quisque imaginem periculi sui considerans
                        documento recenti similia formidabat.
                      </p>
                      <p>
                        Saraceni tamen nec amici nobis umquam nec hostes
                        optandi, ultro citroque discursantes quicquid inveniri
                        poterat momento temporis parvi vastabant milvorum
                        rapacium similes, qui si praedam dispexerint celsius,
                        volatu rapiunt celeri, aut nisi impetraverint, non
                        inmorantur.
                      </p>
                      <p>
                        Quid enim tam absurdum quam delectari multis inanimis
                        rebus, ut honore, ut gloria, ut aedificio, ut vestitu
                        cultuque corporis, animante virtute praedito, eo qui vel
                        amare vel, ut ita dicam, redamare possit, non admodum
                        delectari? Nihil est enim remuneratione benevolentiae,
                        nihil vicissitudine studiorum officiorumque iucundius.
                      </p>
                      <p>
                        Quaestione igitur per multiplices dilatata fortunas cum
                        ambigerentur quaedam, non nulla levius actitata
                        constaret, post multorum clades Apollinares ambo pater
                        et filius in exilium acti cum ad locum Crateras nomine
                        pervenissent, villam scilicet suam quae ab Antiochia
                        vicensimo et quarto disiungitur lapide, ut mandatum est,
                        fractis cruribus occiduntur.
                      </p>
                      <p>
                        Mensarum enim voragines et varias voluptatum inlecebras,
                        ne longius progrediar, praetermitto illuc transiturus
                        quod quidam per ampla spatia urbis subversasque silices
                        sine periculi metu properantes equos velut publicos
                        signatis quod dicitur calceis agitant, familiarium
                        agmina tamquam praedatorios globos post terga trahentes
                        ne Sannione quidem, ut ait comicus, domi relicto. quos
                        imitatae matronae complures opertis capitibus et
                        basternis per latera civitatis cuncta discurrunt.
                      </p>
                      <p>
                        Quanta autem vis amicitiae sit, ex hoc intellegi maxime
                        potest, quod ex infinita societate generis humani, quam
                        conciliavit ipsa natura, ita contracta res est et
                        adducta in angustum ut omnis caritas aut inter duos aut
                        inter paucos iungeretur.
                      </p>
                      <p>
                        Erat autem diritatis eius hoc quoque indicium nec
                        obscurum nec latens, quod ludicris cruentis delectabatur
                        et in circo sex vel septem aliquotiens vetitis
                        certaminibus pugilum vicissim se concidentium
                        perfusorumque sanguine specie ut lucratus ingentia
                        laetabatur.
                      </p>
                      <p>
                        Quam ob rem cave Catoni anteponas ne istum quidem ipsum,
                        quem Apollo, ut ais, sapientissimum iudicavit; huius
                        enim facta, illius dicta laudantur. De me autem, ut iam
                        cum utroque vestrum loquar, sic habetote.
                      </p>
                      <p>
                        Et Epigonus quidem amictu tenus philosophus, ut
                        apparuit, prece frustra temptata, sulcatis lateribus
                        mortisque metu admoto turpi confessione cogitatorum
                        socium, quae nulla erant, fuisse firmavit cum nec
                        vidisset quicquam nec audisset penitus expers forensium
                        rerum; Eusebius vero obiecta fidentius negans, suspensus
                        in eodem gradu constantiae stetit latrocinium illud
                        esse, non iudicium clamans.
                      </p>
                      <p>
                        Illud autem non dubitatur quod cum esset aliquando
                        virtutum omnium domicilium Roma, ingenuos advenas
                        plerique nobilium, ut Homerici bacarum suavitate
                        Lotophagi, humanitatis multiformibus officiis
                        retentabant.
                      </p>
                    </RightPanInner>
                  </RightPan>
                </Section>
              </SectionWrapper>
            </div>
          );
        }}
      />
    );
  }
}

export default App;
