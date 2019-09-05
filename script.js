$(document).ready(function(){
  let students = [];

  $("#submit").click(function(){

    let newLanguage = $("#language").children("option:selected").val();
    let newFirstName = $("#firstName").val();
    let newLastName = $("#lastName").val();

    if((newLanguage === "") || (newFirstName === "") || (newLastName === "")) {
      alert("Please fill in all the fields.");
    } else {
      let newStudent =
        {
          language: newLanguage,
          firstName: newFirstName,
          lastName: newLastName
        };

        $("#language").children("option:selected").prop("selected", false);
        $("#firstName").val("");
        $("#lastName").val("");

      students.unshift(newStudent);
      printTable(students);
    }
  });

  // Functions that prints the table.
  function printTable(students) {
    let table = "<div class='table'><div class='header'>Language</div><div class='header'>First Name</div><div class='header'>Last Name</div>";
    jQuery.each( students, function( i, val ) {
      table += "<div>"+students[i].language+"</div><div>"+students[i].firstName+"</div><div>"+students[i].lastName+"</div>";
    });
    table += "</div>";
    $(".table").replaceWith(table);
  };
});
