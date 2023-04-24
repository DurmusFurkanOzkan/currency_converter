
var oReq = new XMLHttpRequest();

const items = [{}];
oReq.addEventListener("load", function () { 
    
    if (this.readyState == 4 && this.status == 200) {
        const latest=JSON.parse(this.responseText);
        test(latest.data);
    }
});
function test(arr){

    items[0]=arr;
}
oReq.open("GET", "https://api.currencyapi.com/v3/latest?apikey=SHHDg1qdGx4wtLMp0QNMkWAlr3VtWCaZwCgzfkYj");

oReq.send();

export default items;