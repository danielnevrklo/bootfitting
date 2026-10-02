# bootfitting.pro

Responzivní český web pro bootfitting v Příchovicích. Čisté HTML, CSS a JavaScript bez sestavování.

## Obsah

Web má úvodní stránku a tři podstránky: `index.html` (úvod, proč u mě, prodej Salomon, postup, záchrana lyžáků, závodní boty, bootfitting, FAQ, kontakt), `boty-salomon.html`, `bootfitting.html` a `cenik.html`.

Struktura a texty vycházejí z podkladů od Lukáše (HTML návrh z 26. 9. 2026 a soupis změn z 1. 10. 2026). Design, písma, barvy a fotografie zůstávají z původní verze webu. Sjezdovka je všude uváděna 200 m od dílny.

Hero používá dodanou fotografii assets/workshop.jpeg v původní podobě; ořez a ztmavení jsou pouze součástí CSS. Pod úvodní sekcí a na stránce Bootfitting jsou prázdná místa pro detailní fotografie. Odkaz na Instagram je zatím prázdný (TODO v index.html).

Kontakt a poptávkový formulář tvoří jednu tmavou sekci na úvodní stránce; podstránky na ni odkazují. Telefonní odkazy používají +420 728 183 036, e-mail je info@bootfitting.pro.

## Formulář

Povinné jméno, e-mail a zpráva; telefon a výběr „Co potřebujete“ jsou nepovinné. Formulář pouze sestaví mailto zprávu do poštovní aplikace na info@bootfitting.pro. Neodesílá data na server ani nepotvrzuje rezervaci.

## Spuštění a nasazení

Lokálně: `python3 -m http.server 8080` v adresáři projektu a http://localhost:8080.

GitHub Pages: Settings → Pages → Deploy from a branch → main → / (root). Vlastní doména vyžaduje nastavení DNS; není automaticky nakonfigurována.

Písmo DM Sans a Manrope se načítá z Google Fonts se systémovým fallbackem. Web neobsahuje analytiku ani serverové ukládání poptávek. Modely, skladovost a ceny vycházejí z dodaného zadání, nejsou živě synchronizované.
