function genOTP(hash) {
    var time = new Date().getMinutes() + new Date().getHours() * 60;
    let seed = parseInt(hash,16) * time;
    let a = seed * 15485863;
    let b = ((a * a * a) % 2038074743) / 2038074743;
    let otp = parseInt(b * 100000000,10) % 999999;
    while(otp.length<6){
        otp = "0" + otp 
    }
    return otp
}
// genOTP('2424234a234a234a234a')