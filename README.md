# Grönhögens Uthyrning

Officiell webbplats för **Grönhögens Uthyrning** i Grönhögen på södra Öland.

Webbplatsen presenterar Grönhögens Stugby, Fasanhörnet och Nybovallens Camping samt information om bokning, kontakt och närområdet.

**Webbplats:** https://gronhogensuthyrning.se

## Teknik

Projektet är byggt med:

- Next.js 16
- React 19
- TypeScript
- styled-components
- Lucide React

Webbplatsen använder Next.js App Router och exporteras som en statisk webbplats för hosting hos Loopia.

## Kom igång

Installera dependencies:

```bash
npm install
```

Starta utvecklingsservern:

```bash
npm run dev
```

Webbplatsen finns därefter på:

```text
http://localhost:3000
```

## Produktion

Kontrollera projektet innan deployment:

```bash
npm run lint
npm run build
```

Next.js genererar den färdiga statiska webbplatsen i:

```text
out/
```

Testa produktionsversionen lokalt med:

```bash
npx serve out
```

## Deployment

Webbplatsen hostas hos **Loopia** och deployas via FTP.

Ladda upp **innehållet** i `out/` till:

```text
/gronhogensuthyrning.se/public_html/
```

Exempel:

```text
out/index.html   → public_html/index.html
out/_next/       → public_html/_next/
out/assets/      → public_html/assets/
```

Ladda inte upp själva `out`-mappen till `public_html`.

## SEO

Webbplatsen är konfigurerad med:

- Metadata och canonical URL
- Open Graph
- Sitemap
- robots.txt
- Favicon
- Semantisk HTML

Huvuddomän:

```text
https://gronhogensuthyrning.se
```

Sitemap:

```text
https://gronhogensuthyrning.se/sitemap.xml
```

## Kontakt

**Grönhögens Uthyrning**  
info@gronhogensuthyrning.se

## Licens

Projektet är utvecklat för Grönhögens Uthyrning. Källkod, bilder och grafiskt material får inte återanvändas eller distribueras utan tillstånd.