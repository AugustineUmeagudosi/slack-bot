import chai from 'chai';
import chaiHttp from 'chai-http';
import 'dotenv/config';
import { User } from '../../src/models';
import app from '../../index';
import * as botFixtures from '../fixtures/bot';

const { expect } = chai;
chai.use(chaiHttp);

const baseUrl = '/bot';

describe('Bot Module', () => {
    before(async () => {
        await User.deleteMany();  
    });

    it('Should respond to a slash command', (done) => {
        chai.request(app)
        .post(`${baseUrl}`)
        .end((err, res) => {
            const { message, status } = res.body;
            expect(status).to.equal('success');
            expect(message).to.equal('successFul');
            done();
        });
    });

    it('should successfully record how a user is feeling', (done) => {
        chai.request(app)
        .post(`${baseUrl}/feeling`)
        .send(botFixtures.feeling)
        .end((err, res) => {
            const { message, status } = res.body;
            expect(status).to.equal('success');
            expect(message).to.equal('successFul');
            done();
        });
    });

    it('should successfully record user hobby', (done) => {
        chai.request(app)
        .post(`${baseUrl}`)
        .send(botFixtures.hobbies)
        .end((err, res) => {
            const { message, status } = res.body;
            expect(status).to.equal('success');
            expect(message).to.equal('successFul');
            done();
        });
    });

    it('should successfully fetch all user responses', (done) => {
        chai.request(app)
        .get(`${baseUrl}/user-responses`)
        .end((err, res) => {
            const { message, status } = res.body;
            expect(status).to.equal('success');
            expect(message).to.equal('Showing all user responses');
            done();
        });
    });
});
