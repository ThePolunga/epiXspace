function add_moon(data)
{
    //new moon list var
    var element = document.getElementById("moon_list");
    var text = document.createElement("a");
        text.setAttribute("id", "lune_title");
        var node = document.createTextNode("Moon(s) of " + data.englishName + ": ");
        text.appendChild(node);
        element.appendChild(text);
    for (i = 0; data.moons[i]; i++) {
        var link = "planetGETfromMoon('"+ data.moons[i].rel +"')";
        var para = document.createElement("a");
        para.setAttribute("id", "lune");
        para.setAttribute("href", "#");
        para.setAttribute("onclick",link);
        var name = document.createTextNode(data.moons[i].moon + "; ");
        console.log(name);
        para.appendChild(name);
        element.appendChild(para);
    }
}

var callback = function(data)
{
    //moons display and reset old moons
    while (document.getElementById("lune")) {
        lune = document.getElementById("lune");
        lune.remove();
    }
    if (document.getElementById("lune_title")) {
        moon_title = document.getElementById("lune_title");
        moon_title.remove();
    }
    if (data.moons) {
        add_moon(data);
    }

    //planet info display

    var englishName = document.getElementById("EnglishName");
    englishName.innerHTML = "Name: " + data.englishName;

    var inclination = document.getElementById("inclination");
    inclination.innerHTML = "Inclination to eliptic: " + data.inclination + " degrees";

    var density = document.getElementById("density");
    density.innerHTML = "Density: " + data.density + " g.cm³";

    var gravity = document.getElementById("gravity");
    gravity.innerHTML = "Dravity: " + data.gravity + " m.s⁻²";

    var meanRadius = document.getElementById("meanRadius");
    meanRadius.innerHTML = "Radius: " + data.meanRadius + " km";

    var sideralOrbit = document.getElementById("sideralOrbit");
    sideralOrbit.innerHTML = "Sideral Orbit: " + data.sideralOrbit + " days";

    var sideralRotation = document.getElementById("sideralRotation");
    sideralRotation.innerHTML = "Sideral Rotation:  " + data.sideralRotation + " hours";

    var discoveredBy = document.getElementById("discoveredBy");
    if (data.discoveredBy != "") {
        discoveredBy.innerHTML = "Discovered by " + data.discoveredBy;
    } else {
        discoveredBy.innerHTML = "";
    }
}

function DeathStar()
{
    //moons display and reset old moons
    while (document.getElementById("lune")) {
        lune = document.getElementById("lune");
        lune.remove();
    }
    if (document.getElementById("lune_title")) {
        moon_title = document.getElementById("lune_title");
        moon_title.remove();
    }

    //planet info display

    var englishName = document.getElementById("EnglishName");
    englishName.innerHTML = "Name: Death Star";

    var inclination = document.getElementById("inclination");
    inclination.innerHTML = "Armaments: SuperLaser";

    var density = document.getElementById("density");
    density.innerHTML = "Crew: Over 2 millions passengers, including 25k Stormtroopers";

    var gravity = document.getElementById("gravity");
    gravity.innerHTML = "Creation: supervised by Darth Vader";

    var meanRadius = document.getElementById("meanRadius");
    meanRadius.innerHTML = "Radius:  circa 80 km";

    var sideralOrbit = document.getElementById("sideralOrbit");
    sideralOrbit.innerHTML = "Speed: Faster than light speed";

    var sideralRotation = document.getElementById("sideralRotation");
    sideralRotation.innerHTML = "Construction Site: Space" ;

    var discoveredBy = document.getElementById("discoveredBy");
        discoveredBy.innerHTML = "Discovered by epiXspace's team";
}

function planetGET(value)
{
    var url = `https://api.le-systeme-solaire.net/rest/bodies/${value}`;
    
    $.get(url, callback).done(function() {
    })
    .fail(function(){
        alert("error api");
    })
    .always(function(){
    });
}
function planetGETfromMoon(value)
{
    console.log(value);
    var url = value
    
    $.get(url, callback).done(function() {
    })
    .fail(function(){
        alert("error api");
    })
    .always(function(){
    });
}