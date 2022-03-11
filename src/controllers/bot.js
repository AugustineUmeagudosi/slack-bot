import fs from 'fs';
import path from 'path';

export const greetings = async (req, res) => {
  const welcomeMessagePath = path.join(__dirname, '..', 'utils', 'messages', 'welcome.json');
  const data = fs.readFileSync(welcomeMessagePath, 'utf8');
  
  return res.json(data);
};