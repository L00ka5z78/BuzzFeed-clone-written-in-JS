
const questionisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const questions = [
    {
        id: 0,
        text: "Pick a vacation destination:",
        answers: [
            {
                text: "New York",
                image: "https://images.unsplash.com/photo-1541270941907-3f7143c8c7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9yayUyMG5pYmxldHR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                alt: "Photo of Empire State Building during daytime",
                credit: "Oliver Nilbett"
            },
            {
                text: "Austin",
                image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXVzdGlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                alt: "Time-lapse photography car lights on the bridge",
                credit: "Carlos Alfonso"
            },
            {
                text: "Portland",
                image: "https://images.unsplash.com/photo-1635209896150-ef275dbd52a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGxhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                alt: "High rise buildings",
                credit: "Elena Kuchko"
            },
            {
                text: "New Orleans",
                image: "https://images.unsplash.com/photo-1568693059993-a239b9cd4957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIwb3JsZWFuc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                alt: "Road with people and house",
                credit: "Joao Francisko"
            }
        ]
    },
    {
        id: 1,
        text: "Pick some food:",
        answers: [
            {
                text: "Pizza",
                image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVwcGVyb25pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                alt: "Pizza pepperoni",
                credit: "Alan Hardman"
            },

            {
                text: "Sandwich",
                image: "https://images.unsplash.com/photo-1481070414801-51fd732d7184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFtJTIwc2FuZHdpY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                alt: "Ham sandwich",
                credit: "Eaters Collective"
            },

            {
                text: "Pasta",
                image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFzdGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                alt: "Pasta in tomato sauce",
                credit: "Mgg Vitchakorn"
            },

            {
                text: "Hamburger",
                image: "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFtYnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                alt: "Hamburger",
                credit: "sk"
            }
        ]
    },
    {
        id: 2,
        text: "Pick a home:",
        answers: [
            {
                text: "Traditional",
                image: "https://images.unsplash.com/photo-1505819244306-ef53954f9648?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYWRpdGlvbmFsJTIwaG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                alt: "focus photography of building windows",
                credit: "Burgess Milner"
            },


            {
                text: "Modern",
                image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                alt: "Low angle view of building",
                credit: "Brandon Giggs"
            },
            {
                text: "House",
                image: "https://images.unsplash.com/photo-1557434440-cad44ef92c59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdoaXRlJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                alt: "white house",
                credit: "Phil Hearing"
            },

            {
                text: "Mountains",
                image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29vZGVuJTIwY2FiaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                alt: "wooden cabin",
                credit: "eualauretta"
            }
        ]
    }
]

const answers = [
    {
        combination: ["New York", "Pizza", "Traditional"],
        text: "Blue Cheese",
        image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZSUyMGNoZWVzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        alt: "Blue Cheese"
    },

    {
        combination: ["Austin", "Pasta", "Modern"],
        text: "Cheddar",
        image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZGRhciUyMGNoZWVzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        alt: "Cheddar Cheese"
    },

    {
        combination: ["Portland", "Sandwich", "Mountains"],
        text: "Feta",
        image: "https://images.unsplash.com/photo-1626200926749-cccc3d2caf12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmV0YSUyMGNoZWVzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        alt: "Feta Cheese"
    },

    {
        combination: ["New Orleans", "Hamburger", "House"],
        text: "Yellow Cheese",
        image: "https://images.unsplash.com/photo-1519411792752-25c2468cccb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGFsbG91bWklMjBjaGVlc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        alt: "Yellow cheese"
    }
]

// theres a need to have a default answer to compensate for lack of combination data

const unansweredQuestions = [];
const chosenAnswers = [];


const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div');
        titleBlock.id = question.id;
        titleBlock.classList.add('title-block');
        const titleHeading = document.createElement('h2');
        titleHeading.textContent = question.text;
        titleBlock.append(titleHeading);
        questionisplay.append(titleBlock);

        const answersBlock = document.createElement('div');
        answersBlock.id = question.id + "-questions";
        answersBlock.classList.add('answer-options')

        unansweredQuestions.push(question.id)


        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click', () => handleClick(question.id, answer.text));

            const answerImage = document.createElement('img');
            answerImage.setAttribute('src', answer.image);
            answerImage.setAttribute('alt', answer.alt);

            const answerTitle = document.createElement('h3');
            answerTitle.textContent = answer.text

            const answerInfo = document.createElement('p');
            const imageLink = document.createElement('a');
            imageLink.setAttribute('href', answer.image);
            imageLink.textContent = answer.credit;

            const sourceLink = document.createElement('a');
            sourceLink.textContent = 'Unsplash'
            sourceLink.setAttribute('src', 'https://www.unsplash.com');
            answerInfo.append(imageLink, ' to ', sourceLink);

            answerBlock.append(answerImage, answerTitle, answerInfo)

            answersBlock.append(answerBlock)
        });

        questionisplay.append(answersBlock)
    })

}
populateQuestions()
const handleClick = (questionId, chosenAnswer) => {
    if (unansweredQuestions.includes(questionId));
    chosenAnswers.push(chosenAnswer)

    const itemToRemove = unansweredQuestions.indexOf(questionId);

    if (itemToRemove > -1) {
        unansweredQuestions.splice(itemToRemove, 1);
    }

    console.log(chosenAnswers);
    console.log(unansweredQuestions);

    disableQuestionBlock(questionId, chosenAnswer);

    const lowestQuestionId = Math.min(...unansweredQuestions);
    location.href = '#' + lowestQuestionId;

    if (!unansweredQuestions.length) {
        //scroll to answer div
        location.href = '#answer'
        showAnswer()
    }

}
const showAnswer = () => {
    let result;
    answers.forEach(answer => {
        if (
            chosenAnswers.includes(answer.combination[0]) +
            chosenAnswers.includes(answer.combination[1]) +
            chosenAnswers.includes(answer.combination[2])
        ) {
            result = answer
            return
        } else if (!result) {
            result = answers[0]           //first answer object is default
        }
    })


    const answerBlock = document.createElement('div');
    answerBlock.classList.add('result-block');

    const answerTitle = document.createElement('h3');
    answerTitle.textContent = result.text;

    const answerImage = document.createElement('img');
    answerImage.setAttribute('src', result.image);
    answerImage.setAttribute('alt', result.alt);

    answerBlock.append(answerTitle, answerImage);

    answerDisplay.append(answerBlock);

    const allAnswerBlocks = document.querySelectorAll('.answer-block');
    Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))

}

const disableQuestionBlock = (questionId, chosenAnswer) => {
    const currentQuestionBlock = document.getElementById(questionId + "-questions");

    Array.from(currentQuestionBlock.children).forEach(block => {
        if (block.children.item(1).innerText !== chosenAnswer) {
            block.style.opacity = "50%"
        }
    })
}