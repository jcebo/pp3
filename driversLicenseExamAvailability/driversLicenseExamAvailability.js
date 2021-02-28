var interval = window.setInterval(check, 3500)
// Odśwież tabelę z dostępnymi datami przez przejście do następnego miesiąca i powrót do poprzedniego (obecnego)
function check(r, l){
var r = document.getElementsByClassName("icon right scheduleNextMonthLink");
r[0].click();
var l = document.getElementsByClassName("icon left schedulePrevMonthLink");
l[0].click();
// Jeśli jest jakikolwiek dostępny egzamin odtwórz dźwięk
if($("td").hasClass("available")){var audio = new Audio("https://notificationsounds.com/storage/sounds/file-44_loving_you.ogg");
audio.play();}};
