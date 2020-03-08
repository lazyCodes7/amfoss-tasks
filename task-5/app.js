const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const bioContainer = document.querySelector(".main__profile-bio");
const avatarcontainer = document.querySelector(".main__profile-avatar");

const client_id = "client_id";
const client_secret = "client_secret";

const fetchUsers = async (user) => {
const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);
const data = await api_call.json();
return { data }
};
const showData = () => {
    fetchUsers(inputValue.value).then((res) => {
        console.log(res);
        unContainer.innerHTML= `UserName : <span class="main__profile-username">${res.data.login}</span>`
        nameContainer.innerHTML= `Name : <span class="main__profile-name">${res.data.name}</span>`
        bioContainer.innerHTML= `Bio: <span class="main__profile-bio">${res.data.bio}</span>`
        avatarcontainer.innerHTML= `Avatar/Identicon: <span class="main__profile-avatar"><img src='${res.data.avatar_url}'></span>`
    })
}
searchButton.addEventListener("click" , () => {
    showData();
})
