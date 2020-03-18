exports.seed = function(knex) {

  const testData = [
    {VIN: 'rowValue1', make: '', model: '', mileage: '', transmission: '', title status: ''},
    {VIN: 'rowValue2'},
    {VIN: 'rowValue3'}
  ]
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert();
    });
};
