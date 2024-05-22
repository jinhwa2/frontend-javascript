
      function toggleChat(){
        const chatcontainer = document.getElementById("chat-container");
        const togglebutton = document.getElementById("toggle-button");
        //chatcontainer.style.display == ""
        //초기값이 빈 문자열일 수 있기 떄문
        if(chatcontainer.style.display == "none" || chatcontainer.style.display == "" ) {
          chatcontainer.style.display = "flex";
          togglebutton.textContent = "채팅숨기기";
        } else {
          chatcontainer.style.display = "none"
          togglebutton.textContent = "채팅보이기";
        }

      }
      //자바스크립트는 매개변수가 함수에서 설정한 매개변수와 작성해야하는
      //개수가 달라도 문제없이 실행됨
      메세지보이기 (
        "안녕하세요. KH상담봇입니다. 원하는 메뉴를 입력하세요","bot");
      function sendMessage(){
        const inputbox = document.getElementById("user-input");
        const message = inputbox.value.trim(); //trim 공백제거
        //만약에 빈칸으로 보낼 경우 아무런 메세지 없이 보내기를 방지하길 원한다면 설정
        if(message == "") {
        return; //return을 추가해서 더이상 밑으로 못가게 끝내기
        }
        메세지보이기(message,"user");
        inputbox.value = ""; //input 값에  "" 새로운 값으로 ""을 넣어 메세지 내용을 초기화

        //채팅봇 띄우기
         setTimeout(() => {
          메세지보이기("저는 채팅 봇입니다." , "bot");

         } , 1000); //1초 후에 메세지 보이기

      }
      function 메세지보이기(message, sender) {
        const chatbox = document.getElementById("chat-box");
        const messageElement = document.createElement("div");
        //                         div 클래스 명
        //                             message
        //                                      user | bot  -message
        messageElement.classList.add("message", sender + "-message");
        messageElement.textContent = message; //메세지 보이기
        chatbox.appendChild(messageElement); //보낸 내용 추가하기
      }

      body {
        display: flex;
        flex-direction: column;
        align-items: center;
        /*body 안에서 가운데 정렬하기 */
        justify-content: center;
        height: 100vh;
        margin: 0;
      }
      #chat-container {
        width: 300px;
        height: 400px;
        border: 2px solid #ccc;
        display: flex;
        /*div 안에서 가운데 정렬하기 */
        justify-content: center;
        /*
        div 안에서 오른쪽 끝으로 정렬하기
        justify-content:space-between;
        */
        /* div 안에서 맨 밑으로 내리기 */
        flex-direction:column;
        margin-top: 10px;
        display: none;
      }
      #chat-box {
        flex: 1;
        padding: 10px;
        /*border :상하좌우 모두
          border bottom : 테두리에서 아래
          border top :  테두리에서 아래
        */
        border-bottom: 5px solid #ccc;
        /*overflow-y 세로로 내용이 넘칠 때 어떻게 보이는지 선택하는 속성
          overflow-x 좌우로 내용이 넘칠 때 어떻게 보이는지 선택하는 속성
        
        */
        overflow-y: auto;
      }
      .message {
        padding: 5px;
        margin-bottom: 10px;
        border-radius: 5px;

      }
      .user-message {
        background-color: lightblue;
        /*
        align-self : 안에 있는 태그들 정렬 상태 설정
        flex-end : 태그를 맨 끝부분(아래쪽 또는 오른쪽) 정렬
        */
        align-self: flex-end;
      }
      .bot-message {
        background-color: lightpink;
        /*
        align-self : 안에 있는 태그들 정렬 상태 설정
        flex 태그의 축 정렬을 설정
        flex-end로 끝나는 태그 밑에 맨 첫번째로 텍스트를 넣어 주겠다.
        flex-start : 태그를 맨 시작부분(위쪽 또는 왼쪽) 정렬
        */
        align-self: flex-start;
      }
      #input-box {
        display: flex;
      }
      #input-box input {
        flex: 1;
        padding: 10px;
        border: none;
        border-top: 2px solid #ccc;
      }
      button {
        padding: 10px;
        border: none;
        background-color: #007bff;
        color: white;
        cursor: pointer;

      }
      button:hover {
        background-color: #0056b3;
      }
   
  