const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.answer-text'));

let questions = [{
        question: 'What year did West Germany lift the World Cup wearing this kit?',
        choice1: '1994',
        choice2: '1990',
        answer: 2,
    },
    {
        question: 'Coca-Cola sponsored this Club America Kit in what year?',
        choice1: '1994/95',
        choice2: '1996/97',
        answer: 1,
    },
    {
        question: 'Mexico debuted this classic shirt at which World Cup?',
        choice1: '1998',
        choice2: '1994',
        answer: 1,
    },
    {
        question: 'Blackburn Rovers won the Premier League in this Kit in which year?',
        choice1: '1999/00',
        choice2: '1994/95',
        answer: 2,
    },
    {
        question: 'Ireland wore this jersey in their most successful World Cup run in which year?',
        choice1: '2002',
        choice2: '1990',
        answer: 2,
    },
    {
        question: 'Manchester United celebrated a Treble in this kit in which season?',
        choice1: '1998/99',
        choice2: '1999/00',
        answer: 1,
    },
    {
        question: 'Batistuta scored 21 goals wearing this classic kit in which year?',
        choice1: '1994/95',
        choice2: '1998/99',
        answer: 2,
    }
]