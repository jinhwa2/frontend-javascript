
      //키다운 background = linghblue
      //키다운 color = lightpink

      //키업 background = lightpink
      //키업 color = lightblue
      const 키들 = document.querySelectorAll(".key");

      document.addEventListener("keydown", function(e){

      });

      let 숫자값저장;

      switch(e.key) {
        case 'a' : 숫자값저장 = 0;
        break;
        case 's' : 숫자값저장 = 1;
        break;
        case 'd' : 숫자값저장 = 2;
        break;
        case 'f' : 숫자값저장 = 3;
        break;
        default :
         return; //함수종료

      }
      키들[숫자값저장].style.background = "linghblue";
      키들[숫자값저장].style.color = "lightblue";
