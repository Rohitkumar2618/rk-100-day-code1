
const fetchUser = (username , callback) => {

    setTimeout( () => {
        callback({ username });
    },2000);
}

fetchUser('john',(user) => {
    console.log(`your name is : ${user.username}`);
});