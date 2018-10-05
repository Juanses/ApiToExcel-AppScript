var TrelloClass = function(key, token){
  this.llave = key;
  this.token = token;
  this.url = "https://api.trello.com/1/"
  
  this.getChecklistsFromCard = function (card){
    var requesturl = this.url+"cards/"+card+"/checklists?key="+this.llave+"&token="+this.token;
    var response = UrlFetchApp.fetch(requesturl);
    var json = response.getContentText();
    var data = JSON.parse(json);
    return data;
  }
  
  this.getCardsfromList = function (list){
    var requesturl = this.url+"lists/"+list+"/cards?key="+this.llave+"&token="+this.token;
    var response = UrlFetchApp.fetch(requesturl);
    var json = response.getContentText();
    var data = JSON.parse(json);
    return data;
  }
  
}