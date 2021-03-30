//dropdown 

// function updatePage(){
// 	var dropdown=d3.selectAll('#selDataset');
// 	d3.json('samples.json').then((samples)=>{
// 	samples['names'].forEach((name)=>{
// 	dropdown.append('option').text(name).property('value', name);
// 	});
// 	});
// }

//////NO
// 	var dropdownNames=dropdown.id;
// 	var selectedOption=dropdown.value;

// 	console.log(dropdownNames);
// 	console.log(selectedOption);
// };
///END NO

// updatePage();
	// NO d3.json("samples.json").then((samples)=>{


// }
// //use d3 to read in samples.json
function buildPlot(otu_id){

d3.json("samples.json").then((data)=>{
	//
	var sample = data['samples'].filter(object=>object.id)[0];
	var otu_top = (sample['otu_ids'].slice(0,10)).reverse();

 
	console.log(sample);
	console.log(otu_top);
});
}

///IDK yeT
// function buildPlot() {
// 	d3.json('samples.json').then((samples)=>{
// 	console.log(samples)

// 	var otu_ids = samples.samples.map(object => object.otu_ids)

// });

// var data = ['samples.json']

// function buildPlot(){
// 	d3.json(data).then(function(sample){
// 		var names = samples['names'];
// 		var metadata = samples['metadata'];
// 		var samples = samples['samples'];

// 	getSample();
	
// 	var layout = {
// 		type: 'bar'
// 	};

// 	Plotly.newPlot('bar', data, layout)

// 	});
// }

// buildPlot();