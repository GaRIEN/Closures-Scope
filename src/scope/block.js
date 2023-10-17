function fruits(){
    if (true){
        var fruit1='Apple';//fuction scope
        let fruit2='Kiwi';//block scope
        const fruit3='Banana';//block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();