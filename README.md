# Common Errors for Node.js

Common errors for your Node.js app.  These errors are designed to be used in any layer of the app.

## Usage

Simply reference this module in the `dependencies` key of your `package.json` file...

```sh
$ npm install tetrascience/ts-errors -S
```

...and go to town...

```js
const errors = require('tetrascience/ts-errors');
const dataz = require('dataz');

const getMehDataz = (id) => {
  dataz.get(id)
    .then((item) => {
      if (item) return item;
      throw new errors.NotFoundError();
    });
}
```

## API

TLDR: you use the errors in this library like you would any JavaScript error.

### `ConcurrencyError`

Thrown when a provided resource version value (etag) does not match the current version value.

  * __Properties__

    + `message`: a description of the error.
    + `data`: if provided at construction time, an object containing additional information about the error.
    + `defaultMessage`: _(static)_ the default message used if one is not supplied to the constructor.

  * __Methods__

    + `constructor`
      - `message`: _(optional)_ the string value to use for the message.
      - `data`: _(optional)_ additional data to include with the error.

### `CredentialsError`

Thrown when authentication credentials or an identity token is invalid.

  * __Properties__

    + `message`: a description of the error.
    + `data`: if provided at construction time, an object containing additional information about the error.
    + `defaultMessage`: _(static)_ the default message used if one is not supplied to the constructor.

  * __Methods__

    + `constructor`
      - `message`: _(optional)_ the string value to use for the message.
      - `data`: _(optional)_ additional data to include with the error.

### `ExistsError`

Thrown when an insert or update operation results in a unique constraint violation.

  * __Properties__

    + `message`: a description of the error.
    + `data`: if provided at construction time, an object containing additional information about the error.
    + `defaultMessage`: _(static)_ the default message used if one is not supplied to the constructor.

  * __Methods__

    + `constructor`
      - `message`: _(optional)_ the string value to use for the message.
      - `data`: _(optional)_ additional data to include with the error.

### `FormatError`

Represents a request with an invalid format.

  * __Properties__

    + `message`: a description of the error.
    + `data`: if provided at construction time, an object containing additional information about the error.
    + `defaultMessage`: _(static)_ the default message used if one is not supplied to the constructor.

  * __Methods__

    + `constructor`
      - `message`: _(optional)_ the string value to use for the message.
      - `data`: _(optional)_ additional data to include with the error.

### `NotFoundError`

Thrown when a requested resource does not exist.

  * __Properties__

    + `message`: a description of the error.
    + `data`: if provided at construction time, an object containing additional information about the error.
    + `defaultMessage`: _(static)_ the default message used if one is not supplied to the constructor.

  * __Methods__

    + `constructor`
      - `message`: _(optional)_ the string value to use for the message.
      - `data`: _(optional)_ additional data to include with the error.

### `TempUnavailableError`

Thrown when a service is temporarily unavailable.  If this error is encountered, a retry should be attempted.

  * __Properties__

    + `message`: a description of the error.
    + `data`: if provided at construction time, an object containing additional information about the error.
    + `defaultMessage`: _(static)_ the default message used if one is not supplied to the constructor.

  * __Methods__

    + `constructor`
      - `message`: _(optional)_ the string value to use for the message.
      - `data`: _(optional)_ additional data to include with the error.

### `UnauthorizedError`

Thrown when an authenticated user does not have sufficient permissions to perform an operation.

  * __Properties__

    + `message`: a description of the error.
    + `data`: if provided at construction time, an object containing additional information about the error.
    + `defaultMessage`: _(static)_ the default message used if one is not supplied to the constructor.

  __Methods__

  * `constructor`
    - `message`: _(optional)_ the string value to use for the message.
    - `data`: _(optional)_ additional data to include with the error.

### `ValidationError`

Thrown when an argument is properly formed, but contains invalid information.

  * __Properties__

    + `message`: a description of the error.
    + `data`: if provided at construction time, an object containing additional information about the error.
    + `defaultMessage`: _(static)_ the default message used if one is not supplied to the constructor.

  * __Methods__

    + `constructor`
      - `message`: _(optional)_ the string value to use for the message.
      - `data`: _(optional)_ additional data to include with the error.  If `data` is a Joi error, `data` is set to the `details` property of the Joi error.
