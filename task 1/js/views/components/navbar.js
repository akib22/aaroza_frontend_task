const navbar = {
  render: () => {
    let view = `<nav>
    <ul>
      <li><a href="/#/">Home</a></li>
      <li><a href="/#/countries">Countries</a></li>
      <li><a href="/#/about">About</a></li>
      <li><a href="/#/contact">Contact</a></li>
    </ul>
  </nav>`;
    return view;
  },
};

export default navbar;
