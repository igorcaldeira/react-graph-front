import { flatCountries } from './countries';

const input = {
  CallingCode: [
    {
      countries: [
        {
          _id: 123,
          name: 'lorem',
          capital: 'lorem',
          flag: { svgFile: 'lorem' },
        },
      ],
    },
  ],
};

const output = [
  {
    key: 123,
    name: 'lorem',
    capital: 'lorem',
    flag: 'lorem',
  },
];

describe('Verify flatCountries function', () => {
  it('Should simplify the original list', () => {
    expect(flatCountries(input)).toStrictEqual(output);
  });
});
