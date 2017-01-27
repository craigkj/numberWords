import converter from '../src/converter';
import chai from 'chai';
const expect = chai.expect;

describe('converting intergers to string representation', () => {
    it('should return `zero` when given: 0', () => {
        expect(converter(0)).to.equal('zero');
    });
});
