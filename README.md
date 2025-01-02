# Share 1 / Code Lab

Repository für das «Code Lab» im Modul Share 1 mit Max Frischknecht, 6.-27. Januar 2025, HSLU Data Design + Art

---

Liebe Studierende, frohes neues Jahr! 🎉

Im «Share 1 / Code Lab» programmieren wir Datenvisualisierungen mit P5 um uns weiter im Umgang mit Creative Coding und Generativer Gestaltung zu üben. Neu werden wir erstmals mit Daten von einer [API (Application Programming Interface)](https://en.wikipedia.org/wiki/API) arbeiten. Wir nutzen dazu die [öffentlich zugängliche API](https://developers.vam.ac.uk/guide/v2/welcome.html) des [Victoria and Albert Museum (VAM)](https://www.vam.ac.uk/) welche Daten zu hunderttausenden Kunstwerken enthält. Dadurch kommen wir erstmals in Kontakt mit Big Data.

**Im Zentrum steht dabei die Explorative Datenvisualisierung und eure Reflektion über den Prozess**: Ihr überlegt euch zu zweit oder alleine einen Aspekt, der euch an der Sammlung des Museums interessiert. Mit Hilfe der API und euren Visualisierungen versucht ihr mehr herauszufinden und eure Fragen zu beantworten. Dabei geht es nicht darum fix fertige Visualisierungen zu programmieren, versucht mit dem Code zu skizzieren und Erkenntnissen zu generieren, gerne auch mehrmals und auf unterschiedliche Weise. In relativ kurzer Zeit durchläuft ihr dadurch einmal den ganzen Prozess einer Explorativen Datenvisualisierung und lernt wie sich euer Interesse, die Daten die zur Verfügung stehen, eure Visualisierung, Coding-Skills und das Wissen welches ihr gewinnt sich gegenseitig beeinflussen. 

![](img/Prozess-Schema.jpg)

## Ablauf

### Erster Halbtag (6.1.) – Fokus Daten

**Interesse formulieren**

- Formuliert euer Interesse an der Sammlung in Form einer Frage (und ev. Hypothese). **Bleibt dabei simpel – die Zeit ist beschränkt.** Versucht immer festzuhalten, wenn sich euer Interesse über Zeit verändert und wieso (bspw. wenn sich die Frage auf Grund der Daten nicht beantworten lässt, aus Gründen nicht repräsentativ ist, o.ä.). Haltet diese Gedanken im mitgegebenen Dokument *Dokumentation Share 1 Code Lab* fest.
- Als Inspiration könnt ihr euch auch einige der von [V&A publizierten Beispiele](https://developers.vam.ac.uk/notebooks/data-explorations/intro.html) anschauen.

**Daten entdecken & definieren**
 
- Schaut euch die [Sammlung](https://www.vam.ac.uk/collections?type=featured) über die Webseite an, um ein Gefühl für die Daten zu kriegen. 
- Schaut euch die [API-Dokumentation](https://developers.vam.ac.uk/) an um zu verstehen welche Properties es gibt. Wichtig sind hier der [Quick Start](https://developers.vam.ac.uk/guide/v2/quick-start.html) sowie die Introductions zu [Searching](https://developers.vam.ac.uk/guide/v2/search/introduction.html#searching-top), [Filtering](https://developers.vam.ac.uk/guide/v2/filter/introduction.html) sowie [Clustering](https://developers.vam.ac.uk/guide/v2/data-vis/clustering.html#clustering-top). Welche Möglichkeiten bieten sich dadurch für Visualisierungen? (bspw. zeitliche, räumliche oder andere Darstellungen). Ihr könnt dazu auch den bereitgestellten Sketch nutzen um via `console.log`einen Eindruck von den Daten und ihrer Struktur zu erhalten. Natürlich dürft ihr dazu auch kleine Handskizzen anfertigen um Ideen festzuhalten. 
- Durch die [Suchfunktion](https://collections.vam.ac.uk/search/?q=Feminism&year_made_from=&year_made_to=) der Webseite kriegt ihr einn Überblick zu den Kategorien, Personen, Organisationen, Sammlungen, Gallerien, Stilen, Orten und Objekttypen nach denen ihr die API durchsuchen könnt. (Pro Tipp: Wählt ihr eine Kategorie an, bspw. `Feminism`, taucht im [URL](https://collections.vam.ac.uk/search/?id_category=THES48955) der Idenifier der Kategorie (`THES48955`) auf welchen ihr für die API Suche benötigt)

**Ziel** 

- Formuliert gemeinsam ein Interesse und eine Frage. 
- Entscheidet euch bis zum Mittag für eine zentrale Data-Property mit welcher ihr beginnen möchtet. 
- Überlegt euch allenfalls, welche anderen Properties für spannende Vergleiche in Frage kommen (bspw. könnt ihr Orte untersuchen und herausfinden welche Tags ihr dazu findet oder in welchen Jahren Kunstwerke entstanden sind). 
- Haltet eure Gedanken und Entscheide in Stichworten im Dokument *Dokumentation Share 1 Code Lab* fest.

### Zweiter & Dritter Halbtag (13. & 20.1.) – Fokus Explorative Datenvisualisierung

**Daten Visualisieren**

- Entwickelt grobe Skizzen und Ideen was visualisiert werden soll. Diese dienen dazu eine Idee zu haben, bevor ihr in den Code startet. Behaltet dabei die Programmierung im Hinterkopf und wählt im Zweifelsfall eine simplere Variante, wo ihr wisst wie man sie umsetzen kann.
- Falls ihr in einer Gruppe arbeitet, teilt euch verschiedene Aspekte auf. Jede:r sollte mindestens eine Visualisierung programmieren. Dabei kann jede Visualisierung einen Teil-Aspekt eurer Gesammtfrage behandeln.
- Wechselt schnell in P5 und versucht basierend auf dem Starter Template erste Versuche der Visualisierung zu programmieren.
- Es ist natürlich auch erlaubt mehrere Code-Sketches zu machen.
- Beobachten dabei wie sich durch die Visualisierung und das Coding euer Erkenntnissinteresse verändert, weiterentwickelt und verschiebt.

**Ziel** 

- Ihr habt bis zum 20.1. mehrere kleine Visualisierungen in P5 programmiert welche mithilfe der API Daten eure Frage beantworten oder einer Antwort näher kommen. 
– Jede Person in der Gruppe hat mindestens eine Visualisierung programmiert. Diese kann einen Teilaspekt eurer Gesammtfrage beantworten.
- Ihr haltet dabei Gedanken, Erkenntnisse, Probleme in Stichworten fest.

### Vierter Halbtag (27.1.) – Abschluss & Abgabe

- Der letzte halbe Tag dient dazu letzte Anpassungen im Code machen und die Abgabe vorzubereiten.
- Die Abgabe umfasst: 1) P5 Code aufgeräumt & dokumentiert (pro Person), 2) JPG Export der Visualisierung/Skizze (pro Person), 3) Word Dokumentation (gemeinsam)
- Die Arbeit wird im Teams Order `DDA24_4_Share1_CodeLab_out` abgegeben, eine Ordner-Vorlage liegt darin bereit. 

## Lehrnziele

- Ihr habt Erfahrungen mit der API vom V&A Museum gemacht und gelernt wie man einen Daten Query schreibt.
- Ihr wisst wie man die Funktion `d3.json()` nutzt um die Daten von der API in einen Sketch zu laden.
- Ihr wisst wie ihr einen Teil des `response` in einer Variable speichert um damit eine Visualisierung zu machen, z.b. mit `objectCount = response.info.record_count`
- Ihr habt erfahren wie sich im Prozess der Explorativen Datenvisualisierung das eigene Interesse, die Möglichkeiten der API und die Erkenntnisse durch die Visualisierung gegenseitig beeinflussen.

### Nachholbedarf? 

Möchtest du nochmals in Ruhe verstehe wie man mit Daten und APIs in P5 arbeitet? Du kannst dir dazu das [Tutorial](https://www.youtube.com/watch?v=rJaXOFfwGVw&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r) von Dan Shiffmann anschauen. Alternativ kannst du auch selbst in einem neuen Sketch nochmals versuchen Daten von der V&A API zu laden und etwas damit zeichnen.

## Material

- `starter_template` mit P5js Code
- Dokument *Dokumentation Share 1 Code Lab* zum Festhalten eurer Gedanken und Schritte mit vorgegebener Struktur
- `example_project` in P5js und mit einer kleinen Dokumentation
