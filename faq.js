const faqList = [
  {
    question: 'What is Frontend Mentor, and how will it help me?',
    answer: "Frontend Mentor offers realistic coding challenges to help developers improve frontend coding with projects in HTML, CSS and Javascript. It's suitable for all levels and ideal for portfolio building."
  },
  {
    question: 'Is Frontend Mentor free',
    answer: 'Yes, Frontend Mentor is Free'
  },
  {
    question: 'Can I use Frontend Mentor Projects in my portfolio',
    answer: ''
  },
  {
    question: 'How can i get help iif i am stuck on a challenge',
    answer: 'How'
  }
];
const faqContainer = document.querySelector('.container')

let activeFaq = -1;

function renderFaqList () {
  const faqHeader = document.createElement('div')
  faqHeader.classList.add('header')
  faqHeader.innerHTML =
  `
    <img src = "icon-star.svg">
    <p class = "h-one">FAQ<span>S<span></p>
  `
  faqContainer.appendChild(faqHeader)
   
  faqList.map((faq, index) => {
    const faqElement = document.createElement('div');
    faqElement.classList.add('container-two')

    const questionContainer = document.createElement('div')
    questionContainer.classList.add('question')

    const questionParagraph = document.createElement('p')
    questionParagraph.classList.add('p-two')
    questionParagraph.textContent = faq.question

    const faqButton = document.createElement('button')
    faqButton.classList.add(`faq-button-${index}`)

    const buttonImage = document.createElement('img')
    buttonImage.src = "icon-plus.svg"

    const answer = document.createElement('p')
    answer.textContent = faq.answer
    answer.classList.add('answer', 'hide', 'p-three')

    questionContainer.appendChild(questionParagraph)
    faqButton.appendChild(buttonImage)
    questionContainer.appendChild(faqButton)
    faqElement.appendChild(questionContainer)
    faqElement.appendChild(answer)
    faqContainer.appendChild(faqElement)

    questionContainer.addEventListener('click', () => {
      if(activeFaq ===  index) {
        answer.classList.add('hide')
        answer.classList.remove('show')
        buttonImage.src = "icon-plus.svg"
        activeFaq = -1;
      } else {
        answer.classList.add('show')
        answer.classList.remove('hide')
        buttonImage.src = "icon-minus.svg"
        activeFaq = index;
      }
    })

  })
}
renderFaqList();


