
var oReq1 = new XMLHttpRequest();
const currenc = [{}];
oReq1.addEventListener("load", function () {
   if (this.readyState == 4 && this.status == 200) {
      const currencies=JSON.parse(this.responseText);
      currenc[0]=currencies.data;
  }
   
  
});
oReq1.open("GET", "https://api.currencyapi.com/v3/currencies?apikey=SHHDg1qdGx4wtLMp0QNMkWAlr3VtWCaZwCgzfkYj");
oReq1.send();

export default currenc;