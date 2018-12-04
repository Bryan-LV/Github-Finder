// github constructor
let github = new Github;
// Ui constructor
let ui = new Ui;

// Grab search input element
let searchUser = document.querySelector('#searchUser');

// Search input event listener
searchUser.addEventListener('keyup', e => {
    // Get input text
    let userText = e.target.value;

    if(userText !== ''){
        // get user from github
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    // throw alert
                    console.log('Profile not found');
                } else{
                    ui.showProfile(data.profile);
                }
            })
    } else{
        // clear profile
    }
})

