const Function1 = () => {
  const user = {
    firstName: "randy",
    lastName: "su",
  };
  const formatName = (user) => {
    return user.firstName + " " + user.lastName;
  };
  return <h1>{formatName(user)}</h1>;
};

export default Function1;
