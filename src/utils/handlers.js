
/**
 * @description packet string copy function
 * @params none
 */

export const copyPacket = () => {

        const content = document.getElementById('output');
        const copiedItem = content.textContent;

        navigator.clipboard.writeText(copiedItem);
        }

/**
 * @description toggle tailwind class
 */
export const toggleClass = () => {

    const copy = document.getElementById('copyIcon');
    const check = document.getElementById('checkIcon');

    if (!check || !copy) return;

    copy.classList.add('hidden');
    check.classList.remove('hidden');


    // clear after 2 seconds
    setTimeout(() =>{
        copy.classList.remove('hidden');
        check.classList.add('hidden');


    }, 2000 );


   

}

 /**
     * @description checkbox logic
     * @param {boolean} checked 
     * @param {boolean} other
     */
export const checkValidate = (checked, other) => {
        if(checked.checked) other.checked = false;
    }