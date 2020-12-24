import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ReactTabContentView from "./components/ReactTabContentView";

const initialState = {
  data: [
    {
      title: "English",
      content:
        "<b>When was the last time we did some thing for the first time?</b> <br/> Here is the first of everything we did in the last few days!! <br /><ul><li>First time FOSSATHON</li><li>First time trying to build a UI application.</li><li>First time to learn REACT.</li><li>First time to write code in REACT.</li><li>First attempt to give back to the open source community.</li><li>First time working day and night, trying to learn and implement in just a couple of days.</li></ul><br />",
    },
    {
      title: "Tamil",
      content:
        "<b>கடைசியாக எப்போது நாங்கள் முதல் முறையாக ஏதாவது செய்தோம்?</b><br />கடந்த சில நாட்களில் நாங்கள் செய்த எல்லாவற்றிலும் இதுதான் முதல் !!<br><ul><li>முதல் முறையாக FOSSATHON</li><li>முதல் முறையாக UI பயன்பாட்டை உருவாக்க முயற்சிக்கிறது.</li><li>முதல் முறையாக REACT கற்க.</li><li>REACT இல் குறியீட்டை எழுத முதல் முறை.</li><li>திறந்த மூல சமூகத்திற்கு திருப்பித் தர முதல் முயற்சி.</li><li>முதல் முறையாக இரவு பகலாக வேலை செய்வது, ஓரிரு நாட்களில் கற்றுக் கொண்டு செயல்படுத்த முயற்சிக்கிறது.</li></ul><br />",
      default: true,
    },
    {
      title: "Russian",
      content:
        "<b>Когда мы в последний раз делали что-то в первый раз?</b><br />Вот первое из всего, что мы сделали за последние несколько дней !!<br /><ul><li>Впервые ФОССАТОН</li><li>Первая попытка создания UI-приложения.</li><li>Впервые изучаю РЕАКТ.</li><li>Впервые пишу код в REACT.</li><li>Первая попытка отдать должное сообществу открытого исходного кода.</li><li>Работаю впервые днем ​​и ночью, пытаюсь выучить и внедрить буквально за пару дней.</li></ul>",
      default: false,
    },
    {
      title: "Hindi",
      content:
        "<b>आखिरी बार हमने पहली बार कब कुछ किया था?</b><br />यहाँ पिछले कुछ दिनों में हमने जो कुछ किया है, उसमें से पहला है !! <br /><ul><li>पहली बार FOSSATHON</li><li>पहली बार UI एप्लिकेशन बनाने की कोशिश कर रहा है।</li><li>पहली बार REACT सीखने का।</li><li>पहली बार REACT में कोड लिखने के लिए।</li><li>ओपन सोर्स समुदाय को वापस देने का पहला प्रयास।</li><li>पहली बार दिन-रात काम करना, कुछ ही दिनों में सीखने और लागू करने की कोशिश करना।</li></ul><br />",
    },
    {
      title: "Spanish",
      content:
        "<b>¿Cuándo fue la última vez que hicimos algo por primera vez?</b><br />¡Aquí está el primero de todo lo que hicimos en los últimos días!<br /><ul><li>Primera vez FOSSATHON</li><li>Primera vez que intento crear una aplicación de interfaz de usuario.</li><li>Primera vez para aprender REACT.</li><li>Primera vez para escribir código en REACT.</li><li>Primer intento de retribuir a la comunidad de código abierto.</li><li>Primera vez trabajando día y noche, intentando aprender e implementar en tan solo un par de días.</li></ul><br />",
    },
    {
      title: "Chinese",
      content:
        "<b>我们上一次第一次做某事是什么时候？</b><br />这是我们最近几天所做的所有事情中的第一项！！<br /><ul><li>第一次FOSSATHON</li><li>首次尝试构建UI应用程序。</li><li>第一次学习REACT。</li><li>第一次用REACT编写代码。</li><li>首次尝试回馈开源社区。</li><li>白天和黑夜的第一次工作，试图在短短几天内学习和实施。</li></ul><br />",
    },
  ],
};

ReactDOM.render(
  <ReactTabContentView src={initialState} />,
  document.getElementById("root")
);
