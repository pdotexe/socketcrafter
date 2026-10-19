


/**
 * @description adds a FIN bit to the byte sequence
 * @param {Int} byte
 */


export const finCheck = (byte) => {
    if (byte != 81){
        return false;
    }
    else{
        return true;
    }
}

/**
 * @description sets the client mask bit to the server
 * @returns {Int} One byte mask bit.
 */

export const maskBit = () => {
    return 0x80;
}

const xorMask = (payload, key) => {
   return payload.map(
        (b, i) => b ^ key[i % 4]

        
    );
}

/**
 * @param {Uint8Array} payload
 * @returns {{ key: Uint8Array, maskedKey: Uint8Array}}
 * */
export const maskBitKey = (payload) =>
{
    const key = new Uint8Array(4);
    window.crypto.getRandomValues(key);
    const maskedKey = xorMask(payload, key);
    return { key, maskedKey };
}

/**
 * @description - convert hexpair packet sequence into binary data to send to server
 * @param {Int} packet - Hexpair websocket sequence
 * @returns - binary value
 */

export const toBinary = (packet) => {
    written = packet.replace(/\s+/g, ''); // remove anything besides the characters
    const binary = Uint8Array.fromHex(written);


    return binary;
}