// import { Address } from "cluster";

import { Address } from "./Address";



export class Customer{
    public customerId : number;
    public customerName : string;
    public customerEmail: string;
    public username: string;
    public password: string;
    public address: Address =new Address();
    
    
}