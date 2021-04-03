//Step 2: 
// Use D3 to create an event handler
// function updatePage() {
//   d3.json('samples.json').then((data)=> {
//     var dropdownMenu = d3.select("#selDataset"); //# means id // . means class
//       data['names'].forEach((id_num)=> {
//         dropdownMenu.append('option').text(id_num).property('value', id_num);	//.text method grab (name text)
//     });
//   });
// }

// updatePage();

function updatePage(){
d3.json('././samples.json').then((data)=> {
	var dropdown =d3.select('#selDataset');
	data['names'].forEach((nameid)=>{
		dropdown.append('option').text(nameid).property('value', nameid)
	});
 });
}

updatePage();

function buildPlot(name_id){
 d3.json('././samples.json').then((data)=>{
  var samples = data.samples.filter(d=>d.id.toString()===name_id)[0];
  var metadata = data.metadata.filter(d=>d.id.toString()===name_id)[0];
  var otu_ids = samples.otu_ids;
  var samplevalues = samples.samples_values;
  var hover_text=samples.otu_labels;
  var otu_label= otu_ids.map(x=> `otu ${x}`).slice(0,10).reverse()

  var trace_bar= {
      'type': 'bar',
      'y': otu_label,
      'x': samplevalues.slice(0,10).reverse(),
      'text': hover_text.slice(0,10).reverse(),
      'orientation': 'h'
    };
 

 var bar_layout={
   'title': 'Top 10 Clusters Found',
   't': 30,
   'b': 30
 };

 Plotly.newPlot('bar', [trace_bar], [bar_layout]); //potential change square brackets

   var trace_bubble= {
     'type': 'scatter',
     'y': otu_ids,
     'x': samplevalues,
     mode: 'markers',
     text: hover_text,
     marker: {
     size: samplevalues,
        color: otu_ids
      }
    };

    var bubble_layout= {
      xaxis: {title:{text: 'OTU ID'}}
    };


      Plotly.newPlot('bubble', [trace_bubble], [bubble_layout]);

    var tbody=d3.select('tbody');
    tbody.html('')
    
    Object.entries(metadata).forEach(([key,value])=>{
      var row=tbody.append("tr");
      row.text(`${key}: ${value}`);
 
    });

  });
}


