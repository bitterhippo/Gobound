function Jobs() {

  const Testeronies = (name, contract, country) => <tr>
    <td>{name}</td>
    <td>{contract}</td>
    <td>{country}</td>
  </tr>

  const data = [
    {name: 'lolbert', contract: 'some dumb shit', country: 'amerika'},
    {name: 'lolbert1', contract: 'some dumb shit', country: 'amerika'},
    {name: 'lolbert2', contract: 'some dumb shit', country: 'amerika'}
  ];

  return <div>
    <table>
      <tr>
        <th>Company</th>
        <th>Contract</th>
        <th>Country</th>
      </tr>
      {/* Data to go here */}
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Andes</td>
        <td>Germany</td>
      </tr>
    </table>
  </div>
};

export default Jobs;