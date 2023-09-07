class AppError extends Error {
	constructor(message, status) {
		super(message);

		this.status = status;
		this.message = message;
	}
}

//	Occurs when the request from the client is invalid or lacks required data.
class BadRequestError extends AppError {
	constructor(message = "Bad Request") {
		super(message, 400);
	}
}

//	Occurs when a user is auauthenticated.
class UnauthorizedError extends AppError {
	constructor(message = "User access unauthenticated") {
		super(message, 401);
	}
}

//	Occurs when a user is authenticated but doesn't have the necessary permissions to access a resource
class ForbiddenError extends AppError {
	constructor(message = "User access unauthorized") {
		super(message, 403);
	}
}

//	Occurs when a requested resource is not found in the database.
class NotFoundError extends AppError {
	constructor(message = "Resource Not Found") {
		super(message, 404);
	}
}

//	Occurs when there's a conflict, such as trying to create a resource that already exists
class ValidationError extends AppError {
	constructor(message = "Wrong Input Data / Params") {
		super(message, 422);
	}
}


//	Occurs when a user's session has expired
class SessionExpiredError extends AppError {
	constructor(message = "User Session Expired") {
		super(message, 401);
	}
}


//	Occurs when a required service (e.g., Redis) is temporarily unavailable.
class ServiceUnavailableError extends AppError {
	constructor(message = "Service is currently unavailable") {
		super(message, 503);
	}
}



export {
	AppError,
	BadRequestError,
	UnauthorizedError,
	ForbiddenError,
	NotFoundError,
	ValidationError,
	SessionExpiredError,
	ServiceUnavailableError
};
