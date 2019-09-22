const getCountryList = async () => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await fetch(
      `https://countriesnode.herokuapp.com/v1/countries`,
      options,
    );
    const json = await response.json();
    return json;
  } catch (err) {
    console.log('Error getting documents', err);
  }
};

const countries = {
  render: async () => {
    const countries = await getCountryList();
    const view = `
          <section id="countries" class="section">
              <h1> All Countries </h1>
              <table>
                <thead>
                    <tr>
                      <th>Name</th>
                      <th>Languages</th>
                      <th></th>
                    </tr>
                </thead>
                <tbody>
                ${countries
                  .map(
                    country =>
                      `<tr>
                        <td>${country.name}</td>
                        <td>en ${country.languages.length > 0 ? 'and' : ''} ${
                        country.languages
                      } </td>
                        <td><a href="#/countries/${
                          country.code
                        }">Details</a></td>
                        </tr>`,
                  )
                  .join('\n ')}
                </tbody>
              </table>
          </section>
      `;
    return view;
  },
};

export default countries;
