/*
 * Complete the 'taumBday' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER b  //num black gifts needed
 *  2. INTEGER w  //num white gifts needed
 *  3. INTEGER bc  //cost of a black gift
 *  4. INTEGER wc  //cost of a white gift
 *  5. INTEGER z  //cost to convert a black gift into a white gift and vise-versa
 */

const taumBday = (b, w, bc, wc, z) => {

    let cost = 0;
    let blackMin = BigInt(b) * BigInt(Math.min(bc, wc+z));
    let whiteMin = BigInt(w) * BigInt(Math.min(wc, bc+z));
    
    cost = blackMin + whiteMin;
    console.log(cost);
    return cost;
}
