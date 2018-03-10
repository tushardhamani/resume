var width = 960, height = 500;
    var color = d3.scale.category20();
    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height);

d3.csv('courses.csv', function(data) {

    var nodes = [], edges = [];

    for (var k = 0, n = data.length; k < n; k += 1) {
        nodes.push({name: data[k].name, size: data[k].size, id: data[k].id}),
        edges.push({source: data[k].id, target: data[k].parent});       
    }
});

    var force = d3.layout.force()
       .nodes(nodes
       .links(edges)
       .size([width, height])
       .start();

    var link = svg.selectAll(".link")
        .data(edges)
        .enter().append("line")
        .attr("class", "link")

    var node = svg.selectAll(".node")
        .data(nodes)
        .enter().append("circle")
        .attr("class", "node")
        .attr("r", nodes.size)
