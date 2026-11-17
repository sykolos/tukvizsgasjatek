// TÜK gyakorló – kérdésbank, I. rész (elmélet)
// Forrás: Titkos ügykezelői ismeretek (NKE, 2026), változásokról szóló tájékoztató (2026. 08. 26.),
// NBF elméleti és gyakorlati diasor (2026. augusztus), fogalomtár.
// Kérdéstípusok: mc (egy jó válasz), multi (több jó válasz), tf (igaz/hamis), order (sorrend),
// match (párosítás), num (számot kell beírni).
// ch:true = a 2026-os változásokat (helyesbítéseket) érintő kérdés.

window.TUK = window.TUK || {};

TUK.topics = [
  { id: 'alap',   name: 'Alapelvek, fogalmak',               tetel: 'Szóbeli 1–2.',  icon: '🧭' },
  { id: 'minosito', name: 'Minősítők, minősítési eljárás',   tetel: 'Szóbeli 3.',    icon: '✍️' },
  { id: 'szint',  name: 'Közérdekek, szintek, érvényességi idő', tetel: 'Szóbeli 4–5.', icon: '🏷️' },
  { id: 'keszit', name: 'Irat készítése, jelölés megismétlése', tetel: 'Szóbeli 5., 12. • Gyak. 16–17.', icon: '📝' },
  { id: 'felh',   name: 'Felhasználás, megismerés, SZBT',    tetel: 'Szóbeli 6., 8.', icon: '🪪' },
  { id: 'felulv', name: 'Felülvizsgálat, felülbírálat',      tetel: 'Szóbeli 7. • Gyak. 14–15.', icon: '🔍' },
  { id: 'terulet', name: 'Biztonsági területek, engedélyek', tetel: 'Szóbeli 9.',    icon: '🏛️' },
  { id: 'szerv',  name: 'NBF, biztonsági vezető, TÜK',       tetel: 'Szóbeli 10–11., 13.', icon: '👥' },
  { id: 'gazd',   name: 'Gazdálkodó szervezet, közreműködő', tetel: 'Szóbeli 14.',   icon: '🏭' },
  { id: 'nyilv',  name: 'Főnyilvántartó, segédletek, Nyilvántartók', tetel: 'Szóbeli 15., 22.', icon: '📚' },
  { id: 'iktat',  name: 'Iktatás',                           tetel: 'Szóbeli 16. • Gyak. 1–4., 6., 11–13.', icon: '🔢' },
  { id: 'atvet',  name: 'Átvétel, felbontás',                tetel: 'Szóbeli 17. • Gyak. 1–3.', icon: '📬' },
  { id: 'belso',  name: 'Szerven belüli átadás, visszavétel', tetel: 'Szóbeli 18. • Gyak. 6–8.', icon: '🤝' },
  { id: 'sokszor', name: 'Sokszorosítás; ha baj van',         tetel: 'Szóbeli 19. • Gyak. 4.', icon: '🖨️' },
  { id: 'tovabb', name: 'Továbbítás szerven kívülre',         tetel: 'Szóbeli 20. • Gyak. 9–11., 13.', icon: '🚚' },
  { id: 'irattar', name: 'Irattározás, megsemmisítés',        tetel: 'Szóbeli 21. • Gyak. 5.', icon: '🗄️' }
];

TUK.q = [];
function Q(o) { TUK.q.push(o); }

/* ============================ ALAPELVEK, FOGALMAK ============================ */
Q({ id:'alap1', t:'alap', type:'match',
  q:'Párosítsd az alapelvet a tartalmával!',
  pairs:[
    ['Szükségesség és arányosság','Csak törvényi feltételek esetén, a szükséges szinten és a feltétlenül indokolt ideig lehet minősíteni'],
    ['Szükséges ismeret','Csak az ismerheti meg, akinek az állami vagy közfeladatához feltétlenül szükséges'],
    ['Bizalmasság','Illetéktelen személy számára nem válhat hozzáférhetővé, megismerhetővé'],
    ['Sérthetetlenség','Kizárólag az arra jogosult módosíthatja vagy semmisítheti meg'],
    ['Rendelkezésre állás','A jogosult számára szükség szerint elérhető és felhasználható']
  ],
  e:'Az öt alapelv a Mavtv. alapja, a minősített adat teljes életciklusa alatt alkalmazni kell őket. Tipp: „SZ-SZ-B-S-R” – szükségesség/arányosság, szükséges ismeret, bizalmasság, sérthetetlenség, rendelkezésre állás.',
  src:'Tankönyv 1. fejezet • Szóbeli 1.' });

Q({ id:'alap2', t:'alap', type:'mc',
  q:'Valakinek van személyi biztonsági tanúsítványa és titoktartási nyilatkozata, de az adott irat nem tartozik a feladatához. Megismerheti?',
  o:['Igen, mert megvannak az okmányai','Nem, a szükséges ismeret elve miatt','Igen, ha a titkos ügykezelő engedi','Csak „Korlátozott terjesztésű!” szintig'],
  a:1,
  e:'A szükséges ismeret elve szerint hiába van valakinek általános jogosultsága (SZBT, titoktartási nyilatkozat), csak akkor férhet hozzá, ha az állami vagy közfeladatához ez feltétlenül szükséges – pl. ő a címzett, vagy a vezetője rászignálta.',
  src:'Tankönyv 1. fejezet • Szóbeli 1.' });

Q({ id:'alap3', t:'alap', type:'mc',
  q:'Melyik alapelv kapcsán írja a tankönyv, hogy egy már jogszerűen minősített adaton bármilyen módosítást (törlés, hozzáadás) főszabályként csak a minősítő végezhet?',
  o:['Bizalmasság','Sérthetetlenség','Rendelkezésre állás','Szükséges ismeret'],
  a:1,
  e:'A sérthetetlenség elve: a minősített adatot kizárólag az arra jogosult személy módosíthatja vagy semmisítheti meg. Ez az elv már figyelembe veszi, hogy az adatok többsége elektronikusan készül.',
  src:'Tankönyv 1. fejezet • Szóbeli 1.' });

Q({ id:'alap4', t:'alap', type:'tf',
  q:'A Btk. szerint minősített adattal visszaélést követ el az is, aki minősített adatot jogosult személy részére hozzáférhetetlenné tesz.',
  a:true,
  e:'Igaz. Ezért fontos a rendelkezésre állás elve. A Btk. 265. § (1) b) pontja szerint visszaélés az is, ha valaki jogosult személy elől teszi hozzáférhetetlenné az adatot (pl. elveszíti az egyetlen példányt).',
  src:'Tankönyv 1. és 13.1. fejezet • Szóbeli 1., 19.' });

Q({ id:'alap5', t:'alap', type:'tf',
  q:'A „Nem nyilvános!” jelöléssel ellátott adat a Mavtv. szerinti minősített adatnak számít.',
  a:false,
  e:'Hamis. A „Nem nyilvános!” (döntés-előkészítő) adat az Infotv. alapján 10 évig nem nyilvános, de NEM minősített adat, a Mavtv. nem vonatkozik rá. Ugyanígy nem tartozik a Mavtv. alá a banktitok, orvosi titok, ügyvédi titok, üzleti titok.',
  src:'Tankönyv 2.1. • Szóbeli 2.' });

Q({ id:'alap6', t:'alap', type:'multi',
  q:'Melyek NEM tartoznak a Mavtv. hatálya alá? (Jelöld mindet!)',
  o:['Banktitok','Üzleti titok','„Korlátozott terjesztésű!” nemzeti adat','Orvosi titok','„Nem nyilvános!” jelzésű adat'],
  a:[0,1,3,4],
  e:'A banktitok, az orvosi titok, az ügyvédi titok, az üzleti titok és a „Nem nyilvános!” adat nem minősített adat. A „Korlátozott terjesztésű!” viszont a négy minősítési szint egyike, tehát a Mavtv. hatálya alá tartozik.',
  src:'Tankönyv 2.1. • Szóbeli 2.' });

Q({ id:'alap7', t:'alap', type:'mc',
  q:'Melyik külföldi minősített adatnak számít?',
  o:['Egy magyar minisztérium által NATO-ügyben készített és minősített irat','A Magyar Honvédség nemzetközi gyakorlatán keletkezett adat, amelyhez a részes felek a gyakorlat követelményei szerint korlátozzák a hozzáférést','Bármely idegen nyelvű irat','Külföldi cégtől kapott üzleti titok'],
  a:1,
  e:'Külföldi minősített adat: (1) az EU intézményei, a külföldi részes fél vagy nemzetközi szervezet által készített, kihirdetett nemzetközi szerződés alapján átadott, minősítéssel korlátozott adat; (2) a Magyar Honvédség nemzetközi műveletei, gyakorlatai során keletkezett/felhasznált, a felek által minősített adat – akkor is, ha nincs erről megállapodás. Egy magyar szerv saját minősítése nemzeti minősített adat.',
  src:'Tankönyv 2.1. • Szóbeli 2.' });

Q({ id:'alap8', t:'alap', type:'multi',
  q:'Mi tartozik a minősítési jelöléshez? (Jelöld mindet!)',
  o:['Minősítési szint','Érvényességi idő','A minősítő neve','A minősítő beosztása','Iktatószám','Példánysorszám'],
  a:[0,1,2,3],
  e:'A minősítési jelölés négy eleme: minősítési szint, érvényességi idő, a minősítő neve és beosztása. Az iktatószám és a példánysorszám is kötelező alaki kellék az iraton, de nem része a minősítési jelölésnek.',
  src:'Tankönyv 2.1., 2.6. • Szóbeli 2., 12.' });

Q({ id:'alap9', t:'alap', type:'mc',
  q:'Mi az érvényességi idő?',
  o:['Az az időtartam (évben), ameddig az iratot meg kell őrizni','Az év, hó, nap (szükség esetén óra, perc) szerint feltüntetett időpont, ameddig a minősítő korlátozza a nemzeti minősített adat nyilvánosságra hozatalát','A személyi biztonsági tanúsítvány lejárati ideje','Az iktatókönyv lezárásának napja'],
  a:1,
  e:'Az érvényességi idő IDŐPONT (nem időtartam), év-hó-nap, szükség esetén óra-perc pontossággal. Eddig korlátozza a minősítő a nyilvánosságot. Lejárta után az adat nyílttá válik, és újra már nem minősíthető.',
  src:'Tankönyv 2.1., 2.6. • Szóbeli 2.' });

/* ============================ MINŐSÍTŐK ============================ */
Q({ id:'min1', t:'minosito', type:'multi', ch:true,
  q:'Kik minősítők a Mavtv. 4. § (1) bekezdése szerint? (Jelöld mindet, ami helyes!)',
  o:['A köztársasági elnök','A Magyar Nemzeti Bank elnöke','A Nemzeti Vagyonvisszaszerzési és Vagyonvédelmi Hivatal elnöke','A Nemzeti Biztonsági Felügyelet vezetője','A biztonsági vezető','A titkos ügykezelő'],
  a:[0,1,2,3],
  e:'A köztársasági elnök, az MNB elnöke és az NBF vezetője is szerepel a listán. A 2026-os változás új, 24. pontként felvette a Nemzeti Vagyonvisszaszerzési és Vagyonvédelmi Hivatal elnökét. A biztonsági vezető és a titkos ügykezelő NEM minősítő.',
  src:'Tankönyv 2.2. + 2026-os változások • Szóbeli 3.' });

Q({ id:'min2', t:'minosito', type:'mc', ch:true,
  q:'A 2026-os változás szerint mi történt a Terrorelhárítási Központtal és az Országgyűlési Őrséggel?',
  o:['Megszűntek, jogutód nélkül','2026. 10. 01-jével beolvadtak az általános rendőrségi feladatok ellátására létrehozott szerv szervezetébe; vezetőjük 2026. 09. 30-ig volt minősítő','Önálló minősítői jogkört kaptak','A Nemzetbiztonsági Szakszolgálatba olvadtak'],
  a:1,
  e:'A TEK vezetője és az Országgyűlési Őrség parancsnoka 2026. 09. 30-ig volt minősítő. 2026. 10. 01-jével mindkét szerv beolvadt az általános rendőrségi feladatok ellátására létrehozott szervbe. A vizsgán ezt a változást kell tudni!',
  src:'Változások: 2.2., 2.3. • Szóbeli 3.' });

Q({ id:'min3', t:'minosito', type:'tf', ch:true,
  q:'A Szuverenitásvédelmi Hivatal autonóm államigazgatási szervként továbbra is szerepel a minősítők körében.',
  a:false,
  e:'Hamis. A 2026. évi XXIV. törvény alapján a Szuverenitásvédelmi Hivatal 2026. július 15-ével megszűnt. Ezért törölték az autonóm államigazgatási szervek listájáról, és az elnöke/elnökhelyettese SZBT nélküli felhasználási kivételét is.',
  src:'Változások (14. és 36. oldal) • Szóbeli 3., 6.' });

Q({ id:'min4', t:'minosito', type:'multi', ch:true,
  q:'Melyek autonóm államigazgatási szervek (a 15. pont szerint, a 2026-os állapot alapján)?',
  o:['Közbeszerzési Hatóság','Integritás Hatóság','Gazdasági Versenyhivatal','Nemzeti Választási Iroda','Szuverenitásvédelmi Hivatal','Központi Statisztikai Hivatal'],
  a:[0,1,2,3],
  e:'Autonóm államigazgatási szerv: Közbeszerzési Hatóság, Integritás Hatóság, GVH, NAIH, Nemzeti Választási Iroda, Európai Támogatásokat Auditáló Főigazgatóság. A Szuverenitásvédelmi Hivatal 2026. 07. 15-ével megszűnt. A KSH kormányzati főhivatal, nem autonóm szerv.',
  src:'Tankönyv 2.2. + változások • Szóbeli 3.' });

Q({ id:'min5', t:'minosito', type:'match',
  q:'Párosítsd a szervet a kategóriájával!',
  pairs:[
    ['Nemzeti Média- és Hírközlési Hatóság','Önálló szabályozó szerv'],
    ['Központi Statisztikai Hivatal','Kormányzati főhivatal'],
    ['Gazdasági Versenyhivatal','Autonóm államigazgatási szerv'],
    ['Büntetés-végrehajtási szervezet','Rendvédelmi szerv'],
    ['Információs Hivatal','Polgári nemzetbiztonsági szolgálat']
  ],
  e:'Önálló szabályozó szervek: NMHH, MEKH, SZTFH, OAH. Kormányzati főhivatal: KSH, Szellemi Tulajdon Nemzeti Hivatala. Rendvédelmi szerv: rendőrség, bv., katasztrófavédelem, polgári nemzetbiztonsági szolgálatok (AH, IH, NBSZ, NIK).',
  src:'Tankönyv 2.2. • Szóbeli 3.' });

Q({ id:'min6', t:'minosito', type:'mc',
  q:'Kire ruházhatja át a minősítő a „Szigorúan titkos!” szintű minősítési jogkört (általános szabály)?',
  o:['Bármely vezetői megbízású munkatársára','A helyettesére; a Kormány tagja a közigazgatási államtitkárra, államtitkárra, helyettes államtitkárra','A biztonsági vezetőre','Senkire, nem ruházható át'],
  a:1,
  e:'„Szigorúan titkos!” szintnél szűk a kör: a helyettes, illetve a Kormány tagja esetén a közigazgatási államtitkár, államtitkár, helyettes államtitkár. „Titkos!”, „Bizalmas!”, „Korlátozott terjesztésű!” szintnél az irányítása alatt álló szervnél vezetői megbízású / vezetői beosztásba kinevezett személyre ruházható. Az átruházás mindig írásban történik.',
  src:'Tankönyv 2.3. • Szóbeli 3.' });

Q({ id:'min7', t:'minosito', type:'order',
  q:'Állítsd sorrendbe a minősítési eljárás vizsgálati lépéseit!',
  o:['Az adat a minősítéssel védhető közérdekek körébe tartozik-e?','Jogosulatlan kezelése közvetlenül sérti vagy veszélyezteti-e a közérdeket (és mekkora kárt okoz → szint)?','Mennyi ideig kell korlátozni a nyilvánosságot (érvényességi idő)?'],
  e:'1. lépés: védhető közérdek. 2. lépés: okoz-e kárt, és mekkorát – ebből lesz a minősítési szint (kárközpontú rendszer). 3. lépés: az érvényességi idő meghatározása. Csak ha MINDEN feltétel együtt fennáll, lehet minősíteni.',
  src:'Tankönyv 2.4–2.6. • Szóbeli 3.' });

Q({ id:'min8', t:'minosito', type:'multi',
  q:'Mit kell tartalmaznia a minősítési javaslatnak?',
  o:['Hivatkozást a minősítéssel védhető közérdekre','A minősítési szintet','Az érvényességi időt','A minősítés indokolását','A címzettek listáját'],
  a:[0,1,2,3],
  e:'A minősítési javaslat elemei: védhető közérdekre hivatkozás, minősítési szint, érvényességi idő, indokolás (a tények és körülmények, amelyek a minősítést szükségessé teszik). A javaslat és a döntés maga nem tartalmazhat minősített adatot!',
  src:'Tankönyv 2.7. • Szóbeli 3.' });

Q({ id:'min9', t:'minosito', type:'num',
  q:'A felterjesztés kézhezvételétől számítva hány napon belül kell a minősítőnek döntenie az adat minősítéséről?',
  a:30, unit:'nap',
  e:'30 nap. Ha a minősítő ezen belül nem dönt, a nemzeti minősített adat NEM jön létre, vagyis az adat nyilvános lesz. A döntésig a kezdeményezett szint szabályai szerint kell kezelni az adatot.',
  src:'Tankönyv 2.7. • Szóbeli 3.' });

Q({ id:'min10', t:'minosito', type:'tf',
  q:'A minősítési eljárás alatt álló adatot a minősítő döntéséig a kezdeményezett minősítési szintnek megfelelő biztonsági szabályok szerint kell kezelni.',
  a:true,
  e:'Igaz. Amíg a minősítő nem dönt (legfeljebb 30 nap), az adatot úgy kell védeni, mintha már a javasolt szintre minősítették volna.',
  src:'Tankönyv 2.7. • Szóbeli 3.' });

Q({ id:'min11', t:'minosito', type:'mc',
  q:'Mi a teendő, ha a minősítendő adat magánál a minősítőnél keletkezik?',
  o:['Valakinek minősítési javaslatot kell készítenie hozzá','A minősítő a javaslat tartalmával megegyezően, indokolással írásba foglalja a döntését, és a keletkezéskor minősít','Az NBF-hez kell fordulni','Nem minősíthető'],
  a:1,
  e:'Ilyenkor nincs külön javaslattevő: a minősítő maga foglalja írásba a döntést (közérdek, szint, érvényességi idő, indokolás), és az adatot már a keletkezéskor minősíti.',
  src:'Tankönyv 2.7. • Szóbeli 3.' });

Q({ id:'min12', t:'minosito', type:'multi', ch:true,
  q:'Melyek a „Kormány tagja” fogalom alá tartozó miniszterek a 2026. évi XIII. törvény szerinti új struktúrában? (Jelöld a helyeseket!)',
  o:['Oktatási és gyermekügyi miniszter','Tudományos és technológiai miniszter','Külügyminiszter','Külgazdasági és külügyminiszter','Energiaügyi miniszter','Szociális és családügyi miniszter'],
  a:[0,1,2,5],
  e:'Az új (2026-os) lista elemei többek között: egészségügyi, igazságügyi, oktatási és gyermekügyi, pénzügy-, agrár- és élelmiszergazdaságért felelős, bel-, élő környezetért felelős, gazdasági és energetikai, honvédelmi, közlekedési és beruházási, kül-, miniszterelnökséget vezető, szociális és családügyi, társadalmi kapcsolatokért és kultúráért felelős, tudományos és technológiai, vidék- és településfejlesztési miniszter. A „külgazdasági és külügyminiszter” és az „energiaügyi miniszter” a régi, áthúzott listán szerepelt.',
  src:'Változások (14. oldal 3. bek.) • Szóbeli 3.' });

/* ============================ SZINTEK, ÉRVÉNYESSÉGI IDŐ ============================ */
Q({ id:'sz1', t:'szint', type:'match',
  q:'Párosítsd a minősítési szintet a kár mértékével!',
  pairs:[
    ['„Szigorúan titkos!”','Rendkívül súlyosan károsítja a közérdeket'],
    ['„Titkos!”','Súlyosan károsítja'],
    ['„Bizalmas!”','Károsítja'],
    ['„Korlátozott terjesztésű!”','Hátrányosan érinti']
  ],
  e:'Ez a kárközpontú minősítési rendszer: minél nagyobb a lehetséges kár, annál magasabb a szint és annál szigorúbb a védelem.',
  src:'Tankönyv 2.5. • Szóbeli 4.' });

Q({ id:'sz2', t:'szint', type:'match',
  q:'Párosítsd a szintet a tankönyvi példával!',
  pairs:[
    ['„Szigorúan titkos!”','Nyilvánosságra kerülése nagyszámú emberi élet közvetlen veszélyeztetésével jár'],
    ['„Titkos!”','Közvetlen életveszélyt okoz'],
    ['„Bizalmas!”','Az állam érdekérvényesítő képességeit hátráltatja, jelentősen zavarja'],
    ['„Korlátozott terjesztésű!”','Érettségi tételek']
  ],
  e:'Ezeket a példákat a tankönyv hozza a szintekhez – jól megjegyezhető kapaszkodók.',
  src:'Tankönyv 2.5. • Szóbeli 4.' });

Q({ id:'sz3', t:'szint', type:'multi',
  q:'Melyek a minősítéssel védhető közérdekek? (Jelöld mindet!)',
  o:['Magyarország szuverenitása, területi integritása','Alkotmányos rendje','Honvédelmi, nemzetbiztonsági, bűnüldözési, bűnmegelőzési tevékenysége','Igazságszolgáltatási, központi pénzügyi, gazdasági tevékenysége','Külügyi vagy nemzetközi kapcsolatai','Egy kormánytisztviselő jó hírneve'],
  a:[0,1,2,3,4],
  e:'A hatodik közérdek: az állami szervek illetéktelen külső befolyástól mentes, zavartalan működésének biztosítása. Egy személy jó hírneve nem védhető közérdek. Ami nem tartozik ezek közé, azt nem lehet minősíteni (pl. a vörösiszap-katasztrófa ténye).',
  src:'Tankönyv 2.4. • Szóbeli 4.' });

Q({ id:'sz4', t:'szint', type:'match',
  q:'Párosítsd a szintet a maximális (alap) érvényességi idővel!',
  pairs:[
    ['„Szigorúan titkos!”','30 év'],
    ['„Titkos!”','30 év '],
    ['„Bizalmas!”','20 év'],
    ['„Korlátozott terjesztésű!”','10 év']
  ],
  e:'Két felső szint: legfeljebb 30 év. „Bizalmas!”: legfeljebb 20 év. „Korlátozott terjesztésű!”: legfeljebb 10 év.',
  src:'Tankönyv 2.6. • Szóbeli 4.' });

Q({ id:'sz5', t:'szint', type:'mc',
  q:'Rendkívül indokolt esetben hányszor és legfeljebb mennyivel hosszabbítható meg egy „Titkos!” adat érvényességi ideje?',
  o:['Egyszer, legfeljebb 30 évvel','Kétszer, alkalmanként 30 évvel','Egyszer, legfeljebb 5 évvel','Korlátlanul, 10 évenként'],
  a:0,
  e:'„Titkos!” és „Szigorúan titkos!”: rendkívül indokolt esetben 1 × legfeljebb 30 év (összesen 60). Magánszemély jogos érdekével szorosan összefüggő honvédelmi, nemzetbiztonsági, bűnüldözési vagy igazságszolgáltatási érdek esetén 2 × 30 év (összesen 90).',
  src:'Tankönyv 2.6., 1. táblázat • Szóbeli 5.' });

Q({ id:'sz6', t:'szint', type:'match',
  q:'Mennyi lehet ÖSSZESEN az érvényességi idő a hosszabbításokkal együtt, a „magánszemély jogos érdekével összefüggő” esetben (2 hosszabbítás)?',
  pairs:[
    ['„Szigorúan titkos!”','90 év'],
    ['„Titkos!”','90 év '],
    ['„Bizalmas!”','60 év (20+20+20)'],
    ['„Korlátozott terjesztésű!”','50 év (10+20+20)']
  ],
  e:'A két alsó szintnél ilyenkor a hosszabbítás alkalmanként legfeljebb 20 év: „Bizalmas!” 20+20+20 = 60, „Korlátozott terjesztésű!” 10+20+20 = 50. Rendkívül indokolt esetben (1 alkalom) a két alsó szint csak 5 évvel hosszabbítható: 25, illetve 15 év.',
  src:'Tankönyv 2.6., 1. táblázat • Szóbeli 5.' });

Q({ id:'sz7', t:'szint', type:'num',
  q:'Egy „Korlátozott terjesztésű!” adat érvényességi idejét rendkívül indokolt esetben egyszer meghosszabbítják a maximumra. Mennyi lehet összesen az érvényességi idő?',
  a:15, unit:'év',
  e:'10 év alap + 1 × legfeljebb 5 év = 15 év. („Bizalmas!” esetén ugyanígy 20 + 5 = 25 év.)',
  src:'Tankönyv 2.6., 1. táblázat • Szóbeli 5.' });

Q({ id:'sz8', t:'szint', type:'tf',
  q:'Az érvényességi idő a lejárta után is meghosszabbítható új minősítési eljárással.',
  a:false,
  e:'Hamis. A hosszabbításhoz új minősítési eljárás kell, de ezt az eredeti érvényességi idő LETELTE ELŐTT kell lefolytatni. Lejárat után az adat nyílttá válik, és a megszűnt minősítésű adat újból NEM minősíthető.',
  src:'Tankönyv 2.6. • Szóbeli 5.' });

Q({ id:'sz9', t:'szint', type:'mc',
  q:'Mi a különleges szabály, ha épület, építmény (vagy annak műszaki adata) a nemzeti minősített adat?',
  o:['Nem lehet minősíteni','Új minősítési eljárással több alkalommal, alkalmanként legfeljebb 10 évre meghosszabbítható, az épület használatának idejére','Automatikusan 90 évig minősített','Csak „Korlátozott terjesztésű!” lehet'],
  a:1,
  e:'Épületnél, építménynél az érvényességi idő többször is meghosszabbítható, alkalmanként legfeljebb 10 évvel, az épület használatának idejére. A javaslatot és a döntést külön kísérőlapon kell feltüntetni.',
  src:'Tankönyv 2.6., 2.7. • Szóbeli 5.' });

Q({ id:'sz10', t:'szint', type:'mc',
  q:'Melyik szint indokolt, ha az okozott sérelem ellenintézkedésekkel lényegesen enyhíthető, nem jár jelentős anyagi ráfordítással, de pl. gátolja egy legalább 5 évi szabadságvesztéssel büntetendő bűncselekmény felderítését?',
  o:['„Titkos!”','„Bizalmas!”','„Korlátozott terjesztésű!”','„Szigorúan titkos!”'],
  a:1,
  e:'Ez a „Bizalmas!” (kár) szint leírása: ellenintézkedéssel lényegesen enyhíthető, nem jár jelentős ráfordítással; ide tartozik a diplomáciai kapcsolatok tényleges sérelme (hivatalos tiltakozás) és a legalább 5 évi szabadságvesztéssel büntetendő bűncselekmény felderítésének gátlása is.',
  src:'Tankönyv 2.5. • Szóbeli 4.' });

/* ============================ IRAT KÉSZÍTÉSE, JELÖLÉS MEGISMÉTLÉSE ============================ */
Q({ id:'k1', t:'keszit', type:'mc',
  q:'Hol tünteti fel a készítő rendszerint a minősítési jelölést a papíralapú iraton?',
  o:['Az első oldal jobb felső részén','Az utolsó oldal alján','A borítékon','Minden oldal bal margóján'],
  a:0,
  e:'A minősítési jelölés az első oldal jobb felső részére kerül. Ha az adathordozó jellege ezt kizárja: külön kísérőlapra vagy elválaszthatatlan elektronikus adatállományba.',
  src:'Tankönyv 2.7. • Szóbeli 12. • Gyak. 17.' });

Q({ id:'k2', t:'keszit', type:'mc',
  q:'Hol szerepel a minősítési szint egy több lapos papíralapú irat további oldalain?',
  o:['Csak az első oldalon','Minden minősített adatot tartalmazó oldal felső és alsó részének közepén','Csak az utolsó oldalon','Az oldal jobb alsó sarkában'],
  a:1,
  e:'Az első oldalon a jobb felső jelölés mellett az oldal alsó részének közepén is ott a szint. A további oldalakon a szint minden minősített adatot tartalmazó oldal tetején és alján, középen szerepel.',
  src:'Tankönyv 2.7. • Szóbeli 12.' });

Q({ id:'k3', t:'keszit', type:'multi',
  q:'Mit kell még tartalmaznia a minősített adathordozónak (a minősítési jelölésen túl)?',
  o:['A készítő szerv megnevezését és az iktatószámot','A példányszámot és a példánysorszámot (ha megállapítható)','A terjedelmet (elektronikus adat kivételével)','A mellékletek darabszámát, terjedelmét','A kiadmányozás dátumát','A titkos ügykezelő aláírását'],
  a:[0,1,2,3,4],
  e:'Alaki kellékek: készítő szerv + iktatószám, példányszám + példánysorszám, terjedelem, mellékletek adatai (eltérő szint esetén azok szintje is), kiadmányozás dátuma, az eredeti irattári példányon a kiadmányozó neve, aláírása, bélyegzőlenyomata. A titkos ügykezelő aláírása nem alaki kellék.',
  src:'Tankönyv 2.7. • Szóbeli 12. • Gyak. 17.' });

Q({ id:'k4', t:'keszit', type:'mc',
  q:'Hol szerepel az egyes példányok címzettjeinek felsorolása?',
  o:['Kizárólag a borítékon','Az irattári példányhoz csatolt külön elosztóban (vagy magán az adathordozón)','A futárjegyzék-nyilvántartásban','A főnyilvántartó könyvben'],
  a:1,
  e:'A címzetteket – az egyes példányok sorszámával együtt – az irattári példányhoz csatolt külön elosztó tartalmazza. Külön elosztó helyett az adathordozó is tartalmazhatja őket.',
  src:'Tankönyv 2.7. • Szóbeli 12. • Gyak. 13.' });

Q({ id:'k5', t:'keszit', type:'multi',
  q:'Melyek különleges kezelési utasítások? (Jelöld mindet!)',
  o:['„Saját kezű felbontásra!”','„Más szervnek nem adható át!”','„Nem sokszorosítható!”','„Elolvasás után visszaküldendő!”','„Zárt borítékban tárolandó!”','„Baleset esetén vagy rendkívüli helyzetben a küldő szerv bonthatja fel!”'],
  a:[0,1,2,3,4],
  e:'Különleges kezelési utasítások: „Saját kezű felbontásra!”, „Más szervnek nem adható át!”, „Nem sokszorosítható!”, „Kivonat nem készíthető!”, „Elolvasás után visszaküldendő!”, „Zárt borítékban tárolandó!”, „Különösen fontos!”, és más egyedi utasítás. A „Baleset esetén…” figyelmeztetés a borítékra kötelező felirat, nem különleges kezelési utasítás.',
  src:'Tankönyv 2.7., 10.2. • Szóbeli 12., 20.' });

Q({ id:'k6', t:'keszit', type:'tf',
  q:'A különleges kezelési utasítástól csak a minősítő írásbeli engedélyével lehet eltérni.',
  a:true,
  e:'Igaz. A minősítő a minősítéssel egyidejűleg rendelkezhet a különleges kezelésről, és ettől csak az ő írásbeli engedélyével lehet eltérni.',
  src:'Tankönyv 2.7. • Szóbeli 12.' });

Q({ id:'k7', t:'keszit', type:'mc',
  q:'Mikor kell a minősítési jelölést megismételni (új minősítési eljárás nélkül)?',
  o:['Ha az irat másolatát készítjük','Ha a készített adatba korábban minősített (saját vagy más minősítő által készített) adatot foglalunk bele, és további, saját minősítést igénylő adat nem keletkezik','Ha az érvényességi idő lejár','Minden továbbításnál'],
  a:1,
  e:'Ha csak korábbi minősített adatot foglalunk bele, és nem keletkezik új minősítendő adat, nem kell új eljárás – a korábbi jelölést (szint, érvényességi idő, minősítő neve, beosztása) kell megismételni. Ha új, minősítendő adat is keletkezik, arra külön minősítési eljárás kell.',
  src:'Tankönyv 2.8. • Szóbeli 5., 12. • Gyak. 16.' });

Q({ id:'k8', t:'keszit', type:'multi',
  q:'Mit kell feltüntetni a minősítési jelölés megismétlésekor az azonosíthatóság érdekében?',
  o:['Az eredeti minősítési szintet és érvényességi időt','Az eredeti minősítő nevét és beosztását','A megismételt adatot keletkeztető szerv nevét','A keletkeztető szerv által adott iktatószámot','A saját szervünk minősítőjének nevét az eredeti helyett'],
  a:[0,1,2,3],
  e:'Az eredeti jelölést kell megismételni, és mellé kell írni a keletkeztető szerv nevét és az ott adott iktatószámot. Pl.: „A minősítési jelölés megismételve a Honvédelmi Minisztérium HM/1/12/2026. ikt. számú irata alapján.” A saját minősítőnk nevét nem írjuk be helyette.',
  src:'Tankönyv 2.8., gyakorlati diasor 28. minta • Gyak. 16.' });

Q({ id:'k9', t:'keszit', type:'mc',
  q:'Több különböző minősítési jelölésű adatot ismételsz meg egy saját iratban. Mi kerül az első oldal felső részére?',
  o:['A legalacsonyabb szint és a legrövidebb érvényességi idő','A legmagasabb szintű és a leghosszabb érvényességi idejű megismételt jelölés','Mindegyik jelölés egymás alatt','Semmi, csak a szövegben jelöljük'],
  a:1,
  e:'Az egyes megismételt adatoknál közvetlenül feltüntetjük a saját jelölésüket és forrásukat, az első oldal felső részére pedig a legmagasabb szintet és leghosszabb érvényességi időt tartalmazó megismételt jelölés kerül.',
  src:'Tankönyv 2.8. • Szóbeli 12.' });

Q({ id:'k10', t:'keszit', type:'tf',
  q:'A minősítő megtilthatja a minősítési jelölés megismétlését.',
  a:true,
  e:'Igaz. A minősítési jelölés megismétlésének megtiltása a minősítő kizárólagos jogosítványai közé tartozik. Ilyenkor az adat nem ismételhető meg.',
  src:'Tankönyv 2.8., 3.3. • Szóbeli 5., 12.' });

Q({ id:'k11', t:'keszit', type:'mc',
  q:'Ki köteles kezdeményezni az adat minősítését?',
  o:['A titkos ügykezelő','Az, akinél az állami vagy közfeladata ellátása során a minősítési feltételeknek megfelelő adat keletkezik','A biztonsági vezető','Az NBF'],
  a:1,
  e:'Az adat keletkezésekor minden esetben az köteles kezdeményezni a minősítést, akinél a feltételeknek megfelelő adat keletkezik – ő készíti a minősítési javaslatot, és haladéktalanul felterjeszti a minősítőhöz.',
  src:'Tankönyv 2.7. • Szóbeli 3., 12.' });

Q({ id:'k12', t:'keszit', type:'mc',
  q:'Nemzetközi szerződés alapján külföldi részes félnek kell továbbítani a saját minősített adatunkat. Mi a különbség a jelölésben?',
  o:['Nincs különbség','A minősítési szintet a magyar mellett a szerződésben meghatározott nyelven is fel kell tüntetni','Csak angolul kell jelölni','A minősítő nevét nem kell feltüntetni'],
  a:1,
  e:'Az eljárás ugyanaz, de a szintet magyarul ÉS a nemzetközi szerződésben/megállapodásban meghatározott nyelven is fel kell tüntetni.',
  src:'Tankönyv 2.7. • Szóbeli 12.' });

/* ============================ FELHASZNÁLÁS, MEGISMERÉS, SZBT ============================ */
Q({ id:'f1', t:'felh', type:'mc',
  q:'Mi szükséges általános szabályként a minősített adat felhasználásához?',
  o:['Csak titoktartási nyilatkozat','Állami vagy közfeladat ellátása érdekében indokoltság + érvényes, megfelelő szintű személyi biztonsági tanúsítvány + titoktartási nyilatkozat','Felhasználói engedély + SZBT','A minősítő szóbeli hozzájárulása'],
  a:1,
  e:'Főszabály: indokoltság (állami/közfeladat), érvényes és a minősítési szintnek megfelelő SZBT, valamint titoktartási nyilatkozat. Felhasználói engedélyre 2024. március 1. óta NINCS szükség.',
  src:'Tankönyv 3. fejezet • Szóbeli 6., 8.' });

Q({ id:'f2', t:'felh', type:'tf',
  q:'„Korlátozott terjesztésű!” adat felhasználásához is kell nemzetbiztonsági ellenőrzés és személyi biztonsági tanúsítvány.',
  a:false,
  e:'Hamis. „Korlátozott terjesztésű!” szinten elég a titoktartási nyilatkozat, nincs nemzetbiztonsági ellenőrzés, így SZBT sem. Ellenőrzés és SZBT „Bizalmas!” és afölött kell.',
  src:'Tankönyv 3. fejezet, 3.4. • Szóbeli 6., 8.' });

Q({ id:'f3', t:'felh', type:'multi', ch:true,
  q:'Kik jogosultak (feladat- és hatáskörükben) nemzetbiztonsági ellenőrzés, SZBT és titoktartási nyilatkozat NÉLKÜL minősített adat felhasználására?',
  o:['A köztársasági elnök','A miniszterelnök','Az Állami Számvevőszék elnöke','A Nemzeti Vagyonvisszaszerzési és Vagyonvédelmi Hivatal elnöke, elnökhelyettesei','A Szuverenitásvédelmi Hivatal elnöke','A minisztériumok közigazgatási államtitkárai'],
  a:[0,1,2,3],
  e:'A lista: köztársasági elnök, miniszterelnök, Alkotmánybíróság tagjai, Országgyűlés elnöke, Kúria elnöke, OBH elnöke, legfőbb ügyész, alapvető jogok biztosa, NAIH elnöke, ÁSZ elnöke, és 2026-tól az NVVH elnöke, elnökhelyettesei. A Szuverenitásvédelmi Hivatal megszűnt, kivételét törölték. Az államtitkárok nem szerepelnek a listán.',
  src:'Tankönyv 3. fejezet + változások (35–36. oldal) • Szóbeli 6.' });

Q({ id:'f4', t:'felh', type:'tf', ch:true,
  q:'2024. március 1. óta a minősített adatot felhasználó személy részére már nem kell felhasználói engedélyt kiadni.',
  a:true,
  e:'Igaz. A korábban kiadott felhasználói engedélyeket visszavontnak kell tekinteni. A jogosultságokat a szignáló vezető (szignáláskor) vagy a minősítő (átadáskor) határozza meg; a titkos ügykezelő jogosultságai a 90/2010. Korm. rendelet 8. §-ából következnek.',
  src:'Tankönyv 3.3. • Szóbeli 6., 8.' });

Q({ id:'f5', t:'felh', type:'multi',
  q:'Melyek a minősítő KIZÁRÓLAGOS jogosultságai az általa minősített adatok tekintetében?',
  o:['Megismerési engedély kiadása','A nemzeti minősített adat felülvizsgálata','Külföldi személy/szerv részére hozzáférhetővé tétel engedélyezése','Titoktartási kötelezettség alóli felmentés','A minősítési jelölés megismétlésének megtiltása','Az irat iktatása'],
  a:[0,1,2,3,4],
  e:'Mavtv. 4. § (4): megismerési engedély, felülvizsgálat, külföldi hozzáférhetővé tétel engedélyezése, külföldre vitel/behozatal engedélyezése, titoktartás alóli felmentés, a jelölés megismétlésének megtiltása. Az iktatás a titkos ügykezelő feladata.',
  src:'Tankönyv 3.3. • Szóbeli 6.' });

Q({ id:'f6', t:'felh', type:'num',
  q:'A felhasználói jogosultság megszűnését követően hány évig kell fellelhetőnek lennie a titoktartási nyilatkozatnak?',
  a:8, unit:'év',
  e:'8 év. Utána a biztonsági vezető intézkedik a jegyzőkönyv felvétele mellett történő megsemmisítéséről. A titoktartási nyilatkozat kezelése, tárolása a biztonsági vezető feladata.',
  src:'Tankönyv 3.3. • Szóbeli 8.' });

Q({ id:'f7', t:'felh', type:'tf',
  q:'Ha valakinek nemzeti és külföldi minősített adatot is kezelnie kell, két külön titoktartási nyilatkozatot kell aláírnia.',
  a:false,
  e:'Hamis. Ilyenkor elegendő EGY titoktartási nyilatkozat.',
  src:'Tankönyv 3.3. • Szóbeli 8.' });

Q({ id:'f8', t:'felh', type:'num',
  q:'A személyi biztonsági tanúsítvány a biztonsági szakvélemény kiállításától számítva hány évig érvényes?',
  a:5, unit:'év',
  e:'5 évig. A nemzetbiztonsági ellenőrzést a fontos és bizalmas munkakörben legalább ötévente kezdeményezni kell.',
  src:'Tankönyv 3.4. • Szóbeli 8.' });

Q({ id:'f9', t:'felh', type:'match',
  q:'Ki adja ki a személyi biztonsági tanúsítványt?',
  pairs:[
    ['Állami szerv felhasználója – nemzeti adatra','A szerv biztonsági vezetője'],
    ['Állami szerv felhasználója – külföldi (NATO/EU) adatra','Nemzeti Biztonsági Felügyelet'],
    ['Gazdálkodó szervezet felhasználója – nemzeti adatra','Nemzeti Biztonsági Felügyelet '],
    ['Közreműködő – nemzeti adatra','Az őt igénybe vevő szerv biztonsági vezetője']
  ],
  e:'Nemzeti adatra az állami szerv biztonsági vezetője adja ki (a közreműködőnek is). Külföldi adatra mindig az NBF (a biztonsági vezető kezdeményezi). Gazdálkodó szervezetnél a nemzeti SZBT-t is az NBF adja ki.',
  src:'Tankönyv 3.5–3.7., 6.4., 7.2. • Szóbeli 8.' });

Q({ id:'f10', t:'felh', type:'multi',
  q:'Mikor nem adható ki SZBT, vagy mikor kell a kiadottat visszavonni?',
  o:['Ha a nemzetbiztonsági ellenőrzés kockázati tényezőt tár fel','Ha az érintett nem szerepel az Nbtv. 69. § (7) szerinti nyilvántartásban (keretszám)','Ha megszűnik a jogviszonya a szervnél','Ha feladatához már nem szükséges nemzeti minősített adat','Ha szabadságra megy'],
  a:[0,1,2,3],
  e:'Visszavonási okok: kockázati tényező, nincs a keretszám-nyilvántartásban, megszűnik a jogviszony, nincs már szükség az adatra. Visszavonás után a nemzeti SZBT-t nem kell megőrizni – a biztonsági vezető intézkedik a selejtezéséről.',
  src:'Tankönyv 3.4–3.5. • Szóbeli 8.' });

Q({ id:'f11', t:'felh', type:'multi',
  q:'Mit kell tartalmaznia a nemzeti minősített adatra érvényes SZBT-nek?',
  o:['A kiadó szerv megnevezését','Az érintett természetes személyazonosító adatait','Nyilvántartási számot, keltet, érvényességi időt, a felhasználható legmagasabb szintet','A kiadásra jogosult vezető aláírását','Az érintett fényképét'],
  a:[0,1,2,3],
  e:'Kiadó szerv; személyazonosító adatok; nyilvántartási szám, kelte, érvényességi ideje és a felhasználható legmagasabb szint; a kiadó vezető aláírása. Fénykép nem kell.',
  src:'Tankönyv 3.5. • Szóbeli 8.' });

Q({ id:'f12', t:'felh', type:'mc',
  q:'Mi a megismerési engedély?',
  o:['A felhasználói engedély új neve','A minősítő írásbeli felhatalmazása az érintettnek a saját személyes adatait tartalmazó nemzeti minősített adat megismerésére','Az NBF engedélye a külföldi adathoz','A biztonsági vezető engedélye a TÜK-helyiségbe lépéshez'],
  a:1,
  e:'Bárki megismerheti a minősített adatban szereplő SAJÁT személyes adatát, a minősítő által kiadott megismerési engedély alapján, SZBT nélkül – de előtte írásban titoktartási nyilatkozatot kell tennie.',
  src:'Tankönyv 3.8. • Szóbeli 6.' });

Q({ id:'f13', t:'felh', type:'num',
  q:'Hány napon belül kell a minősítőnek döntenie a megismerési engedély iránti kérelemről?',
  a:15, unit:'nap',
  e:'15 napon belül. Megtagadni akkor kell, ha a megismerés a minősítés alapjául szolgáló közérdek sérelméhez vezetne – a megtagadást indokolni kell. Ellene közigazgatási per indítható, kizárólag a Fővárosi Törvényszék illetékes, zárt tárgyaláson.',
  src:'Tankönyv 3.8. • Szóbeli 6.' });

Q({ id:'f14', t:'felh', type:'tf',
  q:'A megismerési engedély megtagadása miatt indult perben a felperes megismerheti a minősített adatot.',
  a:false,
  e:'Hamis. A felperes, a felperes oldalán érdekeltként résztvevő és ezek képviselője NEM ismerheti meg az adatot a per során. Csak nemzetbiztonsági ellenőrzésen átesett bíró járhat el.',
  src:'Tankönyv 3.8. • Szóbeli 6.' });

Q({ id:'f15', t:'felh', type:'mc',
  q:'Közigazgatási, bírósági, szabálysértési eljárásban ki adhat felmentést a titoktartási kötelezettség alól nemzeti minősített adat esetén?',
  o:['A biztonsági vezető','Az adatot minősítő személy','A bíróság elnöke','Az NBF'],
  a:1,
  e:'Csak az adatot minősítő adhat felmentést. A felmentésből egyértelműen ki kell derülnie, milyen minősített adatra vonatkozik.',
  src:'Tankönyv 3.2. • Szóbeli 6.' });

Q({ id:'f16', t:'felh', type:'tf',
  q:'Büntetőeljárásban az eljáró bíró és ügyész SZBT és titoktartási nyilatkozat nélkül felhasználhatja az eljárásban keletkezett vagy rendelkezésére bocsátott minősített adatot.',
  a:true,
  e:'Igaz. Büntetőeljárásban nem a Mavtv., hanem a büntetőeljárási törvény szabályai irányadók. A terhelt és a védő is SZBT nélkül megismerheti az általa megismerhető ügyiratban lévő minősített adatot.',
  src:'Tankönyv 3.1. • Szóbeli 6.' });

/* ============================ FELÜLVIZSGÁLAT, FELÜLBÍRÁLAT ============================ */
Q({ id:'fv1', t:'felulv', type:'tf', ch:true,
  q:'2026. február 21-től a minősítőnek továbbra is legalább 5 évente rendszeresen felül kell vizsgálnia a nemzeti minősített adatokat.',
  a:false,
  e:'Hamis! 2026. 02. 21-től az 5 évenkénti, rendszeres felülvizsgálati kötelezettség megszűnt. Helyette (ha törvény nem ír elő határidőt): a minősítés feltételeiben bekövetkező változás esetén haladéktalanul, illetve Infotv. 17. § szerinti hozzáférési igény vagy közérdekű adatigény esetén 21 napon belül. (Kivétel: az Állambiztonsági Szolgálatok Történeti Levéltáráról szóló törvény hatálya alá tartozó iratokat továbbra is legalább ötévente felül kell vizsgálni.)',
  src:'Tankönyv 4. fejezet, NBF diasor • Szóbeli 7.' });

Q({ id:'fv2', t:'felulv', type:'num',
  q:'Közérdekű adat megismerése iránti igény benyújtása esetén hány napon belül kell a minősítőnek felülvizsgálnia a minősítést?',
  a:21, unit:'nap',
  e:'21 napon belül – kivéve, ha ugyanezen okból 1 éven belül már volt felülvizsgálat, és azóta nem változtak a minősítés feltételei. Ugyanez a szabály az érintett saját személyes adatára vonatkozó (Infotv. 17. §) hozzáférési igénynél is.',
  src:'Tankönyv 4. fejezet • Szóbeli 7.' });

Q({ id:'fv3', t:'felulv', type:'mc',
  q:'Mit kell vizsgálnia a minősítőnek a felülvizsgálat során?',
  o:['Hogy az irat sértetlen-e','Hogy történt-e változás a minősítésre okot adó körülményekben','Hogy hány példány készült','Hogy a titkos ügykezelő jól iktatta-e'],
  a:1,
  e:'A felülvizsgálat lényege: történt-e változás a minősítésre okot adó körülményekben (fennállnak-e még a minősítés feltételei).',
  src:'Tankönyv 4. fejezet • Szóbeli 7.' });

Q({ id:'fv4', t:'felulv', type:'multi',
  q:'Mi lehet a felülvizsgálat eredménye?',
  o:['A minősítés fenntartása','A minősítési szint csökkentése','Az érvényességi idő módosítása','A minősítés megszüntetése','A minősítési szint emelése'],
  a:[0,1,2,3],
  e:'Fenntartás, szintcsökkentés, érvényességi idő módosítása, megszüntetés. A felülvizsgálat során a szint NEM emelhető – pl. „Korlátozott terjesztésű!” → „Bizalmas!” emelésnél kiderülhetne, hogy korábban SZBT nélküli személyek is hozzáfértek.',
  src:'Tankönyv 4. fejezet • Szóbeli 7.' });

Q({ id:'fv5', t:'felulv', type:'mc',
  q:'Mi a különbség a felülvizsgálat és a felülbírálat között?',
  o:['Nincs különbség, szinonimák','A felülvizsgálatot a minősítő (vagy jogutódja, más minősítő, szakértő) végzi a saját/hatáskörébe tartozó adatokon; a felülbírálatot a 4. § (1) szerinti minősítő végzi az általa minősítői jogkörrel felruházott (vagy irányítása alá tartozó) személyek minősítésein','A felülbírálatot az NBF végzi','A felülbírálat csak szintemelés lehet'],
  a:1,
  e:'Felülvizsgálat: a minősítő vizsgálja, hogy fennállnak-e még a feltételek. Felülbírálat: egy „magasabb” minősítő bírálja felül egy másik minősítő döntését – pl. az, aki a jogkört átruházta; a legfőbb ügyész az ügyészség vezetőjéét; a miniszterelnök a politikai igazgatójáét, nemzetbiztonsági főtanácsadójáét, miniszterelnöki biztosét, kormánybiztosét; a Kormány tagja a kormányzati főhivatal vezetőjéét. Eredménye: megszüntetés, szint- vagy érvényességiidő-módosítás.',
  src:'Tankönyv 4., 4.4. • Szóbeli 7.' });

Q({ id:'fv6', t:'felulv', type:'multi',
  q:'Ki lehet felülvizsgálati szakértő?',
  o:['Aki a kezelt adatok szintjének megfelelő SZBT-vel rendelkezik ÉS a titokszakértés szakterületen szerepel az igazságügyi szakértői névjegyzékben','Aki megfelelő SZBT-vel rendelkezik ÉS felsőfokú végzettségű, legalább 3 év szakmai tapasztalattal a minősített adatok kezelése/védelme területén','Bármely titkos ügykezelő','Bármely jogász'],
  a:[0,1],
  e:'SZBT mindenképp kell, mellé vagy névjegyzéki titokszakértői státusz, vagy felsőfokú végzettség + legalább 3 év szakmai tapasztalat.',
  src:'Tankönyv 4. fejezet • Szóbeli 7.' });

Q({ id:'fv7', t:'felulv', type:'multi',
  q:'A minősítő maga döntött a minősítés MEGSZÜNTETÉSÉRŐL az adathordozón. Mi kerül az iratra (a szint minden oldalon áthúzásán túl)?',
  o:['„Törölve!” jelölés','A minősítő neve és beosztása','A felülvizsgálat dátuma','A minősítő vagy a felülvizsgálati szakértő aláírása','„Minősítés fenntartva!” jelölés'],
  a:[0,1,2,3],
  e:'Megszüntetés: a minősítési szintet minden oldalon áthúzzák, és rákerül a „Törölve!” jelölés, a minősítő neve, beosztása, a felülvizsgálat dátuma és a minősítő/szakértő aláírása. „Minősítés fenntartva!” a fenntartásnál szerepel.',
  src:'Tankönyv 4.2. • Szóbeli 7. • Gyak. 14.' });

Q({ id:'fv8', t:'felulv', type:'multi',
  q:'GYAKORLAT (14. tétel): A minősítő jogutódja KÜLÖN ÁTIRATBAN tájékoztatott a minősítés megszüntetéséről. Mit vezet rá a titkos ügykezelő a címzetti példányra a szint minden oldalon áthúzásán túl?',
  o:['„Törölve!” jelölés','A minősítő (jogutód) neve, beosztása','A felülvizsgálat dátuma','A döntést tartalmazó átirat iktatószáma','A titkos ügykezelő saját aláírása','A minősítő aláírása'],
  a:[0,1,2,3,4],
  e:'Ha a döntés külön iratban érkezett, a titkos ügykezelő jelöli: „Törölve!”, a minősítő neve és beosztása, a felülvizsgálat dátuma, a döntést tartalmazó irat iktatószáma (pl. 52/547/2022.) és a SAJÁT aláírása. Az eredményt (megszüntetés) az iktatókönyv felülvizsgálat rovatában is rögzíteni kell.',
  src:'Tankönyv 4.2., 4.3. • Gyak. 14.' });

Q({ id:'fv9', t:'felulv', type:'multi',
  q:'GYAKORLAT (15. tétel): Külön átiratban jön a döntés az új „Bizalmas!” szintről és új érvényességi időről. Mit tesz a titkos ügykezelő?',
  o:['Áthúzza a régi minősítési szintet és érvényességi időt','Feltünteti az új szintet és az új érvényességi időt','Feltünteti a minősítő nevét, beosztását, a döntést tartalmazó átirat iktatószámát és a felülvizsgálat dátumát','Aláírja','Az iktatókönyv felülvizsgálat rovatában rögzíti a dátumot és az eredményt','Kiradírozza a régi szintet'],
  a:[0,1,2,3,4],
  e:'Áthúzás (nem radírozás!) + új szint és érvényességi idő + minősítő neve, beosztása + átirat iktatószáma + felülvizsgálat dátuma + saját aláírás. Szintcsökkentésnél, érvényességiidő-módosításnál és megszüntetésnél a felülvizsgálat eredményét az iktatókönyv is tartalmazza.',
  src:'Tankönyv 4.3. • Gyak. 15.' });

Q({ id:'fv10', t:'felulv', type:'tf',
  q:'A felülvizsgálat eredményét – minden esetben, a fenntartást is beleértve – az iktatókönyvben rögzíteni kell.',
  a:false,
  e:'Hamis. Az iktatókönyv a felülvizsgálat dátumát és eredményét a szint csökkentése, az érvényességi idő módosítása vagy a megszüntetés esetén tartalmazza. A fenntartás az adathordozón jelölendő („Minősítés fenntartva!”).',
  src:'Tankönyv 4.3., 9.7. • Szóbeli 7.' });

Q({ id:'fv11', t:'felulv', type:'tf',
  q:'A minősítés megszüntetéséről, szintcsökkentésről vagy az érvényességi idő módosításáról minden olyan címzettet (vagy jogutódját) értesíteni kell, akinek az adatot korábban továbbították.',
  a:true,
  e:'Igaz. A címzetteknek ezután a felülvizsgálat eredménye szerint kell kezelniük az adatot.',
  src:'Tankönyv 4. fejezet • Szóbeli 7.' });

Q({ id:'fv12', t:'felulv', type:'mc',
  q:'Hol rögzíthető az egy ügyben keletkezett, csak együtt kezelhető nemzeti minősített adatok felülvizsgálatának eredménye?',
  o:['A főnyilvántartó könyvben','Az együtt kezelt adatokhoz csatolt felülvizsgálati lapon','A futárjegyzéken','Sehol, csak szóban'],
  a:1,
  e:'A Mavtv. lehetővé teszi, hogy ilyenkor a döntést és az eredményt az együtt kezelt adatokhoz csatolt felülvizsgálati lapon rögzítsék.',
  src:'Tankönyv 4.3. • Szóbeli 7.' });

/* ============================ BIZTONSÁGI TERÜLETEK, ENGEDÉLYEK ============================ */
Q({ id:'bt1', t:'terulet', type:'match',
  q:'Párosítsd a helyszínt a jellemzőjével!',
  pairs:[
    ['I. osztályú biztonsági terület','A belépés egyben hozzáférést is jelent; nyílt tárolás'],
    ['II. osztályú biztonsági terület','Belső intézkedésekkel akadályozható a hozzáférés; zárt tárolás'],
    ['Adminisztratív zóna','Ellenőrzött belépésű helyszín; „Korlátozott terjesztésű!” ott is kezelhető']
  ],
  e:'I. osztály: belépés = hozzáférés, beléptető rendszer, csak felhatalmazással és SZBT-vel, NYÍLT tárolás. II. osztály: külön felhatalmazással léphet be, SZBT nélkül csak kísérettel, ZÁRT tárolás (biztonsági tároló). Adminisztratív zóna: ellenőrzött belépés.',
  src:'Tankönyv 5.3. • Szóbeli 9.' });

Q({ id:'bt2', t:'terulet', type:'mc',
  q:'Hol használható fel és tárolható főszabályként a „Bizalmas!” vagy magasabb szintű adat?',
  o:['Bárhol, zárt szekrényben','Kizárólag I. vagy II. osztályú biztonsági területen','Adminisztratív zónában','Csak I. osztályú biztonsági területen'],
  a:1,
  e:'„Bizalmas!” és afölött: főszabályként csak I. vagy II. osztályú biztonsági területen. A „Korlátozott terjesztésű!” adminisztratív zónában is felhasználható, és ott zárható irodabútorban, lemezszekrényben tárolható.',
  src:'Tankönyv 5.3. • Szóbeli 9.' });

Q({ id:'bt3', t:'terulet', type:'tf',
  q:'II. osztályú biztonsági területre személyi biztonsági tanúsítvánnyal nem rendelkező személy csak kísérettel léphet be.',
  a:true,
  e:'Igaz. II. osztályú területen az adatokat zártan tárolják, a belépéshez külön felhatalmazás kell, SZBT nélkül csak kísérettel.',
  src:'Tankönyv 5.3. • Szóbeli 9.' });

Q({ id:'bt4', t:'terulet', type:'mc',
  q:'Mikor használható adminisztratív zónában is a nemzeti „Bizalmas!” vagy magasabb szintű PAPÍRALAPÚ adat?',
  o:['Soha','Igen, a munkaidőn túli birtokban tartás kivételével','Csak éjszaka','Csak ha a biztonsági vezető jelen van'],
  a:1,
  e:'Kivétel: a nemzeti „Bizalmas!” vagy magasabb, valamint az EU „Bizalmas!” és „Titkos!” papíralapú adat adminisztratív zónában is felhasználható – a munkaidőn túli birtokban tartás kivételével. Másik kivétel: katonai, nemzetbiztonsági, bűnügyi stb. műveletekben személyes felügyelet alatt biztonsági területen kívül is.',
  src:'Tankönyv 5.3. • Szóbeli 9.' });

Q({ id:'bt5', t:'terulet', type:'mc',
  q:'Mire ad ki a Nemzeti Biztonsági Felügyelet adatkezelési engedélyt?',
  o:['Minden minősített adat kezelésére','„Bizalmas!” vagy magasabb szintű adat felhasználására és tárolására','Csak „Szigorúan titkos!” adatra','Csak elektronikus kezelésre'],
  a:1,
  e:'Adatkezelési engedély „Bizalmas!”-tól kell (a személyi, fizikai, adminisztratív biztonság meglétét igazolja). „Korlátozott terjesztésű!” papíralapú adathoz NEM kell. Rendszerengedély viszont minden szinten (a „Korlátozott terjesztésű!”-t is beleértve) kell az elektronikus kezeléshez.',
  src:'Tankönyv 5.6–5.7. • Szóbeli 9.' });

Q({ id:'bt6', t:'terulet', type:'multi',
  q:'Mit tartalmaz az adatkezelési engedély?',
  o:['A kezelhető minősített adatok legmagasabb szintjét','Az engedélyezett biztonsági terület helyszínének pontos megjelölését','A titkos ügykezelők névsorát','Az érvényesség lejárati dátumát'],
  a:[0,1],
  e:'A legmagasabb kezelhető szintet és a biztonsági terület pontos helyszínét. Az engedély visszavonásig érvényes – nincs lejárati dátuma.',
  src:'Tankönyv 5.7. • Szóbeli 9.' });

Q({ id:'bt7', t:'terulet', type:'multi',
  q:'Mikor vonja vissza az NBF az adatkezelési engedélyt?',
  o:['Ha a személyi, fizikai vagy adminisztratív feltételek nem vagy csak részben teljesülnek','Ha a gazdálkodó szervezet telephely biztonsági tanúsítványát visszavonta','Ha a szerv ezt kérelmezi','Ha a biztonságot veszélyeztető hiányosság áll fenn','Ha a titkos ügykezelő szabadságra megy'],
  a:[0,1,2,3],
  e:'Ezek a visszavonási okok. Súlyos hiányosság esetén az NBF a biztonsági vezető kinevezéséhez adott egyetértését is visszavonhatja.',
  src:'Tankönyv 5.7. • Szóbeli 9.' });

Q({ id:'bt8', t:'terulet', type:'multi',
  q:'Mit kell figyelembe venni a biztonsági feltételek tervezésekor?',
  o:['A kezelt adat minősítési szintjét','Az adat mennyiségét és megjelenési formáját','A helyszín, a szerv és az elektronikus rendszer veszélyeztetettségét, sebezhetőségét','A nemzetbiztonsági kockázatokat','A dolgozók életkorát'],
  a:[0,1,2,3],
  e:'Ez a négy tervezési szempont. A 2010. 04. 01-jén már minősített adatot kezelő szerveknek a nemzeti adat fizikai és elektronikus feltételeit 2026. december 31-ig kell megteremteniük (külföldi adatra és a később létrejött szervekre ez az átmenet nem vonatkozik).',
  src:'Tankönyv 5. fejezet • Szóbeli 9.' });

Q({ id:'bt9', t:'terulet', type:'mc',
  q:'Ki köteles a talált, ismeretlen helyről származó nemzeti minősített adatot átvenni, ha a minősítő NEM azonosítható?',
  o:['A rendőrség','A Nemzeti Biztonsági Felügyelet','A legközelebbi minisztérium','A biztonsági vezető'],
  a:1,
  e:'Ha a minősítő ismert, neki kell haladéktalanul átadni; ha nem azonosítható (vagy olyan külföldi adatról van szó, amelyre nem jogosult a megtaláló), az NBF-nek. Az NBF-nek átadásról jegyzőkönyv készül.',
  src:'Tankönyv 5.8., 13.3. • Szóbeli 9., 19.' });

/* ============================ SZERVEZETEK: NBF, BV, TÜK ============================ */
Q({ id:'sv1', t:'szerv', type:'multi',
  q:'Melyek a Nemzeti Biztonsági Felügyelet feladatai? (Jelöld mindet!)',
  o:['Engedélyezi a minősített adatok kezelését (adatkezelési engedély)','Egyetértési jogot gyakorol a biztonsági vezetők kinevezésénél','Telephely biztonsági tanúsítványt ad ki','Ellenőrzi a minősítők minősítési gyakorlatát','Gondoskodik a jogutód nélkül megszűnt szervek minősített adatainak felülvizsgálatáról','Kinevezi a titkos ügykezelőket'],
  a:[0,1,2,3,4],
  e:'Az NBF hatósági szerv: engedélyez (adatkezelési, rendszer-), egyetért a BV-kinevezéssel, iparbiztonsági feladatokat lát el (TBT), ellenőrzi a minősítési gyakorlatot, kivizsgálja a biztonság megsértését, felülvizsgálja a jogutód nélkül megszűnt szervek adatait, képzi a biztonsági vezetőket stb. A titkos ügykezelőt a munkáltatói jogkört gyakorló vezető nevezi ki.',
  src:'Tankönyv 6.1. • Szóbeli 10.' });

Q({ id:'sv2', t:'szerv', type:'mc',
  q:'Az NBF hol működik?',
  o:['A Belügyminisztérium főosztályaként','A minősített adatok védelmének szakmai felügyeletéért felelős miniszter irányítása alatt álló Nemzetbiztonsági Szakszolgálat keretében, önálló, hatóságilag nem utasítható szervként','A Miniszterelnökségen','Az Alkotmányvédelmi Hivatalban'],
  a:1,
  e:'Az NBF a Nemzetbiztonsági Szakszolgálat keretében működik, de hatósági tevékenységében minden más szervtől független és nem utasítható. Döntése ellen a közléstől számított 15 napon belül közigazgatási per indítható.',
  src:'Tankönyv 6.1. • Szóbeli 10.' });

Q({ id:'sv3', t:'szerv', type:'multi',
  q:'Ki lehet biztonsági vezető?',
  o:['Legalább felsőfokú végzettségű','Legalább 1 év magyarországi szakmai gyakorlattal (minősített adat kezelése/védelme) VAGY sikeres vizsgával rendelkezik','Megfelelő szintű SZBT-vel és aláírt titoktartási nyilatkozattal rendelkezik','Kinevezésével az NBF elnöke egyetértett','Megbízási szerződéssel is foglalkoztatható'],
  a:[0,1,2,3],
  e:'Felsőfok + (1 év gyakorlat vagy vizsga) + SZBT + titoktartási nyilatkozat + NBF-elnöki egyetértés. Megbízási szerződéssel NEM foglalkoztatható, és egyidejűleg titkos ügykezelői feladatot sem láthat el.',
  src:'Tankönyv 6.3. • Szóbeli 10.' });

Q({ id:'sv4', t:'szerv', type:'multi',
  q:'Ki lehet titkos ügykezelő?',
  o:['Legalább középfokú végzettségű','A kezelt adatok szintjének megfelelő SZBT-vel rendelkezik','Aláírt titoktartási nyilatkozattal rendelkezik','Sikeres TÜK-vizsgát tett','A munkáltatói jogkört gyakorló vezető írásban kinevezte','Kinevezéséhez az NBF elnökének egyetértése kell'],
  a:[0,1,2,3,4],
  e:'Középfok + SZBT + titoktartási nyilatkozat + sikeres vizsga + írásbeli kinevezés. NBF-egyetértés NEM kell (az a biztonsági vezetőnél kell). Megbízási szerződéssel titkos ügykezelői feladat nem látható el.',
  src:'Tankönyv 6.5. • Szóbeli 11.' });

Q({ id:'sv5', t:'szerv', type:'multi',
  q:'Melyek a titkos ügykezelő JOGSZABÁLYBAN előírt feladatai?',
  o:['Minősített adat átvétele, küldemény felbontása','Nyilvántartásba vétel, iktatás','Szerven belüli átadás és visszavétel','A felülvizsgálat eredményének rögzítése az adathordozón','Iratkezelési segédletek főnyilvántartásba vétele, megnyitása','Belföldre és külföldre továbbítás','Megsemmisítés előkészítése és részvétel benne','Minősített adat sokszorosítása'],
  a:[0,1,2,3,4,5,6],
  e:'A felsoroltak mind a 90/2010. Korm. rendelet 8. §-ában szerepelnek (+ birtokban tartás, tárolás; visszavétel a jogosultság megszűnésekor; titokfelügyeleti eljárás eredményének rögzítése). A sokszorosítás, fordítás, kivonatolás NEM jogszabályi feladata – csak írásbeli megbízás alapján végezheti.',
  src:'Tankönyv 6.6., 11. fejezet • Szóbeli 11.' });

Q({ id:'sv6', t:'szerv', type:'match',
  q:'Párosítsd a biztonsági vezető éves határidejét a feladattal!',
  pairs:[
    ['Február 28.','Éves ellenőrzés (személyi, fizikai, adminisztratív) + iratforgalmi statisztika elkészítése'],
    ['Március 5.','Külföldi adatokról: ellenőrzés eredménye + statisztika a NATO/EU Központi Nyilvántartónak'],
    ['Március 31.','Nemzeti adatokról: ellenőrzés eredménye + statisztika az NBF-nek']
  ],
  e:'Febr. 28: ellenőrzés (jegyzőkönyvvel) és statisztika minősítési szintenként. Márc. 5: külföldi → Központi Nyilvántartók. Márc. 31: nemzeti → NBF.',
  src:'Tankönyv 6.4. • Szóbeli 10.' });

Q({ id:'sv7', t:'szerv', type:'num',
  q:'A helyettes biztonsági vezető kinevezésétől számítva hány napon belül kell tájékoztatni az NBF-et a nevéről és elérhetőségéről?',
  a:5, unit:'nap',
  e:'5 napon belül. A helyettes kinevezéséhez nem kell az NBF elnökének egyetértése, de tájékoztatni kell.',
  src:'Tankönyv 6.3. • Szóbeli 10.' });

Q({ id:'sv8', t:'szerv', type:'mc',
  q:'Ki felel a minősített adat védelmi feltételeinek (személyi, fizikai, adminisztratív, elektronikus) kialakításáért?',
  o:['A titkos ügykezelő','A minősített adatot kezelő szerv vezetője','Az NBF','A minősítő'],
  a:1,
  e:'Mindig a szerv vezetője felel; a feladatok végrehajtását és koordinálását az általa kinevezett biztonsági vezető végzi.',
  src:'Tankönyv 6.2. • Szóbeli 10.' });

Q({ id:'sv9', t:'szerv', type:'mc',
  q:'Mi a teendő, ha a titkos ügykezelő kinevezése megszűnik?',
  o:['Lezárja a szekrényt, és hazaviszi a kulcsot','Jegyzőkönyv útján átadja a feladatokat (teendők, okmányok, eszközök) az utódjának vagy a helyettesítésére kijelölt személynek; ezek hiányában a biztonsági vezetőnek / külképviselet-vezetőnek vagy az általuk kijelölt személynek','Az NBF-nek adja át','Szóban átadja a kollégájának'],
  a:1,
  e:'Jegyzőkönyves átadás: utód → helyettesítésre kijelölt → (ezek hiányában) biztonsági vezető, külképviselet-vezető vagy az általuk kijelölt személy.',
  src:'Tankönyv 6.7., 9.10. • Szóbeli 13.' });

Q({ id:'sv10', t:'szerv', type:'mc',
  q:'Mi a teendő, ha a biztonsági vezető akadályoztatva van, vagy megszűnik a kinevezése?',
  o:['A titkos ügykezelő veszi át a feladatait','A helyettes biztonsági vezető, ennek hiányában a szerv vezetője – jegyzőkönyv felvétele mellett – gondoskodik a feladatok ellátásáról','Az NBF jelöl ki valakit','Szünetel a minősített adatkezelés'],
  a:1,
  e:'Helyettes BV, ennek hiányában a szerv vezetője gondoskodik a BV-feladatokról, jegyzőkönyvvel. A titkos ügykezelő nem veheti át – a BV egyébként sem láthat el egyidejűleg TÜK-feladatot.',
  src:'Tankönyv 6.7. • Szóbeli 13.' });

Q({ id:'sv11', t:'szerv', type:'mc',
  q:'Mi a teendő a titkos ügykezelő IGAZOLATLAN távolmaradása esetén?',
  o:['Megvárják, amíg visszajön','A biztonsági vezető kéttagú bizottságot jelöl ki, amely teljes vagy részleges ellenőrzést hajt végre a Nyilvántartóban/Kezelőponton, és jegyzőkönyvet vesz fel','Feltörik a páncélszekrényt','A szerv vezetője egyedül átnézi az iratokat'],
  a:1,
  e:'Kéttagú bizottság (megfelelő SZBT-vel), teljes vagy részleges ellenőrzés attól függően, hogy a TÜK az adatok egészét vagy egy részét kezelte, a megállapítások jegyzőkönyvben.',
  src:'Tankönyv 9.10. • Szóbeli 13.' });

Q({ id:'sv12', t:'szerv', type:'num',
  q:'Ha a minősítő vagy a felhasználó más okból legalább ennyi napig távol van, a nála lévő minősített adatokat a titkos ügykezelő útján át kell adnia. Hány napról van szó?',
  a:50, unit:'nap',
  e:'50 nap. Jogviszony megszűnése, munkakör-változás vagy legalább 50 napos távollét esetén a nála lévő adatokat az utódjának vagy helyettesének kell átadnia a TÜK útján. Ha ez nem lehetséges, a TÜK tételesen ellenőrzi, biztonságba helyezi, és jegyzőkönyvet vesz fel.',
  src:'Tankönyv 9.10. • Szóbeli 13.' });

Q({ id:'sv13', t:'szerv', type:'multi',
  q:'Miről rendelkezik a szerv vezetője a biztonsági szabályzatban?',
  o:['A személyi, fizikai, adminisztratív, elektronikus biztonság helyi feladatairól, jogosultságairól, felelősségeiről','A biztonság megsértése esetén szükséges eljárásról','A vészhelyzetben történő védelemről','A munkapéldányok kezeléséről és megsemmisítéséről','A dolgozók szabadságolásáról'],
  a:[0,1,2,3],
  e:'Biztonsági szabályzat: helyi feladatok, jogosultságok, felelősségek; eljárás a biztonság megsértésekor; vészhelyzeti védelem. Számos részletet is ide utal a jogszabály (pl. munkapéldányok, „S. k.” küldemény felbontása a címzett akadályoztatásakor, átvételre jogosultak köre).',
  src:'Tankönyv 6.4., 8.1.6., 12.5. • Szóbeli 10.' });

/* ============================ GAZDÁLKODÓ SZERVEZET, KÖZREMŰKÖDŐ ============================ */
Q({ id:'g1', t:'gazd', type:'mc',
  q:'Milyen tanúsítvány kell egy gazdálkodó szervezetnek, ha a saját székhelyén, telephelyén és fióktelepén NEM kezel minősített adatot?',
  o:['Telephely biztonsági tanúsítvány','Egyszerűsített telephely biztonsági tanúsítvány','Semmilyen','Adatkezelési engedély'],
  a:1,
  e:'Ilyenkor csak a személyi biztonsági követelményeknek kell megfelelnie, és egyszerűsített TBT-t kap.',
  src:'Tankönyv 7.1. • Szóbeli 14.' });

Q({ id:'g2', t:'gazd', type:'multi',
  q:'Mely szintekre adható ki telephely biztonsági tanúsítvány?',
  o:['„Szigorúan titkos!”','„Titkos!”, „Bizalmas!”','NATO Titkos, NATO Bizalmas','EU Titkos, EU Bizalmas','NATO Szigorúan titkos','„Korlátozott terjesztésű!”'],
  a:[0,1,2,3],
  e:'Nemzeti: „Szigorúan titkos!”, „Titkos!”, „Bizalmas!”; NATO és EU: Titkos, Bizalmas. NATO/EU Szigorúan titkos szintre a NATO/EU szabályok nem engedik. „Korlátozott terjesztésű!” szintre nincs TBT.',
  src:'Tankönyv 7.1. • Szóbeli 14.' });

Q({ id:'g3', t:'gazd', type:'mc',
  q:'Hogyan adható át „Korlátozott terjesztésű!” adat gazdálkodó szervezetnek?',
  o:['Csak TBT birtokában','A minősített adatot kezelő szerv vezetője engedélyezheti, ha meggyőződött, hogy a gazdálkodó szervezet megfelel a személyi, fizikai, adminisztratív és elektronikus feltételeknek','Az NBF engedélyével','Semmilyen módon'],
  a:1,
  e:'„Korlátozott terjesztésű!”-nél nem kell TBT – az átadó szerv vezetője engedélyez, miután meggyőződött a feltételekről. „Bizalmas!” vagy magasabb adat KIZÁRÓLAG érvényes TBT-vel rendelkező gazdálkodó szervezetnek adható át. Az átadó minden esetben meghatározza a visszajuttatás időpontját.',
  src:'Tankönyv 7.1. • Szóbeli 14.' });

Q({ id:'g4', t:'gazd', type:'multi',
  q:'Mikor adható ki a (nem egyszerűsített) telephely biztonsági tanúsítvány?',
  o:['A cégellenőrzés nem tárt fel kockázati tényezőt','Legalább „Bizalmas!” adatkezelési engedély és legalább „Korlátozott terjesztésű!” rendszerengedély van','A felhasználók érvényes, megfelelő szintű SZBT-vel rendelkeznek','Saját alkalmazásban álló, NBF-elnöki egyetértéssel kinevezett biztonsági vezetőt foglalkoztat','Legalább 50 alkalmazottja van'],
  a:[0,1,2,3],
  e:'Ez a négy feltétel. Az egyszerűsített TBT-nél az engedélyek (adatkezelési, rendszer-) nem kellenek, a többi feltétel ugyanaz.',
  src:'Tankönyv 7.1. • Szóbeli 14.' });

Q({ id:'g5', t:'gazd', type:'num',
  q:'A cégellenőrzés és a személyek ellenőrzésének eredményéről szóló értesítés kézhezvételétől számítva hány napon belül kell a gazdálkodó szervezetnek megküldenie az adatkezelési engedélyhez és rendszerengedélyhez szükséges dokumentumokat az NBF-nek?',
  a:15, unit:'nap',
  e:'15 napon belül. A TBT-eljárás két része: (1) iparbiztonsági ellenőrzés (cégellenőrzés + a személyek nemzetbiztonsági ellenőrzése), (2) adatbiztonsági ellenőrzés.',
  src:'Tankönyv 7.1. • Szóbeli 14.' });

Q({ id:'g6', t:'gazd', type:'mc',
  q:'A közreműködő megfelel a személyi biztonsági feltételeknek, de nála nincsenek meg a fizikai, adminisztratív, elektronikus feltételek. Mi a megoldás?',
  o:['Nem kaphat adatot','Kizárólag a minősített adatot kezelő szervnél férhet hozzá az adathoz, a feltételeket a szerv biztosítja','Hazaviheti, ha aláír egy nyilatkozatot','Az NBF ad neki ideiglenes engedélyt'],
  a:1,
  e:'Ilyenkor csak a szervnél férhet hozzá. Ha viszont a SZEMÉLYI feltételeknek sem felel meg, semmilyen formában nem férhet hozzá minősített adathoz. Az átadás előtt a biztonsági vezető ellenőriz.',
  src:'Tankönyv 7.2. • Szóbeli 14.' });

Q({ id:'g7', t:'gazd', type:'mc',
  q:'Mi a projektbiztonsági utasítás?',
  o:['A TÜK munkaköri leírása','A minősített szerződés részét képező dokumentum a beszerzési eljárás részletes biztonsági előírásaival; függeléke a projektminősítési jegyzék','Az NBF éves jelentése','A futárszolgálat szabályzata'],
  a:1,
  e:'Meghatározza pl. a résztvevők feladat- és hatáskörét, a helyszíni tárolás szabályait, a továbbítás, alvállalkozónak történő átadás feltételeit és a teljesítés utáni visszaszolgáltatás rendjét.',
  src:'Tankönyv 7.1. • Szóbeli 14.' });

Q({ id:'g8', t:'gazd', type:'tf',
  q:'A közreműködő természetes személy, aki az állami vagy közfeladatot ellátó szervnek segítséget nyújt, és ehhez minősített adatot is fel kell használnia (pl. tolmács).',
  a:true,
  e:'Igaz – a tankönyvi példa a tolmács. Nemzeti adathoz az SZBT-jét az őt igénybe vevő szerv biztonsági vezetője állítja ki.',
  src:'Tankönyv 7.2., fogalomtár • Szóbeli 14.' });
