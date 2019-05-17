$(document).ready(function () {

    function startGame() {

    var enemiesArray = [];

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

    // To generate images from object key:values in characters array.
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

    // Used to move selected character to "Hero" sections and set hero attributes
    // Conversely, will move non-selected attributes to "Enemies" sections and set enemy attributes.
    // This function will only be used once as the "#character-selection" container will be removed from the DOM after selection.
    $("#character-selection").on("click", ".image-container", function () {
        var heroValue = $(this).attr("data-value");
        characters[heroValue].role = "hero";
        for (var j = 0; j < characters.length; j++) {
            if (characters[j].role === "hero") {
                $(this).attr("data-role", "hero").attr("id", "hero");
                heroSound(j);
                musicBed();
            } else {
                characters[j].role = "enemy";
                $(".image-container").filter(function (index) {
                    return index === j || $(this).attr("data-value") === j;
                }).attr("data-role", "enemy").attr("id", "enemy");
                enemiesArray.push(characters[j]);
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

        $(".directions").remove();
        $("audio#hero-sound")[0].play();

        // Dynamically creates "Attack" button after initial character selection.
        var button = $("<button>");
        button.attr("type", "button");
        button.addClass("attack");
        button.text("attack!");
        $("#selected-hero").append(button);

        // Dynamically creates message div. Is hidden by default.
        // var message = $("<div>");
        // message.addClass("message");
        // message.text("");
        // $(".attack").before(message);

    });

    // When an image is clicked in the enemies section, first will evaluate if there is currently assigned as an opponent.
    $("#enemies").on("click", ".image-container", function () {
        // User is told that they are currently battling an opponent.
        if ($("#opponent").length) {
            $(".message").text("YOU ARE CURRENTLY IN COMBAT");
            $(".message").attr("id", "info");
            infoSound();
        // Selected enemy is set as an opponent.
        } else {
            var opponentValue = $(this).attr("data-value");
            characters[opponentValue].role = "opponent";
            $(this).attr("data-role", "opponent").attr("id", "opponent");
            $("#current-opponent").append(this);
            $(".message").attr("id", "reset");
            enemySound(opponentValue);
            $("audio#enemy-sound")[0].play();
        }
    });
    
    // Attack button
    $("#selected-hero").on("click", ".attack", function () {
        // First determine if there is an opponent. If not, user is instructed to select an opponent.
        if ($("#opponent").attr("data-value") == null) {
            $(".message").text("PLEASE SELECT AN OPPONENT");
            $(".message").attr("id", "warning");
            infoSound();
        // Any previous notifications are reset. Hero/Enemy values are set.
        } else {
            $(".message").attr("id", "reset");
            var heroValue = $("#hero").attr("data-value");
            var opponentValue = $("#opponent").attr("data-value");
            attack(heroValue, opponentValue);
        };
        // Determine if there are enemies left to battle.
        checkStatus();
    });

    // Attack function called.
    function attack(heroValue, opponentValue) {
        characters[heroValue].HP = characters[heroValue].HP - characters[opponentValue].CAP;
        characters[opponentValue].HP = characters[opponentValue].HP - characters[heroValue].AP;
        characters[heroValue].AP += characters[heroValue].AP;
        // Displays current Hero and Opponent HP levels.
        $("#selected-hero > .image-container > .hp").text("HP: " + characters[heroValue].HP);
        $("#current-opponent > .image-container > .hp").text("HP: " + characters[opponentValue].HP);
        // If hero's HP is at 0, game over. Message displayed.
        if (characters[heroValue].HP <= 0) {
            $("#selected-hero > .image-container").css("filter", "grayscale(1)");
            $(".message").text("YOU HAVE BEEN DEFEATED");
            $(".message").attr("id", "loss");
            stopMusicBed();
            lossMusic();
            reset();
            $(".reset").on("click", startGame());
        // If opponent's HP is less than/equal to 0, opponent is defeated. User instructed to choose another opponent, if any.
        } else if (characters[opponentValue].HP <= 0) {
            $(".message").text("CHOOSE YOUR NEXT OPPONENT");
            $(".message").attr("id", "info");
            $("#current-opponent > #opponent").remove();
            enemiesArray.pop();
            $("#enemy-sound").remove();
            infoSound();
        };
    };

    // Music bed played when hero is selected.
    function musicBed() {
        audio = document.getElementById("music-bed");
        audio.loop = true;
        audio.play();
        audio.currentTime = 0;
    };

    // Stops music bed after win or loss.
    function stopMusicBed() {
        audio = document.getElementById("music-bed");
        audio.pause();
    }

    // Win music played if user wins.
    function winMusic() {
        audio = document.getElementById("win-music");
        audio.loop = true;
        audio.currentTime = 0;
        audio.volume = 0.5;
        audio.play();
    };

    // Losing music plays if user loses.
    function lossMusic() {
        audio = document.getElementById("loss-music");
        audio.loop = true;
        audio.currentTime = 0;
        audio.volume = 0.5;
        audio.play();
    };

    // Plays sound on hero selected.
    function heroSound(j) {
        var audio = $("<audio>");
        audio.attr("id", "hero-sound");
        var audioSource = $("<source>")
        audioSource.attr("src", characters[j].audioSrc);
        audioSource.attr("type", "audio/mpeg");
        $("#selected-hero").append(audio);
        $("#hero-sound").append(audioSource);
    };

    // Plays sound of enemy selected.
    function enemySound(m) {
        var audio = $("<audio>");
        audio.attr("id", "enemy-sound");
        var audioSource = $("<source>")
        audioSource.attr("src", characters[m].audioSrc);
        audioSource.attr("type", "audio/mpeg");
        $("#current-opponent").append(audio);
        $("#enemy-sound").append(audioSource);
    };

    // Plays sound if notification is triggered
    function infoSound() {
        audio = document.getElementById("info-sound");
        audio.play();
        audio.currentTime = 0;
    };

    // Function to check enemy array. If array is empty, user wins (i.e. no more enemies left.)
    function checkStatus() {
        if (enemiesArray.length === 0) {
            $(".message").text("YOU WIN");
            $(".message").attr("id", "win");
            stopMusicBed();
            winMusic();
            reset();
            $(".reset").on("click", startGame());
        };
    };

    // Creates and sets a "Play Again?" button after win or loss.
    function reset() {
        var reset = $("<button>");
        reset.attr("type", "button");
        reset.addClass("reset");
        reset.text("play again?");
        $("#selected-hero").append(reset);
    };

};

startGame();

});