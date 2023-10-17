const myGlobal=0;

function myFuction(){
    const myNumber=1;
    console.log(myNumber);
    function parent(){//fuction interna
        const inner=2;
        console.log(myNumber,myGlobal);

        function child(){
            console.log(inner,myNumber,myGlobal);
        }
        return child();
    }
    return parent();
}
myFuction();