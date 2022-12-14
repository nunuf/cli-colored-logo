#!/usr/bin/env node

(function logo() {

  const Characters = {
    A: [
      '    **    ',
      '  **  **  ',
      ' ******** ',
      ' **    ** ',
      ' **    ** '
    ],
    B: [
      ' ******   ',
      ' **    ** ',
      ' ******   ',
      ' **   *** ',
      ' ******   '
    ],
    C: [
      '  ******  ',
      ' **    ** ',
      ' **       ',
      ' **    ** ',
      '  ******  '
    ],
    D: [
      ' *****    ',
      ' **   **  ',
      ' **   **  ',
      ' **   **  ',
      ' *****    '
    ],
    E: [
      ' ******** ',
      ' **       ',
      ' ******   ',
      ' **       ',
      ' ******** '
    ],
    F: [
      ' ******** ',
      ' **       ',
      ' ******   ',
      ' **       ',
      ' **       '
    ],
    G: [
      '  ******  ',
      ' **       ',
      ' **   ****',
      ' **    ** ',
      '  ******  '
    ],
    H: [
      ' **    ** ',
      ' **    ** ',
      ' ******** ',
      ' **    ** ',
      ' **    ** '
    ],
    I: [
      '  ******  ',
      '    **    ',
      '    **    ',
      '    **    ',
      '  ******  '
    ],
    J: [
      '  ******  ',
      '     **   ',
      '     **   ',
      ' *   **   ',
      ' *****    '
    ],
    K: [
      ' **    ** ',
      ' **   **  ',
      ' *****    ',
      ' **   **  ',
      ' **    ** '
    ],
    L: [
      ' **       ',
      ' **       ',
      ' **       ',
      ' **       ',
      ' ******** '
    ],
    M: [
      ' **    ** ',
      ' ***  *** ',
      ' ** ** ** ',
      ' **    ** ',
      ' **    ** '
    ],
    N: [
      ' ***   ** ',
      ' ****  ** ',
      ' ** ** ** ',
      ' **  **** ',
      ' **   *** '
    ],
    O: [
      '   ****   ',
      ' **    ** ',
      ' **    ** ',
      ' **    ** ',
      '   ****   '
    ],
    P: [
      ' ******   ',
      ' **    ** ',
      ' ******   ',
      ' **       ',
      ' **       '
    ],
    Q: [
      '   ****   ',
      ' **    ** ',
      ' **    ** ',
      ' **  **** ',
      '   **** **'
    ],
    R: [
      ' ******   ',
      ' **    ** ',
      ' ******   ',
      ' **   **  ',
      ' **    ** '
    ],
    S: [
      '  ******  ',
      ' **     * ',
      '   ****   ',
      ' *     ** ',
      '  ******  '
    ],
    T: [
      ' ******** ',
      '    **    ',
      '    **    ',
      '    **    ',
      '    **    '
    ],
    U: [
      ' **    ** ',
      ' **    ** ',
      ' **    ** ',
      ' **    ** ',
      '  ******  '
    ],
    V: [
      ' **    ** ',
      ' **    ** ',
      ' **    ** ',
      '  **  **  ',
      '    **    '
    ],
    W: [
      ' **    ** ',
      ' **    ** ',
      ' ** ** ** ',
      ' ***  *** ',
      ' **    ** '
    ],
    X: [
      ' ***   ***',
      '   ** **  ',
      '    ***   ',
      '   ** **  ',
      ' ***   ***'
    ],
    Y: [
      ' ***   ***',
      '   ** **  ',
      '    ***   ',
      '     *    ',
      '    ***   '
    ],
    Z: [
      ' ******** ',
      '      **  ',
      '    **    ',
      '  **      ',
      ' ******** '
    ],
    0: [
      '  ******  ',
      ' **    ** ',
      ' **    ** ',
      ' **    ** ',
      '  ******  ',
    ],
    1: [
      '    **    ',
      '   ***    ',
      '    **    ',
      '    **    ',
      '   ****   ',
    ],
    2: [
      '  *****   ',
      '      **  ',
      '    **    ',
      '  **      ',
      '  ******  ',
    ],
    3: [
      '  ******  ',
      '       ** ',
      '   ****   ',
      '       ** ',
      '  ******  ',
    ],
    4: [
      ' **   **  ',
      ' **   **  ',
      ' *******  ',
      '      **  ',
      '      **  ',
    ],
    5: [
      '  ******  ',
      '  **      ',
      '  ******  ',
      '       ** ',
      '  ******  ',
    ],
    6: [
      '  ******  ',
      ' **       ',
      ' *******  ',
      ' **    ** ',
      '  ******  ',
    ],
    7: [
      '  ******  ',
      '      **  ',
      '     **   ',
      '    **    ',
      '   **     ',
    ],
    8: [
      '  ******  ',
      ' **    ** ',
      '  ******  ',
      ' **    ** ',
      '  ******  ',
    ],
    9: [
      '  ******  ',
      ' **    ** ',
      '  ******* ',
      '       ** ',
      '  ******  ',
    ],
    '&': [
      '  *****   ',
      ' **   *   ',
      '   ***   *',
      ' **   *** ',
      '  ****** *'
    ],
    '+': [
      '          ',
      '    **    ',
      '  ******  ',
      '    **    ',
      '          '
    ],
    '-': [
      '          ',
      '          ',
      '   ****   ',
      '          ',
      '          '
    ],
    '_': [
      '          ',
      '          ',
      '          ',
      '          ',
      '  ******  '
    ],
    '.': [
      '      ',
      '      ',
      '      ',
      '      ',
      '  **  '
    ],
    ',': [
      '      ',
      '      ',
      '      ',
      '  **  ',
      '   *  '
    ],
    ' ': [
      '          ',
      '          ',
      '          ',
      '          ',
      '          '
    ],
    '!': [
      '    **    ',
      '    **    ',
      '    **    ',
      '          ',
      '    **    '
    ],
    $: [
      '  ******  ',
      ' ** **    ',
      '  ******  ',
      '    ** ** ',
      '  ******  '
    ],
    '%': [
      ' **      * ',
      '       *   ',
      '     *     ',
      '   *       ',
      ' *      ** '
    ],
    '@': [
      '  ******  ',
      ' *      * ',
      ' *  ***** ',
      ' *  *  ** ',
      '  ******  ',
    ],
    ')': [
      '   **     ',
      '    **    ',
      '    **    ',
      '    **    ',
      '   **     ',
    ],
    '(': [
      '     **   ',
      '    **    ',
      '    **    ',
      '    **    ',
      '     **   ',
    ],
    '*': [
      '  **   **   **  ',
      '    ** ** **    ',
      ' ***  ****  *** ',
      '    ** ** **    ',
      '  **   **   **  ',
    ],
    "'": [
      '  **  ',
      '   *  ',
      '      ',
      '      ',
      '      ',
    ],
    '#': [
      '       **  **   ',
      '     **  **  ** ',
      '       **  **   ',
      '     **  **  ** ',
      '       **  **   '
    ]
  };

  const Colors = {
    BLACK: '\x1b[40m\x1b[30m',
    RED: '\x1b[41m\x1b[31m',
    GREEN: '\x1b[42m\x1b[32m',
    YELLOW: '\x1b[43m\x1b[33m',
    BLUE: '\x1b[44m\x1b[34m',
    MAGENTA: '\x1b[45m\x1b[35m',
    CYAN: '\x1b[46m\x1b[36m',
    WHITE: '\x1b[47m\x1b[37m'
  };

  const HIDDEN = '\x1b[8m';
  const RESET = '\x1b[0m';


  const inputText = global.process.argv[2] || 'Enter text...';
  const inputColor = global.process.argv[3] || 'WHITE';

  const text = inputText.toUpperCase() + '#';
  const color = Colors[inputColor.toUpperCase()];
  const none = Colors['BLACK'];

  let line;
  let char;
  for (let i = 0; i < 5; i++) {
    line = '';
    for (let j = 0; j < text.length; j++) {
      char = text[j];
      line += Characters[char][i];
    };
    line = line.replace(/\s\*/g, ' ' + color + '*');
    line = line.replace(/\*\s/g, '*' + none + ' ');
    if (line[0] === ' ') {
      line = none + line;
    } else {
      line = color + line;
    }
    console.log(HIDDEN + color + line + RESET);
  };

})();