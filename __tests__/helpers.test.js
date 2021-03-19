const { format_date } = require('../utils/helpers');

test('format_date() return date', () => {

const date = new Date('2021-03-18 8:43:00');

expect(format_date(date)).toBe('3/12/2021');

});