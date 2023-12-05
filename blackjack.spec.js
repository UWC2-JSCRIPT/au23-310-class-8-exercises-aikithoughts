describe('Test for the Blackjack game', () => {
    it('should return false because dealer hand value is over 17', () => {
        const hand = [
            {suit: 'club', val: 10, displayVal: 10},
            {suit: 'club', val: 9, displayVal: 9}
        ]
        const shouldDealerDraw = dealerShouldDraw(hand);

        expect(shouldDealerDraw).toEqual(false);
    })

    it('should return true because dealer hand contains an ace', () => {
        const hand = [
            {suit: 'club', val: 11, displayVal: 'Ace'},
            {suit: 'club', val: 6, displayVal: 6}
        ]
        const shouldDealerDraw = dealerShouldDraw(hand);

        expect(shouldDealerDraw).toEqual(true);
    })

    it('should return false because dealer hand value is over 17 with an ace', () => {
        const hand = [
            {suit: 'club', val: 11, displayVal: 'Ace'},
            {suit: 'club', val: 6, displayVal: 6},
            {suit: 'club', val: 10, displayVal: 10}
        ]
        const shouldDealerDraw = dealerShouldDraw(hand);

        expect(shouldDealerDraw).toEqual(false);
    })

    it('should return true because dealer hand value is under 17', () => {
        const hand = [
            {suit: 'club', val: 2, displayVal: 2},
            {suit: 'club', val: 5, displayVal: 5},
            {suit: 'hearts', val: 2, displayVal: 2},
            {suit: 'hearts', val: 4, displayVal: 4}
        ]
        const shouldDealerDraw = dealerShouldDraw(hand);

        expect(shouldDealerDraw).toEqual(true);
    })
})