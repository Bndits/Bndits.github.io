<html>
<head>
<title>Media Player</title>
</head>
<body><label for="videos">Choose a video:</label>
<select id="videos">
</select>
<iframe id="player" width=100% height=100% allow="autoplay; encrypted-media" frameborder="0"></iframe>
<script>
var url = document.getElementById("url");
var select = document.getElementById("videos");
var songIds = ["jsDGb3if9bw","nujn6wbr-e8"];
var songNames = ["雨とペトラ","As it was"];
var currentIndex = 0;
var player = document.getElementById("player");

for (var i = 0; i < songIds.length; i++) {
  var elem = document.createElement("option");
  elem.value = songIds[i];
  elem.innerText = songNames[i];
  select.appendChild(elem);
}

select.onchange = function () {
  player.src = "https://youtube.com/embed/" + select.value + "?&autoplay=1";
}
</script>
</body></html>
