function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "App krishna bhai hi ho na",
  function () {
    alert("You are enterd this question");
  },
  function () {
    alert("cancelled the arguments");
  }
);
