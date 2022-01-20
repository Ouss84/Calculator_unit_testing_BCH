# calc library API

## **sum(a,b)**

Function returns the sum of two numbers. Numbers are passed to the function as parameters.

Returns the sum of given numbers or

- if parameter is missing, throws an exception: `'parameter missing'`
- if parameters are not numbers, throws an exception: `'only numbers allowed'`

## **subt(a,b)**

Function will retrun the difference a-b of two numbers.
Numbers are passed to the function as parameters.

Returns the difference of given numbers or

- if parameter is missing, throws an exception:`'parameter missing'`
- if parameters are not numbers, throws an exception: `'only numbers allowed'`

### Test cases

#### Sums

##### Integers

- sum(1,1) returns 2
- sum(2,3) returns 5
- sum(-2,-4) returns -6
- sum(-2,4) returns 2

  a b expected
  [2, -4, -2],
  [0, 0, 0],
  [0, 3, 3],
  [3, 0, 3],
  [0, -3,-3],
  [-3, 0,-3]

#### Floats

[10, 11.5, 21.5],
[2.5, 3, 5.5],
[-2.5, 3, 0.5],
[-3, 2.5, -0.5],
[-2.5, -2.5, -5],
[-2.5, 2.5, 0],
[2.4, -2.5, -0.1]

#### Missing parameters

- sum() throws an exception `'parameter missing'`
- sum(1) throws an exception `'parameter missing'`
- sum(a) throws an exception `'parameter missing'`
- sum('') throws an exception `'parameter missing'`

#### Parameters are not numbers

- sum ('a',1) throws an exception `'only numbers allowed'`
- sum (1,'a') throws an exception `'only numbers allowed'`
- sum ('a','b') throws an exception `'only numbers allowed'`
- sum ('','') throws an exception `'only numbers allowed'`
- sum ('1','2') throws an exception `'only numbers allowed'`

### substract

#### Integers

    [1, 0, 1]
    [0, 1, -1]
    [6, 5, 1]
    [2, 6, -4]
    [-4, -6, -10]
    [-3, 2, -1]
    [4, -2, 2]

#### Floats

[10, 11.5, -1.5],
[-2.5, 3, -5.5],
[2.5, 2.5, 0],
[2.4, -2.5, 4.9],

#### Missing parameters

- substract() throws an exception `'parameter missing'`
- substract(1) throws an exception `'parameter missing'`
- substract(a) throws an exception `'parameter missing'`
- substract('') throws an exception `'parameter missing'`

#### Parameters are not numbers

- substract ('a',1) throws an exception `'only numbers allowed'`
- substract (1,'a') throws an exception `'only numbers allowed'`
- substract ('a','b') throws an exception `'only numbers allowed'`
- substract ('','') throws an exception `'only numbers allowed'`
- substract ('1','2') throws an exception `'only numbers allowed'`
