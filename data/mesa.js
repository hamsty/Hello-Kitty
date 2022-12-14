var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.width = 600;
ctx.height = 600;
printed = false

function atualizar() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var img = this.responseText.split("|");
            for (var i = 0; i < 144; i++) {
                var y = i / 12 | 0;
                var x = i - 12 * y;
                x = y % 2 == 1 ? 11 - x : x;
                if (!printed) {
                    console.log([x, y])
                }
                ctx.fillStyle = img[i];
                ctx.strokeStyle = "white";
                ctx.fillRect(x * 50, y * 50, 50, 50);
                ctx.strokeRect(x * 50, y * 50, 50, 50)
            }
            printed = true
        }
    };
    xhttp.open("GET", "/show", true);
    xhttp.send();
};

setInterval(atualizar, 100);