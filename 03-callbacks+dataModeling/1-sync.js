var data_model_array = {
	db: // array
	create(new_object) {
		// somehow associates an object with a new id
		// adds the object to db
	},
	read(entry_id) {
		return // object associated with that id
	},
	update(entry_id, new_value) {
		// replace said entry with said value
	},
	remove(entry_id) {
		// remove object with said id
		// this operation must not change other objects' id's
	}
};

var data_model_object = {
	db: // object 
	// ...
}