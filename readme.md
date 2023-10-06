# Energieagentur Bünzli Webseite
## Was kann die Webseite?
### Zählerstand anzeigen
Unter dem Reiter "Zählerstände" kann man den Zählerstand vom Bezug wie Einspeisung im Jahresblick ersehen.

### Täglicher Verbrauch anzeigen
Unter dem Reiter "Verbrauch" kann man den Bezug wie die Einspeisung für jeden Tag ersehen.

### Exportierung von Daten
Nach der Generierung vom Zählerstand, kann man diese Daten als CSV sowie als JSON exportieren, in dem Format, wie angegeben.
Zudem ist es möglich, diese Daten an einem externem Server weiterzuleiten

### Upload von Daten
Bei "Upload", kann man eigene, neue XML Daten hochladen, welche automatisch als SDAT oder ESL erkannt wird.
# 
###
## Wie lasse ich die Webseite laufen?
### 1. Webseite herunterladen
```
git clone https://github.com/anticn/m306-project
cd m306-project
```
### 2. Ein Server herunterladen
```
npm i -g serve
```
### 3. Server starten
```
serve
```
### 3. Falls kein Node.js vorhanden ist
- Installiere [Node.js](https://www.guru99.com/download-install-node-js)
