export default function makeBuildUser({ Id, validator, makeItem }) {
	return function makeBuildUser({
		id = Id.makeId(),
		name,
		facebookId,
		email,
		items = []
	}) {
		if (!Id.isValidId(id)) {
			throw new Error("User should have a valid id");
		}
		if (!name) {
			throw new Error("User should have name");
		}
		if (!facebookId) {
			//Should Verify it better
			throw new Error("User should have a valid FacebookId");
		}
		if (!validator.validate(email)) {
			throw new Error("User should have a valid Email");
		}

		return Object.freeze({
			getId: () => id,
			getName: () => name,
			getEmail: () => email,
			getFacebookId: () => facebookId,
			getItems: () => items
		});
	};
}
