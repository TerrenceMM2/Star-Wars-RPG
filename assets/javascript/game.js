$(document).ready(function () {

    var characters = [

        {
            name: "Luke Skywalker",
            HP: 120,
            AP: 15,
            CAP: 10,
            id: "skywalker",
            "data-value": "0",
            isHero: false,
            isEnemy: false
        },

        {
            name: "Darth Vader",
            HP: 175,
            AP: 25,
            CAP: 30,
            id: "darth-vader",
            "data-value": "1",
            isHero: false,
            isEnemy: false
        },

        {
            name: "Boba Fett",
            HP: 120,
            AP: 15,
            CAP: 10,
            id: "boba-fett",
            "data-value": "2",
            isHero: false,
            isEnemy: false
        },

        {
            name: "Tusken Raider",
            HP: 120,
            AP: 15,
            CAP: 10,
            id: "tusken-raider",
            "data-value": "3",
            isHero: false,
            isEnemy: false
        }
    ];

    var hero = [];
    var enemies = [];

    $(".image-container").on("click", function () {
        var x = $(this).attr("data-value");
        characters[x].isHero = true;
        $(this).attr("data-role", "hero");
        setEnemy();
    });

    function setEnemy() {
        for (var i = 0; i < characters.length; i++) {
            if (characters[i].isHero === false) {
                characters[i].isEnemy = true;
                enemies.push(characters[i]);
                $(".image-container").filter(function(index) {
                    return index === i || $(this).attr("data-value") === i;
                }).attr("data-role", "enemy");
            } else if (characters[i].isHero === true) {
                hero.push(characters[i]);
            }
        };
    };


});