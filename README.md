# bootfitting.pro

Responzivní český web pro bootfitting v Příchovicích podle dodaného zadání Bootfitting.docx. Čisté HTML, CSS a JavaScript, bez sestavování a bez placených služeb.

## Lokální spuštění

V adresáři projektu spusťte `python3 -m http.server 8080` a otevřete http://localhost:8080. Funguje i přímé otevření index.html.

## Nasazení

V GitHub Settings → Pages vyberte Deploy from a branch, větev main a adresář / (root). Web poté bude na https://danielnevrklo.github.io/bootfitting/. Pro vlastní doménu bootfitting.pro nejprve ověřte vlastnictví a nastavte DNS podle pokynů GitHub Pages; soubor CNAME není přidán automaticky.

## Obsah a provoz

- Texty, telefon, adresa, všechny modely a devět cenových položek jsou v index.html.
- Rezervace otevírá telefonní hovor na +420 728 183 036. Web nepředstírá kalendář ani potvrzenou rezervaci.
- Na výslovné přání je uveden zástupný e-mail jesteneni@hotovy.cz, viditelně označený jako dočasný. Formulář validuje pole a připravuje mailto zprávu; nic neposílá na server a nepotvrzuje rezervaci. Před produkcí nahraďte adresu v HTML i JS a připojte funkční službu příjmu formulářů, pokud má web přímo odesílat poptávky.
- Úvodní SVG je vlastní stylizovaná ilustrace, nikoli fotografie dílny nebo konkrétního modelu Salomon. Nahraďte skutečnou fotografií dílny, až bude dodána; přidejte také fotografie práce a finální logo.
- Modely a ceny vycházejí z dodaného dokumentu, dostupnost ani katalog výrobce nejsou živě synchronizované. Před veřejným spuštěním potvrďte seznam modelů a fakturační údaje provozovatele.
- Mapa se otevírá externím odkazem, nenačítá se vložený tracker. Web nemá serverové ukládání poptávek, cookies ani analytiku. Písmo se načítá z Google Fonts, při nedostupnosti se používá systémové bezpatkové písmo.
- Filtry i mobilní menu jsou v app.js. Obsah a telefonní rezervace fungují i bez JavaScriptu; na mobilu bez JS je možné přecházet přirozeným posouváním stránky.

## Kontroly

Ověřte mobilní i desktopové zobrazení, klávesnicové ovládání menu a filtrů, interní odkazy, ceník a telefonní odkazy. Bez runtime závislostí.
