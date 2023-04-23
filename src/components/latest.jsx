var oReq = new XMLHttpRequest();

const items = [];
oReq.addEventListener("load", function () { 
    const latest=JSON.parse(this.responseText);
    items[0]=latest.data;

});
oReq.open("GET", "https://api.currencyapi.com/v3/latest?apikey=D0wvavwe31LOghksHOLR8sdFAigv7PcvLBV1uWcD");

oReq.send();

export default items;