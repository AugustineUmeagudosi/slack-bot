import "dotenv/config";

/**
 * This is used to sanitize route parameters of dynamic routes
 * @param {string} urlParameter - route parameters to be sanitized.
 * @memberof Helper
 * @returns {string} - returns a string of the sanitized string.
 */
 export const stringSanitizer = (urlParameter) => {
  urlParameter = urlParameter.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
  return urlParameter.trim();
};
