const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const questions = [
    {
       id: 0,
       text: "What is your approach when facing a difficult situation?",
       answers: [
           {
               text: "Charge in headfirst, without thinking",
               image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D",
               alt: "Photo of the Empire State building during daytime",
               credit: "Oliver Niblett"
           },
           {
               text: "Strategize and plan carefully",
               image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
               alt:"Time-lapse photography car lights on bridge",
               credit: "Carlos Alfonso"
           },
           {
               text: "Analyze the situation and find the most logical solution",
               image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
               alt:"High-rise buildings",
               credit: "Elena Kuchko"
           },
           {
               text: "Collaborate with others and work as a team",
               image: "https://images.unsplash.com/photo-1549965738-e1aaf1168943?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
               alt:"Road with people and house",
               credit: "João Francisco"
           }
       ]
    },
    {
        id: 1,
        text: "How do you react when someone is treated unfairly?",
        answers: [
            {
                text: "Evaluate the situation and take a stand against the unfair treatment",
                image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZyaWVuZHN8ZW58MHx8MHx8fDA%3D",
                alt:"Pepperoni Pizza",
                credit: "Alan Hardman"
            },
            {
                text: "Immediately step in and defend the person",
                image: "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JvdXAlMjBmcmllbmRzfGVufDB8fDB8fHww",
                alt:"ham sandwich on white surface",
                credit: "Eaters Collective"
            },
            {
                text: "Work to create a fair and inclusive environment for everyone",
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyaWVuZHN8ZW58MHx8MHx8fDA%3D",
                alt:"Pasta in tomato sauce",
                credit: "Mgg Vitchakorn"
            },
            {
                text: "Find a way to address the injustice without drawing too much attention",
                image: "https://images.unsplash.com/photo-1594329417726-babd38d3343e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHdvJTIwZnJpZW5kc3xlbnwwfHwwfHx8MA%3D%3D",
                alt:"hamburger",
                credit: "sk"
            }
        ]
    },
    {
        id: 2,
        text: "What type of books or subjects do you enjoy the most?",
        answers: [
            {
                text: "Stories that emphasize friendship and cooperation",
                image: "https://images.unsplash.com/photo-1555040479-c949debe66c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"focus photography of building windows",
                credit: "Burgess Milner"
            },
            {
                text: "Intellectual and thought-provoking books",
                image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"low angle view of building",
                credit: "Brandon Giggs"
            },
            {
                text: "Books that provide useful knowledge and life skills",
                image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"trees beside white house",
                credit: "Phil Hearing"
            },
            {
                text: "Adventure and action",
                image: "https://images.unsplash.com/photo-1506974210756-8e1b8985d348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"brown wooden cabin infront of forest",
                credit: "eulauretta"
            }
        ]
    },
    {        

        id: 3,
        text: "How would you achieve your goals?",
        answers: [
           {
               text: "By using any means necessary to get ahead",
               image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
               alt: "Photo of the Empire State building during daytime",
               credit: "Oliver Niblett"
           },
           {
               text: "By collaborating with others and leveraging teamwork",
               image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVhbXdvcmt8ZW58MHx8MHx8fDA%3D",
               alt:"Time-lapse photography car lights on bridge",
               credit: "Carlos Alfonso"
           },
           {
               text: "Through sheer determination and bravery",
               image: "https://images.unsplash.com/photo-1440968872456-dec3196b9bee?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGV0ZXJtaW5hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
               alt:"High-rise buildings",
               credit: "Elena Kuchko"
           },
           {
               text: "By utilizing your intelligence and wit",
               image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3N8ZW58MHx8MHx8fDA%3D",
               alt:"Road with people and house",
               credit: "João Francisco"
           }
       ]
    }
]

const answers = [
    {
        combination: ["Charge in headfirst, without thinking", "Immediately step in and defend the person", "Adventure and action", "Through sheer determination and bravery"],
        text: "'You are in the house of Gryffindor! You are bold, passionate, and brave.",
        image: "https://images.unsplash.com/photo-1594399430386-913fd5defaa4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3J5ZmZpbmRvcnxlbnwwfHwwfHx8MA%3D%3D",
        alt: "Gryffindor Alt Text"
    },
    {
        combination: ["Strategize and plan carefully", "Find a way to address the injustice without drawing too much attention", "Books that provide useful knowledge and life skills", "By using any means necessary to get ahead"],
        text: "You are in the house of Slytherin! You are sneaky, resourceful, and not afraid to bend the rules.",
        image: "https://images.unsplash.com/photo-1594384151968-e1616fa703ea?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2x5dGhlcmlufGVufDB8fDB8fHww",
        alt: "Slytherin Alt Text"
    },
    {
        combination: ["Analyze the situation and find the most logical solution", "Work to create a fair and inclusive environment for everyone", "Intellectual and thought-provoking books", "By utilizing your intelligence and wit"],
        text: "You are in the house of Ravenclaw! You are wise, perceptive, and quietly brilliant.",
        image: "https://media.istockphoto.com/id/1415220925/photo/raven.webp?b=1&s=170667a&w=0&k=20&c=S_9fiz-5pP68fHUB7uUwDsihrI0q4IDm6Z4Zr1VAWtw=",
        alt: "Ravenclaw Alt Text"
    },
    {
        combination: ["Collaborate with others and work as a team", "Evaluate the situation and take a stand against the unfair treatment", "Stories that emphasize friendship and cooperation", "By collaborating with others and leveraging teamwork"],
        text: "You are in the house of Hufflepuff! You are reserved, rational, and down-to-earth.",
        image: "https://plus.unsplash.com/premium_photo-1667238806278-747025bd048e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFkZ2VyfGVufDB8fDB8fHww",
        alt: "Hufflepuff Alt Text"
    }
];


// need to have a default answer to compensate for lack of combination data

const unansweredQuestions = []
const chosenAnswers = []

const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div')
        titleBlock.id = question.id
        titleBlock.classList.add('title-block')
        const titleHeading = document.createElement('h2')
        titleHeading.textContent = question.text
        titleBlock.append(titleHeading)
        questionDisplay.append(titleBlock)

        const answersBlock = document.createElement('div')
        answersBlock.id = question.id + "-questions"
        answersBlock.classList.add('answer-options')

        unansweredQuestions.push(question.id)

        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click', () => handleClick(question.id, answer.text))
            const answerImage = document.createElement('img')
            answerImage.setAttribute('src', answer.image)
            answerImage.setAttribute('alt', answer.alt)

            const answerTitle = document.createElement('h3')
            answerTitle.textContent = answer.text

            const answerInfo = document.createElement('p')
            const imageLink = document.createElement('a')
            imageLink.setAttribute('href', answer.image)
            imageLink.textContent = answer.credit
            const sourceLink = document.createElement('a')
            sourceLink.textContent = 'Unsplash'
            sourceLink.setAttribute('src', 'https://www.unsplash.com')
            answerInfo.append(imageLink, ' to ', sourceLink)

            answerBlock.append(answerImage, answerTitle, answerInfo)

            answersBlock.append(answerBlock)
        })

        questionDisplay.append(answersBlock)

    })
}
populateQuestions()

const handleClick = (questionId, chosenAnswer) => {
    if (unansweredQuestions.includes(questionId))
    chosenAnswers.push(chosenAnswer)
    const itemToRemove = unansweredQuestions.indexOf(questionId)

    if (itemToRemove > -1) {
        unansweredQuestions.splice(itemToRemove, 1)
    }
    console.log(chosenAnswers)
    console.log(unansweredQuestions)

    disableQuestionBlock(questionId, chosenAnswer)
    const lowestQuestionId = Math.min(...unansweredQuestions)
    location.href = '#' + lowestQuestionId

    if (!unansweredQuestions.length) {
        location.href = '#answer'
        showAnswer()
    }
}

const showAnswer = () => {
    let result
    answers.forEach(answer => {
        if (
            chosenAnswers.includes(answer.combination[0]) +
            chosenAnswers.includes(answer.combination[1]) +
            chosenAnswers.includes(answer.combination[2]) +
            chosenAnswers.includes(answer.combination[3])
        ) {
            result = answer
            return;
        } else if (!result) {
            //first answer object is default
            result = answers[0]; 
        }
    })

    const answerBlock = document.createElement('div')
    answerBlock.classList.add('result-block')
    const answerTitle = document.createElement('h3')
    answerTitle.textContent = result.text
    const answerImage = document.createElement('img')
    answerImage.setAttribute('src', result.image)
    answerImage.setAttribute('alt', result.alt)

    answerBlock.append(answerTitle, answerImage)

    answerDisplay.append(answerBlock)

    const allAnswerBlocks = document.querySelectorAll('.answer-block')
    Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))

}

const disableQuestionBlock = (questionId, chosenAnswer) => {
    const currentQuestionBlock = document.getElementById(questionId + "-questions")

    Array.from(currentQuestionBlock.children).forEach(block => {
        if (block.children.item(1).innerText !== chosenAnswer) {
            block.style.opacity = "50%"
        }
    })
}    