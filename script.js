/* Déclaration données pour le jeu */
var scores, currentScore, scoreTotalJoueur1, scoreTotalJoueur2, playerActive, gameOngoing;

/* Début du jeu */
gameBegin();

/* Création de la fonction en rapport avec le click du lancement de dé */
document.querySelector('.roll-dice').addEventListener('click', function rollDice(){
      if(gameOngoing) {
            /* Choix d'un nombre au hasard */
            var dice = Math.floor(Math.random() * 6) + 1;

            /* Affichage du nombre au hasard */
            var diceDOM = document.querySelector('.dice');
            diceDOM.style.display = 'block';
            diceDOM.src = './Images/dice-' + dice + '.png';  

            if(dice !== 1) {
                  currentScore += dice;
                  document.querySelector('#ongoing-' + playerActive).textContent = currentScore;
            } else {
                  nextPlayer();
            }
      }
});

/* Validation des points accumulés + Verification si vainqueur */
/* Il faut atteindre le score minimum de 100 pour gagner la partie */

document.querySelector('.validate').addEventListener('click', function validate() {
      if(gameOngoing = true) {
            switch (playerActive) {
                  case 1: 
                        scores[0] += currentScore;
                        document.querySelector('#score-' + playerActive).textContent = scores[0];
      
                        if(scores[0] >= 100) {
                              document.querySelector('#name-' + playerActive).textContent = 'Winner!';
                              document.querySelector('.player-' + playerActive + '-panel').classList.add('winner');
                              document.querySelector('.player-' + playerActive + '-panel').classList.remove('active');
                              gamePlaying = false;
                        }
                        nextPlayer();
                        break;
                  case 2:
                        scores[1] += currentScore;
                        document.querySelector('#score-' + playerActive).textContent = scores[1];
      
                        if(scores[1] >= 100) {
                              document.querySelector('#name-' + playerActive).textContent = 'Winner!';
                              document.querySelector('.player-' + playerActive + '-panel').classList.add('winner');
                              document.querySelector('.player-' + playerActive + '-panel').classList.remove('active');
                              gamePlaying = false;
                        }
                        nextPlayer();
                        break;
                  default: 
                        console.log('We have an issue !')
            }}
            else {
                  nextPlayer();
            }
});

/* Ajout du click pour le bouton nouvelle partie */
document.querySelector(".new-game").addEventListener('click', gameBegin);

/* Création fonction pour lancer le jeu */
function gameBegin() {
      gameOngoing = true;
      

      playerActive = 1;
      currentScore = 0;
      scoreTotalJoueur1 = 0;
      scoreTotalJoueur2 = 0;
      scores = [scoreTotalJoueur1, scoreTotalJoueur2];

      document.getElementById('score-1').textContent = scores[0];
      document.getElementById('score-2').textContent = scores[1];
      document.getElementById('ongoing-1').textContent = 0;
      document.getElementById('ongoing-2').textContent = 0;

      document.getElementById('name-1').textContent = 'Joueur 1';
      document.getElementById('name-2').textContent = 'Joueur 2'; 
      document.querySelector('.player-1').classList.remove('winner');
      document.querySelector('.player-2').classList.remove('winner');

      document.querySelector('.player-1').classList.remove('active');
      document.querySelector('.player-2').classList.remove('active');

      document.querySelector('.player-2').classList.remove('active');
      document.querySelector('.player-1').classList.add('active');
}

/* Fonction Joueur suivant */
function nextPlayer() {
      playerActive === 1 ? playerActive = 2 : playerActive = 1;
      currentScore = 0;
      document.getElementById('ongoing-1').textContent = 0;
      document.getElementById('ongoing-2').textContent = 0;
      
      document.querySelector('.player-1').classList.toggle('active');
      document.querySelector('.player-2').classList.toggle('active');
}