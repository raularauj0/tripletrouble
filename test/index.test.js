const reagroup = require('../src/index')

describe('make the first letter to reagroup in a order', () => { 
    // test('when parameter is abc abc abc return aaabbbccc', () => {
    //     const one = 'abc'
    //     const two = 'abc'
    //     const three = 'abc'
    //     expect(reagroup(one,two,three)).toBe('aaabbbccc')
    // })
    // test('when parameter is aa bb cc return aabbcc', () => {
    //     const one = 'aa'
    //     const two = 'bb'
    //     const three = 'cc'
    //     expect(reagroup(one,two,three)).toBe('aabbcc')
    // })
    test('should return the reagroup string "abcabc" when parameters is the same', () => {
        const one = 'aa'
        const two = 'bb'
        const three = 'cc'
        expect(reagroup(one, two, three)).toBe('abcabc')
    })
    test('should return the reagroup string "" when parameters are diferent', () => {
        const one = 'abc'
        const two = 'abc'
        const three = 'abc'
        expect(reagroup(one, two, three)).toBe('aaabbbccc')
    })
 })