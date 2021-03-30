//dropdown 
// function dropDown(){
// 	var 
// }
// //use d3 to read in samples.json

d3.json("samples.json").then((samples)=>{
	console.log(samples)
});

// function buildPlot() {
// 	d3.json('../../samples.json').then(function(data){
// 		console.log(data);
// 	});

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