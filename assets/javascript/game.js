$(document).ready(function () {

    var characters = [

        {
            name: "Luke Skywalker",
            HP: 120,
            AP: 15,
            CAP: 10,
            id: "skywalker",
            role: "",
        },

        {
            name: "Darth Vader",
            HP: 175,
            AP: 25,
            CAP: 30,
            id: "darth-vader",
            role: "",
        },

        {
            name: "Boba Fett",
            HP: 120,
            AP: 15,
            CAP: 10,
            id: "boba-fett",
            role: "",
        },

        {
            name: "Tusken Raider",
            HP: 120,
            AP: 15,
            CAP: 10,
            id: "tusken-raider",
            role: "",
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
        for (var i = 0; i < characters.length; i++) {
            if (characters[i].id === x) {
                characters[i].role = "hero";
            } else {
                characters[i].role = "enemy";
                $(".image-container").filter(function (index) {
                    return index === i || $(this).attr("data-role") === i;
                }).attr("data-role", "enemy");
            };
            console.log(characters[i]);
        };

        for (var j = 0; j < characters.length; j++) {
            switch (characters[j].role) {
                case "hero":
                    console.log(characters[j].name + " is the hero.");
                    var hero = $(".image-container").attr("data-role", "hero");
                    $("#hero").append(hero);
                    break;
                case "enemy":
                    console.log(characters[j].name + " is the enemy.");
                    var enemy = $(".image-container").attr("data-role", "enemy");
                    $("#enemies").append(enemy);
                    break;
                case "opponent":
                    console.log(characters[j].name + " is the opponent.");
                    break;
            };
        };

    });




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