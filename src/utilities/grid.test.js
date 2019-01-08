import Grid from './grid.js';

// These test values assume a 10x10 grid

test('0th element is in column 0', () => {
    expect(Grid.getColumn(0)).toEqual(0);
});

test('0th element is in row 0', () => {
    expect(Grid.getRow(0)).toEqual(0);
});

test('9th element is in column 9', () => {
    expect(Grid.getColumn(9)).toEqual(9);
});

test('9th element is in row 0', () => {
    expect(Grid.getRow(9)).toEqual(0);
});

test('11th element is in column 1', () => {
    expect(Grid.getColumn(11)).toEqual(1);
});

test('11th element is in row 1', () => {
    expect(Grid.getRow(11)).toEqual(1);
});

test('78th element is in column 8', () => {
    expect(Grid.getColumn(78)).toEqual(8);
});

test('78th element is in row 7', () => {
    expect(Grid.getRow(78)).toEqual(7);
});
