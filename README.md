# tuindomotica
A simple app to turn on/off lights in the garden

## Microcontroller
De code is een voorbeeld hoe je de microcontroller run gebruiken via een API.
Het runt een webserver en via:
- `http://<ip-arduino>/S` -> geeft een 0 of 1 terug. Dit kun je testen door deze link in een browser te openen
- `http://<ip-arduino>/H` of `http://<ip-arduino>/L` om de leds aan of uit te zetten.

Er zit ook nog de code in om naar `http://<ip-arduino>` te gaan en dan krijg je een simpele website. Dit gaan we niet gebruiken in dit voorbeeld. We gaan deze website op een andere plaats zetten. Omdat deze links via een browser kunnen opgeroepen worden is dit mogelijk. zolang het device vanwaar je de website opent ook via het netwerk aan de arduino kan.

## Index.html
Dit een website die de status toont en de knoppen weergeeft om aan of uit te zetten.
Deze website wordt door gihub gehost en kun je naartoe via deze link [Tuin Domotica](https://tcplusplus.github.io/tuindomotica/)

Of via deze QR code:
![alt text](media/qr-code.png)

## microcontroller.js
Is de javascript file die de acties/status van de leds gaat oproepen wanneer er op een knop geklikt wordt

## style.css
Is om de knoppen en media een plaats te geven op de website.

