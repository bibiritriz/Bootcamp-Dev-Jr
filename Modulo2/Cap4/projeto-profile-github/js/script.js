function search() {
  var username = document.getElementById("InputUserName").value;
  var url = `https://api.github.com/users/${username}`;

  $.getJSON(url, (user) => {
    showUserData(user);
    clearError();
  }).fail(() => {
    showUserData({});
    showError("Usuário não encontrado!");
  });
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

