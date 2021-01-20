// Date

document.addEventListener('DOMContentLoaded', function() {
    dates();
})

function dates() {
    const year = new Date().getFullYear();
    const month = new Date().getMonth()
    if(month === 0) {
        document.querySelector('.insert-date').innerHTML = `Jan ${year}`;
    }else if(month === 1) {
        document.querySelector('.insert-date').innerHTML = `Feb ${year}`
    }else if(month === 2) {
        document.querySelector('.insert-date').innerHTML = `Mar ${year}`
    }else if(month === 3) {
        document.querySelector('.insert-date').innerHTML = `Apr ${year}`
    }else if(month === 4) {
        document.querySelector('.insert-date').innerHTML = `May ${year}`
    }else if(month === 5) {
        document.querySelector('.insert-date').innerHTML = `Jun ${year}`
    }else if(month === 6) {
        document.querySelector('.insert-date').innerHTML = `Jul ${year}`
    }else if(month === 7) {
        document.querySelector('.insert-date').innerHTML = `Aug ${year}`
    }else if(month === 8) {
        document.querySelector('.insert-date').innerHTML = `Sep ${year}`
    }else if(month === 9) {
        document.querySelector('.insert-date').innerHTML = `Oct ${year}`
    }else if(month === 10) {
        document.querySelector('.insert-date').innerHTML = `Nov ${year}`
    }else if(month === 11) {
        document.querySelector('.insert-date').innerHTML = `Dec ${year}`
    }
}



