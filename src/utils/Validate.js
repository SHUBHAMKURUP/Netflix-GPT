export const checkValidData = (name, email, password) => {
  const isNameValid = /^[a-zA-Z\s]*$/.test(name);
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
    password
  );
  if (!isNameValid) return "Invalid name";
  if (!name) {
    return "Name cannot be empty";
  }
  if (name.length < 2) {
    return "Name must be at least 2 characters long";
  }
  if (!isEmailValid) return "Invalid email";
  if (!isPasswordValid) return "Invalid password";

  return null;
};
