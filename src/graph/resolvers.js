import countriesResolvers from './countries/countries.resolvers';

export const resolvers = {
  Mutation: {
    ...countriesResolvers,
  },
};
