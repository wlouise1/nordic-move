---
name: skapa-artikel
description: Skapar SEO-anpassade artiklar i JSON-format för NORDIC MOVE. Använd när en ny artikel ska genereras till webbplatsen.
---

# Skapa artikel – NORDIC MOVE

## Syfte
Denna skill hjälper en AI-agent att skapa artiklar om träningskläder, pilates, träning och styling för NORDIC MOVE.

Artiklarna ska vara användbara för målgruppen, lätta att läsa och anpassade för sökmotorer.

## Arbetsprocess

1. Läs `AGENTS.md` och `WEBBPLATS/ARTIKLAR/test-artikel.json`.
2. Välj ett relevant ämne och ett huvudsökord.
3. Skapa en tydlig rubrik och en kort ingress.
4. Skriv en artikel med logisk rubrikhierarki, informativa stycken och gärna en lista med konkreta tips.
5. Använd endast blocktyper som artikelmallen stöder: `h1`, `h2`, `h3`, `p`, `img`, `ul` och `ol`.
6. Skapa ett JSON-objekt med fälten `title` och `content`. Varje innehållsblock ska följa strukturen i testartikeln.
7. Skapa eller välj en relevant bild. Spara en ny bild lokalt i `WEBBPLATS/images/` och ange bildens sökväg och en beskrivande alt-text i artikelns JSON.
8. Spara artikeln som en ny `.json`-fil i `WEBBPLATS/ARTIKLAR/`.
9. Kontrollera att JSON-formatet är korrekt och att bilden går att visa.
10. Lämna artikeln för mänsklig granskning innan den publiceras.

## Regler

- Använd svenska och en varm, inspirerande och trovärdig ton.
- Använd relevanta sökord naturligt, utan att upprepa dem onödigt.
- Hitta inte på produktf
