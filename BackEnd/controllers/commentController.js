'use strict'

const firebase = require('../db');
const Comment = require('../models/comment');
const firestore = firebase.firestore();


// add a single comment
const addComment = async (req, res, next) => {
    try {
        const comment = req.body;
        await firestore.collection('comment').doc().set(comment);
        res.status(201).json('comment added successfully');
    } catch (error) {
        res.status(400).json(error.message);
    }
}

// get comments by question Id
const getCommentsByQuestionId = async (req, res, next) => {
    try {
        const questionId = req.params.questionId;
        const commentsQuery = await firestore.collection('comment').where('questionId', '==', questionId);
        const comments = await commentsQuery.get();
        const commentsArray = [];

        if(comments.empty){
            res.status(404).json(`No comments for the question with Id: ${questionId}`);
        }else{
            comments.forEach(doc => {
                const comment = new Comment(
                    doc.id,
                    doc.data().comment,
                    doc.data().questionId,
                    doc.data().repliedTo,
                    doc.data().dateCommented
                );

                commentsArray.push(comment);
            });
        }

        res.status(200).json(commentsArray);

    } catch (error) {
        res.status(400).json(error.message);
    }
}

// delete a comment by Id 
const deleteCommentById = async (req, res, next) => {
    try {
        const commentId = req.params.id;
        const snapshot = await firestore.collection('comment').doc(commentId);
        await snapshot.delete();
        res.status(200).json('comment deleted successfully');

    } catch (error) {
        res.status(400).json(error.message);
    }
}


// update a comment's content

const updateCommentById = async (req, res, next) => {
    try {
        const commentId = req.params.id;
        const newContent = req.body.content;
        const snapshot = await firestore.collection('comment').doc(commentId);
        await snapshot.set({
            content: newContent
        });
        res.status(200).json('comment updated successfully');

    } catch (error) {
        res.status(400).json(error.message);
    }
}






module.exports = {
    addComment,
    getCommentsByQuestionId,
    deleteCommentById,
    updateCommentById
}