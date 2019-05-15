$(document).ready(function () {

    var characters = [

        {
            name: "Luke Skywalker",
            HP: 120,
            AP: 15,
            CAP: 10,
            id: "skywalker",
            isHero: false,
            isEnemy: false
        },

        {
            name: "Darth Vader",
            HP: 175,
            AP: 25,
            CAP: 30,
            id: "darth-vader",
            isHero: false,
            isEnemy: false
        },

        {
            name: "Boba Fett",
            HP: 120,
            AP: 15,
            CAP: 10,
            id: "boba-fett",
            isHero: false,
            isEnemy: false
        },

        {
            name: "Tusken Raider",
            HP: 120,
            AP: 15,
            CAP: 10,
            id: "tusken-raider",
            isHero: false,
            isEnemy: false
        }
    ];


    for (var i = 0; i < characters.length; i++) {

        var characterName = $(".name");
        var characterHP = $(".hp");

        characterName.text(characters[i].name);
        characterHP.text("HP:" + characters[i].HP);

    };


    $(".image-container").on("click", function () {
        var x = $(this).attr("id");
        $(this).attr("data-role", "hero");
        for (i = 0; i < characters.length; i++) {
            if (characters[i].id === x) {
                characters[i].isHero = true;
            } else {
                characters[i].isEnemy = true;
                $(".image-container").filter(function (index) {
                    return index === i || $(this).attr("data-role") === i;
                }).attr("data-role", "enemy");
            }
            console.log(characters[i]);

            if (characters[i].isHero === true) {
                var hero = $(".image-container").attr("data-role", "hero");
                $("#hero").append(hero);
            } else if (characters[i].isEnemy === true) {
                var enemy = $(".image-container").attr("data-role", "enemy");
                $("#enemies").append(enemy);
            };

        };


    });



    // var hero = [];
    // var enemies = [];

    // $(".image-container").on("click", function () {
    //     var x = $(this).attr("data-value");
    //     setHero(x);
    //     setEnemy();
    // });

    // function setEnemy() {
    //     for (var i = 0; i < characters.length; i++) {
    //         if (characters[i].isHero === false) {
    //             characters[i].isEnemy = true;
    //             enemies.push(characters[i]);
    //             $(".image-container").filter(function(index) {
    //                 return index === i || $(this).attr("data-value") === i;
    //             }).attr("data-role", "enemy");
    //         } else if (characters[i].isHero === true) {
    //             hero.push(characters[i]);
    //         }
    //     };
    // };

    // function setHero(x) {
    //     // var x = $(this).attr("data-value");
    //     characters[x].isHero = true;
    //     $(this).attr("data-role", "hero");
    // }


});