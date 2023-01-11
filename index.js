function genOTP(hash) {
    var time = new Date().getMinutes() + new Date().getHours() * 60;
    let seed = parseInt(hash,16) * time;
    let a = seed * 15485863;
    let b = ((a * a * a) % 2038074743) / 2038074743;
    let otp = parseInt(b * 100000000,10)
    return otp % 999999
}
// genOTP('2424234a234a234a234a');