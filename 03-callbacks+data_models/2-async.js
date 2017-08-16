var data_model = {
	db: // array or object, your call
	create(new_object, callback) {
		// somehow associates an object with a new id
		// adds the object to db
	},
	read(entry_id, callback) {
		// pass said object into callback
	},
	update(entry_id, new_value, callback) {
		// replace said entry with said value
	},
	remove(entry_id, callback) {
		// remove object with said id
		// this operation must not change other objects' id's
	}
};