function User(prop) {
  const name = prop.name;
  const handle = prop.handle;

  return (
    <span className="user">
      <span className="{prop.name}">USER_NAME</span>
      <span className="{prop.handle}">@ USER_HANDLE</span>
    </span>
  );
}
export default User;
