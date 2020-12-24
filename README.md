# Tuindomotica
A simple app to turn on/off lights in the garden

## Microcontroller
De code is een voorbeeld hoe je de microcontroller run gebruiken via een API.
Het runt een webserver en via:
- `http://<ip-arduino>/S` -> geeft een 0 of 1 terug. Dit kun je testen door deze link in een browser te openen
- `http://<ip-arduino>/H` of `http://<ip-arduino>/L` om de leds aan of uit te zetten.
Deze manier van een api maken is tegenwoordig standaard en noemt met een [REST API](https://www.transip.nl/knowledgebase/artikel/2997-wat-is-een-rest-api/)

Er zit ook nog de code in om naar `http://<ip-arduino>` te gaan en dan krijg je een simpele website. Dit gaan we niet gebruiken in dit voorbeeld. We gaan deze website op een andere plaats zetten. Omdat deze links via een browser kunnen opgeroepen worden is dit mogelijk. zolang het device vanwaar je de website opent ook via het netwerk aan de arduino kan.

## Index.html
Dit een website die de status toont en de knoppen weergeeft om aan of uit te zetten.
Deze website gaat om de 2s `http://<ip-arduino>/S` oproepen en kijken wat er in deze pagina staat. Staat er een 0 of een 1 in.
Als je op 1 van de 2 knoppen klikt worden de andere calls opgeroepen.
Deze website wordt door github gehost en kun je naartoe via deze link [Tuin Domotica](https://tcplusplus.github.io/tuindomotica/)
Of via deze QR code:
![alt text](media/qr-code.png)

## microcontroller.js
Is de javascript file die de acties/status van de leds gaat oproepen wanneer er op een knop geklikt wordt

## style.css
Is om de knoppen en media een plaats te geven op de website.

## Externe libraries
Als je in de html kijkt zie je dat er 2 externe libraries gebruikt worden:
- Axios: deze javascript library laat je toe om een http-get te doen en dus een call naar de arduino te maken
- bootstrap: een basis CSS library die al een aantal css classes voorgedefineerd heeft zodat je snel iets kunt maken wat er mooi uitziet. Het voorbeeld hier is gekopieerd van de website van bootstrap en verder aangepast.

## hosting
Via github hosting is enkel bereikbaar via `https`. Dit heeft als nadeel dat de website zelf geen calls kan maken naar de arduino omdat deze enkel `http` ondersteund. Dit is een security maatregel. Hier zijn een aantal opties voor:

### Host de pagina op een website die wel http toelaat
Een voorstel om de website op je telenet te hosten als dit nog steeds mogelijk is. Een andere optie is `https://www.freehosting.com/free-hosting.html`
Als het niet lukt vraag me dan zet ik hosting op op mijn rapsberry pi thuis.

### Github laat je toe een eigen dns te linken naar je pagina
Ga naar de settings tab in github en geef een eigen dns op:
`https://github.com/tcplusplus/tuindomotica/settings`

## Make een android app van de pagina
Je kunt nu op je gsm naar deze wbsite gaan iedere keer je domotica wilt aanspreken. Je kunt dan installen dat deze pagina als snelkoppeling op je telefoon komt.
`https://natomasunified.org/kb/add-website-to-mobile-device-home-screen/`
Maar je kunt er ook een nativa Android app van maken via deze website: `https://gonative.io/`
