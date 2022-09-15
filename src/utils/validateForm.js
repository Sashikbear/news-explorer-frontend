export function validateLoginInfo(values) {
  let errors = {};

  if (!values.email) {
    errors.email = 'Email address is required. Please fill in this field.';
    // eslint-disable-next-line
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(values.email)) {
    errors.email = 'The email address has an invalid format.';
  } else if (!values.password) {
    errors.password = 'Password is required. Please fill in this field.';
  } else if (values.password.length < 8) {
    errors.password = 'Please lengthen your password to 8 characters or more.';
  }

  return errors;
}

export function validateSignUpInfo(values) {
  let errors = {};

  if (!values.email) {
    errors.email = 'Email address is required. Please fill in this field.';
    // eslint-disable-next-line
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(values.email)) {
    errors.email = 'The email address has an invalid format.';
  } else if (!values.password) {
    errors.password = 'Password is required. Please fill in this field.';
  } else if (values.password.length < 8) {
    errors.password = 'Please lengthen your password to 8 characters or more.';
  } else if (!values.name) {
    errors.name = 'Username is required. Please fill in this field.';
  } else if (values.name.length < 2) {
    errors.name = 'Please lengthen your username to 2 characters or more.';
  }

  return errors;
}

export function validateSearch(values) {
  let errors = {};

  if (!values.search) {
    errors.search = 'Please enter a keyword.';
  }
  return errors;
}
