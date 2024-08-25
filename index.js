AOS.init();
AOS.init();
let btn = document.querySelectorAll('.btn')
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', (e)=> {
    calculator(e)
  })
}
const calculator=(e)=>{
  var type=e.target.innerHTML
  var num_1 = document.querySelector('.num_1')
  var num_2 = document.querySelector('.num_2')
  num_1 =chec(num_1)
  num_2 =chec(num_2)
  if(num_1 !=null && num_2 !=null) {
    res = 0
    switch(type) {
      case'+': res = num_1+num_2; break;
      case'-': res = num_1-num_2; break;
      case'*': res = num_1*num_2; break;
      case'/': res = num_1/num_2; break;
    }
    document.querySelector('.text').innerHTML = res.toFixed(2)
  }else {
    res.innerHTML =''
  }
}
const chec=(a)=>{
  if (a.value.length==0) {
    a.style.borderColor= 'red'
    return(null);
  }else {
    a.style.borderColor= 'black'
    return(Number(a.value));
  }
}

// branch muhammad
// branch testing
// hhhhhhhh
// asdadsdsd