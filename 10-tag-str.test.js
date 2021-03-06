const html = require('./10-tag-str');

test('Sample string', () => {
  const user = 'domenic';
  const text = '<dl> is a fun tag';
  const expected = '<b>domenic says</b>: "&lt;dl&gt; is a fun tag"';
  const format = html`<b>${user} says</b>: "${text}"`;
  expect(format).toBe(expected);
});

test('Empty string', () => {
  const user = '';
  const text = '';
  const expected = '';
  const format = html`${user}${text}`;
  expect(format).toBe(expected);
});

test('Duplicate string', () => {
  const user = 'domenic';
  const text = '<dl> is a fun tag <dl>';
  const expected = '<b>domenic says</b>: "&lt;dl&gt; is a fun tag &lt;dl&gt;"';
  const format = html`<b>${user} says</b>: "${text}"`;
  expect(format).toBe(expected);
});

test('All instances', () => {
  const user = 'domenic';
  const text = '&\'"<>';
  const expected = '<b>domenic says</b>: "&amp;&apos;&quot;&lt;&gt;"';
  const format = html`<b>${user} says</b>: "${text}"`;
  expect(format).toBe(expected);
});
