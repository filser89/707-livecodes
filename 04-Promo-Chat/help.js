const batch = 707; // change to your own batch id
const baseUrl = "https://wagon-chat.herokuapp.com/";

const form = document.getElementById("comment-form");

const fromInput = document.getElementById("your-name");
const contentInput = document.getElementById("your-message");
const refreshBtn = document.getElementById("refresh");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(fromInput.value);
  console.log(contentInput.value);
  fetch(`${baseUrl}/${batch}/messages`, {
    body: JSON.stringify({ author: fromInput, content: contentInput }),
    method: "post",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});

refreshBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(`${baseUrl}/${batch}/messages`)
    .then((res) => res.json())
    .then((data) => console.log(data));
});
