let theInput = document.querySelector("input");
let btn = document.querySelector(".btn");
let showData = document.querySelector(".show-Data");

btn.onclick = function () {
  getRepos();
};

function getRepos() {
  if (theInput.value !== "") {
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((response) => {
        let Data = response.json();
        return Data;
      })
      .then((response) => {
        showData.innerHTML = "";
        response.length = 10;
        response.forEach((ele) => {
          let div = document.createElement("div");
          div.innerHTML = ele.name;

          let box = document.createElement("box");
          let starSpan = document.createElement("span");
          starSpan.innerHTML = `Start ${ele.stargazers_count}`;
          box.appendChild(starSpan);

          let theUrl = document.createElement("a");
          theUrl.innerHTML = "Visit";
          theUrl.href = `https://github.com/${theInput.value}/${ele.name}`;
          theUrl.setAttribute("target", "_blank");
          box.appendChild(theUrl);

          div.appendChild(box);
          div.className = "repo-box";
          showData.appendChild(div);
        });
      });
  }

  showData.innerHTML = `<span>Please Write Your Username</span>`;
}
