export function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}


// $(document).ready(function() {
//   $("#formOne").submit(function(event) {
//       event.preventDefault();
//       const a = parseInt($("input#firstSide").val());
//       const b = parseInt($("input#secondSide").val());
//       const c = parseInt($("input#thirdSide").val());

//       if (a + b <= c || a + c <= b || c + b <= a) {
//           alert("Not a triangle!");
//       } else if (a === b && b === c)  {
//           $(".triangleType").text("Equilateral");
//           $("#triangleResult").show();
//       } else if (a === b || c === b || c === a) {
//           $(".triangleType").text("Isosceles");
//           $("#triangleResult").show();
//       } else {
//           $(".triangleType").text("Scalene");
//           $("#triangleResult").show();
//           }

//   });

// });