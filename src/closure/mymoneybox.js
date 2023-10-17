function moneyBox(){
    let saveCoins=0;
    function countCoins(coins){
        saveCoins+=coins;
        console.log(`MoneyBox: ${saveCoins}`);
    }
    return countCoins
}

const myMoneyBox=moneyBox();
myMoneyBox(10);
myMoneyBox(20);
myMoneyBox(30);

const myMoneyBoxAna = moneyBox();
myMoneyBoxAna(5);
myMoneyBoxAna(5);
myMoneyBoxAna(5);



//EJERCICIIO DE CLOSURE
function createPetList() {
  // Tu código aquí 👈
  const array=[]
    return (newPets)=> newPets?array.push(newPets):array;
    
}
const myPetList = createPetList();
myPetList("michi");

myPetList("firulais");

myPetList();
console.log(myPetList());