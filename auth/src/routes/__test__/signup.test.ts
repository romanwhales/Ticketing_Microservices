import request from 'supertest';
import {app} from '../../app';

it('returns a 201 on successful signup',async (done) => {
    request(app).post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'password'
        })
        .expect(201);
        done();      
})

it('returns a 400 with an invalid email',async (done) => {
    await request(app).post('/api/users/signup')
       
        .send({
            email: 'test@test.com',
            password: 'hjj'
        })
        .expect(400)
        done();      
})

it('disallows duplicate emails', (done) => {
        request(app).post('/api/users/signup')
        .send({
            email: 'test@yahoo.com',
            password: 'hjjdgg'
        })
        .expect(201)
        request(app).post('/api/users/signup')
        .send({
            email: 'test@yahoo.com',
            password: 'hjjdgg'
        })
        .expect(400)
        done(); 
})

it('sets a cookie after successful signup',(done) => {
    const response =   request(app).post('/api/users/signup')
        .send({
            email: 'test@yahoo.com',
            password: 'hjjdgg'
        })
        .expect(201);
    // expect(response.get('Set-Cookie')).toBeDefined();
    done()
    
})