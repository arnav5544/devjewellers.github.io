
function get_data(myData){
 



var qr=document.getElementById("qrImg")
	qr.src="https://chart.googleapis.com/chart?chs=500x500&cht=qr&choe=UTF-8&chld=l|0&chl=https://devjewellers.github.io/invoice/?dev-jewellers-"+myData.invoice_no;




var invoice_no  = document.getElementById("inno")
var invoice_date = document.getElementById("ind")
var name = document.getElementById("nam")
var address = document.getElementById("ad")
var phone = document.getElementById("phone")

var dis1 = document.getElementById("dis1")
var qty1 = document.getElementById("qty1")
var gwt1 = document.getElementById("gwt1")
var swt1 = document.getElementById("swt1")
var gwtt1 = document.getElementById("gwtt1")
var swtt1 = document.getElementById("swtt1")
var mkg1 = document.getElementById("mkg1")
var rt1 = document.getElementById("rt1")
var amt1 = document.getElementById("amt1")

var dis2 = document.getElementById("dis2")
var qty12 = document.getElementById("qty2")
var gwt2 = document.getElementById("gwt2")
var swt2 = document.getElementById("swt2")
var gwtt2 = document.getElementById("gwtt2")
var swtt2 = document.getElementById("swtt2")
var mkg2 = document.getElementById("mkg2")
var rt2 = document.getElementById("rt2")
var amt2 = document.getElementById("amt2")

var dis3 = document.getElementById("dis3")
var qty3 = document.getElementById("qty3")
var gwt3 = document.getElementById("gwt3")
var swt3 = document.getElementById("swt3")
var gwtt3 = document.getElementById("gwtt3")
var swtt3 = document.getElementById("swtt3")
var mkg3 = document.getElementById("mkg3")
var rt3 = document.getElementById("rt3")
var amt3 = document.getElementById("amt3")

var dis4 = document.getElementById("dis4")
var qty4 = document.getElementById("qty4")
var gwt4 = document.getElementById("gwt4")
var swt4 = document.getElementById("swt4")
var gwtt4 = document.getElementById("gwtt4")
var swtt4 = document.getElementById("swtt4")
var mkg4 = document.getElementById("mkg4")
var rt4 = document.getElementById("rt4")
var amt4 = document.getElementById("amt4")

var dis5 = document.getElementById("dis5")
var qty5 = document.getElementById("qty5")
var gwt5 = document.getElementById("gwt5")
var swt5 = document.getElementById("swt5")
var gwtt5 = document.getElementById("gwtt5")
var swtt5 = document.getElementById("swtt5")
var mkg5 = document.getElementById("mkg5")
var rt5 = document.getElementById("rt5")
var amt5 = document.getElementById("amt5")

var dis6 = document.getElementById("dis6")
var qty6 = document.getElementById("qty6")
var gwt6 = document.getElementById("gwt6")
var swt6 = document.getElementById("swt6")
var gwtt6 = document.getElementById("gwtt6")
var swtt6 = document.getElementById("swtt6")
var mkg6 = document.getElementById("mkg6")
var rt6 = document.getElementById("rt6")
var amt6 = document.getElementById("amt6")

var dis7 = document.getElementById("dis7")
var qty7 = document.getElementById("qty7")
var gwt7 = document.getElementById("gwt7")
var swt7 = document.getElementById("swt7")
var gwtt7 = document.getElementById("gwtt7")
var swtt7 = document.getElementById("swtt7")
var mkg7 = document.getElementById("mkg7")
var rt7 = document.getElementById("rt7")
var amt7 = document.getElementById("amt7")

var dis8 = document.getElementById("dis8") 
var qty8 = document.getElementById("qty8") 
var gwt8 = document.getElementById("gwt8")  
var swt8 = document.getElementById("swt8") 
var gwtt8 = document.getElementById("gwtt8") 
var swtt8 = document.getElementById("swtt8")
var mkg8 = document.getElementById("mkg8")
var rt8 = document.getElementById("rt8")
var amt8 = document.getElementById("amt8")

var dis9 = document.getElementById("dis9")
var qty9 = document.getElementById("qty9")
var gwt9 = document.getElementById("gwt9")
var swt9 = document.getElementById("swt9")
var gwtt9 = document.getElementById("gwtt9")
var swtt9 = document.getElementById("swtt9")
var mkg9 = document.getElementById("mkg9")
var rt9 = document.getElementById("rt9")
var amt9 = document.getElementById("amt9")

var gtwt_in_g = document.getElementById("twtg")
var stwt_in_g = document.getElementById("twts")
var gtwt_in_t = document.getElementById("twttg")
var stwt_in_t = document.getElementById("twtts")

var total = document.getElementById("tamt")

var subg1 = document.getElementById("subg1")
var subt1 = document.getElementById("subt1")
var subrs1 = document.getElementById("subrs1")

var subg2 = document.getElementById("subg2")
var subt2 = document.getElementById("subt2")
var subrs2 = document.getElementById("subrs2")

var discount = document.getElementById("tds")

var silver_rate = document.getElementById("sptv")
var gold_rate = document.getElementById("gptv")

var sub_total = document.getElementById("sttl")






invoice_no.value=myData.invoice_no 
invoice_date.value=myData.date 
name.value=myData.name 
address.value=myData.address 
phone.value=myData.phone 

dis1.value=myData.product1.dis1 
qty1.value=myData.product1.qty1 
gwt1.value=myData.product1.gwt1 
swt1.value=myData.product1.swt1 
gwtt1.value=myData.product1.gwtt1 
swtt1.value=myData.product1.swtt1 
mkg1.value=myData.product1.mkg1 
rt1.value=myData.product1.rt1 
amt1.value=myData.product1.amt1 


dis2.value=myData.product2.dis2 
qty2.value=myData.product2.qty2 
gwt2.value=myData.product2.gwt2 
swt2.value=myData.product2.swt2 
gwtt2.value=myData.product2.gwtt2 
swtt2.value=myData.product2.swtt2 
mkg2.value=myData.product2.mkg2 
rt2.value=myData.product2.rt2 
amt2.value=myData.product2.amt2 


dis3.value=myData.product3.dis3 
qty3.value=myData.product3.qty3 
gwt3.value=myData.product3.gwt3 
swt3.value=myData.product3.swt3 
gwtt3.value=myData.product3.gwtt3 
swtt3.value=myData.product3.swtt3 
mkg3.value=myData.product3.mkg3 
rt3.value=myData.product3.rt3 
amt3.value=myData.product3.amt3 


dis4.value=myData.product4.dis4 
qty4.value=myData.product4.qty4 
gwt4.value=myData.product4.gwt4 
swt4.value=myData.product4.swt4 
gwtt4.value=myData.product4.gwtt4 
swtt4.value=myData.product4.swtt4 
mkg4.value=myData.product4.mkg4 
rt4.value=myData.product4.rt4 
amt4.value=myData.product4.amt4 


dis5.value=myData.product5.dis5 
qty5.value=myData.product5.qty5 
gwt5.value=myData.product5.gwt5 
swt5.value=myData.product5.swt5 
gwtt5.value=myData.product5.gwtt5 
swtt5.value=myData.product5.swtt5 
mkg5.value=myData.product5.mkg5 
rt5.value=myData.product5.rt5 
amt5.value=myData.product5.amt5 


dis6.value=myData.product6.dis6 
qty6.value=myData.product6.qty6 
gwt6.value=myData.product6.gwt6 
swt6.value=myData.product6.swt6 
gwtt6.value=myData.product6.gwtt6 
swtt6.value=myData.product6.swtt6 
mkg6.value=myData.product6.mkg6 
rt6.value=myData.product6.rt6 
amt6.value=myData.product6.amt6 

dis7.value=myData.product7.dis7 
qty7.value=myData.product7.qty7 
gwt7.value=myData.product7.gwt7 
swt7.value=myData.product7.swt7 
gwtt7.value=myData.product7.gwtt7 
swtt7.value=myData.product7.swtt7 
mkg7.value=myData.product7.mkg7 
rt7.value=myData.product7.rt7 
amt7.value=myData.product7.amt7 


dis8.value=myData.product8.dis8  
qty8.value=myData.product8.qty8 
gwt8.value=myData.product8.gwt8 
swt8.value=myData.product8.swt8 
gwtt8.value=myData.product8.gwtt8 
swtt8.value=myData.product8.swtt8 
mkg8.value=myData.product8.mkg8 
rt8.value=myData.product8.rt8 
amt8.value=myData.product8.amt8 


dis9.value=myData.product9.dis9 
qty9.value=myData.product9.qty9 
gwt9.value=myData.product9.gwt9 
swt9.value=myData.product9.swt9 
gwtt9.value=myData.product9.gwtt9 
swtt9.value=myData.product9.swtt9 
mkg9.value=myData.product9.mkg9 
rt9.value=myData.product9.rt9 
amt9.value=myData.product9.amt9 

gtwt_in_g.value=myData.weight.twtg 
stwt_in_g.value=myData.weight.twts 
gtwt_in_t.value=myData.weight.twttg
stwt_in_t.value=myData.weight.twtts 

total.value= myData.total 

subg1.value= myData.given_gold.subg1 
subt1.value= myData.given_gold.subt1 
subrs1.value= myData.given_gold.subrs1 

subg2.value= myData.given_silver.subg2 
subt2.value= myData.given_silver.subt2 
subrs2.value= myData.given_silver.subrs2 

discount.value= myData.discount 

silver_rate.value= myData.rate.silver_rate 
gold_rate.value= myData.rate.gold_rate 

sub_total.value= myData.sub_total 
}
