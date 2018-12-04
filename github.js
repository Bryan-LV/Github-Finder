class Github {
    constructor(){
        this.clientID = 'c5fdd546fd9780335de1';
        this.secretID = '6ac29ddd9c30190b837ec3d1685d836f2d57e0d2';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.secretID}`);

        const profile = await profileResponse.json();
        console.log(profile);
        return {
            profile
        }
    }
}