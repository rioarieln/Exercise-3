var planets = [
{
  name: "Alderaan",
  rotation_period: "24",
  orbital_period: "364",
  diameter: "12500"
},
{
  name: "Yavin IV",
  rotation_period: "24",
  orbital_period: "4818",
  diameter: "10200"
},
{
  name: "Hoth",
  rotation_period: "23",
  orbital_period: "549",
  diameter: "7200"
},
{
  name: "Dagobah",
  rotation_period: "23",
  orbital_period: "341",
  diameter: "8900"
},
{
  name: "Bespin",
  rotation_period: "12",
  orbital_period: "5110",
  diameter: "118000"
},
{
  name: "Endor",
  rotation_period: "18",
  orbital_period: "402",
  diameter: "4900"
},
{
  name: "Naboo",
  rotation_period: "26",
  orbital_period: "312",
  diameter: "12120"
}
];

function search() {
  var data = document.getElementById("result-data");
  var input = document.getElementById("input-search").value.toLowerCase();
  var table_planet =
  "<thead><tr><th>Planet Name</th><th>Rotation Periode</th><th>Orbital Periode</th><th>Diameter</th></tr></thead>";
  for (var i = 0; i < planets.length; i++) {
    var names = planets[i].name;
    var rotations = planets[i].rotation_period;
    var orbit = planets[i].orbital_period;
    var diameters = planets[i].diameter;
 
    if (names.toLowerCase().includes(input)) {
      table_planet +=
      "<tr><td>" +
      names +
      "</td><td>" +
      rotations +
      "</td><td>" +
      orbit +
      "</td><td>" +
      diameters;
    }
  }

  data.innerHTML = table_planet;
}
function Function() {
  var planet = document.getElementById("result-data");

  var table =
  "<thead><tr><th>Planet Name</th><th>Rotation Periode</th><th>Orbital Periode</th><th>Diameter</th></tr></thead>";

  for (var j = 0; j < planets.length; j++) {
    var name_planet = planets[j].name;
    var rotation_planet = planets[j].rotation_period;
    var orbital_planet = planets[j].orbital_period;
    var diameter_planet = planets[j].diameter;

    table +=
    "<tr><td>" +
    name_planet +
    "</td><td>" +
    rotation_planet +
    "</td><td>" +
    orbital_planet +
    "</td><td>" +
    diameter_planet;
      }
  planet.innerHTML = table;
}
