import { createEventAdapter } from '@slack/events-api';

const slackSigningSecret = process.env.SLACK_SIGNING_SECRET;
const slackEvents = createEventAdapter(slackSigningSecret);

function listenForEvents(app) {
  app.use('/slack/events', slackEvents.requestListener());
}

slackEvents.on('app_mention', (event) => {
  console.log(`Received an app_mention event from user ${event.user} in channel ${event.channel}`);
});

// All errors in listeners are caught here. If this weren't caught, the program would terminate.
slackEvents.on('error', (error) => {
  console.log(`error: ${error}`);
});

module.exports.listenForEvents = listenForEvents;