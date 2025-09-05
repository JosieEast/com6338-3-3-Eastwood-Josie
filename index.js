// Global array of question objects: { question: string, answer: boolean }
var questionsArr = [
  { question: "Arrays keep items in order.", answer: true },
  { question: "Objects can only store numbers.", answer: false },
  { question: "confirm() returns true for OK and false for Cancel.", answer: true },
  { question: "A while loop always runs a fixed number of times.", answer: false },
  { question: "Array.length gives the number of items.", answer: true }
]

// Starts when the page's Start Quiz button runs runQuiz()
function runQuiz() {
  var correct = 0

  // Ask each T/F question (OK = true, Cancel = false)
  for (var i = 0; i < questionsArr.length; i++) {
    var q = questionsArr[i]
    var userAnswer = confirm(q.question)
    if (userAnswer === q.answer) correct++
  }

  // Calculate & round to a whole-number percent, then display
  var percent = Math.round((correct / questionsArr.length) * 100)
  alert(percent + "%")
}
