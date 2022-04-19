function myFunction() {
    var D100 = document.getElementById("Dnumber").value;
    var location = document.getElementById("location").selectedIndex;
        console.log(location)
        console.log(D100)

        //I.Mérsékelt övi erdő
        if ( location == 0 && D100 <=15){
            document.getElementById("bestName").innerHTML = "Állatok";
        }
        if ( location == 0 && D100 == 17 || D100 == 16 ){
                document.getElementById("bestName").innerHTML = "Büdösgyík";

        }



        //II.Dzsungel
        if ( location == 1 && D100 <=45){
            document.getElementById("bestName").innerHTML = "Állatok";
        }
        if ( location == 1 && D100 == 46 && D100 <= 52 ){
                document.getElementById("bestName").innerHTML = "Buzzgoblin";
        }
        if ( location == 1 && D100 == 53){
            document.getElementById("bestName").innerHTML = "Bosszúálló";
          
}}

  

