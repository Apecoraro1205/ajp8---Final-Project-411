"use strict";
        $(function() {

            //code for validation of input
            $('#standardFill').validate() //validation
            $('#standardFill').submit(function(e) {
                e.preventDefault(); //Prevents from submitting (which is the default action)

                // if the form is not valid don't do anything else but return
                if (!$('#standardFill').valid()) return;

                function calcImperialBMIFeetAndInches(heightInFeet, heightInInches, weightInPounds) {
                    // protection if I am passed strings make the number so I can apply isNaN
                    heightInFeet = Number(heightInFeet);

                    heightInInches = Number(heightInInches);

                    weightInPounds = Number(weightInPounds);

                    if (isNaN(heightInFeet) || isNaN(heightInInches) || isNaN(weightInPounds)) {
                        console.log("calcImperialBMIFeetAndInches - expects all inputs valid numbers");
                        throw "calcImperialBMIFeetAndInches - expects all inputs valid numbers";
                    }

                    var height = (heightInFeet * 12) + heightInInches;

                    return calcImperialBMI(height, weightInPounds);
                }

                function calcImperialBMI(heightInInches, weightInPounds) {
                    // protection if I am passed strings make the number so I can apply isNaN
                    heightInInches = Number(heightInInches);
                    weightInPounds = Number(weightInPounds);

                    if (isNaN(heightInInches) || isNaN(weightInPounds)) {
                        console.log("calcImperialBMI - expects all inputs valid numbers");
                        throw "calcMetricImperialBMI - expects all inputs valid numbers";

                        var BMI;
                        BMI = (weightInPounds * 703) / (heightInInches * heightInInches);
                        return BMI;
                    }
                }

                var myForm = document.getElementById("standardFill"); //displays input
                var n1 = document.getElementById("weightInPounds").value;
                var n2 = document.getElementById("heightInInches").value;
                var n3 = document.getElementById("heightInFeet").value;
                document.getElementById("BMIImperial").innerHTML = (n1 * 703) / (n3 * 12 + +n2) ** 2;
                return false;
            });



            $('#metricFill').validate() //validation
            $('#metricFill').submit(function() {
                event.preventDefault(); //Prevents from submitting (which is the default action)

                // if the form is not valid don't do anything else but return
                if (!$('#metricFill').valid()) return;

                function calcMetricBMICMandMM(heightInCentimeters, heightInMillimeters, weightInKilos) {

                    // protection if I am passed strings make the number so I can apply isNaN
                    heightInCentimeters = Number(heightInCentimeters);
                    heightInMillimeters = Number(heightInMillimeters);
                    weightInKilos = Number(weightInKilos);

                    if (isNaN(heightInCentimeters) || isNaN(heightInMillimeters) || isNaN(weightInKilos)) {
                        console.log("calcMetricBMICMandMM - expects all inputs valid numbers");
                        throw "calcMetricBMICMandMM - expects all inputs valid numbers";
                    }


                    var combinedHeight = (heightInCentimeters) + (heightInMillimeters / 10);

                    return calcMetricBMI(combinedHeight, weightInKilos);

                }

                function calcMetricBMI(heightInCentimeters, weightInKilos) {

                    // protection if I am passed strings make the number so I can apply isNaN
                    heightInCentimeters = Number(heightInCentimeters);
                    weightInKilos = Number(weightInKilos);

                    if (isNaN(heightInCentimeters) || isNaN(weightInKilos)) {
                        console.log("calcMetricBMI - expects all inputs valid numbers");
                        throw "expects all inputs valid numbers";
                    }

                    var BMI;
                    var heightInMeters = heightInCentimeters / 100;
                    BMI = (weightInKilos) / (heightInMeters * heightInMeters);
                    return BMI;
                }

                var myForm2 = document.getElementById("metricFill"); //displays input
                var j1 = document.getElementById("heightInCentimeters").value;
                var j2 = document.getElementById("weightInKilos").value;
                document.getElementById("BMIMetric").innerHTML = j2 / (j1 / 100) ** 2;
                return false;
            });

            //code for dialog box and the visual            
            $("#tabs").tabs(); //adds tabs

            $("#calculator").dialog({ //adds calculator
                draggable: false,
                width: 600
            });

        });

        //Code for Metric Standard Calculator Calculations
