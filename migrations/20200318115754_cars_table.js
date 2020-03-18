
exports.up = function(knex) {
    return knex.schema.createTable("cars", tbl => {
        tbl.increments();

        tbl.string("VIN", 255).notNullable().unique().index();
        tbl.string("make", 255).notNullable().index();
        tbl.string("model", 255).notNullable().index();
        tbl.integer("mileage", 100).notNullable().index();
        tbl.string("transmission", 255).index();
        tbl.string("title status", 255).index();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
};
