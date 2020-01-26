const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const bioContainer = document.querySelector(".main__profile-bio");
const avatarcontainer = document.querySelector(".main__profile-avatar");

const client_id = "5d3a4c60b95fc344f6bf";
const client_secret = "577909e26520c964296d5030ae55881c42f5d04c";

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