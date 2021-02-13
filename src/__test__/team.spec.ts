import { Team } from '../models/TeamModel'

describe('Team class', () => {
    it('Position', () => {
        const team = new Team()
        const position = {
            name: 'goalkeeper',
            tShirt: 1,
            skills: ['Kick hard', 'Run fast', 'Junmp high']
        }

        expect(team.position(position.name, position.tShirt, position.skills)).toEqual(['goalkeeper', 1, ['Kick hard', 'Run fast', 'Junmp high']])
    })

    it('Soccer Play', () => {
        const soccerPlay = new Team()

        expect(soccerPlay.attacker('')).toBe('attacker')
    })
})