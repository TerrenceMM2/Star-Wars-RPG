$(document).ready(function () {

    var characters = [

        {
            name: "Luke Skywalker",
            HP: 120,
            AP: 15,
            CAP: 10,
            id: "skywalker",
            role: "",
            imgSrc: "assets/images/skywalker.jpg",
            audioSrc: "assets/sounds/lightsaber.mp3"
        },

        {
            name: "Darth Vader",
            HP: 175,
            AP: 25,
            CAP: 30,
            id: "darth-vader",
            role: "",
            imgSrc: "assets/images/darth_vader.jpg",
            audioSrc: "assets/sounds/vader_breathing.mp3"
        },

        {
            name: "Boba Fett",
            HP: 120,
            AP: 15,
            CAP: 10,
            id: "boba-fett",
            role: "",
            imgSrc: "assets/images/boba_fett.jpg",
            audioSrc: "assets/sounds/boba_fett.mp3"
        },

        {
            name: "Tusken Raider",
            HP: 120,
            AP: 15,
            CAP: 10,
            id: "tusken-raider",
            role: "",
            imgSrc: "assets/images/tusken_raider.jpg",
            audioSrc: "assets/sounds/tusken_raider.mp3"
        }
    ];

    for (var i = 0; i < characters.length; i++) {
        var container = $("<div>");
        container.addClass("image-container");
        container.attr("data-value", i);
        container.attr("data-role", "");
        $("#character-selection").append(container);

        var character = $("<img>");
        character.attr("id", characters[i].id);
        character.attr("src", characters[i].imgSrc);
        $(container).append(character);

        var characterName = $("<div>");
        characterName.addClass("name top-left");
        characterName.text(characters[i].name);
        $(container).append(characterName);

        var characterHP = $("<div>");
        characterHP.addClass("hp bottom-right");
        characterHP.text("HP: " + characters[i].HP);
        $(container).append(characterHP);
    };

    $("#character-selection").on("click", ".image-container", function () {
        var heroValue = $(this).attr("data-value");
        characters[heroValue].role = "hero";

        for (var j = 0; j < characters.length; j++) {
            if (characters[j].role === "hero") {
                $(this).attr("data-role", "hero").attr("id", "hero");
                var audio = $("<audio>");
                audio.attr("id", "hero-sound");
                var audioSource = $("<source>")
                audioSource.attr("src", characters[j].audioSrc);
                audioSource.attr("type", "audio/mpeg");
                $("#selected-hero").append(audio);
                $("#hero-sound").append(audioSource);
            } else {
                characters[j].role = "enemy";
                $(".image-container").filter(function (index) {
                    return index === j || $(this).attr("data-value") === j;
                }).attr("data-role", "enemy").attr("id", "enemy");
            };
        };

        for (var k = 0; k < characters.length; k++) {
            switch (characters[k].role) {
                case "hero":
                    // Grab element by data-role assignment.
                    // Source: https://stackoverflow.com/questions/9499998/jquery-select-all-elements-that-have-jquery-data
                    var hero = $('[data-role="hero"]');
                    $("#selected-hero").append(hero);
                    break;
                case "enemy":
                    var enemy = $('[data-role="enemy"]');
                    $("#enemies").append(enemy);
                    break;
            };
        };

        $("#directions").remove();
        $("#character-selection").remove();
        $("audio#hero-sound")[0].play();

        var button = $("<button>");
        button.attr("type", "button");
        button.addClass("attack");
        button.text("Attack!");
        $("#selected-hero").append(button);

    });

    $("#enemies").on("click", ".image-container", function () {
        var opponentValue = $(this).attr("data-value");
        characters[opponentValue].role = "opponent";
        $(this).attr("data-role", "opponent").attr("id", "opponent");
        $("#current-opponent").append(this);
    });

    $("#selected-hero").on("click", ".attack", function() {
        if ($("#opponent").attr("data-value") == null) {
            console.log("please select an opponent");
        } else {
        var heroValue = $("#hero").attr("data-value");
        var opponentValue = $("#opponent").attr("data-value");
        attack(heroValue, opponentValue);
        }
    });

    function attack(heroValue, opponentValue) {
        characters[heroValue].HP = characters[heroValue].HP - characters[opponentValue].CAP;
        characters[opponentValue].HP = characters[opponentValue].HP - characters[heroValue].AP;
        characters[heroValue].AP += characters[heroValue].AP;
        $("#selected-hero > .image-container > .hp").text("HP: " + characters[heroValue].HP);
        $("#current-opponent > .image-container > .hp").text("HP: " + characters[opponentValue].HP);
        if (characters[heroValue].HP <= 0) {
            console.log("you lose");
        } else if (characters[opponentValue].HP <= 0) {
            $("#current-opponent > #opponent").remove();
        }
    }

});