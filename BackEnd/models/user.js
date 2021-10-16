class User{
    constructor(
        id,
        username,
        password,
        challenges,
        profession
    ){
        this.id = id;
        this.username = username;
        this.password = password;
        this.challenges = challenges;
        this.profession = profession;
    }
}


module.exports = User;