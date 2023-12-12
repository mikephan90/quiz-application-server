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
        return await Question.insertMany(questions);
      } catch (error) {
        console.error(error);
        throw new Error('Error adding questions');
      }
    },
  },
};