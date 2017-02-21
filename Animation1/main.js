
(function(){
   console.log(DATA) 
})()

var index = [];
// build the index
for (var x in DATA) {
   index.push(x);
}

// sort the index
index.sort(function (a, b) {    
   return a == b ? 0 : (a > b ? 1 : -1); 
}); 

nr =1;
console.log(Object.keys(DATA).length);
while (nr <= Object.keys(DATA).length)
{
console.log(DATA[index[nr]]);

$('#content').html(DATA[index[nr]]);
child = jQuery("#container_div_id").children().first().clone();
$(child).html(DATA[index[nr]]);
jQuery("#container_div_id").append(child);
nr += 1;
}
//var n = 1
//widgets = ['Bock', 'Spock', 'Trock','Flock','Iock','Nock','Vasi'];
//$('#content').html(widgets[0]);
//while(n < 7){
//child = jQuery("#container_div_id").children().first().clone();
//$(child).html(widgets[n]);
//jQuery("#container_div_id").append(child);
//n += 1;
//}