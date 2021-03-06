export default function makeRemoveUserController({ removeUser }) {
	return async function removeUserController(httpRequest) {
		const headers = {
			"Content-Type": "application/json"
		};
		try {
			const id = httpRequest.params.id;
			const user = await removeUser({ id });
			return {
				headers,
				statusCode: user.deletedCount > 0 ? 200 : 500
			};
		} catch (e) {
			console.log(e);
			return {
				headers,
				statusCode: 400,
				body: {
					error: e.message
				}
			};
		}
	};
}
