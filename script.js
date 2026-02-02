const provinces = [
  "กรุงเทพมหานคร","กระบี่","กาญจนบุรี","กาฬสินธุ์","กำแพงเพชร",
  "ขอนแก่น","จันทบุรี","ฉะเชิงเทรา","ชลบุรี","ชัยนาท",
  // (ใส่ให้ครบ 77 จังหวัด)
];

let correct = [];
let timeLeft = 120;
let timer;

function startGame() {
  correct = [];
  timeLeft = 120;
  document.getElementById("correct-list").innerHTML = "";
  document.getElementById("score").innerText = "ถูก: 0 / 77";

  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = "เวลา: " + timeLeft + " วินาที";

    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("หมดเวลา! คุณตอบถูก " + correct.length + " จังหวัด");
    }
  }, 1000);
}

document.getElementById("answer").addEventListener("keyup", function () {
  const input = this.value.trim();

  if (provinces.includes(input) && !correct.includes(input)) {
    correct.push(input);

    const li = document.createElement("li");
    li.innerText = input;
    document.getElementById("correct-list").appendChild(li);

    document.getElementById("score").innerText =
      "ถูก: " + correct.length + " / 77";

    this.value = "";
  }
});
