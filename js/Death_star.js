function destroy_planet(planet)
{
    var image = new Image();
    var planet = document.getElementById(planet);
    planet.setAttribute("src", "sprites/explosion.gif?" + "x=" + Math.random());
    planet.setAttribute("onclick", "");
}

function change_to_sun(star)
{
    var system_solaire_name_one = [  "mercure",
                        "venus",
                        "earth",
                        "mars",
                        "jupiter",
                        "saturne",
                        "uranus",
                        "neptune"];
    var system_solaire_name = [  "mercure",
                        "venus",
                        "terre",
                        "mars",
                        "jupiter",
                        "saturne",
                        "uranus",
                        "neptune"];
    var system_solaire = [
                        document.getElementById("mercure"),
                        document.getElementById("venus"),
                        document.getElementById("earth"),
                        document.getElementById("mars"),
                        document.getElementById("jupiter"),
                        document.getElementById("saturne"),
                        document.getElementById("uranus"),
                        document.getElementById("neptune")];
    for (var i = 0; i < 8; i++) {
        var c = "sprites/" + system_solaire_name_one[i] + ".png";
        system_solaire[i].setAttribute("src", c);
        var s = "planetGET(" + "'" + system_solaire_name[i] + "')";
        system_solaire[i].setAttribute("onclick", s);
    }
    star.setAttribute("src", "sprites/sun.png");
    star.setAttribute("onclick", "planetGET('soleil')");
    music.setAttribute("src", "audio/background.mp3");
}

function change_to_death_star(star)
{
    var system_solaire_name = [  "mercure",
                        "venus",
                        "earth",
                        "mars",
                        "jupiter",
                        "saturne",
                        "uranus",
                        "neptune"];
    var system_solaire = [
                        document.getElementById("mercure"),
                        document.getElementById("venus"),
                        document.getElementById("earth"),
                        document.getElementById("mars"),
                        document.getElementById("jupiter"),
                        document.getElementById("saturne"),
                        document.getElementById("uranus"),
                        document.getElementById("neptune")];
    for (var i = 0; i < 8; i++) {
        var s = "destroy_planet(" + '"' + system_solaire_name[i] + '"' + ")";
        system_solaire[i].setAttribute("onclick", s);
    }
    star.setAttribute("src", "sprites/death_star.png");
    star.setAttribute("onclick", "DeathStar()");
    music.setAttribute("src", "audio/DV.mp3");
}

document.onkeydown = function(event) {
    var star = document.getElementById("sun");
    var music = document.getElementById("music");
	var key_code = event.keyCode;
    if (key_code == 32) {
        if (star.getAttribute("onclick") == "planetGET('soleil')") {
            change_to_death_star(star);
        } else {
            change_to_sun(star);
        }
    }
}

var j = 0;
function death_star_explode()
{
    var system_solaire = [  "mercure",
                        "venus",
                        "earth",
                        "mars",
                        "jupiter",
                        "saturne",
                        "uranus",
                        "neptune"];
    var image = new Image();
    image.src = "sprites/explosion.gif";
    var elem = document.getElementById(system_solaire[j]);
    elem.setAttribute("src", image.src);
    j += 1
}