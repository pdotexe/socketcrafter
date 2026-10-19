

export const sessionHandler = () => {


const items = ['opcodeInput', 'payloadInput', 'finBit', 'maskBit'];


// page reload values ( get from the setItem in sessionstorage)
document.addEventListener('DOMContentLoaded' , () => {


    items.forEach(id => {
        const storedVal = sessionStorage.getItem(id);
        const element = document.getElementById(id);

         if (storedVal && element){
        element.value = storedVal;
    }
    });
});



// save values


document.addEventListener('input' , (e) => {
    const target = e.target;

    if (!items.includes(target.id)) return;
    
    const value = target.type ==='checkbox' ? target.checked : target.value;
    sessionStorage.setItem(target.id, value);
    
});



}



export const fieldClear = () => {
    
}