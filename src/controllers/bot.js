import { Response } from "../utils/index";

/**
 * Controller used for responding to messages
 * @param {Request} req - The request from the endpoint.
 * @param {Response} res - The response returned by the method.
  * @returns { JSON } A JSON response containing the details of the newly created short link
 * @memberof BotController
 */
export const foo = async (req, res) => {
  return Response.info(res, "welcome!", 201, data);
};