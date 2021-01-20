class UI {

    displayUser(user) {
        // console.log(user)
       const profile = document.querySelector('#profile');
       profile.innerHTML = `
       <div class="card card-body mb-3">
       <div class="row">
           <div class="col-md-3">
               <img class="img-fluid mb-2"
                   src= ${user.avatar_url}>
               <a href= ${user.url} target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
           </div>
           <div class="col-md-9">
               <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
               <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
               <span class="badge badge-success">Followers: ${user.followers}</span>
               <span class="badge badge-info">Following: ${user.following}</span>
               <br><br>
               <ul class="list-group">
                   <li class="list-group-item">Company: ${user.company}</li>
                   <li class="list-group-item">Website/Blog: ${user.blog}</li>
                   <li class="list-group-item">Location:${user.location}</li>
                   <li class="list-group-item">Member Since: ${user.created_at}</li>
               </ul>
           </div>
       </div>
   </div>
       `
    }

    displayUserRepositories(userRepositories) {
        console.log(userRepositories)
        userRepositories.forEach(userRepos => {
            document.querySelector('.page-heading').textContent = 'Latest Repos';

            document.querySelector('#repos').innerHTML += `
            <div class="card card-body mb-2">
            <div class="row">
                <div class="col-md-6">
                    <a href="${userRepos.html_url}" target="_blank">${userRepos.name}</a>
                </div>
                <div class="col-md-6">
                    <span class="badge badge-secondary">Watchers:${userRepos.watchers}</span>
                    <span class="badge badge-success">Forks:${userRepos.forks}</span>
                    <span class="badge badge-primary">Open Issues:${userRepos.open_issues}</span>
                </div>
            </div>
        </div>`
        })


        
        // userRepositories.forEach((userRepository) => {
        //     // console.log(userRepository)

        //     document.querySelector('#repos').innerHTML += `
        //     <div class="card card-body mb-2">
        //     <div class="row">
        //         <div class="col-md-6">
        //             <a href="${userRepository.owner.repos_url}" target="_blank">${userRepository.name}</a>
        //         </div>
        //         <div class="col-md-6">
        //             <span class="badge badge-secondary">Watchers:${userRepository.watchers}</span>
        //             <span class="badge badge-success">Forks:${userRepository.forks}</span>
        //             <span class="badge badge-primary">Open Issues:${userRepository.open_issues}</span>
        //         </div>
        //     </div>
        // </div>`
           
            
    //     });
        
    }

    showAlert(message, className) {
        // Never repeat Alert
        this.dontRepatAlert();

        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const card = document.querySelector('.card');
        const searchUser = document.querySelector('#searchUser');
        card.insertBefore(div, searchUser);


        // Set timeOut
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000)

    }

    dontRepatAlert() {
        const currentAlert = document.querySelector('.alert');
        if(currentAlert) {
            document.querySelector('.alert').remove();
        }
    }

    

    clearUI(){
        document.querySelector('.disappear').innerHTML = '';
    }
}

