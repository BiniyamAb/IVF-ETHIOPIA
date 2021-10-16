class Question{
    constructor(
        id,
        description,
        askedBy,
        dateAsked,
        discussionId
    ){
        this.id = id;
        this.description = description;
        this.askedBy = askedBy;
        this.dateAsked = dateAsked;
        this.discussionId = discussionId;
    }
}


module.exports = Question;