import converter from '../src/converter';
import chai from 'chai';
const expect = chai.expect;

const numberMap = {
    0: 'zero',
    7: 'seven',
    8: 'eight',
    10: 'ten',
    15: 'fifteen',
    19: 'nineteen',
    21: 'twenty one',
    26: 'twenty six',
    42: 'fourty two',
    73: 'seventy three',
    106: 'one hundred and six',
    233: 'two hundred and thirty three',
    1356: 'one thousand and fifty six',
    26784: 'twenty six thousand seven hundred and eighty four',
    1356786: 'one million three hundred and fifty six thousand seven hundred and eighty six'
}

describe('converting intergers to string representation', () => {
    let numberValue;
    let stringValue;

    Object.keys(numberMap).forEach((value, index) => {
        numberValue = value;
        stringValue = numberMap[numberValue];

        it(`should return ${stringValue} when given ${numberValue}`, () => {
            expect(converter(numberValue)).to.equal(stringValue);
        });
    });
});
