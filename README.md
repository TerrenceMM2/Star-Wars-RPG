# coursework4-star-wars-rpg  
Vanderbilt Coding Boot Camp Coursework #4: Star Wars RPG  
Live Link: https://terrencemm2.github.io/coursework4-star-wars-rpg/  
  
## Instructions  
**Objective: defeat all your enemies.**  
1. Select a character to play as for the entirety of the game.  
2. Choose your first opponent from the "Enemies Remaining" area.  
    * Selected enemy will be moved to the "Opponent" section.  
3. Click the "Attack!" buttont to begin your assult.  
    * Opponent's HP will be affected by hero's AP.  
    * Hero's HP will be affected by opponents' CAP.  
    * Hero's AP will increase by its original AP value with each attack.  
4. If your current opponent is defeated, select a new opponent to battle against.  
    * Continue to do so until all enemies have been defeated.  
  
### Glossary  
* HP = Health Points  
* AP = Attack Points  
* CAP = Counter Attack Points
  
### Pseudocode  
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
