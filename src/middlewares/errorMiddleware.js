import httpStatus from "http-status";

export default function errorHandler(error, req, res, next) {
    console.log(error);

    switch (error.type) {
        case "conflict":
            res.status(httpStatus.CONFLICT).send(error.message);
            break;

        case "notFound":
            res.status(httpStatus.NOT_FOUND).send(error.message);
            break;

        case "incompleteData":
            res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
            break;

        case "invalid":
            res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
            break;
            
        case "joiError":
            res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
            break;

        default:
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong");
            break;
    }
}
