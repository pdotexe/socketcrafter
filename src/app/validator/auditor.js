import { wsChecker, wssChecker } from './protocol';


/**
 * 
 * @description Implement serer check functions for frontend
 * @param {int} ip 
 * @param {int} port 
 * @returns {String} checked protocol
 */

export async function auditIP(ip, port) {
   const hasWs = await wsChecker(ip, port);
    if(hasWs) {
        console.log(`${ip} running unencrypted websockets on port ${port}`);
        return 'ws';
    }


    const hasWss = await wssChecker(ip,port);
    if(hasWss) {
        console.log(`${ip} is running encrypted websockets ${port}`);
        return 'wss';
}

    return null;
}