
var oReq1 = new XMLHttpRequest();
const currenc = [];
oReq1.addEventListener("load", function () {
   const currencies=JSON.parse(this.responseText);
   currenc[0]=currencies.data
  
});
oReq1.open("GET", "https://api.currencyapi.com/v3/currencies?apikey=D0wvavwe31LOghksHOLR8sdFAigv7PcvLBV1uWcD");
oReq1.send();

export default currenc;