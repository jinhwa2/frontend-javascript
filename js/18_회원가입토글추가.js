
      
     
     
     
     
     
     
     function 이름이메일확인(){
        const 이름값 = document.getElementById("user_name");
        const 이메일값 = document.getElementById("user_email");
         const 이름 = 이름값.value;
         const 이메일 = 이메일값.value;

         if(이름 == "고영희" && 이메일 == "ko@kh.kh") {
            alert("이미 가입된 회원입니다.")
         }else {
          alert("가입하지 않은 회원입니다.")
         }
      }


      function 보이기숨기기() {
        const 박스 = document.getElementById("토글박스");
        if(박스.classList.contains("hidden")) {
           박스.classList.remove("hidden");
        } else {
          박스.classList.add("hidden");
        }
      }


  