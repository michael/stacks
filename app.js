$(function() {
  var c = new uv.Collection(artists_fixture);

  // construct a visualization based on that data
  var vis = new uv.Stacks(c, {
    measures: ['genres'],
    params: {}
  });
  
  vis.render();
});