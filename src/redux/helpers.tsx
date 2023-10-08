type ErrorInput = string | { message?: string; title?: string };

export const formatErrors = (errors: ErrorInput | ErrorInput[]): string[] => {
  const format = (err: ErrorInput): string => {
    if (typeof err === 'string') {
      return err;
    } else if (err && err.message) {
      return err.message;
    } else if (err && err.title) {
      return err.title;
    } else {
      return 'An unknown error occurred';
    }
  };

  if (Array.isArray(errors)) {
    return errors.map(format);
  } else {
    return [format(errors)];
  }
};
