import { flatCountries } from './countries';

describe('Verify flatCountries function', () => {
  it('Should simplify the original list', () => {
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

    expect(flatCountries(input)).toStrictEqual(output);
  });
});
