const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  getData();
});

function getData() {
  const xhr = new XMLHttpRequest();
  console.log(xhr);
  xhr.open("GET", "./api/sample.txt");
  console.log(xhr);
  xhr.onreadystatechange = function () {
    console.log(xhr);
    if (xhr.readyState == 4 && xhr.status === 200) {
      console.log("done");
      const text = document.createElement("p");
      text.textContent = xhr.responseText;
      document.body.appendChild(text);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
        state: xhr.readyState,
      });
    }
  };
  xhr.send();
}
