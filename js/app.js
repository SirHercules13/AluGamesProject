let rentedGames = 0;

function countRGames(){
    console.log(`Número de jogos alugados: ${rentedGames}`);
}

function alterarStatus(n){
    let game = document.getElementById(`game-${n}`);
    let image = game.querySelector('.dashboard__item__img');
    let button = game.querySelector('.dashboard__item__button');
    let nameGame = game.querySelector('.dashboard__item__name');


    if(image.classList.contains('dashboard__item__img--rented')){
        if(confirm(`Você tem certeza que deseja devolver o jogo ${nameGame.textContent}?`)){
            image.classList.remove('dashboard__item__img--rented');
            button.classList.remove('dashboard__item__button--return');
            button.textContent = 'Alugar';
            rentedGames--;
        }
    
    }else{
        image.classList.add('dashboard__item__img--rented');
        button.classList.add('dashboard__item__button--return');
        button.textContent = 'Devolver';
        rentedGames++;
        
    }
    countRGames();


}
// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    rentedGames = document.querySelectorAll('.dashboard__item__img--rented').length;
    countRGames();

});