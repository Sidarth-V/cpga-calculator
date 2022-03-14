let count = 0;
let total = 0;

function addRow() {
  var grade = document.getElementById("grade");
  var credits = document.getElementById("credits");
  var table = document.getElementById("myTableData");

  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);

  row.insertCell(0).innerHTML = grade.value;
  row.insertCell(1).innerHTML = credits.value;
  row.insertCell(2).innerHTML =
    '<input type="button" value = "Delete" class="button-1" onClick="Javacsript:deleteRow(this)">';
  total += parseInt(credits.value);

  switch (grade.value) {
    case "S":
      count += 10 * parseInt(credits.value);
      break;
    case "A":
      count += 9 * parseInt(credits.value);
      break;
    case "B":
      count += 8 * parseInt(credits.value);
      break;
    case "C":
      count += 7 * parseInt(credits.value);
      break;
    case "D":
      count += 6 * parseInt(credits.value);
      break;
    case "E":
      count += 5 * parseInt(credits.value);
      break;
    case "F":
      count += 4 * parseInt(credits.value);
      break;
  }

  console.log(count / total);

  var heading1 = document.getElementById("heading1");
  heading1.firstChild.nodeValue = "GPA: " + count / total;
}

function deleteRow(obj) {
  var index = obj.parentNode.parentNode.rowIndex;
  var table = document.getElementById("myTableData");

  credits = parseInt(table.rows[index].cells.item(1).innerHTML);

  table.deleteRow(index);

  switch (grade.value) {
    case "S":
      count -= 10 * credits;
      break;
    case "A":
      count -= 9 * credits;
      break;
    case "B":
      count -= 8 * credits;
      break;
    case "C":
      count -= 7 * credits;
      break;
    case "D":
      count -= 6 * credits;
      break;
    case "E":
      count -= 5 * credits;
      break;
    case "F":
      count -= 4 * credits;
      break;
  }

  total -= credits;

  var heading1 = document.getElementById("heading1");
  heading1.firstChild.nodeValue = "GPA: " + count / total;
}

total_credits = 0;
total_gpa = 0;


function addRow1() {
  var credits_taken = document.getElementById("credits_taken");
  var sem_gpa = document.getElementById("sem_gpa");
  var table = document.getElementById("myTableData2");

  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);

  row.insertCell(0).innerHTML = credits_taken.value;
  row.insertCell(1).innerHTML = sem_gpa.value;
  row.insertCell(2).innerHTML =
    '<input type="button" value = "Delete" class="button-1" onClick="Javacsript:deleteRow1(this)">';

  total_credits += parseInt(credits_taken.value);
  total_gpa += parseFloat(sem_gpa.value) * parseInt(credits_taken.value);

  var heading2 = document.getElementById("heading2");
  heading2.firstChild.nodeValue = "CGPA: " + total_gpa/total_credits;
}

function deleteRow1(obj) {
  var index = obj.parentNode.parentNode.rowIndex;
  var table = document.getElementById("myTableData2");

  credits = parseInt(table.rows[index].cells.item(0).innerHTML);
  gpa = parseFloat(table.rows[index].cells.item(1).innerHTML);

  table.deleteRow(index);

  total_credits -= credits;
  total_gpa -= gpa * credits;

  var heading2 = document.getElementById("heading2");
  heading2.firstChild.nodeValue = "CGPA: " + total_gpa/total_credits;
}
