let score = prompt("please enter your exam score");
let mess = "";

if (score < 100 && score >= 85) {
  mess = "You Got a A 🎉";
} else if (score < 85 && score >= 75) {
  mess = "You Got a B 🎉 ";
} else if (score < 75 && score >= 65) {
  mess = "You Got a C 📃";
} else if (score < 65 && score >= 50) {
  mess = "You Got a D 👌";
} else if (score < 50 && score >= 0) {
  mess = "You Got a F 😟";
} else if (score == NaN) {
  mess = "Not a number ❌";
} else if (score == 100) {
  mess = "perfect score 🏆";
} else if (score > 100 || score < 0) {
  mess = "invalid score ❌";
} else {
  mess = "invalid ❌";
}
document.write(mess);
