// TÜK gyakorló – kérdésbank, II. rész (nyilvántartás, gyakorlat)

/* ============================ FŐNYILVÁNTARTÓ, SEGÉDLETEK, NYILVÁNTARTÓK ============================ */
Q({ id:'ny1', t:'nyilv', type:'multi',
  q:'Melyek az iratkezelési segédletek az NBF kormányrendelet szerint?',
  o:['Iktatókönyv','Belső átadókönyv vagy más belső átadó okmány (pl. átadókarton)','Futárjegyzék-nyilvántartás','Főnyilvántartó könyv','Postakönyv'],
  a:[0,1,2],
  e:'A nyilvántartás = főnyilvántartó könyv + iratkezelési segédletek. Segédletek: iktatókönyv, belső átadókönyv/átadó okmány, futárjegyzék-nyilvántartás. A főnyilvántartó könyv NEM segédlet – abban vesszük nyilvántartásba a segédleteket. (2024. 07. 07-ig a külső kézbesítőkönyv is használható volt.)',
  src:'Tankönyv 8.3. • Szóbeli 15.' });

Q({ id:'ny2', t:'nyilv', type:'mc',
  q:'Ki hitelesíti a főnyilvántartó könyvet?',
  o:['A titkos ügykezelő','A szerv vezetője vagy – írásbeli felhatalmazása alapján – a biztonsági vezető','Az NBF','A levéltár'],
  a:1,
  e:'A főnyilvántartó könyv hitelesítése NEM a titkos ügykezelő feladata, hanem a szerv vezetőjéé (vagy felhatalmazás alapján a biztonsági vezetőé). Az iktatókönyvet, belső átadókönyvet viszont a TÜK nyitja meg és hitelesíti.',
  src:'Tankönyv 9.1. • Szóbeli 15.' });

Q({ id:'ny3', t:'nyilv', type:'multi',
  q:'Igaz állítások a főnyilvántartó könyvről:',
  o:['Év végén nem szabad lezárni','Sorszámozása 1-gyel kezdődik, betelte után a következő könyvben folyamatosan folytatódik','Nem selejtezhető','A szervezet megszűnésekor jegyzőkönyvben át kell adni a jogutódnak (ha nincs, a közlevéltár gondoskodik róla)','Minden évben újat kell nyitni','A főnyilvántartó könyvet is nyilvántartásba kell venni egy másik könyvben'],
  a:[0,1,2,3],
  e:'A főnyilvántartó könyv a nyilvántartási rendszer kezdőpontja: nem zárjuk le év végén, folyamatos a számozás a szervezet megszűnéséig, nem selejtezhető, és nem kell sehol nyilvántartásba venni (nincs „főbb” nyilvántartása).',
  src:'Tankönyv 9.1. • Szóbeli 15.' });

Q({ id:'ny4', t:'nyilv', type:'multi',
  q:'Milyen rovatokat tartalmaz a főnyilvántartó könyv?',
  o:['A segédlet megnevezése','Terjedelme','Használatba vételének dátuma','Végleges lezárásának dátuma','Irattári tételszám','Selejtezésének dátuma (kezelési bejegyzés)','A minősített irat tárgya'],
  a:[0,1,2,3,4,5],
  e:'Megnevezés, terjedelem, használatba vétel, végleges lezárás, irattári tételszám, selejtezés dátuma. Iratok tárgyát nem a főnyilvántartó, hanem az iktatókönyv tartalmazza.',
  src:'Tankönyv 9.1., 4. ábra • Szóbeli 15.' });

Q({ id:'ny5', t:'nyilv', type:'mc',
  q:'Mi lesz az iratkezelési segédlet „főnyilvántartási száma”?',
  o:['Az iktatókönyv első főszáma','A főnyilvántartó könyvben kapott sorszám (pl. Fnyt. sz.: 12.)','Az NBF által adott szám','Az irattári tételszám'],
  a:1,
  e:'A segédlet a főnyilvántartó könyv sorszámát kapja főnyilvántartási számként, ezt rá kell írni a segédletre (pl. „1. Fnyt. számú” iktatókönyv).',
  src:'Tankönyv 9.1. • Szóbeli 15.' });

Q({ id:'ny6', t:'nyilv', type:'tf',
  q:'A főnyilvántartó könyvben és a segédletekben ceruzával lehet bejegyezni, ha később tintával átírják.',
  a:false,
  e:'Hamis. Tilos: ceruza, sorszám üresen hagyása, lapok összeragasztása, radírozás, hibajavító festék, olvashatatlanná tétel. Javítás: egy vonallal áthúzni úgy, hogy olvasható maradjon, keltezéssel és aláírással (kézjeggyel) hitelesíteni.',
  src:'Tankönyv 8.3., 9.7. • Szóbeli 15. • Gyak. 12.' });

Q({ id:'ny7', t:'nyilv', type:'tf',
  q:'Az adatkezelési engedély egyik feltétele a hitelesen megnyitott főnyilvántartó könyv és a benne nyilvántartásba vett iratkezelési segédletek megléte.',
  a:true,
  e:'Igaz. Ez az adminisztratív biztonság egyik feltétele – az engedélyezési eljárás idején már rendelkezni kell velük.',
  src:'Tankönyv 8.3., 9.1. • Szóbeli 15.' });

Q({ id:'ny8', t:'nyilv', type:'mc',
  q:'Mikor használható iratkezelési szoftver a minősített adatok nyilvántartására?',
  o:['Bármikor','Csak a Nemzeti Biztonsági Felügyelet egyetértésével, és ha megfelel az ISZ rendelet (3/2018. BM rendelet) követelményeinek is','Ha a biztonsági vezető engedélyezi','Csak „Korlátozott terjesztésű!” adatnál'],
  a:1,
  e:'NBF-egyetértés + az ISZ rendelet és az NBF kormányrendelet követelményeinek teljesítése.',
  src:'Tankönyv 8.1.4., 9.7. • Szóbeli 15.' });

Q({ id:'ny9', t:'nyilv', type:'multi',
  q:'Igaz állítások a Nyilvántartóról és a Kezelőpontról:',
  o:['Minden minősített adatot kezelő szervnél kötelező legalább egy Nyilvántartót létrehozni','Kezelőpontot nem kötelező kialakítani; ha van, csak a Nyilvántartó alárendeltségében működhet','Működtetésükhöz legalább 1 fő, írásban kinevezett titkos ügykezelő kell','Tevékenységüket a biztonsági vezető szakmai alárendeltségében végzik','Nemzeti, NATO és EU adatra mindig külön Nyilvántartó kell'],
  a:[0,1,2,3],
  e:'A nemzeti és külföldi adat egy Nyilvántartóban is kezelhető, de fizikailag és adminisztratív módon elkülönítve (külön tároló vagy jól elkülönített polc, külön iktatókönyv). A tárolón fel kell tüntetni a benne tárolható legmagasabb szintet.',
  src:'Tankönyv 5.4., 8.4. • Szóbeli 22.' });

Q({ id:'ny10', t:'nyilv', type:'match', ch:true,
  q:'Hol működik? (2026-os állapot)',
  pairs:[
    ['NATO Központi Nyilvántartó','A Magyar Honvédségnél (a honvédelemért felelős miniszter által kijelölt honvédségi szervezetnél)'],
    ['EU Központi Nyilvántartó','A Külügyminisztériumban'],
    ['Nemzeti Központi Nyilvántartó','Ilyen nincs']
  ],
  e:'A 2026. évi XIII. törvény szerinti új minisztériumi struktúrában a „Külgazdasági és Külügyminisztérium” helyett már Külügyminisztérium szerepel. A nemzeti minősített adatok tekintetében NINCS Központi Nyilvántartó.',
  src:'Tankönyv 5.4., 8.4. + változások • Szóbeli 22.' });

Q({ id:'ny11', t:'nyilv', type:'mc',
  q:'Milyen kimutatást vezet a NATO Központi Nyilvántartó?',
  o:['Az összes magyar minősített iratról','A hatáskörébe tartozó NATO Nyilvántartókról és Kezelőpontokról, valamint valamennyi NATO „Szigorúan titkos!” adatról','A biztonsági vezetőkről','A titkos ügykezelők vizsgaeredményeiről'],
  a:1,
  e:'NATO Központi Nyilvántartó: NATO Nyilvántartók/Kezelőpontok + minden NATO „Szigorúan titkos!” adat. Az EU Központi Nyilvántartó ugyanezt vezeti az EU adatokra.',
  src:'Tankönyv 8.4. • Szóbeli 22.' });

Q({ id:'ny12', t:'nyilv', type:'mc',
  q:'Mit jelent a „zéró bizalom elve” a minősített adatoknál?',
  o:['Senkiben nem bízunk, ezért nem adunk ki iratot','Csak akkor történhet bármi a minősített adattal, ha a rendelkezésre jogosult (szerv vezetője, címzett, minősítő) írásban rendelkezett róla; nincs szignálás nélküli továbbítás, automatikus szignálás','Minden iratot titkosítani kell','A TÜK-öt évente ellenőrzik'],
  a:1,
  e:'Kizárólag írásban születhet rendelkezés arról, hogy ki kapja meg ügyintézésre, ki, hány példányban sokszorosíthatja, ki és mikor semmisítheti meg. Szóbeli rendelkezés nem elég – ennek akár büntetőjogi következménye is lehet.',
  src:'Tankönyv 8.2. • Szóbeli 15–16.' });

Q({ id:'ny13', t:'nyilv', type:'mc',
  q:'Mikor lehet megváltoztatni az iratkezelés szervezeti rendszerét (központi, osztott, vegyes)?',
  o:['Bármikor','Csak a naptári év kezdetén','Csak az NBF engedélyével','Negyedévente'],
  a:1,
  e:'Az iratkezelés szervezeti rendszerét csak a naptári év kezdetén lehet megváltoztatni.',
  src:'Tankönyv 8.4. • Szóbeli 22.' });

/* ============================ IKTATÁS ============================ */
Q({ id:'ik1', t:'iktat', type:'mc',
  q:'Ki nyitja meg és hitelesíti a minősített adatok iktatókönyvét?',
  o:['A szerv vezetője','A titkos ügykezelő','A biztonsági vezető','Az NBF'],
  a:1,
  e:'Az iktatókönyvet a titkos ügykezelő nyitja meg és hitelesíti, főnyilvántartásba veszi, és ráírja a főnyilvántartási számot (pl. Fnyt. sz.: 12.).',
  src:'Tankönyv 9.7. • Szóbeli 16.' });

Q({ id:'ik2', t:'iktat', type:'tf',
  q:'Nemzeti, NATO és EU minősített adatokra külön-külön iktatókönyvet kell megnyitni.',
  a:true,
  e:'Igaz. Az adatkezelési engedélyben meghatározott adatfajtánként (nemzeti, NATO, EU) külön iktatókönyv kell.',
  src:'Tankönyv 9.7. • Szóbeli 16.' });

Q({ id:'ik3', t:'iktat', type:'mc',
  q:'Hogyan kell lezárni a papíralapú iktatókönyvben az évet?',
  o:['Új iktatókönyvet kell nyitni','Az év utolsó munkanapján, az utolsó főszám után aláhúzással, keltezéssel, aláírással és hivatalos bélyegzőlenyomattal','December 31-én a könyv utolsó oldalán','Nem kell lezárni'],
  a:1,
  e:'Év végi lezárás: az utolsó munkanapon, az utolsó főszám alatt vonal, dátum, aláírás, bélyegző. Szoftvernél: technikailag ki kell zárni a további főszámra iktatást. Ha a könyv nem telt be, a következő év ugyanebben folytatódik a következő üres oldalon, 1-es főszámmal.',
  src:'Tankönyv 9.7. • Szóbeli 13., 16.' });

Q({ id:'ik4', t:'iktat', type:'mc',
  q:'Mi a kötelező formája az iktatószámnak?',
  o:['évszám/főszám','főszám-alszám/évszám (az évszám 4 számjeggyel)','Csak egy sorszám','iktatókönyv száma-főszám'],
  a:1,
  e:'Kötelező: főszám-alszám/évszám, pl. 51-1/2014. Ez tetszőlegesen bővíthető szervezeti egységre, iktatóhelyre, iktatókönyvre utaló azonosítóval, pl. 4/51-1/2014. vagy IV-NBF/1/1230/2014.',
  src:'Tankönyv 9.7. • Szóbeli 16.' });

Q({ id:'ik5', t:'iktat', type:'mc',
  q:'Az 1. Fnyt. számú iktatókönyvben iktatott 13. főszám 2. alszámának iktatószáma (2026-ban, Fnyt.-előtaggal bővítve):',
  o:['1/13-2/2026.','13/1-2/2026.','2026/13-2/1.','1-13/2/2026.'],
  a:0,
  e:'Szerkezet: [előtag, pl. Fnyt. szám]/[főszám]-[alszám]/[évszám]. Tehát 1/13-2/2026. A gyakorlati diasorban is így szerepel: az irat 1/3/2026., a hozzá tartozó elosztó 1/3-1/2026.',
  src:'Tankönyv 9.7., gyakorlati diasor • Szóbeli 16. • Gyak. 13.' });

Q({ id:'ik6', t:'iktat', type:'mc',
  q:'Legkésőbb mikor kell iktatni az érkezett vagy készített minősített adatot?',
  o:['Egy héten belül','Az érkezés/készítés napján, de legkésőbb az azt követő munkanapon','A hónap végéig','Amikor az ügyintéző kéri'],
  a:1,
  e:'Az érkezés vagy készítés napján, legkésőbb a következő munkanapon. A határidős és „sürgős” küldeményt soron kívül kell iktatni.',
  src:'Tankönyv 9.7. • Szóbeli 16.' });

Q({ id:'ik7', t:'iktat', type:'mc',
  q:'Érkezik egy irat, amelynek előzménye IDÉN már iktatva van az 5/2026. főszámon (eddig 2 alszámmal). Hova iktatod?',
  o:['Új főszámra','Az előzmény következő alszámára: 5-3/2026.','5-1/2026.','Nem kell iktatni'],
  a:1,
  e:'Ha a tárgyévben van előzmény, az előzmény következő alszámára kell iktatni. Egy főszámhoz korlátlan számú alszám tartozhat.',
  src:'Tankönyv 9.5., 9.7. • Szóbeli 16.' });

Q({ id:'ik8', t:'iktat', type:'mc',
  q:'Érkezik egy irat, amelynek előzménye TAVALY keletkezett. Mi a teendő (általános szabály)?',
  o:['A tavalyi főszám következő alszámára iktatjuk','A tárgyévben iktatjuk (új főszámra), az előzményt hozzászereljük; az új irat sorában rögzítjük az előirat iktatószámát, az előzménynél az utóirat iktatószámát, és a szerelést az iraton is jelöljük','Visszaküldjük','Csatoljuk, majd az ügy végén szétválasztjuk'],
  a:1,
  e:'Korábbi évi előzménynél: tárgyévi iktatás + szerelés + kölcsönös hivatkozás a két iktatókönyvben + jelölés az iraton. (Kivétel: egyes szerveknél – pl. rendvédelmi szervek, NAV, KNBSZ, bíróságok, ügyészség – a különböző években keletkezett, azonos ügyhöz tartozó iratok egy főszám alszámain is nyilvántarthatók.)',
  src:'Tankönyv 9.5., 9.7. • Szóbeli 16.' });

Q({ id:'ik9', t:'iktat', type:'match',
  q:'Párosítsd a fogalmat a jelentésével!',
  pairs:[
    ['Szerelés','Ügyiratok VÉGLEGES összekapcsolása, utána csak együtt kezelhetők'],
    ['Csatolás','Iratok ÁTMENETI összekapcsolása az ügy intézéséhez; utána visszakerülnek a helyükre'],
    ['Előirat','Az ügy előzménye (első irata)'],
    ['Utóirat','Ugyanahhoz az ügyhöz később érkezett/keletkezett irat']
  ],
  e:'A szerelés végleges, a csatolás átmeneti. A csatolást és megszüntetését is jelölni kell az iktatókönyvben és az előadói íven.',
  src:'Tankönyv 9.5. • Szóbeli 16.' });

Q({ id:'ik10', t:'iktat', type:'tf',
  q:'A nyílt (nem minősített) iratok iktatókönyvében is lehet minősített adatot iktatni, ha a tárgyrovatba beírjuk a szintet.',
  a:false,
  e:'Hamis! A nyílt iktatókönyvben TILOS minősített adatot iktatni. Fordítva viszont megengedett: egy ügyben keletkezett nem minősített iratok a minősített iktatókönyv azonos főszámának alszámain együtt kezelhetők.',
  src:'Tankönyv 9.7. • Szóbeli 16.' });

Q({ id:'ik11', t:'iktat', type:'multi', ch:true,
  q:'Mely rovatokat KELL tartalmaznia a nemzeti minősített adatok iktatókönyvének? (Jelöld mindet!)',
  o:['Iktatószám','Érkezés időpontja, módja; iktatás időpontja','Minősítési szint és érvényességi idő','Küldő megnevezése és iktatószáma (hivatkozási szám)','Tárgy','Adathordozó formája, terjedelme; mellékletek; példánysorszám','Továbbítás időpontja, módja, címzett','Irattárba helyezés kelte; megsemmisítés/törlés időpontja és jegyzőkönyv iktatószáma','Felülvizsgálat dátuma és eredménye (szintcsökkentés, ért. idő módosítás, megszüntetés)','Az ügyintéző neve és szervezeti egysége (kötelezően)'],
  a:[0,1,2,3,4,5,6,7,8],
  e:'+ kezelési bejegyzés (csatolás, határidő, visszaérkezés stb.). Az ügyintéző és szervezeti egység feltüntetése 2024. július 7-ig volt kötelező, ma már NEM jogszabályi követelmény.',
  src:'Tankönyv 9.7. • Szóbeli 16. • Gyak. 1.' });

Q({ id:'ik12', t:'iktat', type:'mc',
  q:'Téves iktatószámot adtál ki. Felhasználhatod újra?',
  o:['Igen, ha még nem írtad rá az iratra','Nem, a tévesen kiadott iktatószám nem használható fel újra','Igen, a biztonsági vezető engedélyével','Csak a következő évben'],
  a:1,
  e:'A tévesen kiadott iktatószám nem használható fel újra. A téves bejegyzést áthúzással kell érvényteleníteni úgy, hogy az eredeti olvasható maradjon.',
  src:'Tankönyv 9.7. • Gyak. 12.' });

Q({ id:'ik13', t:'iktat', type:'order',
  q:'GYAKORLAT (12. tétel): Állítsd sorrendbe a szabályos javítást a papíralapú iktatókönyvben!',
  o:['A téves adatot EGY vonallal áthúzom úgy, hogy olvasható maradjon','Mellé/fölé beírom a helyes adatot','Keltezéssel és kézjeggyel (aláírással) hitelesítem a javítást'],
  e:'Radír, hibajavító, ceruza, összeragasztás tilos. Szoftvernél a módosítást a felhasználó azonosítójával és időponttal naplózni kell, a naplóban az eredeti és a módosított adat is látszik.',
  src:'Tankönyv 8.3., 9.7. • Gyak. 12.' });

Q({ id:'ik14', t:'iktat', type:'tf',
  q:'Az irattal együtt érkező, együtt kezelendő mellékletek önálló iktatószámot kapnak.',
  a:false,
  e:'Hamis. Egy iratnak csak egy iktatószáma lehet, a mellékletek nem kapnak önálló iktatószámot (a mellékletek darabszáma, formája, terjedelme, eltérő szintje az iktatókönyvbe kerül).',
  src:'Tankönyv 9.7. • Szóbeli 16.' });

Q({ id:'ik15', t:'iktat', type:'tf',
  q:'Az iktatókönyv selejtezhető 10 év után.',
  a:false,
  e:'Hamis. Az iktatókönyv NEM selejtezhető – ezt a főnyilvántartásba vételkor a megfelelő irattári tételszámmal jelezni kell. Ha az iktatókönyvből érdemi információ vonható le a tartalomra, a legmagasabb minősítési jelölést meg kell ismételni a borítóján.',
  src:'Tankönyv 9.7. • Szóbeli 16.' });

Q({ id:'ik16', t:'iktat', type:'mc',
  q:'Hogyan kell iktatni egy „Saját kezű felbontásra!” jelzésű érkezett küldeményt?',
  o:['Felbontás után a szokásos módon','Zárt küldeményként iktatja a TÜK; a „Tárgy” rovatba azt írja, hogy „Saját kezű felbontásra!” érkezett','Nem kell iktatni','A címzett iktatja'],
  a:1,
  e:'A TÜK nem bonthatja fel, zárt küldeményként iktatja, és bontatlanul, dokumentáltan adja át a címzettnek. A címzett felhasználás után lezárva, bélyegzővel ellátva visszaadja tárolásra/továbbításra, és közli az iktatáshoz szükséges adatokat.',
  src:'Tankönyv 9.3. • Szóbeli 17.' });

Q({ id:'ik17', t:'iktat', type:'mc',
  q:'Hogyan kell nyilvántartani a mutatózást papíralapú iktatásnál?',
  o:['Nem kell','Név- és tárgymutató könyvet kell vezetni (ábécérendben, a tárgyszó egyezzen az iktatókönyv tárgyrovatával)','Csak a futárjegyzéken','A főnyilvántartó könyvben'],
  a:1,
  e:'Papíralapú iktatásnál név- és tárgymutató kell. Iratkezelési szoftvernél nem kell külön mutatókönyv, mert a programban kereshető névre, tárgyra, tárgyszavakra.',
  src:'Tankönyv 9.8. • Szóbeli 16.' });

Q({ id:'ik18', t:'iktat', type:'mc',
  q:'GYAKORLAT (13. tétel): 20 példányban készül egy „Titkos!” irat a 1/3/2026. iktatószámon. Az 1. pld. irattári, a 2–20. pld. elosztó szerint megy. Hova iktatod az elosztót?',
  o:['Új főszámra','Az irat főszámának következő alszámára: 1/3-1/2026.','Nem kell iktatni','A futárjegyzék-nyilvántartásba'],
  a:1,
  e:'Az elosztó ugyanahhoz az ügyhöz tartozik, ezért az irat főszámának alszámára kerül (pl. 1/3-1/2026.). Az iraton: „2–20. sz. pld. 1/3-1/2026. ikt. számú elosztó szerint”. Az elosztó az irattári példányhoz csatolva, a címzettekkel és a nekik küldött példánysorszámokkal. Utána a továbbítást (címzett: elosztó szerint, futárjegyzék száma) kivezeted az iktatókönyvben.',
  src:'Tankönyv 2.7., gyakorlati diasor 19. minta • Gyak. 13.' });

/* ============================ ÁTVÉTEL, FELBONTÁS ============================ */
Q({ id:'at1', t:'atvet', type:'multi',
  q:'Ki veheti át a más szervtől érkezett minősített küldeményt az NBF kormányrendelet szerint?',
  o:['A címzett','A titkos ügykezelő','A szerv vezetője által írásban megbízott más személy','NATO/EU „Korlátozott terjesztésű!” esetén a felhasználó is','Bármely ügyintéző','A postai meghatalmazott'],
  a:[0,1,2,3],
  e:'Ez jóval szűkebb, mint a KEIR szerinti általános kör (pl. postai meghatalmazott, ügyfélszolgálat, Kormányablak nem veheti át). Ha nem a Nyilvántartó TÜK-e vette át (pl. 24 órás porta), haladéktalanul, legkésőbb az első munkanap kezdetén belső átadókönyvben dokumentáltan átadja a Nyilvántartónak.',
  src:'Tankönyv 9.2. • Szóbeli 17. • Gyak. 1–3.' });

Q({ id:'at2', t:'atvet', type:'multi',
  q:'Mit kell ellenőrizni a minősített küldemény átvételének igazolása ELŐTT?',
  o:['A címzés alapján jogosult vagyok-e átvenni','Egyezik-e a futárjegyzéken és a csomagoláson szereplő iktatószám és példánysorszám','Sértetlenül, zártan érkezett-e','Megfelel-e az irat tartalma a valóságnak'],
  a:[0,1,2],
  e:'A három ellenőrzés: jogosultság, iktatószám + példánysorszám egyezése, sértetlenség. A tartalmat az átvevő nem vizsgálja.',
  src:'Tankönyv 9.2. • Szóbeli 17. • Gyak. 1.' });

Q({ id:'at3', t:'atvet', type:'multi',
  q:'GYAKORLAT (1. tétel): Hogyan igazolod az átvételt a futárjegyzéken?',
  o:['Dátum és időpont (év, hó, nap, óra, perc)','Neved olvashatóan','Aláírásod','Bélyegzőlenyomat','Az irat tárgya'],
  a:[0,1,2,3],
  e:'Dátum + óra-perc, olvasható név, aláírás, bélyegző. A futárjegyzék 2 eredeti példányban készül: az egyik az Állami Futárszolgálatnál, a másik a bekapcsolt szervnél marad.',
  src:'Tankönyv 9.2., 8. ábra • Gyak. 1.' });

Q({ id:'at4', t:'atvet', type:'mc',
  q:'A minősített küldemény csomagolása sérült. Mi a teendő?',
  o:['Nem veszed át','Az átadó jelenlétében ellenőrzöd a tartalmat, 2 példányban jegyzőkönyvet készítesz (átadó és átvevő is aláírja), egy példányt az átadó kap, a sérülést a futárjegyzéken is jelölöd','Átveszed, és szólsz a biztonsági vezetőnek','Visszaküldöd postán'],
  a:1,
  e:'Sérült csomag: tartalomellenőrzés az átadó jelenlétében → 2 pld. jegyzőkönyv, mindketten aláírják → 1 pld. az átadónak (ő tisztázza a körülményeket) → a sérülés tényét a futárjegyzéken is szerepeltetni kell.',
  src:'Tankönyv 9.2. • Szóbeli 17.' });

Q({ id:'at5', t:'atvet', type:'mc',
  q:'Tévesen címzett minősített küldeményt vettél át. Mit teszel?',
  o:['Felbontod, hogy kiderüljön, kié','Felbontás nélkül azonnal továbbítod a címzettnek, vagy ha ez nem lehetséges, visszajuttatod a feladónak','Iktatod és irattárba teszed','Megsemmisíted'],
  a:1,
  e:'Felbontás nélkül továbbítás a címzetthez, vagy vissza a feladónak. Ha mégis felbontották: aki felbontotta, 2 pld. jegyzőkönyvet készít, szabályszerűen lezárja, és az egyik jegyzőkönyvvel együtt soron kívül továbbítja a címzettnek.',
  src:'Tankönyv 9.2. • Szóbeli 17.' });

Q({ id:'at6', t:'atvet', type:'multi',
  q:'Ki bonthatja fel a minősített küldeményt (főszabály)?',
  o:['A címzett','A titkos ügykezelő („Saját kezű felbontásra!” kivételével)','Aki átvette (pl. a portás)','A szerv vezetője által megbízott bármely személy'],
  a:[0,1],
  e:'Felbontásra főszabály szerint csak a címzett és a titkos ügykezelő jogosult. Az átvételi jog NEM jelent felbontási jogot! „S. k. felbontásra!” jelzésűt csak a címzett bonthat fel.',
  src:'Tankönyv 9.3. • Szóbeli 17.' });

Q({ id:'at7', t:'atvet', type:'mc',
  q:'Ki rendelkezik arról, hogyan bontható fel a „Saját kezű felbontásra!” küldemény, ha a címzett akadályoztatva van?',
  o:['A titkos ügykezelő dönt','A szerv vezetője a biztonsági szabályzatban','Az NBF','Senki, várni kell'],
  a:1,
  e:'Erről a szerv vezetője a biztonsági szabályzatban rendelkezik.',
  src:'Tankönyv 9.3. • Szóbeli 17.' });

Q({ id:'at8', t:'atvet', type:'mc',
  q:'A TÜK tévedésből felbontott egy „Saját kezű felbontásra!” küldeményt. Mi a teendő?',
  o:['Visszaragasztja és hallgat','2 példányban jegyzőkönyvet készít, szabályszerűen lezárja a küldeményt, és a jegyzőkönyv egyik példányával soron kívül továbbítja a címzettnek (ha nem lehet, visszajuttatja a feladónak)','Elolvassa és iktatja','Értesíti a rendőrséget'],
  a:1,
  e:'Téves felbontás: 2 pld. jegyzőkönyv + szabályos lezárás + továbbítás a címzettnek az egyik jegyzőkönyvvel (vagy vissza a feladónak).',
  src:'Tankönyv 9.3. • Szóbeli 17.' });

Q({ id:'at9', t:'atvet', type:'mc',
  q:'Felbontás után kiderül, hogy hiányzik egy melléklet. Mi a teendő?',
  o:['Iktatod a hiányt nem jelezve','2 példányban jegyzőkönyvet veszel fel, egy példányt a küldő szervnek továbbítasz','Telefonon szólsz a küldőnek','Visszaküldöd az egészet'],
  a:1,
  e:'Felbontás után azonnal ellenőrizni kell: egyeznek-e a borítékon és az adathordozón lévő azonosító adatok, és egyezik-e a terjedelem (lapszám) a záradékkal. Hiány esetén 2 pld. jegyzőkönyv, egyik a küldőnek.',
  src:'Tankönyv 9.3. • Szóbeli 17.' });

Q({ id:'at10', t:'atvet', type:'mc',
  q:'Nyílt küldeményként érkezett borítékban minősített irat van. Mi a teendő?',
  o:['Iktatod nyílt iratként','2 példányban jegyzőkönyv; a jegyzőkönyvet a biztonsági vezetőnek, az iratot a TÜK-nek dokumentáltan átadni; „Bizalmas!” vagy magasabb szintnél a BV a szerv vezetője útján a minősítőt és az NBF-et írásban tájékoztatja','Visszaküldöd postán','Megsemmisíted'],
  a:1,
  e:'Mindig 2 pld. jegyzőkönyv. „Bizalmas!”-tól a minősítőt és az NBF-et is tájékoztatni kell (a szerv vezetője útján).',
  src:'Tankönyv 9.3. • Szóbeli 17.' });

Q({ id:'at11', t:'atvet', type:'tf',
  q:'A minősített küldemény borítékját minden esetben csatolni kell a küldeményhez.',
  a:false,
  e:'Hamis. Minősített küldeménynél a borítékot csak akkor kell csatolni, ha csak abból állapítható meg valamely, az ügy szempontjából fontos, jogkövetkezménnyel bíró adat vagy tény.',
  src:'Tankönyv 9.3. • Szóbeli 17.' });

Q({ id:'at12', t:'atvet', type:'tf',
  q:'Az érkeztetés és az iktatás ugyanaz a művelet.',
  a:false,
  e:'Hamis. Az érkeztetés a beérkezés rögzítése (feladó, beérkezés időpontja, érkeztetési azonosító stb.), az iktatás az iktatószámon történő nyilvántartásba vétel. Ha a küldeményt a beérkezéssel egyidejűleg iktatják, nem kell külön érkeztetni. Az NBF rendelet erre nem tartalmaz külön szabályt – a KEIR az irányadó.',
  src:'Tankönyv 9.4. • Szóbeli 17.' });

Q({ id:'at13', t:'atvet', type:'order',
  q:'GYAKORLAT (1. tétel): Állítsd sorrendbe egy érkezett nemzeti minősített irat kezelését!',
  o:['Ellenőrzés: jogosultság, iktatószám/példánysorszám egyezése, sértetlenség','Átvétel igazolása a futárjegyzéken (dátum, óra-perc, név, aláírás, bélyegző)','Felbontás, a tartalom és terjedelem ellenőrzése','Előzmény keresése','Iktatás: adatok rögzítése az iktatókönyvben, iktatószám képzése','Iktatóbélyegző/iktatószám feltüntetése az iraton','Bemutatás szignálásra'],
  e:'Ez a tipikus folyamat. A szignálás főszabályként a postabontás után történik, de a vezető elrendelheti, hogy előbb iktassák. Ha a szignáláskor az irat a TÜK felügyelete alatt marad, nem kell átadókönyvben dokumentálni.',
  src:'Tankönyv 9.2–9.7. • Gyak. 1.' });

Q({ id:'at14', t:'atvet', type:'mc',
  q:'GYAKORLAT (2. tétel): Milyen csomagolásban érkezik a NATO minősített irat, és mi szerepelhet a külső borítékon?',
  o:['Egy borítékban, rajta a minősítési szint','Dupla csomagolásban; a külső borítékon csak a címzett szerv, a célállomás, a küldő szerv és a futárjegyzék nyilvántartási száma – semmi, ami minősített tartalomra utalna','Átlátszó tasakban','A külső borítékon NATO SECRET felirat'],
  a:1,
  e:'Külföldi adat: dupla, nem átlátszó, erős csomagolás. A belső borítékon: iktatószám, szint, példánysorszám, címzett, kezelési utasítások. A külsőn semmi, ami külföldi minősített tartalomra utal. A NATO iratot a NATO iktatókönyvben kell iktatni.',
  src:'Tankönyv 10.4. • Gyak. 2.' });

/* ============================ SZERVEN BELÜLI ÁTADÁS ============================ */
Q({ id:'b1', t:'belso', type:'mc',
  q:'Hogyan történhet a minősített adat szerven belüli átadása és visszavétele?',
  o:['Bárki átadhatja bárkinek szóban','Csak a titkos ügykezelő útján, belső átadókönyvben/átadó okmányban saját kezű aláírással és az átvétel dátumával, vagy iratkezelési szoftverrel','E-mailben','A biztonsági vezető útján'],
  a:1,
  e:'Kizárólag a TÜK útján, dokumentáltan. A TÜK kihagyása jogszabályellenes kezelés, szabálysértés lehet. Kivétel: elektronikus adatkezelő rendszeren belül a felhasználók között a TÜK nélkül is; az ügyeleti/őrszolgálat tagjai között szolgálatátadáskor; és szignálásra bemutatáskor, ha az irat a TÜK felügyelete alatt marad.',
  src:'Tankönyv 9.9., 11. ábra • Szóbeli 18. • Gyak. 7–8.' });

Q({ id:'b2', t:'belso', type:'multi',
  q:'Mit kell tartalmaznia a belső átadókönyvnek (átadó kartonnak)?',
  o:['Iktatószám','Minősítési szint','Példánysorszám','Példányonkénti terjedelem','Átadás dátuma; átvevő neve, saját kezű aláírása, átvétel dátuma','Visszavétel dátuma; visszavevő neve, saját kezű aláírása, dátum','Az irat tárgya'],
  a:[0,1,2,3,4,5],
  e:'Iktatószám, szint, példánysorszám, terjedelem, átadás dátuma + átvevő igazolása, visszavétel dátuma + visszavevő igazolása. A tárgy nem kötelező rovat.',
  src:'Tankönyv 9.9. • Szóbeli 18. • Gyak. 7–8.' });

Q({ id:'b3', t:'belso', type:'num',
  q:'A belső átadókönyvek és átadó kartonok a lezárásuk után hány év megőrzési idő elteltével selejtezhetők?',
  a:8, unit:'év',
  e:'8 év (a Levéltári törvény szerint). Ugyanennyi a futárjegyzék-nyilvántartásé és a titoktartási nyilatkozaté is (a jogosultság megszűnése után).',
  src:'Tankönyv 9.9. • Szóbeli 18.' });

Q({ id:'b4', t:'belso', type:'mc',
  q:'Mikor szabad lezárni egy belső átadókönyvet?',
  o:['Év végén','Ha minden korábban átadott minősített adat visszavételezése megtörtént, vagy a másik Nyilvántartónak történt végleges átadást a TÜK hitelt érdemlően igazolja','Ha betelt','Bármikor'],
  a:1,
  e:'Csak akkor, ha minden rajta szereplő irat „vissza van véve” (vagy végleges átadás igazolt).',
  src:'Tankönyv 9.9. • Szóbeli 18.' });

Q({ id:'b5', t:'belso', type:'tf',
  q:'Belső átadókönyvből a szerv vezetőjének döntése alapján tetszés szerinti számú nyitható; ezeket a titkos ügykezelő nyitja meg, hitelesíti és veszi főnyilvántartásba.',
  a:true,
  e:'Igaz. Átadókönyv helyett/mellett ügyintézőnkénti vagy iktatószámonkénti átadó karton is használható.',
  src:'Tankönyv 9.9. • Szóbeli 18.' });

Q({ id:'b6', t:'belso', type:'mc',
  q:'GYAKORLAT (6. tétel): Mit tüntet fel a vezető a szignáláskor az iraton?',
  o:['Csak a nevét','A kijelölt ügyintézőt/szervezeti egységet (pl. „Ügyintézésért felelős: Minta Zoltán úr”), esetleges utasításokat, a szignálás dátumát és aláírását','Az iktatószámot','Az irattári tételszámot'],
  a:1,
  e:'Szignálás: az ügyintéző (és/vagy szervezeti egység) írásbeli kijelölése, utasítások (határidő, elintézés módja), dátum, aláírás. Öntapadós cetlire tilos utasítást írni! Az ügyintéző a szignálással válik jogosult felhasználóvá.',
  src:'Tankönyv 9.6., gyakorlati diasor • Gyak. 6.' });

Q({ id:'b7', t:'belso', type:'multi',
  q:'Mire kell figyelnie a szignáló vezetőnek?',
  o:['Csak olyan felhasználónak engedje, akinek van aláírt titoktartási nyilatkozata','„Bizalmas!” vagy magasabb szintnél az adat szintjének megfelelő SZBT-je is legyen','Előirat esetén ki volt az ügyintéző','Ne álljon fenn összeférhetetlenség','Az ügyintéző legalább 5 éve dolgozzon a szervnél'],
  a:[0,1,2,3],
  e:'A szignáló vezető felelőssége, hogy csak jogosult (titoktartási nyilatkozat + szükség szerint SZBT) felhasználóhoz kerüljön az irat. Minősített adatnál nincs szignálás nélküli vagy automatikus szignálás.',
  src:'Tankönyv 8.2., 9.6. • Szóbeli 18. • Gyak. 6.' });

Q({ id:'b8', t:'belso', type:'order',
  q:'GYAKORLAT (8. tétel): Állítsd sorrendbe az átadás–visszavétel lépéseit!',
  o:['A belső átadókönyvbe beírom: iktatószám, szint, példánysorszám, terjedelem, átadás dátuma','Az ügyintéző a nevével, saját kezű aláírásával és a dátummal igazolja az átvételt','Az ügyintéző dolgozik az iraton','Visszavételkor ellenőrzöm a hiánytalanságot','A visszavétel dátumát és a visszavevő nevét, saját kezű aláírását rögzítem'],
  e:'Az átvevő ügyintéző lap- és szám szerint ellenőrzi az iratot, a mellékleteket. Visszavételkor a TÜK ellenőriz, majd a visszavétel rovatot tölti ki.',
  src:'Tankönyv 9.9., 10–11. ábra • Gyak. 8.' });

Q({ id:'b9', t:'belso', type:'mc',
  q:'GYAKORLAT (7. tétel): Hol jelzed az iktatókönyvben az ügyintézőnek történő átadást?',
  o:['A „Tárgy” rovatban','A kezelési bejegyzés rovatban (pl. „átadva: Minta Zoltán, dátum”) – maga az átadás a belső átadókönyvben történik','A felülvizsgálat rovatban','Nem kell jelezni'],
  a:1,
  e:'Az ügyintéző feltüntetése ma már nem kötelező iktatókönyvi rovat (2024. 07. 07. óta), de a szervezeti gyakorlat és a gyakorlati tétel szerint az átadás tényét jelezni kell – erre a kezelési bejegyzés szolgál. Az átadás igazolása a belső átadókönyvben történik.',
  src:'Tankönyv 9.7., 9.9. • Gyak. 7.' });

/* ============================ SOKSZOROSÍTÁS; BIZTONSÁG MEGSÉRTÉSE ============================ */
Q({ id:'s1', t:'sokszor', type:'tf',
  q:'A minősített adat sokszorosítása a titkos ügykezelő jogszabályban előírt feladata.',
  a:false,
  e:'Hamis! A sokszorosítás, fordítás, kivonatolás NEM jogszabályi feladata a TÜK-nek. Csak akkor végezheti, ha a konkrét feladatra írásban engedélyt/megbízást kap (az adathordozón vagy külön iraton).',
  src:'Tankönyv 6.6., 11. fejezet • Szóbeli 19.' });

Q({ id:'s2', t:'sokszor', type:'multi',
  q:'Ki engedélyezheti írásban a sokszorosítást, fordítást, kivonatolást (ha a minősítő nem tiltotta meg)?',
  o:['A minősített adatot kezelő szerv vezetője vagy az általa írásban megbízott személy','A címzett','Az általa minősített adat esetén a minősítő','A titkos ügykezelő','A biztonsági vezető (megbízás nélkül)'],
  a:[0,1,2],
  e:'Szerv vezetője (vagy írásban megbízottja), címzett, minősítő. KIZÁRÓLAG a minősítő engedélyezheti: NATO, NYEU, EU és EU-intézmények „Szigorúan titkos!” adatainál, illetve ha a minősítő különleges kezelési utasításban megtiltotta.',
  src:'Tankönyv 11. fejezet • Szóbeli 19. • Gyak. 4.' });

Q({ id:'s3', t:'sokszor', type:'mc',
  q:'GYAKORLAT (4. tétel): Hogyan iktatod a nemzeti minősített irat sokszorosított példányát?',
  o:['Új főszámra','A minősített adat (eredeti) iktatószámán, 1-től növekvő sokszorosított példánysorszámmal (pl. „1. sz. soksz. pld.”)','Nem kell iktatni','A futárjegyzék-nyilvántartásban'],
  a:1,
  e:'A sokszorosított, fordított, kivonatolt példányok 1-től növekvő külön sorszámot kapnak, és az eredeti iktatószámon iktatandók. Ha az eredeti iktatókönyve már le van zárva: a tárgyévi iktatókönyv következő iktatószámára, és az eredeti kezelési bejegyzés rovatában rögzíteni kell az új iktatószámot.',
  src:'Tankönyv 11. fejezet, gyakorlati diasor • Gyak. 4.' });

Q({ id:'s4', t:'sokszor', type:'tf',
  q:'Külföldi minősített adat magyarra fordított példányán a külföldi minősítési szintet az eredeti idegen nyelven is fel kell tüntetni.',
  a:true,
  e:'Igaz. Fordítva is: nemzeti adat idegen nyelvű fordításán az eredeti magyar minősítési szintet is szerepeltetni kell.',
  src:'Tankönyv 11. fejezet • Szóbeli 19.' });

Q({ id:'s5', t:'sokszor', type:'match',
  q:'Minősített adattal visszaélés – maximális büntetés: párosítsd! („hivatalos” = hivatalból titoktartásra kötelezett, pl. TÜK)',
  pairs:[
    ['„Szigorúan titkos!” – hivatalos','2–8 év'],
    ['„Titkos!” – hivatalos','1–5 év'],
    ['„Bizalmas!” – hivatalos','2 évig'],
    ['„Korlátozott terjesztésű!” – hivatalos','1 évig'],
    ['„Korlátozott terjesztésű!” – civil','Elzárás']
  ],
  e:'„Civil”: Szigorúan titkos 1–5 év, Titkos 3 évig, Bizalmas 1 évig, Korlátozott terjesztésű elzárás. A hivatalból titoktartásra kötelezettek szigorúbb büntetést kapnak, és náluk a gondatlan elkövetés is büntetendő (civileknél csak a szándékos).',
  src:'Tankönyv 13.1. • Szóbeli 19.' });

Q({ id:'s6', t:'sokszor', type:'multi',
  q:'Melyek a minősített adattal visszaélés elkövetési magatartásai?',
  o:['Jogosulatlan megszerzés','Jogosulatlan felhasználás','Jogosulatlan személy részére hozzáférhetővé tétel','Jogosult személy részére hozzáférhetetlenné tétel','Késedelmes iktatás'],
  a:[0,1,2,3],
  e:'Négy magatartás. A késedelmes iktatás (jogszabályellenes nyilvántartás) szabálysértés lehet: „Minősített adat biztonsága megsértése” – ebben a rendőrség jár el.',
  src:'Tankönyv 13.1–13.2. • Szóbeli 19.' });

Q({ id:'s7', t:'sokszor', type:'num',
  q:'„Titkos!” nemzeti adat illetéktelen személy részére hozzáférhetővé válhatott. A szerv vezetőjének legkésőbb a tudomásra jutástól számítva hány napon belül kell tájékoztatnia a minősítőt és az NBF-et?',
  a:10, unit:'nap',
  e:'10 napon belül. Nemzeti „Szigorúan titkos!”, „Titkos!”, „Bizalmas!”: minősítő + NBF. NATO/EU adatnál: az NBF. A felhasználó a biztonsági vezetőt haladéktalanul tájékoztatja.',
  src:'Tankönyv 5.8., 13.3. • Szóbeli 19.' });

Q({ id:'s8', t:'sokszor', type:'multi',
  q:'Mit kell tartalmaznia a biztonság megsértéséről a minősítőnek és az NBF-nek adott tájékoztatásnak?',
  o:['A veszélyeztetett adat azonosításához szükséges adatokat','A biztonság megsértésének körülményeit','A veszélyeztetettség idejét és helyét','A kialakulás elsődleges okait','Ha ismert, a felelőssé tehető személy nevét','A megtett intézkedések felsorolását','A titkos ügykezelő SZBT-számát'],
  a:[0,1,2,3,4,5],
  e:'Hat elem. A biztonsági vezető intézkedik a kár felméréséről, enyhítéséről és – ha lehet – a jogszerű állapot helyreállításáról.',
  src:'Tankönyv 6.4., 13.3. • Szóbeli 19.' });

Q({ id:'s9', t:'sokszor', type:'order',
  q:'Észreveszed, hogy egy „Bizalmas!” irat eltűnt. Állítsd sorrendbe, mi történik!',
  o:['Haladéktalanul tájékoztatom a biztonsági vezetőt','A biztonsági vezető intézkedik a kár felméréséről és enyhítéséről','A szerv vezetője legkésőbb 10 napon belül tájékoztatja a minősítőt és az NBF-et','Az NBF kivizsgálja a bejelentés alapján'],
  e:'Felhasználó → BV (haladéktalanul) → BV: kárfelmérés, enyhítés → szerv vezetője → minősítő + NBF (10 nap) → NBF kivizsgálja.',
  src:'Tankönyv 5.8., 6.1., 13.3. • Szóbeli 19.' });

/* ============================ TOVÁBBÍTÁS ============================ */
Q({ id:'tv1', t:'tovabb', type:'multi',
  q:'Mi a három szakmai alapszabály a minősített küldemények továbbításánál?',
  o:['Postán, „civil” futár- vagy csomagküldő szolgálattal TILOS','E-mailben, interneten TILOS','Csak a titkos ügykezelő közreműködésével szabad','Csak hétköznap szabad','Mindig ajánlott küldeményként'],
  a:[0,1,2],
  e:'A három alapszabály: nincs posta/civil futár, nincs e-mail/internet, csak a TÜK útján.',
  src:'Tankönyv 10.1. • Szóbeli 20.' });

Q({ id:'tv2', t:'tovabb', type:'multi',
  q:'Ki szállíthat minősített küldeményt BELFÖLDÖN?',
  o:['Állami Futárszolgálat','A Magyar Honvédség belföldi katonai futárszolgálata, katonai futár','A rendvédelmi szervek (nemzetbiztonsági szolgálatok) belső futára','A NAV belső futára','Személyes kézbesítő','Magyar Posta tértivevénnyel'],
  a:[0,1,2,3,4],
  e:'A futároknak és a személyes kézbesítőnek is a továbbított adat szintjének megfelelő SZBT-vel és titoktartási nyilatkozattal kell rendelkezniük. Posta: tilos.',
  src:'Tankönyv 10.3. • Szóbeli 20.' });

Q({ id:'tv3', t:'tovabb', type:'mc',
  q:'Ki jelölhető ki személyes kézbesítőnek?',
  o:['Bárki, aki ráér','A továbbító szerv állományába tartozó, a továbbított adat szintjének megfelelő SZBT-vel és aláírt titoktartási nyilatkozattal rendelkező személy','Csak rendőr','Egy futárcég munkatársa'],
  a:1,
  e:'A személyes kézbesítőt a szerv vezetője (vagy a biztonsági szabályzatban felhatalmazott) jelöli ki írásban. 2024. 07. 07. óta a személyes kézbesítő is FUTÁRJEGYZÉKET használ (a külső kézbesítőkönyv megszűnt).',
  src:'Tankönyv 10.1., fogalomtár • Szóbeli 20.' });

Q({ id:'tv4', t:'tovabb', type:'multi',
  q:'GYAKORLAT (9. tétel): Mit kell feltüntetni a nemzeti minősített iratot tartalmazó borítékon (Állami Futárszolgálattal küldve)?',
  o:['Címzés','A küldő (feladó) szerv adatai','Az irat iktatószáma, példánysorszáma, minősítési szintje','„Baleset esetén vagy rendkívüli helyzetben a küldő szerv bonthatja fel!”','Különleges kezelési utasítás, ha a minősítő rendelkezett róla','Futárkódszám','Az irat tárgya'],
  a:[0,1,2,3,4,5],
  e:'A tárgy NEM kerülhet a borítékra. A borítékot úgy kell lezárni, hogy a jogosulatlan felbontás egyértelműen megállapítható legyen, és a lezárás helyén a szerv hivatalos bélyegzőjével kell ellátni.',
  src:'Tankönyv 10.2–10.3. • Gyak. 9.' });

Q({ id:'tv5', t:'tovabb', type:'multi',
  q:'GYAKORLAT (10. tétel): Milyen rovatokat tartalmaz a futárjegyzék (Állami Futárszolgálat, feladáskor)?',
  o:['Futárjegyzék sorszáma (listaszám)','Feladó szerv neve, a futárjegyzék címzettje','A küldemény iktatószáma, példánysorszáma, darabszáma, minősítési szintje, címzettje','A nyomtatás dátuma és időpontja (év, hó, nap, óra, perc)','A futárnak átadás dátuma, időpontja, az átadó neve, aláírása, bélyegző','Az irat tárgya'],
  a:[0,1,2,3,4],
  e:'Tárgy nem kerül rá. A küldeményeket felülről lefelé növekvő sorszámmal, egyesével kell felsorolni. Ha egy küldemény több iktatószámú iratot tartalmaz, mindegyik iktatószámot fel kell tüntetni (a borítékon is). A futárjegyzék 2 eredeti példányban készül.',
  src:'Tankönyv 10.1. • Gyak. 10.' });

Q({ id:'tv6', t:'tovabb', type:'multi',
  q:'Milyen rovatokat tartalmaz a futárjegyzék-nyilvántartás?',
  o:['A futárjegyzék eredeti száma','A nyilvántartásba vétel időpontja','A készítő szerv megnevezése','Kezelési bejegyzés','A futár neve'],
  a:[0,1,2,3],
  e:'Négy rovat. A futárjegyzék-nyilvántartás a benne lévő futárjegyzékekkel együtt a lezárás után 8 évvel selejtezhető.',
  src:'Tankönyv 10.1. • Szóbeli 20.' });

Q({ id:'tv7', t:'tovabb', type:'order',
  q:'GYAKORLAT (9–11. tétel): Állítsd sorrendbe a szerven kívülre továbbítást!',
  o:['Boríték megcímzése (címzés, feladó, iktatószám, pld., szint, figyelmeztetés, futárkód)','Lezárás, a lezárás helyén hivatalos bélyegző','Futárjegyzék elkészítése','Átadás a futárnak a futárjegyzékkel, dokumentáltan','A továbbítás rögzítése (kivezetés) az iktatókönyvben'],
  e:'A továbbítás tényét (időpont, mód – pl. ÁFSZ Fj. 282., címzett, példánysorszám, terjedelem) az iktatókönyv „Továbbított irat” rovataiban kell rögzíteni.',
  src:'Tankönyv 10.2–10.3., gyakorlati diasor • Gyak. 9–11.' });

Q({ id:'tv8', t:'tovabb', type:'multi',
  q:'GYAKORLAT (11. tétel): Mit rögzítesz az iktatókönyvben a továbbított irat kivezetésekor?',
  o:['A továbbítás időpontját','A továbbítás módját (pl. ÁFSZ, futárjegyzék száma)','A címzettet','A továbbított példány sorszámát és terjedelmét','A boríték színét'],
  a:[0,1,2,3],
  e:'Az iktatókönyv „Továbbított irat” része: időpont, mód, címzett, példánysorszám, terjedelem.',
  src:'Tankönyv 9.7., gyakorlati diasor • Gyak. 11.' });

Q({ id:'tv9', t:'tovabb', type:'mc',
  q:'Mi kerülhet a NATO/EU minősített adat KÜLSŐ borítékára?',
  o:['Minősítési szint és iktatószám','Csak a címzett szerv, a célállomás, a küldő szerv és a futárjegyzék nyilvántartási száma','A teljes tartalomjegyzék','„NATO SECRET”'],
  a:1,
  e:'A külső borítékon semmi nem utalhat külföldi minősített tartalomra. A belső borítékon: iktatószám, szint, példánysorszám, címzett teljes megjelölése, kezelési utasítások.',
  src:'Tankönyv 10.4. • Szóbeli 20.' });

Q({ id:'tv10', t:'tovabb', type:'mc',
  q:'NATO „Szigorúan titkos!” küldeményt belföldön továbbítasz. Kit kell írásban tájékoztatni?',
  o:['Senkit','A NATO Központi Nyilvántartót','A rendőrséget','Az EU Központi Nyilvántartót'],
  a:1,
  e:'NATO „Szigorúan titkos!” belföldi továbbításáról a NATO Központi Nyilvántartót, EU „Szigorúan titkos!”-ról az EU Központi Nyilvántartót kell írásban tájékoztatni.',
  src:'Tankönyv 10.4. • Szóbeli 20.' });

Q({ id:'tv11', t:'tovabb', type:'multi',
  q:'Ki továbbíthat minősített küldeményt KÜLFÖLDRE vagy külföldről (a NATO/EU „Korlátozott terjesztésű!” kivételével)?',
  o:['Diplomáciai és konzuli futár','Katonai futár','A nemzetközi jog alapján velük azonos kiváltságokat élvező, ill. nemzetközi szerződésben meghatározott személy','Állami Futárszolgálat','Nemzetközi gyorsposta'],
  a:[0,1,2],
  e:'Külföldre: diplomáciai/konzuli futár, katonai futár, azonos kiváltságú személy. NATO/EU „Korlátozott terjesztésű!”-t személyes kézbesítő is viheti. Külföldi hozzáférhetővé tételt a minősítő, a felülbírálatra jogosult minősítő vagy törvényben felhatalmazott személy engedélyezhet.',
  src:'Tankönyv 10.5., gyakorlati diasor • Szóbeli 20.' });

Q({ id:'tv12', t:'tovabb', type:'match', ch:true,
  q:'Diplomáciai küldemények jelölése (Külügyminisztérium): párosítsd!',
  pairs:[
    ['„MINŐSÍTETT I.”','„Szigorúan titkos!”, „Titkos!”, „Bizalmas!” – öt pecsét, minimum két diplomáciai futár'],
    ['„MINŐSÍTETT II.”','„Korlátozott terjesztésű!” és nem minősített hivatalos irat – egy pecsét, egy diplomáciai futár']
  ],
  e:'MINŐSÍTETT I.: 5 pecsét, legalább 2 fő (legalább egy diplomata + egy szolgálati útleveles felnőtt). MINŐSÍTETT II.: 1 pecsét. A diplomáciai futár a Külügyminisztérium (2026-tól nem „Külgazdasági és Külügyminisztérium”) állományába tartozik.',
  src:'Tankönyv 10.5.1. + változások • Szóbeli 20.' });

Q({ id:'tv13', t:'tovabb', type:'mc',
  q:'Hány példányban készül a diplomáciai futárjegyzék (Külügyminisztérium)?',
  o:['1','2','3','4'],
  a:2,
  e:'3 példányban: az eredeti és egy másolat a minősített adattal együtt megy a címzetthez; az eredetit a címzett aláírva visszaküldi, a 3. példányt ekkor megsemmisítik. A diplomáciai küldeményhez konszignációt is kell készíteni (2 példány a küldeményben).',
  src:'Tankönyv 10.5.1. • Szóbeli 20.' });

Q({ id:'tv14', t:'tovabb', type:'tf',
  q:'Az állami futár egy rendőri igazoltatás során a lezárt futárküldemény felbontására kötelezhető.',
  a:false,
  e:'Hamis. A lezárt futárküldemények az intézkedés során nem bonthatók fel. Az állami futárt csak a személyazonossága megállapításáig lehet feltartóztatni (elfogás/előállítás esetét kivéve).',
  src:'Tankönyv 10.1. • Szóbeli 20.' });

/* ============================ IRATTÁROZÁS, MEGSEMMISÍTÉS ============================ */
Q({ id:'ir1', t:'irattar', type:'tf',
  q:'A saját készítésű minősített adat eredeti (minősítői) irattári példánya főszabályként a minősítés megszűnése vagy megszüntetése előtt nem selejtezhető és nem semmisíthető meg.',
  a:true,
  e:'Igaz. Akár 90 évig is meg kell őrizni, hogy a minősítő dönteni tudjon (felülvizsgálat, nyilvánosságra hozatal, titoktartás alóli felmentés). Kivétel pl. a Rendőrségi törvény és az Nbtv. egyes titkos információgyűjtési esetei, ahol haladéktalanul meg kell semmisíteni.',
  src:'Tankönyv 12.3. • Szóbeli 21.' });

Q({ id:'ir2', t:'irattar', type:'mc',
  q:'Ki engedélyezheti a többes (címzetti) példányok megsemmisítését?',
  o:['A titkos ügykezelő','A minősített adatot kezelő szerv vezetője, vagy felhatalmazása alapján a biztonsági vezető','Az NBF','A levéltár'],
  a:1,
  e:'Az ügyviteli érdeket nem képviselő többes példánysorszámú példányok a szerv vezetője (vagy felhatalmazásával a biztonsági vezető) jóváhagyásával semmisíthetők meg.',
  src:'Tankönyv 12.4. • Szóbeli 21. • Gyak. 5.' });

Q({ id:'ir3', t:'irattar', type:'num',
  q:'Legalább hány tagú bizottság hajtja végre a megsemmisítést?',
  a:3, unit:'fő',
  e:'Legalább háromtagú bizottság: a titkos ügykezelő + a biztonsági vezető által kijelölt, a megsemmisítendő adatra érvényes SZBT-vel és titoktartási nyilatkozattal rendelkező tagok a szerv állományából. Törlést (elektronikus adat) egy, a BV által kijelölt személy is végezhet.',
  src:'Tankönyv 12.4. • Szóbeli 21. • Gyak. 5.' });

Q({ id:'ir4', t:'irattar', type:'multi',
  q:'GYAKORLAT (5. tétel): Mit kell tartalmaznia a megsemmisítési jegyzőkönyvnek?',
  o:['A megsemmisítendő adathordozók azonosító adatai (iktatószám, minősítési szint, terjedelem, példánysorszám)','A megsemmisítést engedélyező vezető aláírása','A megsemmisítés ténye, módja, dátuma','A jelenlévők (bizottsági tagok) aláírása','A szerv bélyegzőlenyomata','Az iratok teljes szövege'],
  a:[0,1,2,3,4],
  e:'A jegyzőkönyv 1 példányban készül, és NEM selejtezhető (a törlési jegyzőkönyv sem). A megsemmisítés időpontját és a jegyzőkönyv iktatószámát az iktatókönyvben rögzíteni kell.',
  src:'Tankönyv 12.4., 12. ábra • Szóbeli 21. • Gyak. 5.' });

Q({ id:'ir5', t:'irattar', type:'order',
  q:'GYAKORLAT (5. tétel): Állítsd sorrendbe a megsemmisítési eljárást!',
  o:['Megsemmisítési jegyzőkönyv elkészítése (iktatva), a tételek felsorolása','A jegyzőkönyv lezárása (TÜK aláírása)','A megsemmisítés engedélyezése (szerv vezetője)','Megsemmisítés a bizottság jelenlétében, a tény igazolása aláírásokkal','A megsemmisítés tényének és a jegyzőkönyv iktatószámának rögzítése az iktatókönyvben'],
  e:'A tankönyvi mintában: a jegyzőkönyv 2020. 02. 11-től 07. 02-ig gyűjti a tételeket, 07. 02-án lezárva (TÜK), 07. 03-án engedélyezve (szerv vezetője), 07. 04-én megsemmisítve (bizottság). Végül a kezelési bejegyzés rovatba: megsemmisítés dátuma + jegyzőkönyv iktatószáma.',
  src:'Tankönyv 12.4., 12. ábra • Gyak. 5.' });

Q({ id:'ir6', t:'irattar', type:'mc',
  q:'Hány példányban készül a megsemmisítési jegyzőkönyv?',
  o:['1','2','3','Ahány bizottsági tag van'],
  a:0,
  e:'Egy példányban, és nem selejtezhető. (A legtöbb többi jegyzőkönyv – pl. sérült küldemény, téves felbontás, hiány – 2 példányban készül, ezért ez gyakori csapda!)',
  src:'Tankönyv 12.4. • Szóbeli 21. • Gyak. 5.' });

Q({ id:'ir7', t:'irattar', type:'tf',
  q:'A megsemmisítést úgy kell végrehajtani, hogy a megsemmisített adathordozó tartalmát utólag ne lehessen megállapítani.',
  a:true,
  e:'Igaz. Ugyanez a törlésre: a törölt elektronikus adat tartalma ne legyen helyreállítható.',
  src:'Tankönyv 12.4. • Szóbeli 21.' });

Q({ id:'ir8', t:'irattar', type:'mc',
  q:'Ki rendelkezik a minősített irat készítése során feleslegessé vált, nem kiadmányozott papíralapú munkapéldányok megsemmisítéséről?',
  o:['Az NBF rendelete részletesen szabályozza','A szerv vezetője saját hatáskörben, a biztonsági szabályzatban','A titkos ügykezelő dönt','A levéltár'],
  a:1,
  e:'Az NBF kormányrendelet nem ad eljárásrendet, a szerv vezetője a biztonsági szabályzatban rendelkezik (pl. többes példányra előírt eljárás, vagy a készítő maga semmisíti meg). Elektronikus munkapéldányoknál a 12.4. pont szerinti törlési szabályok irányadók.',
  src:'Tankönyv 12.5. • Szóbeli 21.' });

Q({ id:'ir9', t:'irattar', type:'mc',
  q:'Ki határozza meg az irattári tételszámot?',
  o:['A titkos ügykezelő','Az érdemi ügyintéző, a hatályos irattári terv alapján (legkésőbb az ügy lezárásával egyidejűleg)','A levéltár','Az NBF'],
  a:1,
  e:'Az ügyintéző határozza meg (több iratból álló ügyiratnál mindig a leghosszabb megőrzési idejű tételszámot). Irattárba helyezni a szervezeti egység vezetője vagy kijelölt ügyintéző engedélyével lehet („a/a” jelzés). Az irattárba helyezés kelte az iktatókönyvbe kerül.',
  src:'Tankönyv 12.1., 12.3. • Szóbeli 21.' });

Q({ id:'ir10', t:'irattar', type:'mc',
  q:'Mi a különbség a selejtezés és a megsemmisítés között?',
  o:['Nincs különbség','A selejtezés a Levéltári törvény szerinti eljárás az irattári terv szerinti őrzési idő lejárta után (levéltári engedéllyel); a megsemmisítés a minősített adat ügyviteli érdeket nem képviselő többes példányainak NBF-rendelet szerinti fizikai használhatatlanná tétele','A megsemmisítés csak elektronikus adatra vonatkozik','A selejtezést az NBF végzi'],
  a:1,
  e:'A minősítői irattári példány csak a minősítés megszűnése/megszüntetése után, selejtezési eljárásban, közlevéltári engedéllyel selejtezhető. A többes példányok viszont a minősítés fennállása alatt is megsemmisíthetők megsemmisítési eljárásban.',
  src:'Tankönyv 8.2., 12.2–12.4. • Szóbeli 21.' });

Q({ id:'ir11', t:'irattar', type:'num',
  q:'A nem selejtezhető köziratokat főszabályként a keletkezés naptári évétől számított hányadik év végéig kell átadni az illetékes közlevéltárnak?',
  a:15, unit:'. év',
  e:'A 15. év végéig (teljes és lezárt évfolyamokat).',
  src:'Tankönyv 12.1. • Szóbeli 21.' });

/* ======================================================================
   TÉTELVÁZLATOK – szóbeli és gyakorlati tételek („Húzz egy tételt!” mód)
   ====================================================================== */
TUK.tetelek = [
 { n:1, kind:'szobeli', t:'alap', q:'Ismertesse a minősített adat védelmének alapelveit!',
   v:['Mavtv. (2009. évi CLV. tv.) célja: a készítés, felülvizsgálat, felülbírálat, felhasználás, védelem (személyi, fizikai, adminisztratív, elektronikus) szabályai + iparbiztonsági ellenőrzés + NBF feladatai.',
      'Szükségesség és arányosság: csak törvényi feltételekkel, a szükséges szinten, a feltétlenül indokolt ideig; csak minden feltétel együttes fennállásakor; a szint és az idő arányos a lehetséges kárral.',
      'Szükséges ismeret: csak az ismerheti meg, akinek a feladatához feltétlenül szükséges (SZBT + nyilatkozat önmagában nem elég; pl. címzett vagy rászignálták).',
      'Bizalmasság: illetéktelen számára nem válhat hozzáférhetővé → személyi, fizikai, adminisztratív, elektronikus intézkedések.',
      'Sérthetetlenség: csak a jogosult módosíthatja/semmisítheti meg (módosítás főszabályként csak a minősítő).',
      'Rendelkezésre állás: a jogosult számára szükség szerint elérhető; Btk. 265. §: hozzáférhetetlenné tétel is visszaélés.',
      'Az elveket a teljes életciklus alatt alkalmazni kell; szabálysértés: jogszabályellenes készítés, sokszorosítás, minősítés, nyilvántartás, kezelés, őrzés; ill. a minősítés, jelölés-megismétlés, felülvizsgálat elmulasztása.'] },
 { n:2, kind:'szobeli', t:'alap', q:'Ismertesse a minősített adat fajtáit, valamint a minősített adatot kezelő szerv és az érvényességi idő fogalmát!',
   v:['Nemzeti minősített adat: védhető közérdek körébe tartozó, szabályos jelöléssel ellátott adat, amelyről a minősítő megállapította, hogy jogosulatlan kezelése közvetlenül sérti/veszélyezteti a közérdeket, és ezért korlátozza nyilvánosságát.',
      'Külföldi minősített adat: (a) EU-intézmények, külföldi részes fél, nemzetközi szervezet által készített, kihirdetett nemzetközi szerződés alapján átadott, minősítéssel korlátozott adat; (b) Magyar Honvédség nemzetközi műveletei, gyakorlatai során keletkezett/felhasznált, a felek által minősített adat (megállapodástól függetlenül).',
      'Minősített adatot kezelő szerv: az a szerv / gazdálkodó szervezet, amely minősített adatot kezel (a „Bizalmas!”-tól NBF-adatkezelési engedély alapján). A tankönyv külön definíciót nem ad – ezt a kezelő szerv vezetőjének felelőssége, a BV és a TÜK szerepe felől érdemes kifejteni.',
      'Érvényességi idő: év, hó, nap (szükség esetén óra, perc) szerint feltüntetett IDŐPONT, ameddig a minősítő korlátozza a nyilvánosságot. Maximum: ST/T 30 év, B 20 év, KT 10 év.',
      'Minősítési jelölés: szint + érvényességi idő + minősítő neve + beosztása.',
      'Nem minősített adat: „Nem nyilvános!”, banktitok, orvosi, ügyvédi, üzleti titok.'] },
 { n:3, kind:'szobeli', t:'minosito', q:'Ismertesse a minősítési eljárás szabályait és nevezzen meg legalább öt minősítőt!',
   v:['Feltételek (együtt!): védhető közérdek körébe tartozik; jogosulatlan kezelése károsítja; meghatározott ideig korlátozni kell. Lépések: közérdek → kár (szint) → érvényességi idő.',
      'Kezdeményezés: akinél az adat keletkezik → minősítési javaslat (közérdek, szint, érvényességi idő, indokolás) → haladéktalan felterjesztés.',
      'Minősítő: 30 napon belül dönt, saját kezű aláírás + bélyegző (elektronikusnál legalább fokozott biztonságú e-aláírás); ha nem dönt, nem jön létre minősített adat. Addig a javasolt szint szerint kell kezelni. Javaslat és döntés nem tartalmazhat minősített adatot.',
      'Ha az adat a minősítőnél keletkezik: maga foglalja írásba indokolással.',
      'Minősítők (24): pl. köztársasági elnök, Országgyűlés elnöke, Kúria elnöke, legfőbb ügyész, MNB elnöke, Kormány tagja, NBF vezetője, külképviselet vezetője, 2026-tól az NVVH elnöke (24. pont).',
      '2026-os változások: TEK és Országgyűlési Őrség 2026. 09. 30-ig, 10. 01-jével beolvadtak az általános rendőrségi szervbe; Szuverenitásvédelmi Hivatal 2026. 07. 15-ével megszűnt; új minisztériumi lista (2026. évi XIII. tv.).',
      'Átruházás írásban: ST → helyettes (Kormány tagja: közig. államtitkár, államtitkár, helyettes államtitkár); T, B, KT → vezetői megbízású/beosztású személy. Speciális: miniszterek, rendvédelmi vezetők stb. belső szabályzatban felülvizsgálati szakértőre is.'] },
 { n:4, kind:'szobeli', t:'szint', q:'Ismertesse a minősítéssel védhető közérdekeket, a minősítési szinteket és a hozzájuk tartozó érvényességi időket!',
   v:['Közérdekek: szuverenitás, területi integritás; alkotmányos rend; honvédelmi, nemzetbiztonsági, bűnüldözési, bűnmegelőzési tevékenység; igazságszolgáltatási, központi pénzügyi, gazdasági tevékenység; külügyi, nemzetközi kapcsolatok; állami szervek zavartalan, külső befolyástól mentes működése.',
      'Kárközpontú rendszer – minél nagyobb kár, annál magasabb szint.',
      '„Szigorúan titkos!” – rendkívül súlyos kár (pl. nagyszámú emberi élet közvetlen veszélyeztetése) – max. 30 év.',
      '„Titkos!” – súlyos kár (pl. közvetlen életveszély) – max. 30 év.',
      '„Bizalmas!” – kár (pl. az állam érdekérvényesítő képességét hátráltatja) – max. 20 év.',
      '„Korlátozott terjesztésű!” – hátrányosan érinti (pl. érettségi tételek) – max. 10 év.'] },
 { n:5, kind:'szobeli', t:'szint', q:'Ismertesse minősítési szintenként az érvényességi idő meghosszabbítására, valamint a minősítési jelölés megismétlésére vonatkozó előírásokat!',
   v:['Hosszabbítás csak új minősítési eljárással, az eredeti idő LETELTE ELŐTT; lejárat után az adat nyílt, újra nem minősíthető.',
      'ST, T: rendkívül indokolt esetben 1 × max. 30 év (Σ60); magánszemély jogos érdekével összefüggő honvédelmi, nemzetbiztonsági, bűnüldözési, igazságszolgáltatási érdeknél 2 × 30 év (Σ90).',
      'B: 1 × 5 év (Σ25) / 2 × 20 év (Σ60). KT: 1 × 5 év (Σ15) / 2 × 20 év (Σ50).',
      'Épület, építmény: többször, alkalmanként max. 10 év, a használat idejére.',
      'Jelölés megismétlése: ha korábbi minősített adatot foglalunk bele, és nem keletkezik új minősítendő adat – nincs új eljárás, az eredeti szint, érvényességi idő, minősítő neve, beosztása + keletkeztető szerv neve + iktatószáma kerül fel. A minősítő megtilthatja. Ha új minősítendő adat is keletkezik → arra külön eljárás.',
      'Több megismételt jelölés: mindegyiket az adatnál; az első oldal tetején a legmagasabb szint és leghosszabb idő.'] },
 { n:6, kind:'szobeli', t:'felh', q:'Értelmezze a minősített adat megismerésének fogalmát, ismertesse, hogy ki kaphat megismerési engedélyt!',
   v:['Megismerés: bárki megismerheti a minősített adatban szereplő SAJÁT személyes adatát.',
      'Megismerési engedély: a minősítő írásbeli felhatalmazása (személyazonosító adatokkal, a jogosultságok megjelölésével); SZBT nem kell, de előtte írásbeli titoktartási nyilatkozat kell.',
      'Döntés 15 napon belül; megtagadás, ha közérdek sérelméhez vezetne – indokolni kell.',
      'Jogorvoslat: közigazgatási per, kizárólag a Fővárosi Törvényszék, zárt tárgyalás, csak nemzetbiztonsági ellenőrzésen átesett bíró; a felperes és képviselője nem ismerheti meg az adatot; ha helyt ad, kötelezi a minősítőt.',
      'Kapcsolódó: felhasználás vs. megismerés; kivételek SZBT/nyilatkozat alól (köztársasági elnök, miniszterelnök, AB tagjai, … ÁSZ elnöke, NVVH elnöke, elnökhelyettesei – 2026-tól; Szuverenitásvédelmi Hivatal törölve).',
      'Megismerési engedély kiadása a minősítő kizárólagos jogköre (Mavtv. 4. § (4)).'] },
 { n:7, kind:'szobeli', t:'felulv', q:'Ismertesse, hogy a minősített adat felülvizsgálatára mikor van szükség, mit kell vizsgálni, és mi a különbség a felülbírálat és a felülvizsgálat között!',
   v:['2026. 02. 20-ig: legkésőbb 5 évenként kötelező volt. 2026. 02. 21-től az 5 éves rendszeres kötelezettség MEGSZŰNT.',
      'Most (ha törvény nem ír elő határidőt): feltételek változásakor haladéktalanul; Infotv. 17. § szerinti saját adat hozzáférési igénynél 21 napon belül; közérdekű adatigénynél 21 napon belül (kivéve: 1 éven belül volt már, és nem változott semmi). ÁBTL-törvény alá eső iratok: továbbra is legalább ötévente.',
      'Mit vizsgál: történt-e változás a minősítésre okot adó körülményekben.',
      'Eredmény: fenntartás / szintcsökkentés / érvényességi idő módosítása / megszüntetés. Emelés NINCS. A címzetteket értesíteni kell.',
      'Szakértő: SZBT + (titokszakértő a névjegyzékben VAGY felsőfok + 3 év tapasztalat).',
      'Felülbírálat: a 4. § (1) szerinti minősítő bírálja felül az általa jogkörrel felruházott (ill. irányítása alá tartozó) minősítő döntését (pl. legfőbb ügyész → ügyészség vezetője; miniszterelnök → politikai igazgató, nemzetbiztonsági főtanácsadó, miniszterelnöki biztos, kormánybiztos; Kormány tagja → kormányzati főhivatal vezetője). Eredménye: megszüntetés, szint vagy érvényességi idő módosítása; a minősítési eljárás szabályai szerint.'] },
 { n:8, kind:'szobeli', t:'felh', q:'Ismertesse a személyi biztonsági tanúsítvány kiadására vonatkozó általános szabályokat, valamint a titoktartási nyilatkozattal kapcsolatos feladatokat!',
   v:['SZBT: meghatározza a felhasználható legmagasabb szintet; feltétele a nemzetbiztonsági ellenőrzés („Bizalmas!”-tól) + szerepelni kell az Nbtv. 69. § (7) szerinti (keretszám-)nyilvántartásban; érvényes a szakvélemény kiállításától 5 évig.',
      'Kiadja: nemzeti adatra az állami szerv BV-je (közreműködőnek is); külföldi adatra az NBF (BV kezdeményezi űrlap + szakvélemény-másolat + keretszám-igazolás); gazdálkodó szervezetnél nemzetire is az NBF.',
      'Tartalma: kiadó szerv, személyazonosító adatok, nyilvántartási szám, kelte, érvényesség, legmagasabb szint, kiadó vezető aláírása.',
      'Visszavonás: kockázati tényező, nincs a nyilvántartásban, megszűnik a jogviszony, nincs már rá szükség; utána a nemzetit selejtezni kell.',
      'Titoktartási nyilatkozat: a szabályok megismerése és a titoktartási kötelezettség tudomásulvétele; „Korlátozott terjesztésű!”-höz csak ez kell. BV felel érte, kezeli, tárolja; jogosultság megszűnése után 8 évig fellelhető, majd jegyzőkönyvvel megsemmisítendő. Nemzeti + külföldi adatra elég egy.',
      'Felhasználói engedély 2024. 03. 01. óta nincs.'] },
 { n:9, kind:'szobeli', t:'terulet', q:'Ismertesse, milyen helyszín minősül I. és II. osztályú biztonsági területnek, valamint mi az adminisztratív zóna!',
   v:['„Bizalmas!”-tól főszabályként csak I. vagy II. osztályú biztonsági területen használható és tárolható.',
      'I. osztály: belépés = hozzáférés; fizikailag körülhatárolt, védett; beléptető rendszer; csak felhatalmazással + SZBT-vel; NYÍLT tárolás.',
      'II. osztály: belső intézkedésekkel akadályozható a hozzáférés; külön felhatalmazással léphet be, SZBT nélkül csak kísérettel; ZÁRT tárolás.',
      'Adminisztratív zóna: ellenőrzött belépésű helyszín; KT adat felhasználható és zárható irodabútorban tárolható.',
      'Kivételek: műveletekben személyes felügyelet alatt; nemzeti B+ és EU B/T papíralapú adat adminisztratív zónában is (munkaidőn túli birtokban tartás kivételével).',
      'Fizikai biztonság rétegei: külső (határ), közbenső (észlelés, riasztás), belső (késleltetés). Csak garantált minőségű eszköz.',
      'Adatkezelési engedély (NBF): „Bizalmas!”-tól; tartalmazza a legmagasabb szintet és a helyszínt; visszavonásig érvényes.'] },
 { n:10, kind:'szobeli', t:'szerv', q:'Ismertesse a minősített adat védelmét ellátó szervezeteket, személyeket és feladataikat!',
   v:['NBF: hatósági felügyelet, engedélyezés (adatkezelési, rendszer-), iparbiztonság (TBT), BV-kinevezés egyetértés, minősítési gyakorlat ellenőrzése, biztonság megsértésének kivizsgálása, jogutód nélküli szervek felülvizsgálata, rejtjelfelügyelet, NATO/EU kapcsolattartás, BV-képzés. A Nemzetbiztonsági Szakszolgálat keretében, nem utasítható; döntése ellen 15 napon belül per.',
      'Szerv vezetője: felel a védelmi feltételekért; kinevezi a BV-t; biztonsági szabályzat.',
      'Biztonsági vezető: felsőfok, 1 év gyakorlat vagy vizsga, SZBT, nyilatkozat, NBF-elnöki egyetértés; nem lehet megbízási szerződéssel, nem lehet egyúttal TÜK. Feladatai: helyi felügyelet; febr. 28. ellenőrzés + statisztika; márc. 5. külföldi → Központi Nyilvántartók; márc. 31. nemzeti → NBF; SZBT, nyilatkozatok; éves tájékoztatás; biztosítási terv; biztonság megsértése; tartalékkulcsok.',
      'Helyettes BV: NBF-egyetértés nem kell, de 5 napon belül tájékoztatni.',
      'Helyi biztonsági felügyelet: ha a mennyiség indokolja; a BV vezeti.',
      'Titkos ügykezelő, Nyilvántartó, Kezelőpont, NATO/EU Központi Nyilvántartó (lásd 11., 22. tétel).'] },
 { n:11, kind:'szobeli', t:'szerv', q:'Ismertesse a titkos ügykezelő foglalkoztatásának feltételeit és feladatait!',
   v:['Feltételek: legalább középfokú végzettség; megfelelő szintű SZBT; aláírt titoktartási nyilatkozat; sikeres TÜK-vizsga; írásbeli kinevezés a munkáltatói jogkört gyakorló vezetőtől. Megbízási szerződéssel nem.',
      'Feladatok (90/2010. Korm. r. 8. §): átvétel, felbontás; nyilvántartásba vétel, iktatás; szerven belüli átadás, visszavétel; felülvizsgálat eredményének rögzítése; visszavétel a jogosultság megszűnésekor; segédletek főnyilvántartásba vétele, megnyitása; továbbítás belföldre, külföldre; birtokban tartás, tárolás; megsemmisítés előkészítése és részvétel; titokfelügyeleti eljárás eredményének rögzítése.',
      'NEM jogszabályi feladat: sokszorosítás, fordítás, kivonatolás (csak írásbeli megbízással).',
      'Nemzeti és külföldi adat egyidejűleg, de elkülönítve kezelhető.',
      'A segédleteket pontosan, hitelesen, a felelősség megállapítására alkalmas módon vezeti.'] },
 { n:12, kind:'szobeli', t:'keszit', q:'Ismertesse a minősített adat készítésére és a minősítési jelölés megismétlésére vonatkozó előírásokat!',
   v:['Minősítési jelölés: első oldal jobb felső része (vagy kísérőlap / elválaszthatatlan e-állomány). Szint az első oldal alján középen, további oldalakon fent és lent középen.',
      'Alaki kellékek: készítő szerv, iktatószám; példányszám, példánysorszám; terjedelem; mellékletek (darab, sorszám, terjedelem, eltérő szint); kiadmányozás dátuma; eredeti irattári példányon kiadmányozó neve, aláírása, bélyegző.',
      'Címzettek: külön elosztó az irattári példányhoz csatolva (vagy az iraton).',
      'Eredeti irattári példányon: minősítési javaslat + döntés.',
      'Különleges kezelési utasítások: S. k. felbontásra, Más szervnek nem adható át, Nem sokszorosítható, Kivonat nem készíthető, Elolvasás után visszaküldendő, Zárt borítékban tárolandó, Különösen fontos – eltérés csak a minősítő írásbeli engedélyével.',
      'Külföldre szánt adat: szint magyarul + a szerződés szerinti nyelven.',
      'Jelölés megismétlése: lásd 5. tétel.'] },
 { n:13, kind:'szobeli', t:'szerv', q:'Ismertesse a biztonsági vezetői és titkos ügykezelői megbízatás megszűnése esetére vonatkozó eljárást, valamint az iktatókönyv év végi lezárására vonatkozó szabályokat!',
   v:['BV akadályoztatása/megszűnése: helyettes BV, ennek hiányában a szerv vezetője – jegyzőkönyv felvétele mellett – gondoskodik a feladatokról.',
      'TÜK megszűnése: jegyzőkönyvben átadja a feladatokat (teendők, okmányok, eszközök) az utódnak / helyettesítésre kijelöltnek; ezek hiányában a BV-nek, külképviselet-vezetőnek vagy az általuk kijelöltnek.',
      'TÜK igazolatlan távolmaradása: BV kéttagú bizottságot jelöl ki → teljes/részleges ellenőrzés → jegyzőkönyv.',
      'Minősítő, felhasználó, szerv vezetője jogviszony-megszűnés, munkakörváltás, ≥50 nap távollét: a nála lévő adatokat a TÜK útján átadja; ha nem lehet, a TÜK tételesen ellenőrzi, biztonságba helyezi, jegyzőkönyvez.',
      'Év végi lezárás: az év utolsó munkanapján, az utolsó főszám után aláhúzás, keltezés, aláírás, bélyegző; szoftvernél a további főszámra iktatás kizárása. Ha nem telt be: ugyanabban a könyvben folytatódik 1-es főszámmal; ha betelt: új könyv, főnyilvántartásba vétel.',
      'A főnyilvántartó könyvet év végén NEM zárjuk le!'] },
 { n:14, kind:'szobeli', t:'gazd', q:'Ismertesse a minősített adat közreműködőnek, illetve gazdálkodó szervezetnek történő átadására vonatkozó általános szabályokat!',
   v:['Gazdálkodó szervezet: iparbiztonsági ellenőrzés + feltételek → telephely biztonsági tanúsítvány (TBT). Ha a telephelyén nem kezel adatot: egyszerűsített TBT (csak személyi feltételek).',
      'TBT szintjei: ST, T, B; NATO T, B; EU T, B (NATO/EU ST nem). Kell: B+ minősített szerződés, B+ adatfelhasználás, védelmi/biztonsági beszerzés.',
      'Eljárás: (1) iparbiztonsági ellenőrzés – cégellenőrzés + személyek (ügyvezetés, cégvezető, >5% tag, részvényes, BV, TÜK, rendszerbiztonsági felügyelő, rendszeradminisztrátor stb.); (2) adatbiztonsági ellenőrzés – 15 napon belül dokumentumok az NBF-nek.',
      'TBT feltételei: kockázatmentes cégellenőrzés; ≥B adatkezelési + ≥KT rendszerengedély; megfelelő SZBT-k; saját, NBF-egyetértéssel kinevezett BV.',
      'B+ adat csak érvényes TBT-vel rendelkező szervezetnek adható át; KT adatot az átadó szerv vezetője engedélyezheti, ha meggyőződött a feltételekről; az átadó mindig megadja a visszajuttatás idejét. Projektbiztonsági utasítás + projektminősítési jegyzék.',
      'Közreműködő (természetes személy, pl. tolmács): BV előzetesen ellenőriz; ha csak a személyi feltételek vannak meg → csak a szervnél férhet hozzá; ha azok sem → semmilyen formában. Nemzeti SZBT-jét az őt igénybe vevő szerv BV-je adja ki.'] },
 { n:15, kind:'szobeli', t:'nyilv', q:'Ismertesse a főnyilvántartó könyvre és a minősített adat kezeléséhez szükséges iratkezelési segédletekre vonatkozó előírásokat!',
   v:['Nyilvántartás = főnyilvántartó könyv + segédletek (iktatókönyv; belső átadókönyv/átadó okmány; futárjegyzék-nyilvántartás). Forma nem kötött, rovatrendszer kötelező.',
      'Főnyilvántartó: az összes segédlet nyilvántartása, a rendszer kezdőpontja; hitelesíti a szerv vezetője (vagy felhatalmazással a BV); rovatai: megnevezés, terjedelem, használatba vétel, végleges lezárás, irattári tételszám, selejtezés; folyamatos sorszám, év végén nem zárjuk le, nem selejtezhető, megszűnéskor jogutódnak (ill. közlevéltár); több Nyilvántartó esetén ki kell jelölni, melyik vezeti.',
      'Segédletek: a TÜK nyitja meg, hitelesíti, főnyilvántartásba veszi (Fnyt. szám a segédleten). Adatfajtánként külön.',
      'Vezetés: pontosan, hitelesen; tilos ceruza, üres sorszám, összeragasztás, radír, hibajavító; javítás egy vonallal, olvashatóan, keltezéssel, aláírással; szoftvernél naplózás.',
      'Megőrzés: iktatókönyv és főnyilvántartó nem selejtezhető; belső átadókönyv, futárjegyzék-nyilvántartás lezárás után 8 év.',
      'Az adatkezelési engedély feltétele a hitelesen megnyitott főnyilvántartó + segédletek. Iratkezelési szoftver csak NBF-egyetértéssel.'] },
 { n:16, kind:'szobeli', t:'iktat', q:'Ismertesse a minősített adatok iktatására vonatkozó előírásokat!',
   v:['Minden érkezett/készített minősített adatot iktatni kell; érkezés/készítés napján, legkésőbb a következő munkanapon; sürgőset soron kívül.',
      'Évente megnyitott, hitelesített iktatókönyv; adatfajtánként külön; 1-es főszámmal kezdődik jan. 1-jén; év végi lezárás.',
      'Iktatószám: főszám-alszám/évszám (4 jegyű év), bővíthető (pl. 4/51-1/2014.). Egy irat = egy iktatószám, a melléklet nem kap külön.',
      'Főszámos-alszámos iktatás: új ügy új főszám; ugyanaz az ügy az alszámokon; tárgyévi előzmény → következő alszám; korábbi évi → tárgyévi iktatás + szerelés + kölcsönös hivatkozás (kivétel: egyes szervek egy főszámon is).',
      'Rovatok: iktatószám, érkezés ideje/módja, iktatás ideje, szint + érvényességi idő, küldő, hivatkozási szám, tárgy, forma + terjedelem, mellékletek, példánysorszám, továbbítás, irattárba helyezés, megsemmisítés/törlés + jegyzőkönyv száma, felülvizsgálat (ha változás), kezelési bejegyzés. Ügyintéző 2024. 07. 07. óta nem kötelező.',
      'Nyílt iktatókönyvben minősített adat iktatása tilos; minősített iktatókönyvben ugyanazon ügy nyílt iratai is mehetnek.',
      'Téves iktatás: áthúzás, olvasható marad; tévesen kiadott szám nem használható fel újra. Mutatózás: név- és tárgymutató (szoftvernél nem kell).'] },
 { n:17, kind:'szobeli', t:'atvet', q:'Ismertesse a más szervtől érkezett minősített adat átvételére, valamint a minősített küldemény felbontására vonatkozó előírásokat!',
   v:['Átveheti: címzett, TÜK, a szerv vezetője által írásban megbízott; NATO/EU KT-t a felhasználó is. Más átvevő (pl. porta) legkésőbb az első munkanap kezdetén belső átadókönyvvel adja át a Nyilvántartónak.',
      'Ellenőrzés: jogosultság a címzés alapján; futárjegyzék és csomagolás iktatószám + példánysorszám egyezése; sértetlenség, zártság.',
      'Igazolás a futárjegyzéken: dátum, óra, perc, olvasható név, aláírás, bélyegző.',
      'Sérült csomag: az átadó jelenlétében tartalomellenőrzés, 2 pld. jegyzőkönyv (mindketten aláírják), egy az átadónak, futárjegyzéken jelölni.',
      'Téves címzés: bontatlanul a címzetthez vagy vissza a feladónak; ha felbontották: 2 pld. jegyzőkönyv, lezárás, továbbítás.',
      'Felbontás: címzett és TÜK; „S. k. felbontásra!” csak a címzett (TÜK zártan iktatja, bontatlanul, dokumentáltan átadja; akadályoztatásról a biztonsági szabályzat rendelkezik).',
      'Felbontás után: azonosító adatok és terjedelem ellenőrzése; hiány esetén 2 pld. jegyzőkönyv, egy a küldőnek. Borítékot csak akkor csatolni, ha jogkövetkezménnyel bíró adat csak abból derül ki.',
      'Nyílt borítékban minősített irat: 2 pld. jegyzőkönyv → BV; irat → TÜK; B+ esetén a minősítő és az NBF értesítése.'] },
 { n:18, kind:'szobeli', t:'belso', q:'Ismertesse a minősített adat szerven belülre történő átadására és visszavételére vonatkozó előírásokat!',
   v:['Szignálás: a vezető írásban jelöli ki a felhasználót (dátum, aláírás, utasítások; öntapadós cetli tilos); csak titoktartási nyilatkozattal (B+ esetén SZBT-vel is) rendelkezőnek. Az ügyintéző a szignálással lesz jogosult felhasználó. Nincs automatikus/szignálás nélküli továbbítás.',
      'Átadás, visszavétel: csak a TÜK útján, belső átadókönyvben/átadó kartonon, saját kezű aláírással és dátummal, vagy iratkezelési szoftverrel (PKI/jelszó azonosítás).',
      'Kivételek: e-rendszeren belül a felhasználók között TÜK nélkül is; ügyeleti/őrszolgálat szolgálatátadáskor; szignálásra bemutatás a TÜK felügyelete alatt. Központi államigazgatási és honvédségi szerveknél azonnali döntést igénylő ügyekben eltérő szabályok a biztonsági szabályzatban.',
      'Rovatok: iktatószám, szint, példánysorszám, terjedelem, átadás dátuma, átvevő neve + aláírás + dátum, visszavétel dátuma, visszavevő neve + aláírás + dátum.',
      'Átadókönyvből tetszőleges számú nyitható; TÜK hitelesíti, főnyilvántartásba veszi; csak akkor zárható le, ha minden irat vissza van véve; lezárás után 8 évig őrizendő.',
      'Felhasználói jogosultság megszűnésekor: visszavétel, elszámoltatás, jegyzőkönyv.'] },
 { n:19, kind:'szobeli', t:'sokszor', q:'Ismertesse a sokszorosítás, fordítás, kivonatolás előírásait, valamint a biztonság megsértése esetén teendő intézkedéseket!',
   v:['Nem TÜK-jogszabályi feladat; csak írásbeli engedéllyel (az adathordozón vagy külön iraton).',
      'Engedélyezheti: a szerv vezetője vagy írásban megbízottja, a címzett, illetve a saját adatánál a minősítő. Kizárólag a minősítő: NATO/NYEU/EU ST, vagy ha különleges kezelési utasításban megtiltotta.',
      'Példányok: 1-től növekvő sokszorosított/fordított/kivonatolt példánysorszám, iktatás az eredeti iktatószámon (ha lezárt a könyv: tárgyévi következő szám + kezelési bejegyzés). Fordításon az eredeti szint is szerepel.',
      'Megsértés: felhasználó → BV haladéktalanul; NATO/EU adatnál a szerv vezetője → NBF; nemzeti ST/T/B illetéktelen hozzáférhetősége → minősítő + NBF, legkésőbb 10 napon belül.',
      'Tájékoztatás tartalma: azonosító adatok, körülmények, idő és hely, elsődleges okok, felelős személy (ha ismert), megtett intézkedések. BV: kárfelmérés, enyhítés, jogszerű állapot helyreállítása.',
      'Btk.: négy elkövetési magatartás, szintenként differenciált büntetés, „hivatalos” elkövetőnél szigorúbb + gondatlanság is. Szabálysértés: jogszabályellenes készítés, sokszorosítás, nyilvántartás, kezelés, őrzés – rendőrség jár el.',
      'Talált adat: a minősítőnek, ha nem azonosítható, az NBF-nek.'] },
 { n:20, kind:'szobeli', t:'tovabb', q:'Ismertesse a minősített adat szerven kívülre történő továbbítására vonatkozó előírásokat!',
   v:['Három alapszabály: posta/civil futár tilos; e-mail/internet tilos; csak a TÜK útján.',
      'Belföld: Állami Futárszolgálat; MH katonai futárszolgálat, katonai futár; rendvédelmi szervek belső futára; NAV belső futára; személyes kézbesítő (szerv állományából, megfelelő SZBT + nyilatkozat). Mindig futárjegyzékkel (külső kézbesítőkönyv 2024. 07. 07. óta nincs).',
      'Nemzeti boríték: címzés, feladó, iktatószám, példánysorszám, szint, „Baleset esetén vagy rendkívüli helyzetben a küldő szerv bonthatja fel!”, különleges kezelési utasítás, ÁFSZ-nél futárkódszám; lezárás + bélyegző a lezárás helyén.',
      'Futárjegyzék: listaszám, feladó, címzett, iktatószám + pld., darab, szint, küldemény címzettje, nyomtatás ideje, átadás ideje, átadó neve, aláírása, bélyegző; 2 eredeti pld. Futárjegyzék-nyilvántartás: eredeti szám, nyilvántartásba vétel ideje, készítő szerv, kezelési bejegyzés; 8 év után selejtezhető.',
      'Külföldi adat: dupla csomagolás; külső borítékon csak címzett szerv, célállomás, küldő szerv, futárjegyzék száma. NATO/EU ST belföldi továbbításáról a Központi Nyilvántartó írásbeli tájékoztatása.',
      'Külföldre: diplomáciai/konzuli futár, katonai futár, azonos kiváltságú személy (NATO/EU KT személyes kézbesítővel is). Engedély: minősítő, felülbírálatra jogosult vagy törvényben felhatalmazott. Diplomáciai: MINŐSÍTETT I. (ST/T/B, 5 pecsét, 2 futár) / II. (KT + nyílt, 1 pecsét); futárjegyzék 3 pld.; konszignáció. Külügyminisztérium (2026).',
      'Továbbítás után rögzítés az iktatókönyvben.'] },
 { n:21, kind:'szobeli', t:'irattar', q:'Ismertesse a minősített adatot tartalmazó adathordozó irattározására és megsemmisítésére vonatkozó előírásokat!',
   v:['Irattározás dokumentáltan, visszakereshetően; irattári tételszámot az ügyintéző adja (legkésőbb az ügy lezárásakor; több irat → leghosszabb megőrzési idejű tétel); irattárba helyezés kelte az iktatókönyvbe.',
      'Minősítői (eredeti irattári) példány: a minősítés megszűnése/megszüntetése előtt nem selejtezhető, nem semmisíthető meg (elektronikus nem törölhető) – akár 90 évig. Kivétel: Rtv., Nbtv. egyes esetei. Utána csak selejtezési eljárásban, közlevéltári engedéllyel.',
      'Többes (címzetti) példány: ügyviteli érdek hiányában a szerv vezetője (vagy felhatalmazással a BV) jóváhagyásával megsemmisíthető.',
      'Bizottság: legalább 3 tag (TÜK + BV által kijelöltek, megfelelő SZBT + nyilatkozat). Törlést egy kijelölt személy is végezhet.',
      'Megsemmisítési jegyzőkönyv: iktatószám, szint, terjedelem, példánysorszám, engedélyező aláírása, megsemmisítés ténye, módja, dátuma, jelenlévők aláírása, bélyegző; 1 pld., nem selejtezhető. Iktatókönyvbe: időpont + jegyzőkönyv iktatószáma. Tartalom utólag ne legyen megállapítható.',
      'Munkapéldányok: a szerv vezetője a biztonsági szabályzatban rendelkezik; elektronikusnál a törlési szabályok.'] },
 { n:22, kind:'szobeli', t:'nyilv', q:'Ismertesse a Nyilvántartóra, a Kezelőpontra, a NATO és az EU Központi Nyilvántartóra vonatkozó rendelkezéseket!',
   v:['Nyilvántartó: a szerv szervezeti egysége (rendszerint nem önálló főosztály), az érkező/keletkező adatok nyilvántartása; kötelező legalább egy; a BV szakmai (nem szervezeti) alárendeltségében; legalább 1 fő írásban kinevezett TÜK (helyettes kijelölése ajánlott); minden nyilvántartási cselekményre jogosult.',
      'Kezelőpont: nem kötelező; csak a Nyilvántartó alárendeltségében, ellenőrzése alatt; 1 fő TÜK; feladatairól a szerv vezetője dönt a biztonsági szabályzatban (részben vagy teljesen azonos lehet; tipikusan vezetői titkárság).',
      'Szervezés: központi, osztott vagy vegyes; több Nyilvántartó/Kezelőpont is lehet. Nemzeti és külföldi adat egy Nyilvántartóban, fizikailag és adminisztratív módon elkülönítve (külön tároló vagy polc, külön segédletek); a tárolón a legmagasabb szint.',
      'NATO Központi Nyilvántartó: a Magyar Honvédségnél (a honvédelemért felelős miniszter által kijelölt honvédségi szervezet); a NATO adatok országos fogadása, elosztása, kezelése; kimutatás a NATO Nyilvántartókról, Kezelőpontokról és minden NATO ST adatról.',
      'EU Központi Nyilvántartó: a Külügyminisztériumban (2026-os változás: korábban Külgazdasági és Külügyminisztérium); ugyanez az EU adatokra.',
      'Nemzeti adatra nincs Központi Nyilvántartó. A NYEU 2010-ben megszűnt.'] },

 // ---------------- GYAKORLATI TÉTELEK ----------------
 { n:1, kind:'gyak', t:'atvet', q:'Vegye át, majd iktassa az érkezett nemzeti minősített iratot!',
   v:['Futárjegyzéken ellenőrzés: jogosultság, iktatószám + példánysorszám egyezik a borítékkal, sértetlen.','Átvétel igazolása a futárjegyzék MINDKÉT példányán: dátum, óra:perc, olvasható név, aláírás, bélyegző.','Felbontás, a terjedelem és a mellékletek ellenőrzése.','Előzmény keresése.','Iktatókönyv bal oldal: sorszám/főszám, érkezés ideje + módja (pl. ÁFSZ), iktatás ideje, szint + érvényességi idő („T” 2039.12.31.), küldő (HM), hivatkozási szám (HM/1/12/2026.), példánysorszám, terjedelem, mellékletek (db, forma, terjedelem, szint, pl. „1 lap nyílt”).','Jobb oldal: tárgy.','Iktatóbélyegző az iraton: szerv neve, dátum, iktatószám (pl. 1/1/2026.), mellékletek; a futárjegyzéken is feltüntethető az iktatószám.'] },
 { n:2, kind:'gyak', t:'atvet', q:'Vegye át, majd iktassa az érkezett NATO minősített iratot!',
   v:['Mint az 1. tétel, de: dupla csomagolás (külső borítékon nincs minősítésre utaló adat; belső borítékon iktatószám, szint, példánysorszám, címzett).','A NATO iktatókönyvben iktatandó (adatfajtánként külön iktatókönyv!), NATO szintjelöléssel (pl. NS = NATO SECRET).','A küldő a NATO Központi Nyilvántartó / NATO Nyilvántartó, a hivatkozási szám a NATO azonosító (pl. AC/322…).'] },
 { n:3, kind:'gyak', t:'atvet', q:'Vegye át, majd iktassa az érkezett EU minősített iratot!',
   v:['Mint a NATO irat: dupla csomagolás, külön EU iktatókönyv, EU szintjelölés.','Küldő jellemzően az EU Központi Nyilvántartó (Külügyminisztérium).','Az átvétel igazolása ugyanúgy a futárjegyzéken.'] },
 { n:4, kind:'gyak', t:'sokszor', q:'Vegye iktatásba a nemzeti minősített irat sokszorosított példányát!',
   v:['Ellenőrizd az írásbeli engedélyt (pl. „Javaslom… 1 példányban sokszorosítani” – „Engedélyezem.” dátum, aláírás).','A sokszorosított példány 1-től növekvő sorszámot kap: „1. sz. soksz. pld.”.','Iktatás az EREDETI iktatószámon (új sorként/bejegyzésként ugyanazon a számon), példánysorszám: 1. s. (soksz.).','Ha az eredeti iktatókönyve már le van zárva: tárgyévi következő iktatószám + az eredetinél kezelési bejegyzés.'] },
 { n:5, kind:'gyak', t:'irattar', q:'Hajtsa végre a megsemmisítési eljárást!',
   v:['Megsemmisítési jegyzőkönyv (iktatva, pl. 2/123/2020.): sorszám, iktatószám, szint, példánysorszám, terjedelem, megjegyzés.','Lezárás: „Lezárva: dátum” + TÜK aláírása.','Engedélyezés: „Az 1–5. sorszámon felsorolt adathordozók megsemmisítését engedélyezem.” – dátum, szerv vezetője.','Igazolás: „…a mai napon … iratmegsemmisítő berendezéssel megsemmisítettük.” – dátum, legalább 3 tag aláírása (TÜK + 2 bizottsági tag).','Készült: 1 példányban, Kapja: Irattár, P. H.','Iktatókönyvben (kezelési bejegyzés/megsemmisítés rovat): a megsemmisítés dátuma + a jegyzőkönyv iktatószáma.'] },
 { n:6, kind:'gyak', t:'belso', q:'Vegye iktatásba az érkezett nemzeti minősített iratot, majd tüntesse fel a vezetői szignálást!',
   v:['Iktatás az 1. tétel szerint.','Bemutatás szignálásra (ha a TÜK felügyelete alatt marad, nem kell átadókönyv).','A vezető az iraton: „Ügyintézésért felelős: Minta Zoltán úr (szervezeti egység)”, esetleges utasítás, dátum, aláírás.','Öntapadós cetlire tilos!'] },
 { n:7, kind:'gyak', t:'belso', q:'Adja át a nemzeti minősített iratot a kijelölt ügyintézőnek és az iktatókönyvben jelezze az átadás tényét!',
   v:['Belső átadókönyv: sorszám, iktatószám, szint, példánysorszám, terjedelem (pl. „3 lap + 1 lap nyílt”), átvevő neve, saját kezű aláírása, dátum.','Iktatókönyv: a kezelési bejegyzés rovatban az átadás jelzése (kinek, mikor).'] },
 { n:8, kind:'gyak', t:'belso', q:'Adja át a kijelölt ügyintézőnek a nemzeti minősített iratot, majd vegye vissza!',
   v:['Átadás: lásd 7. tétel.','Visszavétel: a hiánytalanság ellenőrzése (lapszám, mellékletek).','A belső átadókönyv visszavétel rovata: visszavétel dátuma, a visszavevő (TÜK) neve, saját kezű aláírása.'] },
 { n:9, kind:'gyak', t:'tovabb', q:'Tüntesse fel a megfelelő adatokat a futárral továbbított nemzeti minősített iratot tartalmazó borítékon és zárja le szabályosan!',
   v:['Bal felül: feladó szerv (pl. MINTA HIVATAL), iktatószám (1/1/2026.), példánysorszám (1. sz. soksz. pld.).','Jobb felül: minősítési szint („Titkos!”).','Futár kódszám (ÁFSZ esetén).','Címzett (pl. Nemzeti Biztonsági Felügyelet, Budapest).','„Baleset esetén vagy rendkívüli helyzetben a küldő szerv bonthatja fel!”','Különleges kezelési utasítás, ha van.','Lezárás: úgy, hogy a felbontás észlelhető legyen; a lezárás helyén hivatalos bélyegző.'] },
 { n:10, kind:'gyak', t:'tovabb', q:'Töltse ki a futárjegyzéket a továbbításra kerülő nemzeti minősített irathoz!',
   v:['Feladó: saját szerv; Címzett: Állami Futárszolgálat Központi Levélrendező Alosztály; listaszám; oldalszám; pld. szám (2 eredeti).','Sorok: sorszám, iktatószám + példánysorszám, szint, darab, küldemény címzettje.','Összesítő: minősített/nyilvántartott/sima db.','Nyomtatás dátuma, időpontja.','Átadás dátuma, óra:perc, átadó (TÜK) neve, aláírása, bélyegző.','A futárjegyzéket a futárjegyzék-nyilvántartásban rögzíteni.'] },
 { n:11, kind:'gyak', t:'tovabb', q:'Vezesse ki az iktatókönyvből a továbbításra került nemzeti minősített iratot!',
   v:['Iktatókönyv „Továbbított irat” rovatai: továbbítás időpontja, módja (pl. ÁFSZ Fj. 282.), címzett (NBF), példánysorszám (1. s.), terjedelem (3+1 lap).'] },
 { n:12, kind:'gyak', t:'iktat', q:'Hajtsa végre az iktatókönyvben a szabályos javításokat, képezzen iktatószámot és tüntesse fel az iraton!',
   v:['Hibás adat: egy vonallal áthúzni, olvasható maradjon; helyes adat mellé; keltezés + kézjegy.','Tilos: radír, hibajavító, ceruza, üres sor, összeragasztás.','Iktatószám: [Fnyt.]/főszám-alszám/évszám, pl. 1/1/2026.; feltüntetés az iraton iktatóbélyegzővel.','Tévesen kiadott szám nem használható újra.'] },
 { n:13, kind:'gyak', t:'tovabb', q:'Készítsen elosztót, vegye iktatásba, majd vezesse ki a továbbításra kerülő iratot!',
   v:['Iraton: „Készült: 20 példányban … Kapják: 1. sz. pld. Irattár; 2–20. sz. pld. 1/3-1/2026. ikt. számú elosztó szerint”.','Elosztó: „Elosztó az 1/3/2026. ikt. számú irathoz” – címzettek és a nekik küldött példánysorszámok; az irattári példányhoz csatolva.','Elosztó iktatása az irat főszámának alszámán: 1/3-1/2026.','Kivezetés: 19 db (2–20. pld.), címzett „elosztó szerint”, dátum, mód (ÁFSZ Fj. szám).'] },
 { n:14, kind:'gyak', t:'felulv', q:'Jelölje a felülvizsgálat eredményét (minősítés megszüntetése, a jogutód átiratban tájékoztatott)!',
   v:['Az iraton a minősítési szint áthúzása MINDEN oldalon.','„Törölve!” + a minősítő (jogutód) neve, beosztása (Minta Gergő vezérőrnagy, főosztályvezető) + a döntést tartalmazó átirat iktatószáma (52/547/2022.) + a felülvizsgálat dátuma (2022. január 4.) + a TÜK saját aláírása.','Iktatókönyv felülvizsgálat rovata: dátum + „Törölve”.'] },
 { n:15, kind:'gyak', t:'felulv', q:'Jelölje a felülvizsgálat eredményét (új „Bizalmas!” szint, 2030. 12. 31-ig)!',
   v:['A régi szint és érvényességi idő áthúzása (minden oldalon a szintet).','Új szint („Bizalmas!”) és új érvényességi idő (2030. december 31.).','Minősítő neve, beosztása (Minta Gergő vezérőrnagy, főosztályvezető) + átirat iktatószáma (52/147/2022.) + felülvizsgálat dátuma (2022. január 4.) + TÜK aláírása.','Iktatókönyv: felülvizsgálat dátuma és eredménye (új szint, új idő).'] },
 { n:16, kind:'gyak', t:'keszit', q:'Az érkezett nemzeti minősített irat alapján ismételje meg a minősítési jelölést a saját készítésű iraton!',
   v:['Saját irat fejléc: saját szerv (Minta Hivatal), iktatószám (pl. 1/10-1/2026.), példánysorszám.','Megismételt jelölés: az EREDETI szint („Titkos!”), érvényességi idő (2039. 12. 31.), eredeti minősítő neve, beosztása (Hadi Ottó mk. dandártábornok, főosztályvezető).','„A minősítési jelölés megismételve a Honvédelmi Minisztérium HM/1/12/2026. ikt. számú irata alapján.”','Szint minden oldal tetején és alján középen; „Készült/Egy példány/Kapják” záradék.'] },
 { n:17, kind:'gyak', t:'keszit', q:'Vegye nyilvántartásba a saját készítésű minősített adathordozó valamennyi példányát!',
   v:['Iktatás új főszámra (saját készítés: érkezés módja helyett „saját”), szint + érvényességi idő, tárgy, terjedelem, mellékletek.','Minden példány külön példánysorszámmal (1. pld. irattár, 2. pld. címzett…).','Az eredeti irattári példányon a minősítési javaslat és döntés.','A továbbított példányokat a továbbítás rovatban kivezetni.'] }
];
