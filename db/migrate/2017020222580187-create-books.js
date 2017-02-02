export function up(schema) {
  return schema.createTable('books', table => {
    table.increments('id');
    table.string('name');
    table.integer('author_id');
    table.timestamps();

    table.index('created_at');
    table.index('updated_at');
  });
}

export function down(schema) {
  return schema.dropTable('books');
}
