import _ from 'lodash';

export const flatCountries = (data) => {
  const newShapeData = (data?.CallingCode || []).map((callingCodeItem) =>
    callingCodeItem.countries.map((country) => ({
      key: country._id,
      name: country.name,
      capital: country.capital,
      flag: country.flag.svgFile,
    }))
  );
  return _.uniqBy(newShapeData.flat(), 'key');
};
