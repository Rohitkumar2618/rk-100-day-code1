
const fetchUser = new Promise((resolve,reject) =>{
    setTimeout(() => {
        console.log(`[now we have the user]`);

        resolve({username:'Michael'});
    },2000);
});

fetchUser.then ((user) => console.log(user.username));