const batch = 707; // change to your own batch id
const baseUrl = "https://wagon-chat.herokuapp.com/";
const fullUrl = `${baseUrl}/${batch}/messages`;

// functions

const refreshFunc = () => {
  fetch(fullUrl)
    .then((resp) => resp.json())
    .then((data) => {
      const messages = data.messages;
      //   console.log(messages);
      messagesList.innerHTML = "";
      let listItems = "";
      messages.forEach((msg) => {
        // console.log(msg);
        listItems += `<li> ${msg.content} (posted <span class="date">${msg.created_at}</span>) by ${msg.author}</li>`;
      });
      //   console.log(listItems);
      messagesList.innerHTML = listItems;
    });
};

// DOM elements
const chatForm = document.querySelector("#comment-form");
const authorInput = document.querySelector("#your-name");
const contentInput = document.querySelector("#your-message");
const refreshBtn = document.querySelector("#refresh");
const messagesList = document.querySelector(".list-unstyled");
// console.log(messagesList);

chatForm.addEventListener("submit", (event) => {
  //   console.log(event);
  event.preventDefault();
  fetch(fullUrl, {
    method: "post",
    body: JSON.stringify({
      author: authorInput.value,
      content: contentInput.value,
    }),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      refreshFunc();
    });
});

refreshBtn.addEventListener("click", (e) => {
  //   console.log(e);
  refreshFunc();
});
