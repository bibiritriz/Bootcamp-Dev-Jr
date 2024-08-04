
//fetch("https://api.imgflip.com/get_memes")
//.then((response) => {console.log(response.json())});

$.getJSON("https://api.imgflip.com/get_memes", (response) => {
  for (var m of response.data.memes) {
    document.getElementById("memes").innerHTML +=
      `<div class="card m-auto mt-4 shadow rounded" style="width: 20rem;">
        <div class="card-body">
          <h5 class="card-title py-2 text-center">${m.name}</h5>
            <img src=${m.url} class="card-img-top" alt="meme">
        </div>
      </div>`;
  }
}
);