
    // get the user inputs
while (choice !=0){
    var value1 = parseInt(prompt('enter first value'));
    var value2 = parseInt(prompt('enter the second value'));
    var choice = (prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide') || "a");

    var a = "a"
    var s = "s"
    var m = "m"
    var d = "d"






    if (choice == a){
      (alert((Number (value1) + Number (value2))));
    }else if (choice == s){
      (alert((Number (value1) - Number (value2))));
    }else if (choice == m){
      (alert((Number (value1) * Number (value2))));
    }else if (choice == d){
      (alert((Number (value1) / Number (value2))));
    }else {
      (alert((Number (value1) + Number (value2))));
    }
}
