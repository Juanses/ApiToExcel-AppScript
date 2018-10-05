function myFunction() {
  var Trello = new TrelloClass(llave, token);

  var cards = Trello.getCardsfromList("5b604cf3de3db23095c24b10");
  
  for (var key in cards) {
    Logger.log(cards[key].name);    
  }
  
};

function getchecklists(){
  var Trello = new TrelloClass(llave, token);
  var excel = new ExcelClass();
  excel.setSheetbyName("Checklists");
  var cols = ["id","name"];
  excel.setCols(cols);
  
  var checklistarray = Trello.getChecklistsFromCard("OY8kFa5L");
  var row = 2;
  for (var key in checklistarray) {
    excel.setValuesinRange(row, 1, 1, 2,[[checklistarray[key].id,checklistarray[key].name]]);
    row++;
  }
}