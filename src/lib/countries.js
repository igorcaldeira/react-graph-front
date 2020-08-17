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

export const extractOriginCountry = (fullData, countryName) => {
  return fullData?.CallingCode?.find((c) => c.countries.find((country) => country?.name === countryName))?.countries?.[0];
};

export const collectNeighboursFullData = (fullData, neighborsNameList) => {
  return fullData?.CallingCode?.filter((c) => neighborsNameList.includes(c.countries?.[0]?.name)).map((c) => c?.countries?.[0]);
};
