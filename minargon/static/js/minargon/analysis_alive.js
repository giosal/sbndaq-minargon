window.setInterval(function() {
    d3.json($SCRIPT_ROOT + "/key/MONITOR_ONLINE_ALIVE", function(result) { 
      var timestamp = result.value;
      var time = moment.unix(timestamp).format("MM/DD hh:mm:ss")
      $("#analysis-alive-time").html("Analysis alive time: " + time);
    });

}, 5000);

window.setInterval(function() {
    d3.json($SCRIPT_ROOT + "/key/MONITOR_SNAPSHOT_ALIVE", function(result) { 
      var timestamp = result.value;
      var time = moment.unix(timestamp).format("MM/DD hh:mm:ss")
      $("#snapshot-alive-time").html("Snapshot alive time: " + time);
    });

}, 5000);

window.setInterval(function() {
  d3.json($SCRIPT_ROOT + "/key/this_run_no", function(result) {
    var run = result.value;
   $("#this-run").html("Run: " + run);
  });
}, 5000);

