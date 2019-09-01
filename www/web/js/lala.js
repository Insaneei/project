<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src=" https://code.jquery.com/jquery-1.11.2.js "></script>
<link rel="stylesheet" href="web/css/style.css" type="text/css"/>
<meta charset="utf-8" />
<title>Название сайта</title>
</head>
<body>
<meta charset="utf-8">
<div class="knopka" id="mama">
<button>FOR MISHA</button>
<script type="text/javascript">
	var color = ["#222f3e","#f368e0","#ee5253","#0abde3","#10ac84","222f3e","#5f27cd"];
	var i = 0;
	document.querySelector("button").addEventListener("click",function(){
		i = i < color.length ? ++i : 0;
		document.querySelector("body").style.background = color[i]
	})
</script>
</div>
</body>
<script type="text/javascript" src="web/js/scripts.js"></script>
</html>