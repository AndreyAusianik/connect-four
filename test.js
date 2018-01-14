const assert = require('assert');
const connectFour = require('./src/index.js');

const board1 = [['-','-','-','-','-','-','-'],
               ['-','-','-','-','-','-','-'],
               ['-','-','-','R','R','R','R'],
               ['-','-','-','Y','Y','R','Y'],
               ['-','-','-','Y','R','Y','Y'],
               ['-','-','Y','Y','R','R','R']];

const board2 = [['-','-','-','-','-','-','-'],
               ['-','-','-','-','-','-','-'],
               ['-','-','-','Y','R','R','R'],
               ['-','-','-','Y','Y','R','Y'],
               ['-','-','-','Y','R','Y','Y'],
               ['-','-','Y','Y','R','R','R']];

const board3 = [['-','-','-','-','-','-','-'],
               ['-','-','-','-','-','-','-'],
               ['-','-','-','R','Y','R','R'],
               ['-','-','-','Y','Y','R','Y'],
               ['-','-','-','Y','R','Y','Y'],
               ['-','-','Y','Y','R','R','R']];

it('should return winner correctly', () => {
    assert.equal(connectFour(board1), 'R');
    assert.equal(connectFour(board2), 'Y');
});
it('should check if there is no winner in current board', () => {
    assert.equal(connectFour(board3), 'That is not the end!');
});
