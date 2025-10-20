import answers from "answers.js"
const currentDate = new Date();
const dayOfMonth = currentDate.getDate();
function getWordle(){
  return(answers[dayOfMonth]);
};
function checkWordle(x){
  if (getWordle() == x){
    return(true);
  } else {
    return(false);
  };
};
