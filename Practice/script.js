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
  var table = document.getElementById("table");
  let row = document.createElement("tr");
  table.append(row);

  let getName = document.createElement("th");
  getName.setAttribute("id", "Name" + (i + 1));
  var Name = document.createTextNode(data[i].name);
  getName.append(Name);
  row.append(getName);

  let getAge = document.createElement("th");
  getAge.setAttribute("id", "Age" + (i + 1));
  var Age = document.createTextNode(data[i].age);
  getAge.append(Age);
  row.append(Age);
}
