# Bankrupt Game

Game inspired by Monopoly. 
It works in the same fashion but simplified. 

# How to run

Requirements: NodeJs

1. Download repository.
2. run npm install.
3. run node index.js 

### How it works?

#### Begin:
1. Money: 300,
2. Order: random at start.
3. Board: 20 spaces.
4. The price and rent of each property is in the file gameConfig.txt.
5. 4 Players each with theirs own tatics:

* DEMANDING: buys property if rent > 50 

* RANDOM: buys property with 0.5 probability

* CAUTIOUS: buys if the money left after transaction is equals to 80 or higher.

* IMPULSIVE: buys every property


### Rules

1. If money <= 0, player loses. 

2. Game ends in 1000 rounds then the player with more money wins. If draw, the player that plays earlier in the sequence wins.

3. After passing the start point, the player receives 100 money.

4. If player lands on someone's property, they must pay rent and cannot buy the property.


### Reports' structure:

* Wins distribution by player's tatics.

* Number of timeouts.

* Mean of rounds.

* Best Tatic.

## Data Analysis:

### Sample: 300 games and Timeout = 1000

* Wins distribution by player's tatics: CAUTIOUS: 300, IMPULSIVE: 0, RANDOM: 0, DEMANDING: 0

* Number of timeouts: 0

* Mean of rounds: 4.17

* Best Tatic: CAUTIOUS


### Sample: 300 games and Timeout = 4

* Wins distribution by player's tatics: CAUTIOUS: 242, IMPULSIVE: 0, RANDOM: 44, DEMANDING: 14

* Number of timeouts: 141

* Mean of rounds: 3.357

* Best Tatic: CAUTIOUS

### Sample: 1000 games and Timeout = 4

* Wins distribution by player's tatics: CAUTIOUS: 782, IMPULSIVE: 0, RANDOM: 162, DEMANDING: 56

* Number of timeouts: 525

* Mean of rounds: 3.421

* Best Tatic: CAUTIOUS

### Sample: 1000 games and Timeout = 3

* Wins distribution by player's tatics: CAUTIOUS: 523, IMPULSIVE: 5, RANDOM: 246, DEMANDING: 226

* Number of timeouts: 891

* Mean of rounds: 2.891

* Best Tatic: CAUTIOUS

### Sample: 1000 games, Timeout = 6, initial money: 1000

* Wins distribution by player's tatics: CAUTIOUS: 156, IMPULSIVE: 47, RANDOM: 623, DEMANDING: 174

* Number of timeouts: 991

* Mean of rounds: 5.989

* Best Tatic: RANDOM
