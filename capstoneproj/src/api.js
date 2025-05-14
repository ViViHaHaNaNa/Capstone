const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
}


let bookings = JSON.parse(localStorage.getItem("bookings")) || []
const submitAPI = function(formData) {
    let date = formData.date
    let time = formData.time
    let taken = bookings.some((booking)=>{
        return booking.time == time && booking.date == date
    })
    if(taken){
        return false
    }
    bookings.push(formData)
    localStorage.setItem("bookings",JSON.stringify(bookings))
    console.log(bookings)
    return true
};

export {fetchAPI, submitAPI, bookings}