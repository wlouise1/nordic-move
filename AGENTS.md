# AGENTS.md – NORDIC MOVE

## Projekt
NORDIC MOVE är en fiktiv webbplats för träningskläder. Projektet innehåller en startsida, en artikelmall och ett AI-baserat arbetsflöde för att skapa artiklar.

## Projektstruktur
- `WEBBPLATS/` innehåller webbplatsens HTML, CSS och JavaScript.
- `WEBBPLATS/ARTIKLAR/` innehåller artiklar i JSON-format.
- `WEBBPLATS/images/` innehåller bilder.
- `.agents/skills/skapa-artikel/SKILL.md` innehåller instruktioner för artikelgenerering.

## Instruktioner till AI-agenten
1. Läs först instruktionerna i `.agents/skills/skapa-artikel/SKILL.md`.
2. Skapa en SEO-anpassad artikel som passar NORDIC MOVE.
3. Använd samma JSON-struktur som i `WEBBPLATS/ARTIKLAR/test-artikel.json`.
4. Spara artikeln som en ny JSON-fil i `WEBBPLATS/ARTIKLAR/`.
5. Spara eventuella nya bilder i `WEBBPLATS/images/`.
6. Använd endast små bokstäver, bindestreck och inga å, ä eller ö i filnamn.
7. Ändra inte befintliga filer i `WEBBPLATS/` när nya artiklar genereras.
8. Ändra aldrig lärarens `artikel.js`.
9. Kontrollera att JSON-filen är giltig och att bildsökvägarna stämmer.
10. Låt en människa granska artikelns fakta, språk, SEO och bilder före publicering.

## Kvalitet och förbättring
Om granskningen hittar fel ska agentens instruktioner eller artikelutkast förbättras. Artikeln ska kontrolleras igen innan den godkänns.