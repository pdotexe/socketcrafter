

/**
 * @description checks for ws listener
 * @param ip: address
 * @returns Promise<boolean>
 */



export function wsChecker(ip, port) {
    return new Promise<boolean>((resolve) =>{
    const ws = new WebSocket(`ws://${ip}:${port}`);
     const interval = setTimeout(() => {
            console.log("Connection Timed out");
            ws.close();
            resolve(true);
        
    }, 1000);
    ws.onopen = () => {
        clearTimeout(interval);
        resolve(true);
        ws.close();
        
    }
    ws.onerror = () => {
        console.log("Connection failed");
        resolve(false);
    }
    });
}
/**
 * @description checks for wss listener for TLS encrypted streams
 * @param ip: server address
 */
export function wssChecker(ip, port) {
    return new Promise<boolean>((resolve) => {

    
    const wss = new WebSocket(`wss://${ip}:${port}`);
    wss.onopen = () => {
        console.log("Connection successful");
        resolve(true);
        wss.close();
    }
    wss.onerror = (error) => {
        console.log("Connection failed", error);
        resolve(false);
    }
});
}