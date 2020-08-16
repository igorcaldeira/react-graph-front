const resolvers = {
  changeCountry: (_, args, { cache }) => {},
  async convertCurrency(_, { newCountryData }, { cache }) {
    return newCountryData;
  },
};

export default resolvers;
