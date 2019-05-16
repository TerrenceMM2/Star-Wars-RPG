# coursework4-star-wars-rpg
Vanderbilt Coding Boot Camp Coursework #4: Star Wars RPG  
Live Link: https://terrencemm2.github.io/coursework4-star-wars-rpg/  

## Pseudocode  
1. User selects "hero" character by clicking image `on.("click")`  
    1. Unselected characters move to "enemies" section  
2. User select first opponent `on.("click")`  
    2. Selected opponent moves to "current opponent" section.  
3. User clicks the "Attack" button to begin assult.  
    * opponent.HP -= hero.AP
    * hero.HP -= opponent.CAP
    * hero.AP +=
      
    `if` no opponent selected `{`  
        "Please select an opponent.";  
    `}`  

    `if` (hero.HP < 0) `{`  
        "You lose :(";  
    `} else if {` (opponent.HP < 0) `{`  
        remove opponent;  
          
    `if` (enemies.length > 0) `{`  
        "Please select another opponent.";  
    `} else if {` (enemies === 0) `{`  
        "You win! :)";  
