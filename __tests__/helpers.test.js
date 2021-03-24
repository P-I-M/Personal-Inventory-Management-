const { format_date } = require('../utils/helpers');

test('format_date() return date', () => {

const date = new Date('Sun Mar 21 2021 20:00:00 GMT-0400 (Eastern Daylight Time)');

expect(format_date(date)).toBe('2021-03-21');

});