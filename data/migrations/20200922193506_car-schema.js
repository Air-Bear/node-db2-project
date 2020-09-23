
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {

      tbl.increments("id");
      // NOT NULLABLE:
      // VIN - unique, string
      tbl.string("VIN", 128).unique().notNullable();
      // make - string
      tbl.string("make", 128).notNullable();
      // model - string
      tbl.string("model", 128).notNullable();
      // mileage - int
      tbl.integer("mileage").notNullable()

      // NULLABLE:
      // transmission type - string
      tbl.string("transType", 128);
      // status of title - string
      tbl.string("titleStatus", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
