import fs from 'fs';
import path from 'path';
import axios from 'axios';

export const greetings = async (req, res) => {
  const welcomeMessagePath = path.join(__dirname, '..', 'utils', 'messages', 'welcome.txt');
  const data = fs.readFileSync(welcomeMessagePath, 'utf8');

  return axios.post(process.env.SLACK_WEBHOOK, JSON.parse(data));
};

export const messages = async (req, res) => {
  

  return axios.post(process.env.SLACK_WEBHOOK, JSON.parse(data));
};

export const getMessages = async (req, res) => {
  

  return axios.post(process.env.SLACK_WEBHOOK, JSON.parse(data));
};