class Comment{
    constructor(
        id,
        content,
        questionId,
        repliedTo,
        dateCommented
    ){
        this.id = id;
        this.content = content;
        this.questionId = questionId;
        this.repliedTo = repliedTo;
        this.dateCommented = dateCommented;
    }
}

module.exports = Comment;