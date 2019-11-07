class Customer {

    fName: string;
    lName: string;

    constructor(f,l){
        this.fName = f;
        this.lName = l;

    }

    public greet(){
        console.log(this.fName);
        console.log(this.lName);
    }

}

