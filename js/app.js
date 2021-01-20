// Instantiate github
const github = new Github();

const ui = new UI();

const searhUser = document.querySelector("#searchUser");

searhUser.addEventListener("keyup", searchUsers);

function searchUsers(e) {
  const searchText = e.target.value.toLowerCase();
  if (searchText !== "") {
    github.get(searchText).then((user) => {
      if (user.userData.message !== "Not Found" && user.reposUserData.message !== "Not Found") {
      //   // display user
      ui.displayUser(user.userData);

      ui.displayUserRepositories(user.reposUserData);

      } 
      else {
    
      ui.showAlert("User Not Found", "alert alert-danger");
       
      }
    });
    // .catch((err) => console.log(err));
  } else {
    // Clear UI
    ui.clearUI();
  }

  e.preventDefault();
}


// const repos = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&page=${this.page}&per_page=${this.per_page}`);