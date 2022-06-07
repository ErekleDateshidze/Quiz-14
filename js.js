// var fruit1 = ["ვაშლი", "მსხალი", "ატამი"];
// var reversed = fruit1.reverse();
// document.write(reversed);


// var month = ["იანვარი-0", "თებერვალი-1", "მარტი-2", "აპრილი-3", "მაისი-4", "ივნისი-5", "ივლისი-6", "აგვისტო-7", "სექტემბერი-8", "ოქტომბერი-9", "ნოემბერი-10", "დეკემბერი-11"];

var is;
var go;
var season = new Date();
var month = season.getMonth();
var day = season.getDate();


if (month < 4 && day >= 4) {
    is = "ცივა";
    go = " წავედით სათხილამუროდ ან საგუნდაოდ"
} else if (month < 8 && month > 4) {
    is = "ცხელა";
    go = " ზღვაზე წავიდეთ"
} else if (month > 8 && month < 11) {
    is = "ცივა";
    go = " წავედით სათხილამუროდ ან საგუნდაოდ"
}

document.write(is + " " + month + " " + day + " " + go);