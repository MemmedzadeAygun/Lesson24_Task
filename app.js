
function capitalizeWords(text){
   return text.replace(/\b\w/g,(match)=>match.toUpperCase());
}

let input="Hello my name is Harry";
console.log(capitalizeWords(input));    //Task1

function checkPhoneNumber(phoneNumber) {
    let numberChecking = /^(\+7)\d{10}$/; 
    if (phoneNumber.match(numberChecking)) {
        return true;
    } else {
        return false; 
    }
}

let phone = "+70507962168"; 
console.log(checkPhoneNumber(phone));   //Task2


function numCounter(text){
    let splitText=text.split("");
    let splitText2=text.split(" ");
   let textLength=splitText.length;
   let textLength2=splitText2.length;

    return textLength-(textLength2-1);

}


const text="Günəş doğanda səhərin sərin havası insanı oyadır quşların səsi təbiətin musiqisi kimi gəlir bir fincan çayla başlanan gün daha gözəl olur dostlarla xoş söhbət ruhu dincəldir kitab oxuyaraq yeni dünyalar kəşf edilir";
console.log(numCounter(text));      //Task3

