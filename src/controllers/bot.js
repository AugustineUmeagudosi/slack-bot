import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { User } from '../models';
import { Response } from "../utils/index";

export const greetings = async (req, res) => {
  const welcomeMessagePath = path.join(__dirname, '..', 'utils', 'messages', 'welcome.txt');
  const data = fs.readFileSync(welcomeMessagePath, 'utf8');

  if(process.env.NODE_ENV == 'test') return Response.info(res, "successFul", 200, null);
  return axios.post(process.env.SLACK_WEBHOOK, JSON.parse(data));
};

export const feeling = async (req, res) => {
  const { body: {user, actions} } = req;
  const userExists = await User.findOne({ userId: user.id, userName: user.username});
  if(!userExists) {
    const newUser = new User();
    newUser.userId = user.id ? user.id : null;
    newUser.userName = user.username ? user.username : null;
    newUser.name = user.name ? user.name : null;
    newUser.team_id = user.team_id ? user.team_id : null;
    newUser.feeling = actions[0].value ? actions[0].value : null;
    await newUser.save();

    return Response.info(res, "successFul", 201, newUser );
  }else {
    userExists.feeling = actions[0].value ? actions[0].value : null;
    await userExists.save();
    return Response.info(res, "successFul", 200, userExists );
  }
};

export const hobbies = async (req, res) => {
  const { body: {user, actions} } = req;
  let userHobbies = [];
  if(actions[0].selected_options){
    actions[0].selected_options.forEach(elem => {
      userHobbies.push(elem.value);
    });
  }

  const userExists = await User.findOne({ userId: user.id, userName: user.username});
  if(!userExists) {
    const newUser = new User();
    newUser.userId = user.id ? user.id : null;
    newUser.userName = user.username ? user.username : null;
    newUser.name = user.name ? user.name : null;
    newUser.team_id = user.team_id ? user.team_id : null;
    newUser.hobbies = userHobbies;
    await newUser.save();
  }else {
    userExists.hobbies = userHobbies;
    await userExists.save();
  }
  return Response.info(res, "successFul", 200, null);
};

export const getUserResponses = async (req, res) => {
  const users = await User.find();
  return Response.info(res, "Showing all user responses", 200, users);
};