const { AuthenticationError } = require('apollo-server-express');
const { Profile, Category, Product } = require('../models')
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      categories: async () => {
        return await Category.find();
      },
      products: async (parent, { category, name }) => {
        const params = {};
  
        if (category) {
          params.category = category;
        }
  
        if (name) {
          params.name = {
            $regex: name
          };
        }
  
        return await Product.find(params).populate('category');
      },
      product: async (parent, { _id }) => {
        return await Product.findById(_id).populate('category');
      },
      profiles: async () => {
        return Profile.find();
      },
  
      profile: async (parent, { profileId }) => {
        return Profile.findOne({ _id: profileId });
      },
    },
    
    Mutation: {
      addProfile: async (parent, { name, email, password }) => {
          const profile = await Profile.create({ name, email, password });
          const token = signToken(profile);
    
          return { token, profile };
        },
      login: async (parent, { email, password }) => {
          const profile = await Profile.findOne({ email });
    
          if (!profile) {
            throw new AuthenticationError('No profile with this email found!');
          }
    
          const correctPw = await profile.isCorrectPassword(password);
    
          if (!correctPw) {
            throw new AuthenticationError('Incorrect password!');
          }
    
          const token = signToken(profile);
          return { token, profile };
        },
      removeProfile: async (parent, { profileId }) => {
          return await Profile.findOneAndDelete({ _id: profileId });
        },
      addProduct: async (parent, {name, description, quantity, category }) => {
        return await Product.create({name, description, quantity, category })
      },
      updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
      },
      addCategory: async (parent, {name}) => {
        return await Category.create({name})
      },
    }
};

module.exports = resolvers;