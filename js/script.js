const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");
const learning = {};

learning.topic = "JS";
learning.learningGoals = [
  "Build JS Programs",
  "Learn to use best-practice idioms and patterns.",
  "Become adept at implementing client-side interfaces through the use of the DOM, jQuery and AJAX.",
  "Develop familiarity with the JavaScript language."
];
learning.category = "Front End Development";
learning.topicImportance = "High";
//console.log(learning);
learning.topic = "JavaScript";
learning.learningGoals.splice(1, 1);
//console.log(learning);
topicElement.innerText = `I'm learning ${learning.topic}.`;
countElement.innerText = `I have ${learning.learningGoals.length} learning goals.`;
