const { gql } = require("apollo-server");

module.exports = gql`
    type Question {
        category: String!
        text: String!
        answers: [String!]!
    }
    
    input QuestionInput {
        category: String!
        text: String!
        answers: [String!]!
    }
    
    input QuestionByCategory {
        category: String
    }
    
    type Query {
        questionByCategory(category: String!): [Question]
        getQuestions: [Question]
    }

    type Mutation {
        addQuestions(questions: [QuestionInput!]!): [Question]
    }

`;
