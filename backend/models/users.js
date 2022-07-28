const userList = [
    { id: 1, name: "User 1", clockedIn: true, lastActionTime: "6-22-2022 7:00PM EST" },
    { id: 2, name: "User 2", clockedIn: false, lastActionTime: "6-23-2022 8:00AM EST" }
]

//0 for clock out
//1 for clock in

const userActivityLog = [
    { userID: 1, eventType: 1,
    clockTime: "6-22-2022 7:00PM EST"},
    { userID: 1, eventType: 0,
    clockTime: "6-23-2022 8:00AM EST"}
];

function addUser(userID, userName) {
    userList.push({
        id: userID,
        name: userName,
        clockedIn: false,
        lastActionTime: "now"
    });
    //DIAGNOSTICS ONLY console.log(userList);
}

function deleteUser(userID) {  
    userList.splice(userList.findIndex(user => user.id === userID), 1);
}

function countUsers() {
    return userList.length;
}

module.exports = {
    addUser, deleteUser, countUsers
}