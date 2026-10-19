

/**
 * @description - clean Opcode form
 * @returns {Boolean} valid opcode usage or not
 */

export const opcodeValidator = () => 
    {
    const opCodes = [0x0, 0x1, 0x2, 0x8, 0x9, 0xA];

    const opCodeElement = document.getElementById('opcodeInput');
    const rawByte = opCodeElement.value.trim();
    if(rawByte.toUpperCase() === 'A'){
        // 0xA is a special case
    }
    else if (rawByte === '' || !opCodes.includes(Number(rawByte))) {
        opCodeElement.style.border = '2px solid red';
        return false;
    } else {
        opCodeElement.style.border = '';
    }


    
  errorEl.textContent = '';

  return true;
}

/**
 * 
 * @description clean packet payload before sending oubount
 * 
 */
export const  payloadValidator = () => 
    {
    const payloadElement = document.getElementById('payloadInput');
    const opCodeVal = Number(document.getElementById('opcodeInput').value);
    const finBit = document.getElementById('finBit').checked;
    const errorEl = document.getElementById('craftError');

    // handle 8, 9, and A opcode requirements
    switch(opCodeVal){
        case 0x8:
        case 0x9: 
        case 0xA: 
            if (!finBit){
                errorEl.textContent = 'Control packets cannot be fragmented (FIN must be checked)';
                return false;
            }
            break;
        default:
            break;
    }

    errorEl.textContent = '';
    payloadElement.style.border = '';
    return true;
}


