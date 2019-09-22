import parseRequestURL from '../util.js';

const getCountry = async code => {
  const countryCode = code.toUpperCase();
  const options = {
    method: 'GET',
    header: {
      'content-type': 'application/json',
    },
  };
  try {
    const response = await fetch(
      `https://countriesnode.herokuapp.com/v1/countries/${countryCode}`,
      options,
    );
    const json = await response.json();

    return json;
  } catch (error) {
    console.log(error);
  }
};

let country = {
  render: async () => {
    const request = parseRequestURL();
    const country = await getCountry(request.id);
    let view = `
          <section id="country" class="section">
            
              <h1>Country Details</h1>
           
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Currency</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <td>${country.name}</td>
                  <td>${country.currency}</td>
                  <td>${country.phone}</td>
                </tr>
              </tbody>
            </table>
          </section>
      `;
    return view;
  },
};

export default country;
