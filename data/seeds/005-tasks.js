
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { task_description: 'P1Task 1 Description', task_notes: 'P1Task 1 Notes', project_id: 1 },
        { task_description: 'P1Task 2 Description', task_notes: 'P1Task 2 Notes', project_id: 1 },
        { task_description: 'P1Task 3 Description', task_notes: 'P1Task 3 Notes', project_id: 1 },
        { task_description: 'P2Task 1 Description', task_notes: 'P2Task 1 Notes', project_id: 2 },
        { task_description: 'P2Task 2 Description', task_notes: 'P2Task 2 Notes', project_id: 2 },
        { task_description: 'P2Task 3 Description', task_notes: 'P2Task 3 Notes', project_id: 2 },
        { task_description: 'P3Task 1 Description', task_notes: 'P3Task 1 Notes', project_id: 3 },
        { task_description: 'P3Task 2 Description', task_notes: 'P3Task 2 Notes', project_id: 3 },
        { task_description: 'P3Task 3 Description', task_notes: 'P3Task 3 Notes', project_id: 3 },
      ]);
    });
};
