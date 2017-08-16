export class Bill {

    constructor (public item: string,
        public amount : number , public price : number ) {
    }

    toString () {
        return `item name: ${this.item}, amount: ${this.amount},price:${this.price} .`
    }
    getPrice()
    {
        return Math.imul(this.amount,this.price);
    }
    getitemname()
    {
        return this.item;
    }
    getitemamount()
    {
        return this.amount;
    }
    getitemprice()
    {
        return this.price;
    }
    setAmount(a : number)
    {
        this.amount=a;
    }

}
