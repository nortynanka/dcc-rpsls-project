# rpsls-project
#### A Javascript OOP project created during devCodeCamp that also implements the use of Node.js

### Kaylee Guise
## My Own RPSLS Algorithm

    Step 1: Display welcome message
    Step 2: Ask how many people will be playing
    Step 3: Assign nickname for each player (user choice or default Player 1, Player 2, etc.)
    Step 4: Ask if additional “AI” players are desired (can add up to 3 extra computer players)
    Step 5: Explain the rules
    Step 6: Human player decides when to start round
    Step 7: On round start, human “shoots” via prompt
    Step 8: Computer chooses randomly from array of options
    Step 9: Winner is determined and they are given a point
    Step 10: Rounds continue until someone has won 3 rounds
    Step 11: If 8 rounds have passed and no one has won 3 times, a tiebreaker round ensues between
    those with matching highest scores and the winner of the round is winner of the game
    Step 12: Announce the winner and quick congratulatory message
    Step 13: Option to start game over with same players/options or start over completely

## Class/Instructor's RPSLS Algorithm

    Step 1: Display welcome message
    Step 2: Display rules of the game
    Step 3: Determine number of players (if they choose 1, it’s going to be a human vs. AI, else human vs. human)
    Step 4: Ask for names of players
    Step 5: Start round
        Ask each player to choose a gesture
        Each player chooses a gesture
        Confirm valid choices
        Compare gestures
            If someone won
                Increment winning player’s score
                Display winner’s name
            If a tie
                Display tie message
                Check if anyone won the game yet (someone wins 3 rounds)
                    If not winner, start new round
                    If winner, display winner’s name
    Step 6: Give option to replay the game (restart from step 3 or 5)

## RPSLS Rules

    1. Rock beats scissors
    2. Scissors beats paper
    3. Paper beats rock
    4. 
