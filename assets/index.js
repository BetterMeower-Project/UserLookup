async function lookup(user) {
    var user = await fetch(`https://api.meower.org/users/${user}`).then(res => res.json());
    return user;
}