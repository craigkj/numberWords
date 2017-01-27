### Tech test - Converting integers to English language string representations.

#### The Problem
We need a function that converts numeric values into their string representation. A simple example would be that the function returns the string `zero` when given the value 0.

Other examples include:

```
0: 'zero',
7: 'seven',
8: 'eight',
10: 'ten',
15: 'fifteen',
19: 'nineteen',
21: 'twenty one',
26: 'twenty six',
42: 'forty two',
73: 'seventy three',
106: 'one hundred and six',
233: 'two hundred and thirty three',
1356: 'one thousand and fifty six',
26784: 'twenty six thousand seven hundred and eighty four',
1356786: 'one million three hundred and fifty six thousand seven hundred and eighty six'
```

A starting point for the solution can be found in `src`, and the single existing test can be run via `npm test`


####Notes:
* How you break the problem down and create a solution is up to you.
* We are interested in seeing high quality, structured, maintainable code.
* It is not expected that you will complete the challenge in the time allotted, we are more interested in your thought process and approach to solving the problem than the actual solution.
* You may want to add test cases as you deem appropriate, `npm test` will run all test files in the `test` directory.
