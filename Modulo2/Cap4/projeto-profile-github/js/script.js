function search(){
  var username = document.getElementById("InputUserName").value;
  var url = `https://api.github.com/users/${username}`;

  $.getJSON(url, (user) => {

    document.getElementById("name").innerHTML          = user.name;
    document.getElementById("html_url").innerHTML      = user.html_url;
    document.getElementById("company").innerHTML       = user.company;
    
    document.getElementById("avatar_url").innerHTML    =  `<img src=${user.avatar_url} class="mt-2 shadow rounded " width="20%" alt="avatar">`



  });
}