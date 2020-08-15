export const resolvers = {
    Mutation: {
        changeCountry: (_, args, { cache }) => {},
        async convertCurrency(_, { newCountryData }, { cache }) {
            return newCountryData
        }
    }
}
