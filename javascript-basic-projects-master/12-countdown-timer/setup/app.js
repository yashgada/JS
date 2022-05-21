const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const items = document.querySelectorAll(".deadline-format h4");
const deadline = document.querySelector(".deadline")

const tempDate = new Date()
const tempYear = tempDate.getFullYear()
const tempMonth = tempDate.getMonth()
const tempDay = tempDate.getDate()
const tempHour = tempDate.getHours()
const tempMinute = tempDate.getMinutes()
const tempSeconds = tempDate.getSeconds()
const tempMilliseconds = tempDate.getMilliseconds()
const futureDate = new Date(tempYear, tempMonth, tempDay+10, tempHour, tempMinute, tempSeconds+5,tempMilliseconds);
// const futureDate = new Date(2022, 4, 21, 3, 53, 0, 0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const day = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
const hour = futureDate.getHours();
const minutes = futureDate.getMinutes();
const sec = futureDate.getSeconds();

giveaway.innerHTML = `the giveaway ends at ${day}, ${date}, ${month}, ${year}, ${hour}:${minutes}`;

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const currentTime = new Date().getTime();
  const t = futureTime - currentTime;
  console.log(t);
  const oneMinute = 60 * 1000;
  const oneHour = oneMinute * 60;
  const oneDay = 24 * oneHour;

  console.log(Math.floor(t / oneDay));
  const days = Math.floor(t / oneDay);
  const hours = Math.floor((t % oneDay) / oneHour);
  const mins = Math.floor((t % oneHour) / oneMinute);
  const secs = Math.floor((t % oneMinute) / 1000);
  console.log(secs);
  const values = [days, hours, mins, secs];

  function format(item) {
    if (item < 10) {
      return `0${item}`;
    } else {
      return item;
    }
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t<0) {
    clearInterval(loop)
    deadline.innerHTML = `<h4 class="expired">giveaway expired</h4>`
  }
}
const loop = setInterval(getRemainingTime, 1000);

getRemainingTime();
