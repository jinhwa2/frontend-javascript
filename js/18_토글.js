function 보이기숨기기(){
  const 박스 = document.getElementById("토글박스");
  if(박스.classList.contains("hidden")) {
    박스.classList.remove("hidden");
  }else {
    박스.classList.add("hidden");
  }
 }