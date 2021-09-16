function Header() {
  return (
    <header>
      <h1>Created with </h1>
      <img
        className="header-img"
        width="60"
        height="80"
        src="/graphql-logo.svg"
        alt="GraphQL logo"
      />
      <img
        className="header-img"
        width="60"
        height="80"
        src="/react-logo.svg"
        alt="React logo"
      />
      <img
        className="header-img"
        width="60"
        height="80"
        src="/react-router-logo.svg"
        alt="React logo"
      />
    </header>
  );
}
export default Header;
