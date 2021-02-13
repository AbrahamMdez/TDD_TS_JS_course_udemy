import { Pen } from '../models/PenModel'

describe('Pen', () => {
    test('write', () => {
        const pen = new Pen('Hola bro')
        expect(pen.write()).toBe('Hola bro')
    })
})