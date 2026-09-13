# bootfitting.pro

Responzivní český web pro bootfitting v Příchovicích. Čisté HTML, CSS a JavaScript bez sestavování.

## Obsah

Texty pocházejí z dodaného Bootfitting.docx. Aktuální revize zachovává původní formulace a podle připomínek odstraňuje doplňkové slogany, číslované popisky, šipky, lištu značek, průběh fittingu a filtraci modelů. Nadpis prodeje používá uživatelem požadované „Prodej lyžařských bot Salomon“. Věta o úpravách přímo v dílně byla na jeho žádost odstraněna.

Hero používá dodanou fotografii assets/workshop.jpeg v původní podobě; ořez a ztmavení jsou pouze součástí CSS. Pod bootfittingem zůstávají dvě prázdná místa pro detailní fotografie.

Kontakt a poptávkový formulář tvoří jednu tmavou sekci. Kontaktní údaje jsou klikatelné, adresa otevírá mapu. Telefonní odkazy používají +420 728 183 036.

## Formulář

Povinné jméno, e-mail a zpráva; telefon je nepovinný. Formulář pouze sestaví mailto zprávu do poštovní aplikace. Neodesílá data na server ani nepotvrzuje rezervaci. Požadovaná zástupná adresa je jesteneni@hotovy.cz. Před skutečným provozem je třeba dodat funkční adresu a případně službu přímého odesílání. O této skutečnosti informuje stručná poznámka u formuláře.

## Spuštění a nasazení

Lokálně: `python3 -m http.server 8080` v adresáři projektu a http://localhost:8080.

GitHub Pages: Settings → Pages → Deploy from a branch → main → / (root). Vlastní doména vyžaduje nastavení DNS; není automaticky nakonfigurována.

Písmo DM Sans a Manrope se načítá z Google Fonts se systémovým fallbackem. Web neobsahuje analytiku ani serverové ukládání poptávek. Modely, skladovost a ceny vycházejí z dodaného zadání, nejsou živě synchronizované.
