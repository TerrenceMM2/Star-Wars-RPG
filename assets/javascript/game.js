$(document).ready(function () {

    var character = {

        skywalker : {
            name : "Luke Skywalker",
            HP : 120,
            AP : 15,
            CAP : 10,
            id : "skywalker",
            hero : false,
            enemy : true
        },

        darthVader : {
            name : "Darth Vader",
            HP : 175,
            AP : 25,
            CAP : 30,
            id : "darth-vader",
            hero :false,
            enemy : true
        },

        bobaFett : {
            name : "Boba Fett",
            HP : 120,
            AP : 15,
            CAP : 10,
            id : "boba-fett",
            hero : false,
            enemy : true
        },

        tuskenRaider : {
            name : "Tusken Raider",
            HP : 120,
            AP : 15,
            CAP : 10,
            id : "tusken-raider",
            hero : false,
            enemy : true
        },
    };


    $("img").on("click", function () {
        var hero = $(this).attr("id");
        // Passing a string to reference a nested object.
        // Source: https://stackoverflow.com/questions/4841254/how-to-convert-string-as-objects-field-name-in-javascript
        hero.id = character[hero].id;
        // if (hero.id === id) {
        //     id = true;
        //     return id;
        // }
        console.log(hero.id);
    });


});

function newFunction(character) {
    if (hero == character)
        ;
}
