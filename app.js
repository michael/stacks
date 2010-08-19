$(function() {
  var c = new uv.Collection(artists_fixture);

  // construct a visualization based on that data
  var vis = new uv.Stacks(c, {
    measures: ['genres'],
    params: {}
  });
  

  $('#sidebar').html(' \
  <h3>Group by</h3> \
  <select id="groups"> \
    <option value="genres" selected="selected">Genres</option> \
    <option value="origin">Origin</option> \
  </select> \
  ');
  
  $('#groups').change(function() {
    vis.changeGroup($(this).val());
  });
  
  vis.render();
});