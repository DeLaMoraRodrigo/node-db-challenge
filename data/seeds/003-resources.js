
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { resource_name: 'Resource 1 Name', resource_description: 'Resource 1 Description'},
        { resource_name: 'Resource 2 Name', resource_description: 'Resource 2 Description'},
        { resource_name: 'Resource 3 Name', resource_description: 'Resource 3 Description'},
      ]);
    });
};
