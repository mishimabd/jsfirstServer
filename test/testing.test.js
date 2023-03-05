const {sum} = require('../testing')
console.log(sum(1,2))
test('test 1 for sum',()=>{
    expect(sum(1,2)).toBe(3)
    expect(sum(2,3)).toBeLessThan(6)
    console.log('success!');
})
// test('test 2 for the equality of functions')