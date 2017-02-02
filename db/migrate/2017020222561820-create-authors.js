export function up(schema) {
  return schema.createTable('authors', table => {
    table.increments('id');
    table.string('first_name');
    table.string('last_name');
    table.string('nickname');
    table.timestamps();

    table.index('created_at');
    table.index('updated_at');
  });
}

export function down(schema) {
  return schema.dropTable('authors');
}
