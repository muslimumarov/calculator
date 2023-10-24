let btns=document.querySelectorAll('.btn')
for (let i=0; i <btns.length; i++) {
  btns[i].addEventListener('click', (e)=>{
    calculate(e)
  })
}
const calculate=(e)=>{
  var type=e.target.innerHTML
  let num_1 = document.querySelector(".num_1");
  let num_2 = document.querySelector(".num_2");
  let r = document.querySelector('.text')
  num_1 = check(num_1);
  num_2 = check(num_2);
  if (num_1!=null && num_2!=null) {
    let res =0;
    switch(type){
      case '+':res = num_1+num_2; break;
      case '-':res = num_1-num_2; break;
      case '*':res = num_1*num_2; break;
      case '/':res = num_1/num_2; break;
    }
   r.innerHTML=res.toFixed(2)
  }else {
    r.innerHTML =''
   }
}
const check=(a)=> {
  if (a.value.length==0) {
    a.style.borderColor="red"
    return null;
  }else {
    a.style.borderColor="black"
    return (Number(a.value));
  }


}
