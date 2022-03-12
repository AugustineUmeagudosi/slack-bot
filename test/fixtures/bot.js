import faker from 'faker';

const testUser = `${faker.name.firstName(4)}${faker.name.lastName(4)}`;

const user = {
    id: "UCDRTM5R8",
    username: testUser,
    name: testUser,
    team_id: faker.internet.password(8),
};

export const feeling = {
    user,
    actions: [
        {
            action_id: "doing_well",
            value: "Doing well"
        }
    ]
};

export const hobbies = {
    user, 
    actions:[
        {
            selected_options: [
                {
                  text: { type: 'plain_text', text: 'Football', emoji: true },
                  value: 'Football'
                },
                {
                  text: { type: 'plain_text', text: 'Music', emoji: true },
                  value: 'Music'
                }
            ]
        }
    ]
};
