import rs from '../../src/algo/rotatingString'

test('rotatingString',()=>{
    expect(rs('abcdef',3)).toBe('defabc')
})