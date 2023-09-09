import error from "../errors/types.js";

export function validateSchema(schema) {
    return (req, res, next) => { 
  
      const validation = schema.validate(req.body);
      if (validation.error) {
        console.log(validation.error.details);

        throw error.joiError(validation.error.details.map(detail => detail.message).join("; "));
      }
      
      next();
    }
  }