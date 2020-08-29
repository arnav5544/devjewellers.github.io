
function save(){

new Audio('click.mp3').play() 



var invoice_no  = document.getElementById("inno").value
var invoice_date = document.getElementById("ind").value 
var name = document.getElementById("nam").value
var address = document.getElementById("ad").value
var phone = document.getElementById("phone").value

var dis1 = document.getElementById("dis1").value
var qty1 = document.getElementById("qty1").value
var gwt1 = document.getElementById("gwt1").value
var swt1 = document.getElementById("swt1").value
var gwtt1 = document.getElementById("gwtt1").value
var swtt1 = document.getElementById("swtt1").value
var mkg1 = document.getElementById("mkg1").value
var rt1 = document.getElementById("rt1").value
var amt1 = document.getElementById("amt1").value

var dis2 = document.getElementById("dis2").value
var qty2 = document.getElementById("qty2").value
var gwt2 = document.getElementById("gwt2").value
var swt2 = document.getElementById("swt2").value
var gwtt2 = document.getElementById("gwtt2").value
var swtt2 = document.getElementById("swtt2").value
var mkg2 = document.getElementById("mkg2").value
var rt2 = document.getElementById("rt2").value
var amt2 = document.getElementById("amt2").value

var dis3 = document.getElementById("dis3").value
var qty3 = document.getElementById("qty3").value
var gwt3 = document.getElementById("gwt3").value
var swt3 = document.getElementById("swt3").value
var gwtt3 = document.getElementById("gwtt3").value
var swtt3 = document.getElementById("swtt3").value
var mkg3 = document.getElementById("mkg3").value
var rt3 = document.getElementById("rt3").value
var amt3 = document.getElementById("amt3").value

var dis4 = document.getElementById("dis4").value
var qty4 = document.getElementById("qty4").value
var gwt4 = document.getElementById("gwt4").value
var swt4 = document.getElementById("swt4").value
var gwtt4 = document.getElementById("gwtt4").value
var swtt4 = document.getElementById("swtt4").value
var mkg4 = document.getElementById("mkg4").value
var rt4 = document.getElementById("rt4").value
var amt4 = document.getElementById("amt4").value

var dis5 = document.getElementById("dis5").value
var qty5 = document.getElementById("qty5").value
var gwt5 = document.getElementById("gwt5").value
var swt5 = document.getElementById("swt5").value
var gwtt5 = document.getElementById("gwtt5").value
var swtt5 = document.getElementById("swtt5").value
var mkg5 = document.getElementById("mkg5").value
var rt5 = document.getElementById("rt5").value
var amt5 = document.getElementById("amt5").value

var dis6 = document.getElementById("dis6").value
var qty6 = document.getElementById("qty6").value
var gwt6 = document.getElementById("gwt6").value
var swt6 = document.getElementById("swt6").value
var gwtt6 = document.getElementById("gwtt6").value
var swtt6 = document.getElementById("swtt6").value
var mkg6 = document.getElementById("mkg6").value
var rt6 = document.getElementById("rt6").value
var amt6 = document.getElementById("amt6").value

var dis7 = document.getElementById("dis7").value
var qty7 = document.getElementById("qty7").value
var gwt7 = document.getElementById("gwt7").value
var swt7 = document.getElementById("swt7").value
var gwtt7 = document.getElementById("gwtt7").value
var swtt7 = document.getElementById("swtt7").value
var mkg7 = document.getElementById("mkg7").value
var rt7 = document.getElementById("rt7").value
var amt7 = document.getElementById("amt7").value

var dis8 = document.getElementById("dis8").value
var qty8 = document.getElementById("qty8").value
var gwt8 = document.getElementById("gwt8").value
var swt8 = document.getElementById("swt8").value
var gwtt8 = document.getElementById("gwtt8").value
var swtt8 = document.getElementById("swtt8").value
var mkg8 = document.getElementById("mkg8").value
var rt8 = document.getElementById("rt8").value
var amt8 = document.getElementById("amt8").value

var dis9 = document.getElementById("dis9").value
var qty9 = document.getElementById("qty9").value
var gwt9 = document.getElementById("gwt9").value
var swt9 = document.getElementById("swt9").value
var gwtt9 = document.getElementById("gwtt9").value
var swtt9 = document.getElementById("swtt9").value
var mkg9 = document.getElementById("mkg9").value
var rt9 = document.getElementById("rt9").value
var amt9 = document.getElementById("amt9").value

var gtwt_in_g = document.getElementById("twtg").value
var stwt_in_g = document.getElementById("twts").value
var gtwt_in_t = document.getElementById("twttg").value
var stwt_in_t = document.getElementById("twtts").value

var total = document.getElementById("ttl").value

var subg1 = document.getElementById("subg1").value
var subt1 = document.getElementById("subt1").value
var subrs1 = document.getElementById("subrs1").value

var subg2 = document.getElementById("subg2").value
var subt2 = document.getElementById("subt2").value
var subrs2 = document.getElementById("subrs2").value

var discount = document.getElementById("tds").value

var silver_rate = document.getElementById("sptv").value
var gold_rate = document.getElementById("gptv").value

var sub_total = document.getElementById("sttl").value




var invoice_data={

invoice_no:invoice_no,
date:invoice_date,
name:name,
address:address,
phone:phone,

product1:{dis1:dis1,
qty1:qty1,
gwt1:gwt1,
swt1:swt1,
gwtt1:gwtt1,
swtt1:swtt1,
mkg1:mkg1,
rt1:rt1,
amt1:amt1,},


product2:{dis2:dis2,
qty2:qty2,
gwt2:gwt2,
swt2:swt2,
gwtt2:gwtt2,
swtt2:swtt2,
mkg2:mkg2,
rt2:rt2,
amt2:amt2,},


product3:{dis3:dis3,
qty3:qty3,
gwt3:gwt3,
swt3:swt3,
gwtt3:gwtt3,
swtt3:swtt3,
mkg3:mkg3,
rt3:rt3,
amt3:amt3,},


product4:{dis4:dis4,
qty4:qty4,
gwt4:gwt4,
swt4:swt4,
gwtt4:gwtt4,
swtt4:swtt4,
mkg4:mkg4,
rt4:rt4,
amt4:amt4,},


product5:{dis5:dis5,
qty5:qty5,
gwt5:gwt5,
swt5:swt5,
gwtt5:gwtt5,
swtt5:swtt5,
mkg5:mkg5,
rt5:rt5,
amt5:amt5,},


product6:{dis6:dis6,
qty6:qty6,
gwt6:gwt6,
swt6:swt6,
gwtt6:gwtt6,
swtt6:swtt6,
mkg6:mkg6,
rt6:rt6,
amt6:amt6,},


product7:{dis7:dis7,
qty7:qty7,
gwt7:gwt7,
swt7:swt7,
gwtt7:gwtt7,
swtt7:swtt7,
mkg7:mkg7,
rt7:rt7,
amt7:amt7,
},


product8:{
dis8:dis8,
qty8:qty8,
gwt8:gwt8,
swt8:swt8,
gwtt8:gwtt8,
swtt8:swtt8,
mkg8:mkg8,
rt8:rt8,
amt8:amt8,},


product9:{dis9:dis9,
qty9:qty9,
gwt9:gwt9,
swt9:swt9,
gwtt9:gwtt9,
swtt9:swtt9,
mkg9:mkg9,
rt9:rt9,
amt9:amt9,},

weight:{twtg:gtwt_in_g,
twts:stwt_in_g,
twttg:gtwt_in_t,
twtts:stwt_in_t,},

total:total,

given_gold:{subg1:subg1,
subt1:subt1,
subrs1:subrs1,},

given_silver:{subg2:subg2,
subt2:subt2,
subrs2:subrs2,},

discount:discount,

rate:{silver_rate:silver_rate,
gold_rate:gold_rate,},

sub_total:sub_total,

}

	 writeData(invoice_no,invoice_data);
	}