let data;
let cnv;

// SUCHE: Einige Beispiele für API Queries in Form einer URL
let search_by_term = 'https://api.vam.ac.uk/v2/objects/search?q="luzern"';
let search_by_objectname = 'https://api.vam.ac.uk/v2/objects/search?q_object_name="book"';
let search_by_objecttype = 'https://api.vam.ac.uk/v2/objects/search?q_object_type="book"';
let search_by_place = "https://api.vam.ac.uk/v2/objects/search?q_place_name=London";

// FILTER: Einige Beispiele um die Ergebnisse einzuschränken, hier arbeitet man mit sog. Identifiers
// Den Identifier müsst ihr über einen API Response oder eine Webseiten-Suche herausfinden
// AAT53241 steht für 'etching', x37878 für 'watercolor drawing'
let filter_by_technique = "https://api.vam.ac.uk/v2/objects/search?id_technique=x37878";
// x37881 steht für 'documentary'
let filter_by_style = "https://api.vam.ac.uk/v2/objects/search?id_style=x37881";

// DATEN und BEGRIFFE
// Suche nach 'Feminism' zwischen 1960-1970
let search_by_term_and_year = "https://api.vam.ac.uk/v2/objects/search?q=feminism&year_made_from=1960&year_made_to=1970";

function setup() {
  cnv = createCanvas(400, 400);
  noLoop();

  d3.json(search_by_term_and_year).then((response) => {
    data = response;
    console.log("Reponse", data, data["records"][0]._primaryDate);
	redraw();
  });
}

function draw() {
  background(200, 100, 200);
  textAlign(CENTER);
  textSize(20);
  text("Happy New Year DDA23!", width / 2, height / 2);
  console.log("Data in draw", data);
}

// Funktion um JPGs zu exportieren
function keyPressed() {
  if (key == "s") {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    var hh = String(today.getHours());
    var min = String(today.getMinutes());
    var sec = String(today.getSeconds());

    today = mm + "/" + dd + "/" + yyyy;
    let filename =
      yyyy + "-" + mm + "-" + dd + "-" + hh + "-" + min + "-" + sec;

    console.log(key);
    saveCanvas(cnv, filename, "jpg");
  }
}
