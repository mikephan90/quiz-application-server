const Question = require("../models/Questions");

module.exports = {
  Query: {
    async questionByCategory(_, {category}) {
      return await Question.find({category: category})
    }
  },
  Mutation: {
    addQuestions: async (_, { questions }) => {
      try {
        const newQuestions = await Question.insertMany(questions);
        return newQuestions;
      } catch (error) {
        console.error(error);
        throw new Error('Error adding questions');
      }
    },
  },
};