function add_moon(data)
{
    //new moon list var
    var element = document.getElementById("moon_list");
    var text = document.createElement("a");
        text.setAttribute("id", "lune");
        var node = document.createTextNode("moon of " + data.englishName + " :");
        text.appendChild(node);
        element.appendChild(text);
    for (i = 0; data.moons[i]; i++) {
        var link = "planetGETfromMoon('"+ data.moons[i].rel +"')";
        var para = document.createElement("a");
        para.setAttribute("id", "lune");
        para.setAttribute("href", "#");
        para.setAttribute("onclick",link);
        var name = document.createTextNode(data.moons[i].moon);
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
    if (data.moons) {
        add_moon(data);
    }

    //planet info display

    var englishName = document.getElementById("EnglishName");
    englishName.innerHTML = "English Name : " + data.englishName;

    var inclination = document.getElementById("inclination");
    inclination.innerHTML = "inclination : " + data.inclination;

    var density = document.getElementById("density");
    density.innerHTML = "density : " + data.density;

    var gravity = document.getElementById("gravity");
    gravity.innerHTML = "gravity : " + data.gravity;

    var meanRadius = document.getElementById("meanRadius");
    meanRadius.innerHTML = "meanRadius : " + data.meanRadius;

    var sideralOrbit = document.getElementById("sideralOrbit");
    sideralOrbit.innerHTML = "sideralOrbit : " + data.sideralOrbit;

    var sideralRotation = document.getElementById("sideralRotation");
    sideralRotation.innerHTML = "sideralRotation : " + data.sideralRotation;

    var discoveredBy = document.getElementById("discoveredBy");
    if (data.discoveredBy != "") {
        discoveredBy.innerHTML = "discovered by " + data.discoveredBy;
    } else {
        discoveredBy.innerHTML = "";
    }
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