const assert = require('chai').assert;

const errors = require('../../lib');

// Note: if we export anything but error classes, then filter them out here:
const errorClasses = Object.keys(errors).map(name => errors[name]);

describe('ts-lib-errors-nodejs', () => {
  errorClasses.forEach(ErrorClass => {
    describe(ErrorClass.name, () => {
      it('should set message to 1st arg if is string', () => {
        const e = new ErrorClass('a');
        assert.strictEqual(e.message, 'a');
      });

      it('should set message to default if 1st arg is not string', () => {
        const e = new ErrorClass(42);
        assert.strictEqual(e.message, ErrorClass.defaultMessage);
      });

      it('should set data to 1st arg if not string', () => {
        const e = new ErrorClass(42);
        assert.strictEqual(e.data, 42);
      });

      it('should throw if 2 args, and 1st is not string', () => {
        assert.throws(() => {
          // We are the priests of the Temples of Syrinx
          const e = new ErrorClass(21, 12);
          assert.isNotOk(e);
        }, TypeError);
      });

      it('should set message to 1st arg if 2 args', () => {
        const e = new ErrorClass('a', 42);
        assert.strictEqual(e.message, 'a');
      });

      it('should set data to 2nd arg if 2 args', () => {
        const e = new ErrorClass('a', 42);
        assert.strictEqual(e.data, 42);
      });

      it('should set message to default if undefined and 2 args', () => {
        const e = new ErrorClass(undefined, 42);
        assert.strictEqual(e.message, ErrorClass.defaultMessage);
      });

      it('should set data to data.details if data.isJoi is true', () => {
        const details = [
          {
            message: 'Test',
            path: 'foo.bar',
            type: 'TestError',
          },
        ];

        const e = new errors.ValidationError({ isJoi: true, details });
        assert.isArray(e.data);
      });

      it('should allow data to be a number', () => {
        assert.doesNotThrow(() => {
          new ErrorClass('a', 42);
        });
      });

      it('should allow data to be a Date', () => {
        assert.doesNotThrow(() => {
          new ErrorClass('a', new Date());
        });
      });

      it('should allow data to be a null', () => {
        assert.doesNotThrow(() => {
          new ErrorClass('a', null);
        });
      });

      it('should allow data to be undefined', () => {
        assert.doesNotThrow(() => {
          new ErrorClass('a', undefined);
        });
      });

      it('should allow data to be a string', () => {
        assert.doesNotThrow(() => {
          new ErrorClass('a', 'a string');
        });
      });

      it('should be instanceof Error', () => {
        const e = new ErrorClass();
        assert.instanceOf(e, Error);
      });
    });
  });
});
