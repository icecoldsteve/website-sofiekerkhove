# DESIGN_LOCK — Sofie Kerkhove

Beschrijft de bestaande richting (vastgelegd bij de v5.5-upgrade van 14-11-2026; niets herontworpen).

**Design Read:** medisch pedicure Wielsbeke · rustig, verzorgd, warm · een apothekersetiket in crème en flessengroen.

1. **Naam van de richting** — "Crème & flessengroen".
2. **Merkwereld** — zorg zonder kliniekgevoel: papierkleurige achtergrond met lichte korrel, één getekende voet in lijn, ronde vormen, geen foto's.
3. **Typografie** — koppen in Cormorant Garamond 500, accenten cursief; lopende tekst in Barlow 400/500/600; labels en cijfers in JetBrains Mono, hoofdletters met ruime spatiëring. Alles zelf gehost.
4. **Kleur** — `--light #F5F0E8` (papier), `--surface #FFFDF9`, `--dark #16302B` en `--primary #1F4A40` (flessengroen), `--accent #C8794F` en `--accent-soft #E7A57E` (terracotta), `--ink #1B2420`, `--muted #4A5551`. Eén licht thema met donkergroene banden; geen donker thema.
5. **Ritme** — hero in twee kolommen, donkere lichtkrant, bento-raster met wisselende hoekradius (12/20/28 px), tweeluik praktijk/huisbezoek, terracotta CTA-band, prijslijst met haarlijnen, donkere urgentiekaart, citaat + tellers, FAQ-accordeon, donkere contactband.
6. **De handtekening** — de schijf met de lijn-getekende voet en de ronddraaiende tekstring, met twee zwevende chips (Praktijk · Huisbezoek).
7. **Niet nog eens** — geen stockfoto's, geen paars, geen drie identieke iconenkaarten, geen emoji als icoon, geen extra fonts, geen tweede accentkleur.
8. **Referenties** — apothekersetiketten, linnen en keramiek; redactionele serif op papier.

Beweging: laadscherm, getekende voet, stagger in de hero, scroll-reveal, lichtkrant, tellers en een muisring. Alles valt weg bij `prefers-reduced-motion` en zonder JavaScript blijft alle inhoud zichtbaar.
