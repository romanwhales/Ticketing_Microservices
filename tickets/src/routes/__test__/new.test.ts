import request from 'supertest';
import {app} from '../../app';
import jwt from 'jsonwebtoken';


it('has a route handler listening to /api/tickets for post requests',async () => {
    
    const response = await request(app)
        .post('/api/tickets')
        .send({})
    expect(response.status).not.toEqual(404);
})


it('can only be accessed if the user is signed in',async () => {
    const response = await request(app)
        .post('/api/tickets')
        .send({})
        .expect(401);
    // expect(response.status).toEqual(401)
})

// it('returns a status other than 401 if the user is signed in',async () => {
//     const response = await request(app)
//         .post('/api/tickets')
//         .set('Cookie',signin())
//         .send({})

//     expect(response.status).not.toEqual(401)
// })

it('returns an error if an invalid title is provided',async () => {
    // await request(app)
    //     .post('/api/tickets')
    //     .send({
    //         title: '',
    //         price: 10
    //     }).expect(400);
})

// it('returns a 404 if the ticket is not found',async () => {
//     const res = await request(app)
//         .get('/api/tickets/lkshddjdhhd')
//         .send()
//         .expect(404);
//     console.log(res.body)
// })

it('returns an error if an invalid price is provided',async () => {
    
})

it('creates a ticket with valid parameters',async () => {
    
})