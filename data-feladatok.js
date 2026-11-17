// TÜK gyakorló – III. rész: az e-learning lecke végi feladatainak mintájára
// Új elemek: 'cloze' (szövegkiegészítés legördülővel), és válaszonkénti magyarázat (fb) a feleletválasztósoknál.

/* ---------- SZÖVEGKIEGÉSZÍTŐS (cloze) ---------- */
Q({ id:'c1', t:'minosito', type:'cloze',
  q:'Egészítsd ki a minősítési javaslatot! Ma 2026. február 5. van. Az adat jogosulatlan nyilvánosságra kerülése hátrányosan érintené Magyarország közérdekét, és megzavarná a Minta Hivatal működési rendjét.',
  text:'„Javaslom az adathordozón szereplő adatokat a minősített adat védelméről szóló {0} 5. és 6. §-ai alapján {1}-ig {2} minősíteni.”',
  blanks:[
    { o:['2009. évi CLV. törvény','90/2010. (III. 26.) Korm. rendelet','2011. évi CXII. törvény'], a:0 },
    { o:['2035. december 31.','2040. december 31.','2056. február 5.'], a:0 },
    { o:['„Korlátozott terjesztésű!”-vé','„Bizalmas!”-sá','„Titkos!”-sá'], a:0 }
  ],
  e:'A minősítés jogalapja a Mavtv. (2009. évi CLV. tv.) 5. és 6. §-a. A „hátrányosan érinti” a „Korlátozott terjesztésű!” szint kármértéke, ennek érvényességi ideje legfeljebb 10 év – ezért csak a 2035-ös dátum fér bele (a 2040-es már 14 év, a 2056-os 30 év lenne).',
  src:'Tankönyv 2.5–2.7. • Szóbeli 3–4.' });

Q({ id:'c2', t:'minosito', type:'cloze',
  q:'Egészítsd ki a „Titkos!” szintre szóló minősítési javaslat indoklását!',
  text:'„1. Az adathordozón szereplő adatok minősítéssel védhető, Magyarország bűnüldözési és bűnmegelőzési tevékenysége körébe tartoznak, 2. az adatok javasolt érvényességi idő lejárta előtti nyilvánosságra hozatala … a) {0} Magyarország 1. pontban megjelölt minősítéssel védhető közérdekét, b) {1}, ezért az adatok nyilvánosságát … a javasolt érvényességi ideig szükséges korlátozni.”',
  blanks:[
    { o:['rendkívül súlyosan károsítaná','súlyosan károsítaná','károsítaná','hátrányosan érintené'], a:1 },
    { o:['nagyszámú embert érintő közvetlen életveszéllyel járna','közvetlen életveszélyt okozna','az állam érdekérvényesítő képességeit hátráltatná','megzavarná a Minta Minisztérium működési rendjét'], a:1 }
  ],
  e:'„Titkos!” = súlyos kár; a tankönyvi példa: közvetlen életveszélyt okoz. (Szigorúan titkos: rendkívül súlyosan / nagyszámú ember életveszélye; Bizalmas: károsítaná / érdekérvényesítő képesség; Korlátozott terjesztésű: hátrányosan érintené / működési rend megzavarása.)',
  src:'Tankönyv 2.5., 2.7. (minták) • Szóbeli 3–4.' });

Q({ id:'c3', t:'keszit', type:'cloze',
  q:'A Minta Hivatal saját iratába a Honvédelmi Minisztérium HM/1/12/2026. számú, „Titkos!”, 2039. 12. 31-ig érvényes, Hadi Ottó mk. dandártábornok, főosztályvezető által minősített iratából foglal bele adatot (új minősítendő adat nem keletkezik). Egészítsd ki a jelölést!',
  text:'„Titkos!” • érvényességi idő: {0} • minősítő neve: {1} • „A minősítési jelölés megismételve a {2} HM/1/12/2026. ikt. számú irata alapján.”',
  blanks:[
    { o:['2039. 12. 31.','2056. 02. 03.','nem kell feltüntetni'], a:0 },
    { o:['Hadi Ottó mk. dandártábornok, főosztályvezető','Dr. Minta Csaba hivatalvezető','a titkos ügykezelő'], a:0 },
    { o:['Honvédelmi Minisztérium','Minta Hivatal','Nemzeti Biztonsági Felügyelet'], a:0 }
  ],
  e:'Megismétléskor az EREDETI jelölés kerül fel (eredeti szint, érvényességi idő, minősítő neve és beosztása), és mellé a keletkeztető szerv neve + az ott adott iktatószám. Saját minősítőnk nem minősít, mert új minősítési eljárás nem kell.',
  src:'Tankönyv 2.8., gyakorlati diasor 28. minta • Szóbeli 5., 12. • Gyak. 16.' });

Q({ id:'c4', t:'felulv', type:'cloze',
  q:'Gyakorlati 14. tétel: a minősítő jogutódja, Minta Gergő vezérőrnagy, főosztályvezető 2022. január 4-én az 52/547/2022. iktatószámú átiratában tájékoztatott a minősítés megszüntetéséről. Egészítsd ki!',
  text:'A minősítési szintet {0} áthúzom, és felvezetem: {1} – Minta Gergő vezérőrnagy, főosztályvezető – {2} – 2022. január 4. – {3} aláírása. Az iktatókönyvben a {4} rovatban is rögzítem.',
  blanks:[
    { o:['minden oldalon','csak az első oldalon','sehol, csak kiegészítem'], a:0 },
    { o:['„Törölve!”','„Minősítés fenntartva!”','„Megsemmisítve!”'], a:0 },
    { o:['52/547/2022.','az irat saját iktatószáma','a futárjegyzék száma'], a:0 },
    { o:['a titkos ügykezelő saját','a minősítő','a biztonsági vezető'], a:0 },
    { o:['felülvizsgálat','továbbítás','mellékletek'], a:0 }
  ],
  e:'Ha a döntés külön iratban (átiratban) érkezik, a TÜK jelöli a címzetti példányon: szint áthúzása minden oldalon, „Törölve!”, minősítő neve és beosztása, a döntést tartalmazó irat iktatószáma, a felülvizsgálat dátuma és a saját aláírása. Megszüntetésnél az iktatókönyv felülvizsgálat rovata is kitöltendő.',
  src:'Tankönyv 4.2. • Gyak. 14.' });

Q({ id:'c5', t:'szint', type:'cloze',
  q:'Egészítsd ki az érvényességi idő meghosszabbításának szabályát!',
  text:'A „Bizalmas!” adat érvényességi ideje rendkívül indokolt esetben {0} alkalommal, legfeljebb {1} évvel hosszabbítható meg, {2}, amelyet az eredeti érvényességi idő {3} kell lefolytatni.',
  blanks:[
    { o:['egy','két','korlátlan'], a:0 },
    { o:['5','20','30'], a:0 },
    { o:['új minősítési eljárással','a titkos ügykezelő bejegyzésével','az NBF engedélyével'], a:0 },
    { o:['letelte előtt','letelte után 30 napon belül','letelte után bármikor'], a:0 }
  ],
  e:'„Bizalmas!” és „Korlátozott terjesztésű!”: rendkívül indokolt esetben 1 × max. 5 év. (Magánszemély jogos érdekével összefüggő érdeknél 2 × max. 20 év.) Mindig új minősítési eljárás, az eredeti idő lejárta előtt – utána az adat nyílt, és újra nem minősíthető.',
  src:'Tankönyv 2.6. • Szóbeli 5.' });

Q({ id:'c6', t:'tovabb', type:'cloze',
  q:'Gyakorlati 9. tétel: egészítsd ki a boríték kötelező feliratát!',
  text:'„Baleset esetén vagy rendkívüli helyzetben a {0} bonthatja fel!” – A borítékon még fel kell tüntetni: a címzést, a feladót, az iktatószámot, a {1}, a minősítési szintet, és Állami Futárszolgálatnál a {2}. A lezárás helyére {3} kerül.',
  blanks:[
    { o:['küldő szerv','címzett','futár','Nemzeti Biztonsági Felügyelet'], a:0 },
    { o:['példánysorszámot','tárgyat','ügyintéző nevét'], a:0 },
    { o:['futárkódszámot','futár nevét','listaszámot'], a:0 },
    { o:['a szerv hivatalos bélyegzője','a TÜK kézjegye','semmi'], a:0 }
  ],
  e:'A tárgy soha nem kerül a borítékra. A lezárásnak olyannak kell lennie, hogy az esetleges felbontás egyértelműen megállapítható legyen.',
  src:'Tankönyv 10.2–10.3. • Gyak. 9.' });

Q({ id:'c7', t:'felh', type:'cloze',
  q:'Egészítsd ki a titoktartási nyilatkozatra vonatkozó szabályt!',
  text:'A titoktartási nyilatkozat aláírásáért, kezeléséért és tárolásáért a {0} felel. A nyilatkozatnak a felhasználói jogosultság megszűnését követően {1} évig fellelhetőnek kell lennie, ezután {2} kell megsemmisíteni. Nemzeti és külföldi adat felhasználásához {3} nyilatkozat elegendő.',
  blanks:[
    { o:['biztonsági vezető','titkos ügykezelő','Nemzeti Biztonsági Felügyelet'], a:0 },
    { o:['8','5','10'], a:0 },
    { o:['jegyzőkönyv felvétele mellett','a levéltár engedélyével','szóbeli bejelentéssel'], a:0 },
    { o:['egy','két'], a:0 }
  ],
  e:'BV felelősség; 8 év; jegyzőkönyves megsemmisítés; egy nyilatkozat elég nemzeti + külföldi adatra.',
  src:'Tankönyv 3.3. • Szóbeli 8.' });

Q({ id:'c8', t:'irattar', type:'cloze',
  q:'Gyakorlati 5. tétel: egészítsd ki a megsemmisítési eljárás szabályait!',
  text:'A megsemmisítést legalább {0} tagú bizottság hajtja végre. A megsemmisítést a {1} engedélyezi. A jegyzőkönyv {2} példányban készül, és {3}. Az iktatókönyvben rögzítem a megsemmisítés időpontját és a {4}.',
  blanks:[
    { o:['három','kettő','öt'], a:0 },
    { o:['szerv vezetője (vagy felhatalmazásával a biztonsági vezető)','titkos ügykezelő','minősítő'], a:0 },
    { o:['1','2','3'], a:0 },
    { o:['nem selejtezhető','8 év után selejtezhető','a megsemmisítés után megsemmisítendő'], a:0 },
    { o:['jegyzőkönyv iktatószámát','bizottsági tagok nevét','futárjegyzék számát'], a:0 }
  ],
  e:'Legalább 3 tag (TÜK + a BV által kijelölt, megfelelő SZBT-vel és nyilatkozattal rendelkezők), engedély: szerv vezetője / felhatalmazással BV, 1 példány, nem selejtezhető; iktatókönyvbe: időpont + jegyzőkönyv iktatószáma.',
  src:'Tankönyv 12.4. • Szóbeli 21. • Gyak. 5.' });

Q({ id:'c9', t:'atvet', type:'cloze',
  q:'Gyakorlati 1. tétel: egészítsd ki az átvétel igazolását!',
  text:'Átvétel előtt ellenőrzöm, hogy a címzés alapján jogosult vagyok-e, egyezik-e a futárjegyzéken és a csomagoláson szereplő iktatószám és {0}, valamint sértetlen-e a küldemény. Az átvételt a futárjegyzéken {1} pontossággal, nevem olvasható feltüntetésével, aláírásommal és {2} igazolom.',
  blanks:[
    { o:['példánysorszám','tárgy','minősítő neve'], a:0 },
    { o:['év, hó, nap, óra, perc','év, hó, nap','óra, perc'], a:0 },
    { o:['bélyegzőlenyomattal','az iktatószámmal','két tanú aláírásával'], a:0 }
  ],
  e:'Ellenőrzés: jogosultság + iktatószám/példánysorszám egyezése + sértetlenség. Igazolás: dátum és óra-perc, olvasható név, aláírás, bélyegző.',
  src:'Tankönyv 9.2. • Szóbeli 17. • Gyak. 1.' });

Q({ id:'c10', t:'iktat', type:'cloze',
  q:'Gyakorlati 13. tétel: a „Titkos!” irat iktatószáma 1/3/2026., 20 példányban készül. Egészítsd ki!',
  text:'„Készült: 20 példányban … Kapják: 1. sz. pld. {0}; 2–20. sz. pld. {1} ikt. számú elosztó szerint.” Az elosztót az iktatókönyvben {2} iktatom, és a kivezetésnél a címzett rovatba ezt írom: {3}.',
  blanks:[
    { o:['Irattár','Nemzeti Biztonsági Felügyelet','Címzett'], a:0 },
    { o:['1/3-1/2026.','1/4/2026.','3/1-1/2026.'], a:0 },
    { o:['az irat főszámának következő alszámára','új főszámra','nem kell iktatni, csak csatolom –'], a:0 },
    { o:['„elosztó szerint”','az első címzett nevét','„Irattár”'], a:0 }
  ],
  e:'Az elosztó ugyanahhoz az ügyhöz tartozik → a főszám alszáma (1/3-1/2026.). Az irattári példányhoz csatoljuk; a 19 továbbított példányt „elosztó szerint” vezetjük ki.',
  src:'Tankönyv 2.7., gyakorlati diasor 19. minta • Gyak. 13.' });

Q({ id:'c11', t:'belso', type:'cloze',
  q:'Gyakorlati 7–8. tétel: egészítsd ki a szerven belüli átadás szabályát!',
  text:'A minősített adat szerven belüli átadása és visszavétele csak a {0} útján, belső átadókönyvben vagy más belső átadó okmányon, {1} és az átvétel dátumának feltüntetésével történhet. A belső átadókönyv csak akkor zárható le, ha {2}, és lezárása után {3} év elteltével selejtezhető.',
  blanks:[
    { o:['titkos ügykezelő','biztonsági vezető','szignáló vezető'], a:0 },
    { o:['saját kezű aláírással','szóbeli megerősítéssel','bélyegzővel'], a:0 },
    { o:['minden átadott irat vissza van véve (vagy a végleges átadás igazolt)','betelt','véget ért a naptári év'], a:0 },
    { o:['8','5','15'], a:0 }
  ],
  e:'Csak a TÜK útján, saját kezű aláírással + dátummal (vagy iratkezelési szoftverrel). Lezárás csak teljes visszavételezés után; megőrzés 8 év.',
  src:'Tankönyv 9.9. • Szóbeli 18. • Gyak. 7–8.' });

Q({ id:'c12', t:'sokszor', type:'cloze',
  q:'Gyakorlati 4. tétel: egészítsd ki a sokszorosított példány nyilvántartását!',
  text:'Az irat sokszorosítását a {0} írásban engedélyezte. A sokszorosított példány jelölése: „{1}”, és {2} iktatom. Ha az eredeti iktatókönyve már lezárásra került, a tárgyévi iktatókönyv soron következő iktatószámára iktatom, és az eredeti irat {3} rovatában rögzítem az új iktatószámot.',
  blanks:[
    { o:['szerv vezetője (vagy írásban megbízottja, a címzett, ill. a minősítő)','titkos ügykezelő','futár'], a:0 },
    { o:['1. sz. soksz. pld.','3. sz. pld.','másolat'], a:0 },
    { o:['az eredeti irat iktatószámán','új főszámra','a futárjegyzéken'], a:0 },
    { o:['kezelési bejegyzés','tárgy','felülvizsgálat'], a:0 }
  ],
  e:'1-től növekvő sokszorosított példánysorszám, iktatás az eredeti iktatószámon; lezárt könyv esetén új szám + kezelési bejegyzés.',
  src:'Tankönyv 11. fejezet • Gyak. 4.' });

/* ---------- ESETLEÍRÁSOS FELELETVÁLASZTÓS, VÁLASZONKÉNTI MAGYARÁZATTAL ---------- */
Q({ id:'e1', t:'szint', type:'mc',
  q:'Egy adatot 2016. március 1-jén minősítettek „Korlátozott terjesztésű!”-vé 2026. március 1-jéig. A minősítő 2026. május 10-én szeretné meghosszabbítani az érvényességi időt. Mi a helyes megítélés?',
  o:['Meghosszabbítható 5 évvel, ha rendkívül indokolt','Meghosszabbítható 20 évvel, ha magánszemély jogos érdekével összefüggő nemzetbiztonsági érdek indokolja','Nem hosszabbítható meg: a minősítés az érvényességi idő lejártával megszűnt, és az adat újból nem minősíthető','Meghosszabbítható, ha a titkos ügykezelő az iktatókönyvben jelzi'],
  a:2,
  fb:['Nem: a hosszabbítást az eredeti érvényességi idő LETELTE ELŐTT kell lefolytatni – itt már lejárt.','Nem: ez a hosszabbítási mérték egyébként létezik, de a lejárt minősítésnél már nincs mit hosszabbítani.','Helyes: lejárat után az adat nyílttá vált, a megszűnt minősítésű adat újból nem minősíthető.','Nem: a hosszabbítás új minősítési eljárás, a TÜK bejegyzése semmit nem hosszabbít.'],
  e:'Kulcs: érvényességi idő lejárta = a minősítés megszűnik, az adat nyílt, újra nem minősíthető.',
  src:'Tankönyv 2.6. • Szóbeli 5.' });

Q({ id:'e2', t:'szint', type:'multi',
  q:'Egy 2020-ban 30 évre „Titkos!”-sá minősített adat érvényességi idejét rendkívül indokolt esetben szeretnék meghosszabbítani. Mely állítások helyesek? (Több is lehet.)',
  o:['Egy alkalommal, legfeljebb 30 évvel hosszabbítható','Két alkalommal, alkalmanként 30 évvel hosszabbítható, mert rendkívül indokolt','A hosszabbításhoz új minősítési eljárás kell','40 évvel is meghosszabbítható, ha a minősítő indokolja'],
  a:[0,2],
  fb:['Helyes: a két felső szintnél rendkívül indokolt esetben 1 × legfeljebb 30 év (összesen 60).','Nem: két alkalom csak a magánszemély jogos érdekével szorosan összefüggő honvédelmi, nemzetbiztonsági, bűnüldözési, igazságszolgáltatási érdeknél lehetséges.','Helyes: hosszabbítás mindig új minősítési eljárással, a lejárat előtt.','Nem: a felső határ alkalmanként 30 év.'],
  e:'„Titkos!”/„Szigorúan titkos!”: 1 × 30 (Σ60) vagy – magánszemély jogos érdekével összefüggő esetben – 2 × 30 (Σ90).',
  src:'Tankönyv 2.6. • Szóbeli 5.' });

Q({ id:'e3', t:'felulv', type:'mc',
  q:'A felülvizsgálat során a minősítő úgy látja, hogy egy „Korlátozott terjesztésű!” adat valójában „Bizalmas!” szintet érdemelne. Mit tehet?',
  o:['Felülvizsgálat keretében „Bizalmas!”-ra emeli','Felülvizsgálat során a szint nem emelhető – legfeljebb fenntarthatja, csökkentheti, az érvényességi időt módosíthatja vagy megszüntetheti','Kérheti az NBF-et, hogy emelje meg','A titkos ügykezelő átírja a jelölést'],
  a:1,
  fb:['Nem: szintemelésre a felülvizsgálat során nincs lehetőség – addig olyanok is hozzáférhettek, akiknek nem volt SZBT-jük.','Helyes: a négy lehetséges eredmény: fenntartás, szintcsökkentés, érvényességiidő-módosítás, megszüntetés.','Nem: az NBF nem minősít helyette, legfeljebb kezdeményezheti a felülvizsgálatot.','Nem: a TÜK csak a minősítő döntését rögzíti.'],
  e:'Felülvizsgálat: emelés NINCS.',
  src:'Tankönyv 4. fejezet • Szóbeli 7.' });

Q({ id:'e4', t:'belso', type:'mc',
  q:'Minta Irma „Bizalmas!” szintig érvényes SZBT-vel és aláírt titoktartási nyilatkozattal rendelkezik. A vezető egy „Titkos!” iratot szignálna neki. Mi a helyes?',
  o:['Szignálhatja, mert van SZBT-je és nyilatkozata','Nem szignálhatja, mert az SZBT szintje alacsonyabb az irat szintjénél','Szignálhatja, ha a titkos ügykezelő jelen van','Szignálhatja, ha Minta Irma megismerési engedélyt kér'],
  a:1,
  fb:['Nem: az SZBT a felhasználható LEGMAGASABB szintet határozza meg – itt „Bizalmas!”.','Helyes: a szignáló vezető felelőssége, hogy csak megfelelő szintű SZBT-vel (és nyilatkozattal) rendelkezőnek engedélyezze a felhasználást.','Nem: a TÜK jelenléte nem pótolja a hiányzó jogosultságot.','Nem: a megismerési engedély az érintett SAJÁT személyes adatainak megismerésére szolgál.'],
  e:'Szignálás: titoktartási nyilatkozat + („Bizalmas!”-tól) az irat szintjének megfelelő SZBT.',
  src:'Tankönyv 3.4., 9.6. • Szóbeli 8., 18.' });

Q({ id:'e5', t:'atvet', type:'mc',
  q:'Este 21 órakor a 24 órás porta – a szerv vezetője által írásban megbízott, megfelelő SZBT-vel és nyilatkozattal rendelkező – munkatársa átvesz egy minősített küldeményt. Mi a helyes eljárás?',
  o:['Felbontja, hogy lássa, sürgős-e','Bontatlanul, haladéktalanul, de legkésőbb az első munkanap kezdetén belső átadókönyvben dokumentáltan átadja a Nyilvántartónak','Hazaviszi, és reggel beadja','Másnap a postaládába teszi'],
  a:1,
  fb:['Nem: az átvételi jog NEM jelent felbontási jogot – bontani csak a címzett és a TÜK bonthat.','Helyes: így szól az NBF kormányrendelet szabálya.','Nem: biztonsági területen kívülre vinni tilos.','Nem: dokumentált átadás kell (belső átadókönyv).'],
  e:'Átvehet: címzett, TÜK, írásban megbízott személy. Felbonthat: címzett, TÜK.',
  src:'Tankönyv 9.2–9.3. • Szóbeli 17.' });

Q({ id:'e6', t:'atvet', type:'mc',
  q:'„Saját kezű felbontásra!” jelzésű minősített küldemény érkezik Dr. Minta Csaba hivatalvezetőnek, aki két hétig szabadságon van. Mi a teendő?',
  o:['A TÜK felbontja, mert sürgős lehet','A TÜK zárt küldeményként iktatja („Tárgy”: S. k. felbontásra érkezett), és a biztonsági szabályzatban a címzett akadályoztatására előírt módon jár el','Visszaküldi a feladónak','A helyettes bontja fel, szabályzattól függetlenül'],
  a:1,
  fb:['Nem: „S. k. felbontásra!” jelzésűt a TÜK nem bonthat fel.','Helyes: a címzett akadályoztatása esetén a felbontás módjáról a szerv vezetője a biztonsági szabályzatban rendelkezik.','Nem: a küldemény nem tévesen címzett, nincs ok visszaküldeni.','Nem: csak a biztonsági szabályzat szerinti személy, az ott írt módon.'],
  e:'S. k.: zárt iktatás, bontatlan dokumentált átadás; akadályoztatás → biztonsági szabályzat.',
  src:'Tankönyv 9.3. • Szóbeli 17.' });

Q({ id:'e7', t:'sokszor', type:'mc',
  q:'A címzettnek egy NATO „Szigorúan titkos!” irat további két példányára lenne szüksége. Ki engedélyezheti a sokszorosítást?',
  o:['A szerv vezetője','A címzett maga','Kizárólag a minősítő, írásban','A titkos ügykezelő'],
  a:2,
  fb:['Nem: NATO, NYEU, EU „Szigorúan titkos!” adatnál a szerv vezetője nem engedélyezhet.','Nem: ugyanezért a címzett sem.','Helyes: ilyenkor csak a minősítő írásbeli engedélyével lehet – tőle kell kérni.','Nem: a TÜK-nek ez nem is jogszabályi feladata, engedélyezni pedig végképp nem tudja.'],
  e:'NATO/NYEU/EU „Szigorúan titkos!” vagy különleges kezelési utasítással tiltott sokszorosítás → csak a minősítő.',
  src:'Tankönyv 11. fejezet • Szóbeli 19. • Gyak. 4.' });

Q({ id:'e8', t:'terulet', type:'mc',
  q:'Egy ügyintéző az adminisztratív zónában lévő irodájában dolgozik egy nemzeti „Bizalmas!” papíralapú iraton, és munkaidő végén a zárható íróasztalfiókjába tenné éjszakára. Szabályos?',
  o:['Igen, a zárható irodabútor elég','Nem: adminisztratív zónában napközben dolgozhat vele, de munkaidőn túl nem tarthatja ott birtokában – vissza kell adnia a TÜK útján biztonsági területre','Igen, ha a szobát is bezárja','Nem: adminisztratív zónában egyáltalán nem használható „Bizalmas!” adat'],
  a:1,
  fb:['Nem: zárható irodabútorban adminisztratív zónában csak „Korlátozott terjesztésű!” tárolható.','Helyes: a nemzeti „Bizalmas!” vagy magasabb papíralapú adat adminisztratív zónában is felhasználható – a munkaidőn túli birtokban tartás kivételével.','Nem: a szoba bezárása nem tesz biztonsági területté.','Nem: a papíralapú nemzeti „Bizalmas!”-ra van kivétel, munkaidőben használhatja.'],
  e:'Tárolás „Bizalmas!”-tól: I. vagy II. osztályú biztonsági terület.',
  src:'Tankönyv 5.3. • Szóbeli 9.' });

Q({ id:'e9', t:'nyilv', type:'mc',
  q:'December 31. van, az év utolsó munkanapja. Mit teszel a főnyilvántartó könyvvel és a nemzeti iktatókönyvvel?',
  o:['Mindkettőt lezárom, jövőre újakat nyitok','Az iktatókönyvben az utolsó főszám után lezárom az évet (aláhúzás, dátum, aláírás, bélyegző); a főnyilvántartó könyvet NEM zárom le','A főnyilvántartó könyvet zárom le, az iktatókönyvet nem','Egyiket sem kell semmilyen módon jelölni'],
  a:1,
  fb:['Nem: a főnyilvántartó könyvet év végén nem szabad lezárni, és az iktatókönyvet sem kell újra cserélni, ha még nem telt be.','Helyes: az iktatókönyv év végi lezárása kötelező, a főnyilvántartó folyamatos számozással megy tovább.','Nem: pont fordítva.','Nem: az iktatókönyv év végi lezárása kötelező.'],
  e:'Jövőre ugyanabban az iktatókönyvben, a következő üres oldalon 1-es főszámmal folytatódik az iktatás.',
  src:'Tankönyv 9.1., 9.7. • Szóbeli 13., 15.' });

Q({ id:'e10', t:'atvet', type:'multi',
  q:'Felbontás után kiderül, hogy a „Titkos!” irat 3 lapja helyett csak 2 lap van a borítékban, és a melléklet is hiányzik. Mely lépések helyesek? (Több is lehet.)',
  o:['2 példányban jegyzőkönyvet veszek fel','A jegyzőkönyv egyik példányát a küldő szervnek továbbítom','Iktatom a hiánytalan adatokkal, mintha minden meglenne','Telefonon szólok a küldőnek, jegyzőkönyv nem kell'],
  a:[0,1],
  fb:['Helyes: hiány esetén 2 példányos jegyzőkönyv.','Helyes: az egyik példány a küldő szervhez megy.','Nem: az iktatókönyvet hitelesen kell vezetni – a valós terjedelmet és mellékletet rögzítjük.','Nem: minősített adatnál írásbeli dokumentálás kell.'],
  e:'Felbontás után azonnal ellenőrizni kell: azonosító adatok, terjedelem (lapszám), mellékletek.',
  src:'Tankönyv 9.3. • Szóbeli 17.' });

Q({ id:'e11', t:'tovabb', type:'mc',
  q:'Sürgősen el kellene juttatni egy „Bizalmas!” iratot egy másik budapesti minisztériumnak. A kolléga felajánlja, hogy egy futárcéggel még ma átküldi. Mi a helyes?',
  o:['Mehet futárcéggel, ha ajánlott','Nem: postán, civil futár- vagy csomagküldő szolgálattal tilos – Állami Futárszolgálat vagy kijelölt személyes kézbesítő, futárjegyzékkel, a TÜK útján','Elküldjük titkosított e-mailben','A kolléga maga viszi át, ha bízunk benne'],
  a:1,
  fb:['Nem: civil futár tilos.','Helyes: belföldön ÁFSZ, katonai futár, rendvédelmi/NAV belső futár vagy személyes kézbesítő – megfelelő SZBT-vel és nyilatkozattal, futárjegyzékkel.','Nem: e-mailben, interneten tilos.','Nem: csak ha a szerv vezetője írásban kijelölte személyes kézbesítőnek, és van megfelelő SZBT-je + nyilatkozata – akkor is a TÜK-ön keresztül, futárjegyzékkel.'],
  e:'Három alapszabály: nincs posta/civil futár, nincs e-mail, csak a TÜK útján.',
  src:'Tankönyv 10.1–10.3. • Szóbeli 20.' });

Q({ id:'e12', t:'iktat', type:'mc',
  q:'2026. február 3-án érkezik egy irat, amelynek előzménye 2025-ben a 45/2025. főszámon van iktatva. (Nem rendvédelmi szerv, bíróság vagy ügyészség vagy.) Mi a helyes?',
  o:['45-1/2025. számra iktatom','2026-ban új főszámra iktatom, a 45/2025. ügyiratot hozzászerelem, mindkét iktatókönyvben kölcsönösen jelzem a másik iktatószámát, és az iraton is jelölöm a szerelést','Csatolom, és az ügy végén szétválasztom','Nem iktatom, csak a 2025-ös ügyirathoz teszem'],
  a:1,
  fb:['Nem: lezárt év főszámára már nem iktatunk.','Helyes: korábbi évi előzmény → tárgyévi iktatás + szerelés + kölcsönös hivatkozás.','Nem: az előzmény szerelendő (végleges), nem csatolandó (átmeneti).','Nem: minden érkezett minősített adatot iktatni kell.'],
  e:'Csak egyes szerveknél (védelmi és biztonsági igazgatás központi szerve, rendvédelmi szervek, NAV, KNBSZ, bíróságok, ügyészség) lehet több év iratait egy főszámon tartani.',
  src:'Tankönyv 9.5., 9.7. • Szóbeli 16.' });

/* ---------- SORBA RENDEZŐS ---------- */
Q({ id:'o1', t:'szint', type:'order',
  q:'Rendezd a minősítési szinteket a legalacsonyabbtól a legmagasabbig!',
  o:['„Korlátozott terjesztésű!”','„Bizalmas!”','„Titkos!”','„Szigorúan titkos!”'],
  e:'Hátrányosan érinti → károsítja → súlyosan károsítja → rendkívül súlyosan károsítja. Érvényességi idő: 10 → 20 → 30 → 30 év.',
  src:'Tankönyv 2.5. • Szóbeli 4.' });

Q({ id:'o2', t:'nyilv', type:'order',
  q:'Rendezd sorrendbe a nyilvántartási rendszer kiépítését!',
  o:['A szerv vezetője (vagy felhatalmazással a BV) hitelesen megnyitja a főnyilvántartó könyvet','A TÜK megnyitja és hitelesíti az iktatókönyvet (és a többi segédletet)','A TÜK a segédletet főnyilvántartásba veszi','A főnyilvántartási számot feltünteti a segédleten (pl. 1. Fnyt. számú)','Megkezdődhet az iktatás'],
  e:'A főnyilvántartó a rendszer kezdőpontja: abba kerülnek nyilvántartásba a már megnyitott és hitelesített segédletek.',
  src:'Tankönyv 9.1., 9.7. • Szóbeli 15.' });

Q({ id:'o3', t:'felh', type:'order',
  q:'Rendezd sorrendbe a külföldi minősített adatra érvényes SZBT megszerzését (állami szervnél)!',
  o:['Nemzetbiztonsági ellenőrzés → biztonsági szakvélemény','Felvétel a keretszám szerinti nyilvántartásba (keretszám-igazolás)','A biztonsági vezető megküldi az NBF-nek az űrlapot, a szakvélemény másolatát és a keretszám-igazolást','Az NBF kiállítja az SZBT-t, és megküldi a biztonsági vezetőnek','A biztonsági vezető kezeli és tárolja'],
  e:'Külföldi adatra mindig az NBF adja ki; a BV kezdeményezi és kezeli.',
  src:'Tankönyv 3.4., 3.6–3.7. • Szóbeli 8.' });
