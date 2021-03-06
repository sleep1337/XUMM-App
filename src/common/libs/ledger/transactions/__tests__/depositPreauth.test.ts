/* eslint-disable spellcheck/spell-checker */
/* eslint-disable max-len */

import DepositPreauth from '../depositPreauth';

import txTemplates from './templates/DepositPreauthTx.json';

describe('DepositPreauth tx', () => {
    it('Should set tx type if not set', () => {
        const depositPreauth = new DepositPreauth();
        expect(depositPreauth.Type).toBe('DepositPreauth');
    });

    it('Should return right parsed values', () => {
        // @ts-ignore
        const instance = new DepositPreauth(txTemplates);

        expect(instance.Authorize).toBe('rEhxGqkqPPSxQ3P25J66ft5TwpzV14k2de');

        expect(instance.Unauthorize).toBe('rEhxGqkqPPSxQ3P25J66ft5TwpzV14k2de');
    });
});
