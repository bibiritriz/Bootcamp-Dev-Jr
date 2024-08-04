var UsersHistory = [];

function search() {
  var username = document.getElementById("InputUserName").value;
  var url = `https://api.github.com/users/${username}`;

  $.getJSON(url, (user) => {
    showUserData(user);
    if(isNew(user)){
      save(user);
      showNewUserHistory(user);
    }
    clearError();
  }).fail(() => {
    showUserData({});
    showError("Usuário não encontrado!");
  });
}

function save(user){
  UsersHistory.push(user);
}

function isNew(user){
  return UsersHistory.filter((u) => u.login === user.login).length == 0;
}

function showNewUserHistory(user){
  document.getElementById("history"). innerHTML += `<div class="col">
              <img
                src=${user.avatar_url}
                class="mt-2 shadow rounded"
                width="10%"
                alt="avatar"
                id="avatar_url"
              />
            </div>`
}

function showError(msg){
  document.getElementById("error").innerHTML = `<div class='alert alert-danger p-1 mt-1' role='alert'>${msg}</div>`;
}

function clearError(){
  document.getElementById("error").innerHTML = "";
}

function showUserData(user){
  document.getElementById("name").innerHTML = user.name         || "";
  document.getElementById("html_url").innerHTML = user.html_url || "";
  document.getElementById("company").innerHTML = user.company   || "";
  
  document.getElementById("avatar_url").innerHTML = user.avatar_url? `<img
  src=${user.avatar_url}
  class="mt-2 shadow rounded"
  width="20%"
  alt="avatar"
  id="avatar_url"
/>`: "";
}

