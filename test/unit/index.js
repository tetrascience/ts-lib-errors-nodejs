const assert = require('chai').assert;

const errors = require('../../lib');


describe('FormatError', () => {
  describe('#constructor', () => {
    it('should set message to 1st arg if is string', () => {
      const e = new errors.FormatError('a');
      assert.strictEqual(e.message, 'a');
    });

    it('should set message to default if 1st arg is not string', () => {
      const e = new errors.FormatError(42);
      assert.strictEqual(e.message, errors.FormatError.defaultMessage);
    });

    it('should set data to 1st arg if not string', () => {
      const e = new errors.FormatError(42);
      assert.strictEqual(e.data, 42);
    });

    it('should throw if 2 args, and 1st is not string', () => {
      assert.throws(() => {
        // We are the priests of the Temples of Syrinx
        const e = new errors.FormatError(21, 12);
        assert.isNotOk(e);
      }, TypeError);
    });

    it('should set message to 1st arg if 2 args', () => {
      const e = new errors.FormatError('a', 42);
      assert.strictEqual(e.message, 'a');
    });

    it('should set data to 2nd arg if 2 args', () => {
      const e = new errors.FormatError('a', 42);
      assert.strictEqual(e.data, 42);
    });

    it('should set message to default if undefined and 2 args', () => {
      const e = new errors.FormatError(undefined, 42);
      assert.strictEqual(e.message, errors.FormatError.defaultMessage);
    });

    it('should be instanceof Error', () => {
      const e = new errors.FormatError();
      assert.instanceOf(e, Error);
    });
  });
});

describe('ValidationError', () => {
  describe('#constructor', () => {
    it('should set message to 1st arg if is string', () => {
      const e = new errors.ValidationError('a');
      assert.strictEqual(e.message, 'a');
    });

    it('should set message to default if 1st arg is not string', () => {
      const e = new errors.ValidationError(42);
      assert.strictEqual(e.message, errors.ValidationError.defaultMessage);
    });

    it('should set data to 1st arg if not string', () => {
      const e = new errors.ValidationError(42);
      assert.strictEqual(e.data, 42);
    });

    it('should throw if 2 args, and 1st is not string', () => {
      assert.throws(() => {
        // We are the priests of the Temples of Syrinx
        const e = new errors.ValidationError(21, 12);
        assert.isNotOk(e);
      }, TypeError);
    });

    it('should set message to 1st arg if 2 args', () => {
      const e = new errors.ValidationError('a', 42);
      assert.strictEqual(e.message, 'a');
    });

    it('should set data to 2nd arg if 2 args', () => {
      const e = new errors.ValidationError('a', 42);
      assert.strictEqual(e.data, 42);
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

    it('should set message to default if undefined and 2 args', () => {
      const e = new errors.ValidationError(undefined, 42);
      assert.strictEqual(e.message, errors.ValidationError.defaultMessage);
    });

    it('should be instanceof Error', () => {
      const e = new errors.ValidationError();
      assert.instanceOf(e, Error);
    });
  });
});

describe('CredentialsError', () => {
  describe('#constructor', () => {
    it('should set message to 1st arg if is string', () => {
      const e = new errors.CredentialsError('a');
      assert.strictEqual(e.message, 'a');
    });

    it('should set message to default if 1st arg is not string', () => {
      const e = new errors.CredentialsError(42);
      assert.strictEqual(e.message, errors.CredentialsError.defaultMessage);
    });

    it('should set data to 1st arg if not string', () => {
      const e = new errors.CredentialsError(42);
      assert.strictEqual(e.data, 42);
    });

    it('should throw if 2 args, and 1st is not string', () => {
      assert.throws(() => {
        // We are the priests of the Temples of Syrinx
        const e = new errors.CredentialsError(21, 12);
        assert.isNotOk(e);
      }, TypeError);
    });

    it('should set message to 1st arg if 2 args', () => {
      const e = new errors.CredentialsError('a', 42);
      assert.strictEqual(e.message, 'a');
    });

    it('should set data to 2nd arg if 2 args', () => {
      const e = new errors.CredentialsError('a', 42);
      assert.strictEqual(e.data, 42);
    });

    it('should set message to default if undefined and 2 args', () => {
      const e = new errors.CredentialsError(undefined, 42);
      assert.strictEqual(e.message, errors.CredentialsError.defaultMessage);
    });

    it('should be instanceof Error', () => {
      const e = new errors.CredentialsError();
      assert.instanceOf(e, Error);
    });
  });
});

describe('UnauthorizedError', () => {
  describe('#constructor', () => {
    it('should set message to 1st arg if is string', () => {
      const e = new errors.UnauthorizedError('a');
      assert.strictEqual(e.message, 'a');
    });

    it('should set message to default if 1st arg is not string', () => {
      const e = new errors.UnauthorizedError(42);
      assert.strictEqual(e.message, errors.UnauthorizedError.defaultMessage);
    });

    it('should set data to 1st arg if not string', () => {
      const e = new errors.UnauthorizedError(42);
      assert.strictEqual(e.data, 42);
    });

    it('should throw if 2 args, and 1st is not string', () => {
      assert.throws(() => {
        // We are the priests of the Temples of Syrinx
        const e = new errors.UnauthorizedError(21, 12);
        assert.isNotOk(e);
      }, TypeError);
    });

    it('should set message to 1st arg if 2 args', () => {
      const e = new errors.UnauthorizedError('a', 42);
      assert.strictEqual(e.message, 'a');
    });

    it('should set data to 2nd arg if 2 args', () => {
      const e = new errors.UnauthorizedError('a', 42);
      assert.strictEqual(e.data, 42);
    });

    it('should set message to default if undefined and 2 args', () => {
      const e = new errors.UnauthorizedError(undefined, 42);
      assert.strictEqual(e.message, errors.UnauthorizedError.defaultMessage);
    });

    it('should be instanceof Error', () => {
      const e = new errors.UnauthorizedError();
      assert.instanceOf(e, Error);
    });
  });
});

describe('NotFoundError', () => {
  describe('#constructor', () => {
    it('should set message to 1st arg if is string', () => {
      const e = new errors.NotFoundError('a');
      assert.strictEqual(e.message, 'a');
    });

    it('should set message to default if 1st arg is not string', () => {
      const e = new errors.NotFoundError(42);
      assert.strictEqual(e.message, errors.NotFoundError.defaultMessage);
    });

    it('should set data to 1st arg if not string', () => {
      const e = new errors.NotFoundError(42);
      assert.strictEqual(e.data, 42);
    });

    it('should throw if 2 args, and 1st is not string', () => {
      assert.throws(() => {
        // We are the priests of the Temples of Syrinx
        const e = new errors.NotFoundError(21, 12);
        assert.isNotOk(e);
      }, TypeError);
    });

    it('should set message to 1st arg if 2 args', () => {
      const e = new errors.NotFoundError('a', 42);
      assert.strictEqual(e.message, 'a');
    });

    it('should set data to 2nd arg if 2 args', () => {
      const e = new errors.NotFoundError('a', 42);
      assert.strictEqual(e.data, 42);
    });

    it('should set message to default if undefined and 2 args', () => {
      const e = new errors.NotFoundError(undefined, 42);
      assert.strictEqual(e.message, errors.NotFoundError.defaultMessage);
    });

    it('should be instanceof Error', () => {
      const e = new errors.NotFoundError();
      assert.instanceOf(e, Error);
    });
  });
});

describe('ExistsError', () => {
  describe('#constructor', () => {
    it('should set message to 1st arg if is string', () => {
      const e = new errors.ExistsError('a');
      assert.strictEqual(e.message, 'a');
    });

    it('should set message to default if 1st arg is not string', () => {
      const e = new errors.ExistsError(42);
      assert.strictEqual(e.message, errors.ExistsError.defaultMessage);
    });

    it('should set data to 1st arg if not string', () => {
      const e = new errors.ExistsError(42);
      assert.strictEqual(e.data, 42);
    });

    it('should throw if 2 args, and 1st is not string', () => {
      assert.throws(() => {
        // We are the priests of the Temples of Syrinx
        const e = new errors.ExistsError(21, 12);
        assert.isNotOk(e);
      }, TypeError);
    });

    it('should set message to 1st arg if 2 args', () => {
      const e = new errors.ExistsError('a', 42);
      assert.strictEqual(e.message, 'a');
    });

    it('should set data to 2nd arg if 2 args', () => {
      const e = new errors.ExistsError('a', 42);
      assert.strictEqual(e.data, 42);
    });

    it('should set message to default if undefined and 2 args', () => {
      const e = new errors.ExistsError(undefined, 42);
      assert.strictEqual(e.message, errors.ExistsError.defaultMessage);
    });

    it('should be instanceof Error', () => {
      const e = new errors.ExistsError();
      assert.instanceOf(e, Error);
    });
  });
});

describe('ConcurrencyError', () => {
  describe('#constructor', () => {
    it('should set message to 1st arg if is string', () => {
      const e = new errors.ConcurrencyError('a');
      assert.strictEqual(e.message, 'a');
    });

    it('should set message to default if 1st arg is not string', () => {
      const e = new errors.ConcurrencyError(42);
      assert.strictEqual(e.message, errors.ConcurrencyError.defaultMessage);
    });

    it('should set data to 1st arg if not string', () => {
      const e = new errors.ConcurrencyError(42);
      assert.strictEqual(e.data, 42);
    });

    it('should throw if 2 args, and 1st is not string', () => {
      assert.throws(() => {
        // We are the priests of the Temples of Syrinx
        const e = new errors.ConcurrencyError(21, 12);
        assert.isNotOk(e);
      }, TypeError);
    });

    it('should set message to 1st arg if 2 args', () => {
      const e = new errors.ConcurrencyError('a', 42);
      assert.strictEqual(e.message, 'a');
    });

    it('should set data to 2nd arg if 2 args', () => {
      const e = new errors.ConcurrencyError('a', 42);
      assert.strictEqual(e.data, 42);
    });

    it('should set message to default if undefined and 2 args', () => {
      const e = new errors.ConcurrencyError(undefined, 42);
      assert.strictEqual(e.message, errors.ConcurrencyError.defaultMessage);
    });

    it('should be instanceof Error', () => {
      const e = new errors.ConcurrencyError();
      assert.instanceOf(e, Error);
    });
  });
});

describe('TempUnavailableError', () => {
  describe('#constructor', () => {
    it('should set message to 1st arg if is string', () => {
      const e = new errors.TempUnavailableError('a');
      assert.strictEqual(e.message, 'a');
    });

    it('should set message to default if 1st arg is not string', () => {
      const e = new errors.TempUnavailableError(42);
      assert.strictEqual(e.message, errors.TempUnavailableError.defaultMessage);
    });

    it('should set data to 1st arg if not string', () => {
      const e = new errors.TempUnavailableError(42);
      assert.strictEqual(e.data, 42);
    });

    it('should throw if 2 args, and 1st is not string', () => {
      assert.throws(() => {
        const e = new errors.TempUnavailableError(21, 12);
        assert.isNotOk(e);
      }, TypeError);
    });

    it('should set message to 1st arg if 2 args', () => {
      const e = new errors.TempUnavailableError('a', 42);
      assert.strictEqual(e.message, 'a');
    });

    it('should set data to 2nd arg if 2 args', () => {
      const e = new errors.TempUnavailableError('a', 42);
      assert.strictEqual(e.data, 42);
    });

    it('should set message to default if undefined and 2 args', () => {
      const e = new errors.TempUnavailableError(undefined, 42);
      assert.strictEqual(e.message, errors.TempUnavailableError.defaultMessage);
    });

    it('should be instanceof Error', () => {
      const e = new errors.TempUnavailableError();
      assert.instanceOf(e, Error);
    });
  });
});

describe('EnumError', () => {
  describe('#constructor', () => {
    it('should set message to 1st arg if is string', () => {
      const e = new errors.EnumError('a');
      assert.strictEqual(e.message, 'a');
    });

    it('should set message to default if 1st arg is not string', () => {
      const e = new errors.EnumError(42);
      assert.strictEqual(e.message, errors.EnumError.defaultMessage);
    });

    it('should set data to 1st arg if not string', () => {
      const e = new errors.EnumError(42);
      assert.strictEqual(e.data, 42);
    });

    it('should throw if 2 args, and 1st is not string', () => {
      assert.throws(() => {
        const e = new errors.EnumError(21, 12);
        assert.isNotOk(e);
      }, TypeError);
    });

    it('should set message to 1st arg if 2 args', () => {
      const e = new errors.EnumError('a', 42);
      assert.strictEqual(e.message, 'a');
    });

    it('should set data to 2nd arg if 2 args', () => {
      const e = new errors.EnumError('a', 42);
      assert.strictEqual(e.data, 42);
    });

    it('should set message to default if undefined and 2 args', () => {
      const e = new errors.EnumError(undefined, 42);
      assert.strictEqual(e.message, errors.EnumError.defaultMessage);
    });

    it('should be instanceof Error', () => {
      const e = new errors.EnumError();
      assert.instanceOf(e, Error);
    });
  });
});

describe('NotSupportedError', () => {
  describe('#constructor', () => {
    it('should set message to 1st arg if is string', () => {
      const e = new errors.NotSupportedError('a');
      assert.strictEqual(e.message, 'a');
    });

    it('should set message to default if 1st arg is not string', () => {
      const e = new errors.NotSupportedError(42);
      assert.strictEqual(e.message, errors.NotSupportedError.defaultMessage);
    });

    it('should set data to 1st arg if not string', () => {
      const e = new errors.NotSupportedError(42);
      assert.strictEqual(e.data, 42);
    });

    it('should throw if 2 args, and 1st is not string', () => {
      assert.throws(() => {
        const e = new errors.NotSupportedError(21, 12);
        assert.isNotOk(e);
      }, TypeError);
    });

    it('should set message to 1st arg if 2 args', () => {
      const e = new errors.NotSupportedError('a', 42);
      assert.strictEqual(e.message, 'a');
    });

    it('should set data to 2nd arg if 2 args', () => {
      const e = new errors.NotSupportedError('a', 42);
      assert.strictEqual(e.data, 42);
    });

    it('should set message to default if undefined and 2 args', () => {
      const e = new errors.NotSupportedError(undefined, 42);
      assert.strictEqual(e.message, errors.NotSupportedError.defaultMessage);
    });

    it('should be instanceof Error', () => {
      const e = new errors.NotSupportedError();
      assert.instanceOf(e, Error);
    });
  });
});
