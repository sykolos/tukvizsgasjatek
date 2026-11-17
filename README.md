# TÜK gyakorló

Telefonon is használható gyakorlóoldal a titkos ügykezelői vizsgához (2026-os tananyag és változások).

## Feltöltés GitHub Pages-re
1. Hozz létre egy új repót a GitHubon (pl. `tuk-gyakorlo`).
2. Töltsd fel a repó gyökerébe ezt a 7 fájlt: `index.html`, `style.css`, `app.js`, `data-elmelet.js`, `data-gyakorlat.js`, `data-feladatok.js`, `data-tetelek.js` (*Add file → Upload files*).
3. *Settings → Pages → Source: Deploy from a branch → main / (root) → Save*.
4. Pár perc múlva megnyílik: `https://<felhasználónév>.github.io/tuk-gyakorlo/`.
5. Telefonon: *Megosztás → Hozzáadás a kezdőképernyőhöz*, és úgy indul, mint egy app.

## Mi van benne
- **Mai kör**: alapból 8 kérdés. Előbb az esedékes ismétlések jönnek (Leitner-dobozos rendszer: 1, 2, 4, 8, 16 nap), utána az új kérdések, a gyengébb témákból kezdve.
- Minden kérdésnél lehet ellenőrizni, megnézni a megoldást, újrapróbálni, és mindig jön magyarázat a forrással együtt. A rontott kérdés a kör végén még egyszer előjön.
- **Témák**: 16 téma, a szóbeli és gyakorlati tételekhez kötve.
- **Tételek**: 22 szóbeli és 17 gyakorlati tétel vázlattal. Húzhatsz egyet, aztán értékeled magad.
- **Mizu?**: haladás témánként, vizsga-visszaszámláló, beállítások, és a haladás mentése/betöltése fájlba.
- **Felolvasás**: 🔊 gomb a kérdéseknél és a tételeknél, és a **🎧 Hallgatós mód** sorban felolvassa a tételeket (cím, kérdés, gondolkodási szünet, vázlat). A telefon beépített magyar hangját használja (iPhone: Beállítások › Kisegítő lehetőségek › Beszélt tartalom › Hangok › Magyar; Android: Szövegfelolvasó › Google › Magyar hanganyag).
- 🆕 jelöli a 2026-os változásokat érintő kérdéseket.

## Kérdés hozzáadása
A `data-elmelet.js` vagy a `data-gyakorlat.js` fájlba írj egy új `Q({...})` blokkot a meglévők mintájára.
Típusok: `mc`, `multi`, `tf`, `num`, `order`, `match`, `cloze` (szövegkiegészítés). Feleletválasztósnál `fb: [...]` adja a válaszonkénti magyarázatot.
