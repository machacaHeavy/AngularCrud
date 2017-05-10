export class User{
    user: string;
    email: string;
    tel: string;


    validations: any;

    constructor(){
        this.user  = null;
        this.email = null;
        this.tel   = null;
        
        this.validations = {
            user : false,
            email: false,
            tel:   false
        };
    }
    

}