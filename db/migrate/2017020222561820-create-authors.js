export function up(schema) {
  return schema.createTable('authors', table => {
    table.increments('id');
    table.string('first_name');
    table.string('last_name');
    table.string('nickname');
    // writer_id will be what the book
    // uses to relate to.
    table.integer('writer_id');
    table.timestamps();

    table.index('created_at');
    table.index('updated_at');
  });
}

export function down(schema) {
  return schema.dropTable('authors');
}
