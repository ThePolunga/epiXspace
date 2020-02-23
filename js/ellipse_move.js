var w = window.innerWidth;
var h = window.innerHeight;
time = 1;

function change_all_z_index()
{
    var sun = document.getElementById("sun");
    var merc = document.getElementById("mercure");
    var ear = document.getElementById("earth");
    var mars = document.getElementById("mars");
    var jup = document.getElementById("jupiter");
    var sat = document.getElementById("saturne");
    var urn = document.getElementById("uranus");
    var nep = document.getElementById("neptune");
    var ven = document.getElementById("venus");
    elem_array = [sun, merc, ear, mars, jup, sat, urn, nep, ven];
    elem_array[0].style.setProperty("top", 45 + "%");
    array = [45,
        parseInt(merc.top,10),
        parseInt(ear.top,10),
        parseInt(mars.top,10),
        parseInt(jup.top,10),
        parseInt(sat.top,10),
        parseInt(urn.top,10),
        parseInt(nep.top,10),
        parseInt(ven.top,10)];
    var tmp;
    while (check_sort(array) == 1) {
        for (i = 0; i < array.length - 1; i++) {
            if (array[i] < array[i + 1]) {
                tmp = array[i];
                array[i]  = array[i+1];
                array[i+1] = tmp;
                tmp = elem_array[i];
                elem_array[i]  = elem_array[i+1];
                elem_array[i+1] = tmp;
                i = 0;
            }
        }
    }
    for (i = 0; i < elem_array.length; i++) {
        elem_array[i].style.setProperty("z-index", -i);
    }
}

function check_sort(array)
{
    for (i = 0; i < array.length - 1; i++)
        if (array[i] < array[i + 1])
            return (1);
    return (0);
}

var system_solaire = new Array("mercure", 10, 10/1, 1,
                                "venus",15 , 9/1.5, 2,
                                "earth", 20, 8/2, 3, 
                                "mars", 25, 7/2.5, 4,
                                "jupiter", 30, 6/3, 5,
                                "saturne",35,5/3.5, 6,
                                "uranus", 40,4/4, 7,
                                "neptune",45,3/4.5, 8);
const start = new Date('July 20, 69 00:20:18 GMT+00:00');

function ellipse_move(name)
{
    let root = document.documentElement;
    var w = window.innerWidth;
    var h = window.innerHeight;
    var spr = document.getElementById(name);
    var spd = system_solaire[system_solaire.indexOf(name) + 2];
    var dist = system_solaire[system_solaire.indexOf(name) + 1];
    var ang = system_solaire[system_solaire.indexOf(name) + 3];
    spr.right = -1 * dist * Math.cos((time * spd/100) + ang) + 50;
    spr.top = 1 * dist * Math.sin(time * spd/100 + ang)/1.5 + 50;
    spr.style.setProperty("right", spr.right + "%");
    spr.style.setProperty("top", spr.top + "%");
}

function ellipse_move_all() {
    time+=0.1;
    ellipse_move("mercure");
    ellipse_move("venus");
    ellipse_move("earth");
    ellipse_move("mars");
    ellipse_move("jupiter");
    ellipse_move("saturne");
    ellipse_move("uranus");
    ellipse_move("neptune");
    change_all_z_index();
    setTimeout(ellipse_move_all, 10);
}

ellipse_move_all();