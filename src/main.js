import { Triangle } from './triangle.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const side1 = parseInt($("#firstSide").val());
    const side2 = parseInt($("#secondSide").val());
    const side3 = parseInt($("#thirdSide").val());

    let userTriangle = new Triangle(side1, side2, side3);

    $(".triangleType").text(userTriangle.checkType());
    $("#triangleResult").show();

  });

});