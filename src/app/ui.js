class UI {
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        console.log(user);
        this.profile.innerHTML = ` 

            <div class="card mt-2 animate__animated animate__bounceInLeft">
                <img src="${user.avatar_url}" class="card-img-top"/>
                <div class="card-body">
                    <h3 class="card-title">${user.name}/</h3>
                    <h4 class="card-title">${user.login}</h4>
                    <spam class="">
                        ${user.bio}
                    </spam>
                    <a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">Ver perfil</a>
                    <spam class="badge badge-success">
                        Seguidores: ${user.followers}
                    </spam>
                    <spam class="badge badge-primary">
                        Siguiendo: ${user.following}
                    </spam>
                    <spam class="badge badge-warning">
                        <i class="fas fa-building"></i> Compania: ${user.company}
                    </spam>
                    <spam class="badge badge-info d-block mt-1">
                        <i class="fab fa-blogger"></i> Blog: ${user.blog}
                    </spam>
                    <spam class="badge badge-info d-block mt-1">
                        <i class="fab fa-twitter"></i> Twitter: @${user.twitter_username}
                    </spam>
                    <spam class="badge badge-info d-block mt-1">
                        <i class="fas fa-map-marker-alt"></i> Ubicación: ${user.location}
                    </spam>
                </div>
            </div>

        `;
        this.clearMessage();
    }

    showMessage(message, cssClass){
        const div =document.createElement('div')
        div.className = cssClass;
        div.appendChild(document.createTextNode(message));
        const content = document.querySelector('.row');
        const profile = document.querySelector('#profile');
        content.insertBefore(div, profile);
    }

    clearMessage(){
        const alertFound = document.querySelector('.alert');
        if (alertFound) {
            alertFound.remove();
        }
    }

    showRepositories(repositories){
        let template = "";
        repositories.forEach(repo => {
        template += `
            <div class="card card-body mt-2 animate__animated animate__bounceInUp">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary"> Lenguage: ${repo.language} </span>
                        <span class="badge badge-success"> Forks: ${repo.forks_count} </span>
                    </div>
                </div>
            </div>
            `
        });

        document.getElementById('repositories').innerHTML = template;
    }

}

module.exports = UI;
