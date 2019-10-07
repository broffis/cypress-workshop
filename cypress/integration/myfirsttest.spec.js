// import Person from '../../src/Person'

describe('Example', () => {
    it('should be true', () => {
      expect(true).to.equal(true);
    });
});


xdescribe('Person', () => {
    it('Should have a name', () => {
        const tanner = new Person('Tanner');

        expect(tanner.name).to.equal('Tanner')
    })
});

describe('Website', () => {
    it('loads', () => {
      cy.visit('https://tannerhodges.com');
    });

    it('takes you to github', () => {
        cy.visit('https://tannerhodges.com');

        cy.get(':nth-child(3) > .no-border')
        cy.get('a').contains('Github');
    })
});