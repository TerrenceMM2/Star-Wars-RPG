$(document).ready(function () {

    var characters = [

        {
            name: "Luke Skywalker",
            HP: 120,
            AP: 15,
            CAP: 10,
            id: "skywalker",
            value: "0",
            isHero: false,
            isEnemy: false
        },

        {
            name: "Darth Vader",
            HP: 175,
            AP: 25,
            CAP: 30,
            id: "darth-vader",
            value: "1",
            isHero: false,
            isEnemy: false
        },

        {
            name: "Boba Fett",
            HP: 120,
            AP: 15,
            CAP: 10,
            id: "boba-fett",
            value: "2",
            isHero: false,
            isEnemy: false
        },

        {
            name: "Tusken Raider",
            HP: 120,
            AP: 15,
            CAP: 10,
            id: "tusken-raider",
            value: "3",
            isHero: false,
            isEnemy: false
        }
    ];

    var hero = [];
    var enemies = [];

    $(".image-container").on("click", function () {
        var x = $(this).attr("value");
        characters[x].isHero = true;
        $(this).attr("data-role", "hero");
        setEnemy();
    });

    function setEnemy() {
        for (i = 0; i < characters.length; i++) {
            if (characters[i].isHero === false) {
                characters[i].isEnemy = true;
                enemies.push(characters[i]);
                console.log("enemies", enemies);
            } else if (characters[i].isHero === true) {
                hero.push(characters[i]);
                console.log ("hero", hero);
            }
        };
    };


});