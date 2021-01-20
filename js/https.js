class Github{
    constructor() {
        this.client_id = '7d24ba54a01428bc9098';
        this.per_page = 5
    }


    async get(user) {
        const res = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}`);
        const repos = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&per_page=${this.per_page}`);

        const userData = await res.json();
        const reposUserData = await repos.json();

        return {
            userData,
            reposUserData
        }
        
    }
}


