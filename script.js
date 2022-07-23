const $clockContainer = document.querySelector(".clock-container");

setInterval(() => {
  const date = getDate();
  $clockContainer.textContent = date;
}, 1000);

const getDate = () => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const min = date.getMinutes().toString().padStart(2, "0");
  const sec = date.getSeconds().toString().padStart(2, "0");

  return `${hours}:${min}:${sec}`;
};
