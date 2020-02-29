import React, { Component } from "react";

class Footer extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {


    return (
      <div className="main">
      <div className="footer">
        <div className="bubbles">
          <div className="bubble" style={{animationDuration: '5.883557047036205s', distance: 8.349255333933286, left: '72.28228395449513%', time: 2.1307487604777244, animationDelay: 3.040572693012255}} ></div>
          <div className="bubble" style={{animationDuration: '2.7627474087426442s', distance: 8.367167407033847, left: '63.139047501290804%', time: 2.0811331206401618, animationDelay: 3.705617773105802}} ></div>
          <div className="bubble" style={{animationDuration: '3.682140886565759s', distance: 6.75020605923084, left: '80.72253972246781%', time: 2.5240173205276695, animationDelay: 3.635034633999563}} ></div>
          <div className="bubble" style={{animationDuration: '3.7534111586042744s', distance: 6.248962613023429, left: '98.57064360397574%', time: 2.5288090622276007, animationDelay: 2.7148466171720744}} ></div>
          <div className="bubble" style={{animationDuration: '5.550534582065247s', distance: 9.136257297085738, left: '59.3789947132407%', time: 2.1472492742102616, animationDelay: 2.962665057444301}} ></div>
          <div className="bubble" style={{animationDuration: '5.960091257797826s', distance: 7.182388915277078, left: '81.21125551780806%', time: 3.909327887582208, animationDelay: 2.3619289397715546}} ></div>
          <div className="bubble" style={{animationDuration: '3.8505102525337387s', distance: 7.553919746520537, left: '20.7634336852203%', time: 3.3407405990336487, animationDelay: 3.202781672518563}} ></div>
          <div className="bubble" style={{animationDuration: '4.041148294167025s', distance: 9.553499222908975, left: '77.63485227551399%', time: 2.8856770747686404, animationDelay: 2.3838378164362712}} ></div>
          <div className="bubble" style={{animationDuration: '4.940092095622088s', distance: 9.110343566280182, left: '104.27593747558993%', time: 3.1986202333945464, animationDelay: 2.230853674466706}} ></div>
          <div className="bubble" style={{animationDuration: '3.6161126507096792s', distance: 7.234175215290078, left: '37.320330474935574%', time: 2.3183626984446772, animationDelay: 2.020291019842002}} ></div>
          <div className="bubble" style={{animationDuration: '5.954840573264478s', distance: 6.690817736183441, left: '4.036943665670879%', time: 3.2050043565812785, animationDelay: 3.476196949320834}} ></div>
          <div className="bubble" style={{animationDuration: '3.994027669641116s', distance: 7.42113561919504, left: '36.358101095179094%', time: 2.052359344897403, animationDelay: 2.3259886530043983}} ></div>
          <div className="bubble" style={{animationDuration: '3.2896195407097455s', distance: 7.906963499957766, left: '70.773985307923%', time: 2.488527903114077, animationDelay: 3.400091729200524}} ></div>
          <div className="bubble" style={{animationDuration: '5.068974647374494s', distance: 7.1349078881105, left: '25.817329328539323%', time: 2.9258115501498394, animationDelay: 3.0184064622547857}} ></div>
          <div className="bubble" style={{animationDuration: '4.69020812814203s', distance: 7.3717231389436835, left: '12.84758949346265%', time: 2.757014650709882, animationDelay: 2.529820192532934}} ></div>
          <div className="bubble" style={{animationDuration: '2.660766249579491s', distance: 8.72701014028037, left: '-2.8609843006104585%', time: 3.6774348051399324, animationDelay: 2.362868837730982}} ></div>
          <div className="bubble" style={{animationDuration: '3.5947785761003583s', distance: 9.269875342393217, left: '33.4949924354574%', time: 2.43625660468115, animationDelay: 2.877168765750107}} ></div>
          <div className="bubble" style={{animationDuration: '3.3695411082868176s', distance: 6.6575080099856425, left: '3.424418567636014%', time: 2.860581281529284, animationDelay: 3.889844547585531}} ></div>
          <div className="bubble" style={{animationDuration: '3.149819951689329s', distance: 9.40512727700743, left: '13.217902732421592%', time: 2.239540922576583, animationDelay: 2.9729572461312253}} ></div>
          <div className="bubble" style={{animationDuration: '4.21580400242479s', distance: 6.998730024714162, left: '79.07586947601656%', time: 3.65639095097655, animationDelay: 3.0261691666178874}} ></div>
          <div className="bubble" style={{animationDuration: '3.7598253366907093s', distance: 7.108491312326703, left: '91.09152816694858%', time: 2.681370914127234, animationDelay: 2.232917219910912}} ></div>
          <div className="bubble" style={{animationDuration: '2.924772508759105s', distance: 6.336720481016825, left: '77.26393798981893%', time: 2.1197732869428685, animationDelay: 3.1571404328425263}} ></div>
          <div className="bubble" style={{animationDuration: '5.540511426298476s', distance: 9.198660608538951, left: '13.920585829307768%', time: 3.484216959602039, animationDelay: 3.049950850247966}} ></div>
          <div className="bubble" style={{animationDuration: '5.134007936818853s', distance: 7.452417351713355, left: '20.59986933586393%', time: 2.235417661405535, animationDelay: 2.947171311132731}} ></div>
          <div className="bubble" style={{animationDuration: '2.1313850024226477s', distance: 7.025358789704069, left: '76.87098792107467%', time: 3.7751618846536825, animationDelay: 2.136688381838793}} ></div>
          <div className="bubble" style={{animationDuration: '5.1973757717766444s', distance: 9.952182887361282, left: '98.1882341080896%', time: 2.787158651665804, animationDelay: 2.6690194319254057}} ></div>
          <div className="bubble" style={{animationDuration: '4.281455713993344s', distance: 7.392246669375874, left: '8.954673254333203%', time: 2.3089402071580274, animationDelay: 2.559729586865698}} ></div>
          <div className="bubble" style={{animationDuration: '2.6464457767324188s', distance: 9.05183820627659, left: '-2.178503322020382%', time: 2.8367357034950644, animationDelay: 3.010246549287049}} ></div>
          <div className="bubble" style={{animationDuration: '4.825987525621296s', distance: 7.735197717600623, left: '98.20388522792213%', time: 2.3337016593677196, animationDelay: 2.4576322995220963}} ></div>
          <div className="bubble" style={{animationDuration: '3.33729703076384s', distance: 7.541906897101432, left: '49.65281204067828%', time: 3.3352733723690258, animationDelay: 3.1235943515191837}} ></div>
          <div className="bubble" style={{animationDuration: '5.000011451560238s', distance: 8.924493542537288, left: '8.820533764586752%', time: 2.9438230183961682, animationDelay: 2.642480870521722}} ></div>
          <div className="bubble" style={{animationDuration: '3.6018922613518285s', distance: 9.647153825054374, left: '2.5873938014798963%', time: 2.547147782544826, animationDelay: 3.8168280551251117}} ></div>
          <div className="bubble" style={{animationDuration: '2.71566690273405s', distance: 8.02732909752676, left: '75.85933286842848%', time: 2.4174597305154997, animationDelay: 2.586412112516644}} ></div>
          <div className="bubble" style={{animationDuration: '4.479921235660122s', distance: 6.287480241421453, left: '32.30154943838965%', time: 2.2570824255062782, animationDelay: 3.151956971065385}} ></div>
          <div className="bubble" style={{animationDuration: '2.2797967808514255s', distance: 8.888023752949108, left: '51.71292409639166%', time: 2.7775515084891484, animationDelay: 2.9640719114400755}} ></div>
          <div className="bubble" style={{animationDuration: '3.5441884086214968s', distance: 8.466688539337309, left: '92.4828417763104%', time: 3.396552187448831, animationDelay: 3.1177594035400875}} ></div>
          <div className="bubble" style={{animationDuration: '2.5602046746803744s', distance: 8.852614088203339, left: '34.19030825205454%', time: 2.5290779177966587, animationDelay: 3.440600563647134}} ></div>
          <div className="bubble" style={{animationDuration: '2.181006238106475s', distance: 7.312553411701842, left: '78.9530861885179%', time: 2.898311377113439, animationDelay: 2.8931875778220877}} ></div>
          <div className="bubble" style={{animationDuration: '5.918696419437205s', distance: 7.229348305780873, left: '35.435209666464445%', time: 3.9755075022960575, animationDelay: 2.690240194680774}} ></div>
          <div className="bubble" style={{animationDuration: '5.335162858853431s', distance: 9.873931623255906, left: '35.91244135990995%', time: 2.6344297205771348, animationDelay: 3.2235628934651026}} ></div>
          <div className="bubble" style={{animationDuration: '5.795153928731491s', distance: 9.736857717319936, left: '3.1274658622968907%', time: 3.539892580685443, animationDelay: 3.290481318428812}} ></div>
          <div className="bubble" style={{animationDuration: '3.5325914799635507s', distance: 6.668245053670037, left: '80.438641302567%', time: 3.766353171086013, animationDelay: 2.812437639264766}} ></div>
          <div className="bubble" style={{animationDuration: '4.842310877715977s', distance: 6.352748708644418, left: '2.964619527445984%', time: 2.9798573414386427, animationDelay: 2.4062288494396236}} ></div>
          <div className="bubble" style={{animationDuration: '3.266922288141708s', distance: 6.918144878629841, left: '83.97877851550945%', time: 2.160086752285467, animationDelay: 2.578000806309033}} ></div>
          <div className="bubble" style={{animationDuration: '4.239369556958467s', distance: 9.164511446645026, left: '42.05624011129552%', time: 3.259497402325113, animationDelay: 3.494018665209737}} ></div>
          <div className="bubble" style={{animationDuration: '4.454726935344173s', distance: 7.590214964653255, left: '49.195768274290266%', time: 2.9549342608859273, animationDelay: 2.7353159468451875}} ></div>
          <div className="bubble" style={{animationDuration: '2.9992985060714688s', distance: 8.950703676977241, left: '92.64688551557128%', time: 2.4514808877811385, animationDelay: 3.523854151317325}} ></div>
          <div className="bubble" style={{animationDuration: '4.396047619365882s', distance: 7.721710481204241, left: '73.35050022993725%', time: 3.7130118688455123, animationDelay: 3.624756669407806}} ></div>
          <div className="bubble" style={{animationDuration: '5.817286492820873s', distance: 9.617657786390168, left: '10.014317484500037%', time: 2.4242141217664908, animationDelay: 3.2332314329001597}} ></div>
          <div className="bubble" style={{animationDuration: '3.7140927217004185s', distance: 8.289657700110915, left: '23.608484836936455%', time: 2.933497451444614, animationDelay: 3.6160957243386496}} ></div>
          <div className="bubble" style={{animationDuration: '3.7256614618425408s', distance: 8.395900741223791, left: '9.99173572417606%', time: 3.3378086387665147, animationDelay: 2.9987182516976185}} ></div>
          <div className="bubble" style={{animationDuration: '4.702639644745253s', distance: 7.118156197676004, left: '14.661171055850076%', time: 3.7583971051997693, animationDelay: 3.1139011649057644}} ></div>
          <div className="bubble" style={{animationDuration: '3.4646209237621575s', distance: 8.021051984433612, left: '28.393094812940845%', time: 3.7880249671268884, animationDelay: 3.4489057071933154}} ></div>
          <div className="bubble" style={{animationDuration: '4.617139656237694s', distance: 9.401341880657966, left: '90.05128056519688%', time: 2.189112892138826, animationDelay: 2.0421540877775155}} ></div>
          <div className="bubble" style={{animationDuration: '2.6661566580638727s', distance: 8.698583851746928, left: '84.9916541332274%', time: 2.4034850760627884, animationDelay: 2.8217370414763385}} ></div>
          <div className="bubble" style={{animationDuration: '3.351227334937822s', distance: 6.8726283352729025, left: '27.1631532700751%', time: 2.2493908316059423, animationDelay: 3.8832027705363954}} ></div>
          <div className="bubble" style={{animationDuration: '2.6992331900740796s', distance: 6.6928238033498335, left: '35.336643484390564%', time: 3.8054402594431203, animationDelay: 3.873062529632006}} ></div>
          <div className="bubble" style={{animationDuration: '3.5941761208097818s', distance: 6.510137218390805, left: '17.40315878158276%', time: 2.026510997206903, animationDelay: 3.41309716617838}} ></div>
          <div className="bubble" style={{animationDuration: '2.10685834323625s', distance: 9.885345055061382, left: '61.66542698059861%', time: 2.5705530297274937, animationDelay: 3.565369049693663}} ></div>
          <div className="bubble" style={{animationDuration: '3.9446001015511234s', distance: 7.442420136468658, left: '102.97414420646939%', time: 2.3528278920198007, animationDelay: 2.0043670766317456}} ></div>
          <div className="bubble" style={{animationDuration: '4.708521912952347s', distance: 8.400620538232708, left: '1.17097630167188%', time: 2.877989532564601, animationDelay: 2.458813880192916}} ></div>
          <div className="bubble" style={{animationDuration: '2.315713058236568s', distance: 8.460041883110097, left: '91.11104613175534%', time: 3.3606165311313565, animationDelay: 2.0154219152927766}} ></div>
          <div className="bubble" style={{animationDuration: '3.598177914244391s', distance: 7.116394746736909, left: '24.65559920611443%', time: 3.394097502257232, animationDelay: 3.4459999072651293}} ></div>
          <div className="bubble" style={{animationDuration: '5.21515594701838s', distance: 8.928195345855588, left: '98.85662819741816%', time: 2.1369827132277956, animationDelay: 2.545334608577662}} ></div>
          <div className="bubble" style={{animationDuration: '2.6996989455243536s', distance: 9.852041565493556, left: '39.472414863320665%', time: 3.780001059773101, animationDelay: 2.596587163391499}} ></div>
          <div className="bubble" style={{animationDuration: '5.460345953690609s', distance: 7.473948919112644, left: '64.75325963391431%', time: 3.9123887007124374, animationDelay: 3.327747905809863}} ></div>
          <div className="bubble" style={{animationDuration: '5.3442593238867s', distance: 9.521548784279744, left: '12.123437811621102%', time: 2.471948854025396, animationDelay: 2.8953351077431537}} ></div>
          <div className="bubble" style={{animationDuration: '2.9904480166250336s', distance: 8.839522627703836, left: '96.3135207252292%', time: 3.0195873292239392, animationDelay: 2.089364652819089}} ></div>
          <div className="bubble" style={{animationDuration: '5.215009048484114s', distance: 7.9846461607997705, left: '36.294653962180774%', time: 2.9908777754698814, animationDelay: 2.6300532365961073}} ></div>
          <div className="bubble" style={{animationDuration: '2.317151424713863s', distance: 9.092529764362348, left: '79.26664445017106%', time: 3.373091893758484, animationDelay: 3.1600454998360568}} ></div>
          <div className="bubble" style={{animationDuration: '2.9456431720663874s', distance: 8.758550144523351, left: '26.313694832299323%', time: 3.4799080248726955, animationDelay: 3.020485391250555}} ></div>
          <div className="bubble" style={{animationDuration: '4.826314960589541s', distance: 9.475018474723338, left: '6.876412133626179%', time: 3.549396385205604, animationDelay: 3.5884486080793856}} ></div>
          <div className="bubble" style={{animationDuration: '4.555920060459699s', distance: 9.834001601188223, left: '92.53420344015545%', time: 3.8588168623969423, animationDelay: 3.7893877260687634}} ></div>
          <div className="bubble" style={{animationDuration: '5.406042110562285s', distance: 8.550584704705447, left: '3.1865576691428954%', time: 3.137296723443876, animationDelay: 2.7948164741194303}} ></div>
          <div className="bubble" style={{animationDuration: '4.021298557199927s', distance: 9.711502646661812, left: '63.12413837218912%', time: 2.1262443714872763, animationDelay: 3.627951117950606}} ></div>
          <div className="bubble" style={{animationDuration: '5.5991759736549s', distance: 7.672908471916956, left: '8.047870505691112%', time: 3.9929947120789375, animationDelay: 2.41926137622739}} ></div>
          <div className="bubble" style={{animationDuration: '3.9679447635034437s', distance: 8.329709862360827, left: '32.44357505817467%', time: 2.7901437064998937, animationDelay: 3.7693889640329377}} ></div>
          <div className="bubble" style={{animationDuration: '4.769517213388339s', distance: 8.125280746992814, left: '4.683636053227116%', time: 2.9071810175391595, animationDelay: 2.566552424289942}} ></div>
          <div className="bubble" style={{animationDuration: '2.484066640746306s', distance: 9.1389036529757, left: '56.783445181492716%', time: 2.6098936702341065, animationDelay: 2.720289956058937}} ></div>
          <div className="bubble" style={{animationDuration: '3.397777241513654s', distance: 7.918903595816706, left: '13.798316431634738%', time: 2.4849517503579897, animationDelay: 3.273646690468585}} ></div>
          <div className="bubble" style={{animationDuration: '4.828737413319711s', distance: 8.860180277905304, left: '24.0895100742326%', time: 2.925783848661841, animationDelay: 2.4064393051725594}} ></div>
          <div className="bubble" style={{animationDuration: '4.003608632452086s', distance: 9.308453310797766, left: '97.78825058809824%', time: 2.0814573594332195, animationDelay: 2.9844747844721438}} ></div>
          <div className="bubble" style={{animationDuration: '2.392369912419558s', distance: 8.637801018580177, left: '104.58782083732808%', time: 2.004246076742874, animationDelay: 3.8145652039444133}} ></div>
          <div className="bubble" style={{animationDuration: '2.50764081432985s', distance: 9.366171417312035, left: '88.56668072776878%', time: 3.819231425517222, animationDelay: 3.930799459714961}} ></div>
          <div className="bubble" style={{animationDuration: '5.831239299726018s', distance: 7.361847209665662, left: '7.717320000894983%', time: 2.6858014333748974, animationDelay: 2.1320209432673547}} ></div>
          <div className="bubble" style={{animationDuration: '3.8851915603068052s', distance: 9.07248049670292, left: '94.32906083773254%', time: 3.1828805082075116, animationDelay: 3.406085493094247}} ></div>
          <div className="bubble" style={{animationDuration: '5.768230280102284s', distance: 6.788606142342428, left: '16.313459365607798%', time: 3.1635569144569877, animationDelay: 3.408661306222046}} ></div>
          <div className="bubble" style={{animationDuration: '3.5000123258323734s', distance: 9.669138197503447, left: '13.445551652373933%', time: 3.2691574987634886, animationDelay: 2.3199411816003033}} ></div>
          <div className="bubble" style={{animationDuration: '5.75804682672551s', distance: 9.765425077131791, left: '78.22409133785689%', time: 3.851495478817253, animationDelay: 2.1734747417837643}} ></div>
          <div className="bubble" style={{animationDuration: '5.120712439625066s', distance: 9.878485338593753, left: '39.977297666380764%', time: 2.463746375658186, animationDelay: 3.5582597147526793}} ></div>
          <div className="bubble" style={{animationDuration: '2.7301129736077447s', distance: 8.772963629968016, left: '56.80691449901191%', time: 2.250454603668674, animationDelay: 2.4521755254045363}} ></div>
          <div className="bubble" style={{animationDuration: '4.405819660051396s', distance: 6.164024062523192, left: '85.73392355816179%', time: 3.5044376650664426, animationDelay: 3.139457789589546}} ></div>
          <div className="bubble" style={{animationDuration: '3.3422753841106267s', distance: 8.882147886840663, left: '19.551797263178063%', time: 3.936504243293394, animationDelay: 3.815299906467809}} ></div>
          <div className="bubble" style={{animationDuration: '3.973009797028844s', distance: 8.556669206473721, left: '47.26216237521154%', time: 3.366263422949624, animationDelay: 3.095850027199047}} ></div>
          <div className="bubble" style={{animationDuration: '4.932711053427742s', distance: 7.314061087120032, left: '75.95556330204946%', time: 2.9074940521008323, animationDelay: 2.60437714691466}} ></div>
          <div className="bubble" style={{animationDuration: '4.984912384007252s', distance: 6.765374543015467, left: '56.158063640862984%', time: 3.8062004108449785, animationDelay: 3.2441343791501516}} ></div>
          <div className="bubble" style={{animationDuration: '4.232762299259254s', distance: 7.680915132715738, left: '83.4059664422178%', time: 3.635037822060483, animationDelay: 2.744010367083603}} ></div>
          <div className="bubble" style={{animationDuration: '2.4239170428460666s', distance: 9.00231934229649, left: '80.03433223849873%', time: 2.503661923493049, animationDelay: 3.2021510321942688}} ></div>
          <div className="bubble" style={{animationDuration: '2.6524487521451023s', distance: 6.198873287729793, left: '18.768647659044717%', time: 2.9012168115549826, animationDelay: 2.806838920627432}} ></div>
          <div className="bubble" style={{animationDuration: '3.075041692333154s', distance: 8.496272377257823, left: '33.05799472627776%', time: 3.072301226737302, animationDelay: 2.500649676576908}} ></div>
          <div className="bubble" style={{animationDuration: '2.9333808236775107s', distance: 8.595998446956296, left: '21.15246426543157%', time: 3.7709937477311435, animationDelay: 2.08962557111772}} ></div>
          <div className="bubble" style={{animationDuration: '2.4408140398888927s', distance: 8.09599092413736, left: '36.94021010978351%', time: 3.829523604705364, animationDelay: 3.2856610110879014}} ></div>
          <div className="bubble" style={{animationDuration: '2.7215479854604316s', distance: 8.763270411053721, left: '86.24627759527432%', time: 2.90792639613252, animationDelay: 3.6733918704969106}} ></div>
          <div className="bubble" style={{animationDuration: '4.643357399331565s', distance: 8.250789273360642, left: '72.44187878397408%', time: 3.486200681134253, animationDelay: 3.0385190226555054}} ></div>
          <div className="bubble" style={{animationDuration: '5.723436248539977s', distance: 9.835742262788056, left: '30.911475150411206%', time: 3.898838664836024, animationDelay: 3.644300154844512}} ></div>
          <div className="bubble" style={{animationDuration: '2.4541634381200623s', distance: 9.885960967139027, left: '-2.4309375615077977%', time: 2.985417263042138, animationDelay: 3.741827882985656}} ></div>
          <div className="bubble" style={{animationDuration: '3.5790443419627387s', distance: 9.019855138504383, left: '102.47202420291198%', time: 2.0567083804079216, animationDelay: 2.9022043705830045}} ></div>
          <div className="bubble" style={{animationDuration: '5.66231893903113s', distance: 6.286721998171782, left: '102.89988511877597%', time: 2.286023794618303, animationDelay: 2.5661663715110543}} ></div>
          <div className="bubble" style={{animationDuration: '2.344941124908611s', distance: 9.799152741696627, left: '72.56819389255328%', time: 2.67164906185197, animationDelay: 2.313220894930329}} ></div>
          <div className="bubble" style={{animationDuration: '4.6263044430975535s', distance: 6.249812753219399, left: '46.57117503590275%', time: 3.6194833326022655, animationDelay: 3.557997334046272}} ></div>
          <div className="bubble" style={{animationDuration: '4.596117587437605s', distance: 6.804177569652002, left: '90.92049218294738%', time: 2.3293067275730435, animationDelay: 2.543133973891951}} ></div>
          <div className="bubble" style={{animationDuration: '2.2663646200444862s', distance: 6.908863278984404, left: '16.413525032527197%', time: 3.904632394687006, animationDelay: 2.949418676913946}} ></div>
          <div className="bubble" style={{animationDuration: '3.1691352043236947s', distance: 9.306478493817599, left: '99.8818494792216%', time: 2.026371509827066, animationDelay: 2.39460155213672}} ></div>
          <div className="bubble" style={{animationDuration: '3.326518111843961s', distance: 7.7353655278492885, left: '103.83271635060761%', time: 3.1511318678118627, animationDelay: 3.928645486704832}} ></div>
          <div className="bubble" style={{animationDuration: '3.731462974624999s', distance: 6.000356952499575, left: '34.174001351558246%', time: 2.3876479171179272, animationDelay: 2.278364258445284}} ></div>
          <div className="bubble" style={{animationDuration: '4.343710701204102s', distance: 6.750420905505994, left: '1.015432241695824%', time: 2.181782183912794, animationDelay: 3.2960127830449997}} ></div>
          <div className="bubble" style={{animationDuration: '5.982632847124616s', distance: 9.663787576295903, left: '1.2401992170606269%', time: 3.831908043334243, animationDelay: 2.5585232662166533}} ></div>
          <div className="bubble" style={{animationDuration: '4.471585829713892s', distance: 6.564745272971227, left: '76.62902294621193%', time: 3.3143870681521173, animationDelay: 2.1420427574355436}} ></div>
          <div className="bubble" style={{animationDuration: '4.202033923492758s', distance: 8.494815292771687, left: '24.71654057037564%', time: 2.5729485334676023, animationDelay: 2.4175055762786974}} ></div>
          <div className="bubble" style={{animationDuration: '2.4479963440318313s', distance: 8.956141895398517, left: '41.65757641233777%', time: 3.0400088141342287, animationDelay: 2.432982473219291}} ></div>
          <div className="bubble" style={{animationDuration: '4.421395796285468s', distance: 6.08942418465233, left: '33.82738303782222%', time: 2.097284253597278, animationDelay: 2.2870654373770183}} ></div>
          <div className="bubble" style={{animationDuration: '3.138742068239657s', distance: 8.911022595529225, left: '8.903013686378324%', time: 3.474622590320774, animationDelay: 2.2280513086998983}} ></div>
          <div className="bubble" style={{animationDuration: '2.289705786834955s', distance: 7.1784733139095165, left: '59.563590892690826%', time: 3.128066004871658, animationDelay: 2.12355426606425}} ></div>
          <div className="bubble" style={{animationDuration: '3.578925116321777s', distance: 7.282331924945634, left: '21.737383377116046%', time: 2.874779172078976, animationDelay: 3.1469844907159543}} ></div>
          <div className="bubble" style={{animationDuration: '4.847898938570176s', distance: 9.969479962565082, left: '44.22393488858667%', time: 2.109978331048341, animationDelay: 2.276213985128436}} ></div>
          <div className="bubble" style={{animationDuration: '2.032637049165876s', distance: 7.01651364226421, left: '51.69580497652497%', time: 2.2515013427386577, animationDelay: 2.11449105943839}} ></div>
          <div className="bubble" style={{animationDuration: '4.035504514149809s', distance: 6.282094683466739, left: '53.22594667978903%', time: 2.731529723342765, animationDelay: 2.908263842960319}} ></div>
          <div className="bubble" style={{animationDuration: '4.591948310079363s', distance: 6.402106335449148, left: '48.206519435002534%', time: 3.5427469321677707, animationDelay: 2.8938863963392736}} ></div>
        </div>
        <div className="content">

        </div>
      </div>
      <svg style={{left: 'fixed', top: 150 }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob" />
            <feComposite in="SourceGraphic" in2="blob" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
    );
  }
}

export default Footer;