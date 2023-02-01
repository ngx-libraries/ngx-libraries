import { encodeId, safeContext } from './utils.model';

describe('Resources Utils', () => {
  describe('encodeId', () => {
    it('should return integer id', () => {
      expect(encodeId(42))
        .toEqual('/42');
    });

    it('should return encoded string id', () => {
      expect(encodeId('fake/string/id'))
        .toEqual('/fake%2Fstring%2Fid');
    });

    it('should return empty string', () => {
      expect(encodeId(undefined))
        .toEqual('');
    });
  });

  describe('safeContext', () => {
    it('should return string', () => {
      expect(safeContext('/fake/context'))
        .toEqual('/fake/context');
    });

    it('should return empty string', () => {
      expect(safeContext(undefined))
        .toEqual('');
    });
  });
});
