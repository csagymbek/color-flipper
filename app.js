const colors = [
  "#DE8971",
  "#7B6079",
  "#A7D0CD",
  "#FFE9D6",
  "#845460",
  "#EAD3CB",
  "#BDC7C9",
  "#2B4F60",
  "#B5EAEA",
  "#EDF6E5",
  "#FFBCBC",
  "#F38BA0",
  "#150485",
  "#590995",
  "#C62A88",
  "#03C4A1",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = colors[getRandomNum(colors)];
  color.innerText = colors[getRandomNum(colors)];
});

const getRandomNum = (nums) => Math.floor(Math.random() * nums.length);
