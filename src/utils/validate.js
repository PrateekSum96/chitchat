const checkValidate = (email, password) => {
  const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isValidEmail) {
    return "Email ID is not valid!";
  }
  if (!isPasswordValid) {
    return (
      <div>
        <h3>Password must contain:</h3>
        <li>Minimum 8 characters.</li>
        <li>One number.</li>
        <li>One Uppercase letter.</li>
        <li>One Lowercase letter.</li>
      </div>
    );
  }
  return null;
};

export default checkValidate;
