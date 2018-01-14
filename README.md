## Connect Four

### Desctiption

Given a multidimensional array representing a Connect Four board, please create a function which can determine who win the game.

Connect Four is a game in which two players take turns dropping red or yellow colored discs into a vertically suspended 7 x 6 grid.
Discs fall to the bottom of the grid, occupying the next available space.

A player wins by connecting four of their discs horizontally, vertically or diagonally.

### For example:
```javascript
  const board = [['-','-','-','-','-','-','-'],
                 ['-','-','-','-','-','-','-'],
                 ['-','-','-','R','R','R','R'],
                 ['-','-','-','Y','Y','R','Y'],
                 ['-','-','-','Y','R','Y','Y'],
                 ['-','-','Y','Y','R','R','R']];

  connectFour(board); //returns 'R'
```

The next example shows that user with black chips won:
![After rain](./images/connect-four.png)

#### Hint
If nobody has four connected dots 'connectFour' function should return 'That is not the end!'

#### Write your code in `src/index.js`
#### Run test locally `npm test`
