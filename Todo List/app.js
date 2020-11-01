//Form input:


document.querySelector('.loan-input').addEventListener('submit', function(e){
    document.querySelector('.i-results').style.display = 'none';
    setTimeout(calculateA, 1000);
    e.preventDefault()
})


function calculateA(){
//form input
const principalA=document.querySelector('#loan-amount');
const iRate1=document.querySelector('#loan-i');
const period1=document.querySelector('#loan-per');
//form output
const tPay=document.querySelector('#total-p');
const It=document.querySelector('#total-in');
const mPay=document.querySelector('#m-pay');
//input values
const principal = parseFloat(principalA.value);
const rate = parseFloat(iRate1.value)/100/12;
const period = parseFloat(period1.value)*12;
const x = Math.pow(1+rate, period);
const monthly = (principal*x*rate)/(x-1);

    if (isFinite(monthly)){
        mPay.value = monthly.toFixed(2);
        tPay.value = (monthly*period).toFixed(2);
        It.value = ((monthly*period)-principal).toFixed(2);
        document.querySelector('.i-results').style.display = 'block';
    } else {
        console.log('error');
    }

} 
