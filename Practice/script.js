var data = [
  {
    name: "Horst Henelschwünkler",
    age: 56,
  },
  {
    name: "Horst Wuppman",
    age: 48,
  },
];

for (i = 0; i < data.length; i++) {
  //get table
  var table = document.getElementById("table");
  //create a row
  let row = document.createElement("tr");
  table.append(row);
  //create a cell in that row
  let getName = document.createElement("td");
  // set that cell with the first name
  var Name = document.createTextNode(data[i].name);
  getName.append(Name);

  row.append(getName);

  // same thing as before but with age cell
  let getAge = document.createElement("td");
  //set value
  var Age = document.createTextNode(data[i].age);
  getAge.append(Age);
  row.append(Age);
}
