let score = JSON.parse(localStorage.getItem('score')) || { win:0,lose:0,tie:0} 
    
/* Here we want to reuse the values we stored in local storage but to reuse it
we have to convert it from string to object because that is what 
js accepts. To do so we are using JSON parse.*/
       
 display_score();

function computer_move()
  {
      const comp = Math.random();
      if(comp>=0 && comp<=1/3)
      {
          comp_move = 'rock';
      }
      else if(comp > 1/3 && comp <=2/3)
      {
          comp_move = 'paper';
      }
      else
      {
          comp_move = 'scissors';
      }

      return comp_move;
   }

  function check(human)
  {
      const Computer = computer_move();
      result='';
      
      if( human ==='rock')
      {
          if(Computer ==='rock')
          { 
              result='Match Tie!';
          }
          else if ( Computer === 'paper')
          {
              result='You Lose!';
          }
          else
          {
              result = 'You Win!';
          }
      }
      else if ( human === 'paper')
      {
          if(Computer==='rock')
          {
              result='You Win!';
          }
          else if ( Computer==='paper')
          {
              result='Match Tie!';
          }
          else
          {
              result = 'You Lose!';
          }
      }
      else if ( human === 'scissors')
      {
          if(Computer ==='rock')
          {
              result='You Lose!';
          }
          else if ( Computer ==='paper')
          {
              result='You Win!';
          }
          else
          {
              result = 'Match Tie!';
          } 
          
      }
      if(result ==='You Win!')
      {
          score.win+=1;
      }
      else if(result === 'You Lose!')
      {
          score.lose+=1;
      }
      else if(result === 'Match Tie!')
      {
          score.tie+=1;
      }
     
      /* local storage used to store values but it only takes values as string 
      to convert it as string we are using JSON - java script object notation to make it as a string*/

     localStorage.setItem('score', JSON.stringify(score));

     display_score();
     document.querySelector('.js-result').innerHTML = result;
     document.querySelector('.js-moves').innerHTML = `You chose 
     <img class="paper-emoji-result" src="${human}-emoji.png" alt="Your choice">
     computer chose
     <img class="rock-emoji-result" src="${Computer}-emoji.png" alt="">`;
  }

  function display_score()
  {
      document.querySelector('.js-score')
       .innerHTML =`Win : ${score.win}, Tie : ${score.tie}, Lose : ${score.lose}.`;
  }
