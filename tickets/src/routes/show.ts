import express, {Request,Response} from 'express';
import {Ticket} from '../models/tickets';
import {NotFoundError} from '@romanwhalestickets/common';


const router = express.Router();

router.get('/api/tickets/:id',async (req: Request,res: Response) => {
    const ticket = await Ticket.findById(req.params.id);
    console.log('Ticket is ',ticket);
    if(!ticket){
        throw new NotFoundError()
    }

    res.send(ticket);
})

export {router as showTicketRouter}