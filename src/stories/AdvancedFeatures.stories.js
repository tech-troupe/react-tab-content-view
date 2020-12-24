import React from "react";
import ReactTabContentView from "../components/ReactTabContentView";

const withoutContent = {
  data: [
    {
      title: "English",
      default: true,
    },
    {
      title: "Tamil",
    },
    {
      title: "Russian",
    },
    {
      title: "Spanish",
    },
    {
      title: "French",
    },
    {
      title: "Russian",
    },
    {
      title: "Chinese",
    },
    {
      title: "Latin",
    },
  ],
};

const searchResult = [
  {
    title: "Tamil",
    count: 2,
  },
  {
    title: "Spanish",
    count: 3,
  },
  {
    title: "Russian",
    count: 9,
  },
  {
    title: "Hindi",
    count: 7,
  },
  {
    title: "Chinese",
    count: 11,
  },
  {
    title: "French",
    count: 4,
  },
];

const getContentWithDelay = (title) => {
  const contentPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("5 sec delay");
      let content = "";
      switch (title) {
        case "English":
          content =
            "<b>When was the last time we did some thing for the first time?</b> <br/> Here is the first of everything we did in the last few days!! <br /><ul><li>First time FOSSATHON</li><li>First time trying to build a UI application.</li><li>First time to learn REACT.</li><li>First time to write code in REACT.</li><li>First attempt to give back to the open source community.</li><li>First time working tirelessly, trying to learn and implement in just a couple of days.</li></ul><br />";
          break;
        case "Tamil":
          content =
            "<b>கடைசியாக எப்போது நாங்கள் முதல் முறையாக ஏதாவது செய்தோம்?</b><br />கடந்த சில நாட்களில் நாங்கள் செய்த எல்லாவற்றிலும் இதுதான் முதல் !!<br><ul><li>முதல் முறையாக FOSSATHON</li><li>முதல் முறையாக UI பயன்பாட்டை உருவாக்க முயற்சிக்கிறது.</li><li>முதல் முறையாக REACT கற்க.</li><li>REACT இல் குறியீட்டை எழுத முதல் முறை.</li><li>திறந்த மூல சமூகத்திற்கு திருப்பித் தர முதல் முயற்சி.</li><li>முதல் முறையாக இரவு பகலாக வேலை செய்வது, ஓரிரு நாட்களில் கற்றுக் கொண்டு செயல்படுத்த முயற்சிக்கிறது.</li></ul><br />";
          break;
        case "Spanish":
          content =
            "<b>¿Cuándo fue la última vez que hicimos algo por primera vez?</b><br />¡Aquí está el primero de todo lo que hicimos en los últimos días!<br /><ul><li>Primera vez FOSSATHON</li><li>Primera vez que intento crear una aplicación de interfaz de usuario.</li><li>Primera vez para aprender REACT.</li><li>Primera vez para escribir código en REACT.</li><li>Primer intento de retribuir a la comunidad de código abierto.</li><li>Primera vez trabajando día y noche, intentando aprender e implementar en tan solo un par de días.</li></ul><br />";
          break;
        case "Russian":
          content =
            "<b>Когда мы в последний раз делали что-то в первый раз?</b><br />Вот первое из всего, что мы сделали за последние несколько дней !!<br /><ul><li>Впервые ФОССАТОН</li><li>Первая попытка создания UI-приложения.</li><li>Впервые изучаю РЕАКТ.</li><li>Впервые пишу код в REACT.</li><li>Первая попытка отдать должное сообществу открытого исходного кода.</li><li>Работаю впервые днем ​​и ночью, пытаюсь выучить и внедрить буквально за пару дней.</li></ul>";
          break;
        default:
          content = "content not available!";
          break;
      }
      return resolve(content);
    }, 5000);
  });
  return contentPromise;
};

const getContentWithoutDelay = (title) => {
  const contentPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("10ms sec delay");
      let content = "";
      switch (title) {
        case "English":
          content =
            "<b>When was the last time we did some thing for the first time?</b> <br/> Here is the first of everything we did in the last few days!! <br /><ul><li>First time FOSSATHON</li><li>First time trying to build a UI application.</li><li>First time to learn REACT.</li><li>First time to write code in REACT.</li><li>First attempt to give back to the open source community.</li><li>First time working tirelessly, trying to learn and implement in just a couple of days.</li></ul><br />";
          break;
        case "Tamil":
          content =
            "<b>கடைசியாக எப்போது நாங்கள் முதல் முறையாக ஏதாவது செய்தோம்?</b><br />கடந்த சில நாட்களில் நாங்கள் செய்த எல்லாவற்றிலும் இதுதான் முதல் !!<br><ul><li>முதல் முறையாக FOSSATHON</li><li>முதல் முறையாக UI பயன்பாட்டை உருவாக்க முயற்சிக்கிறது.</li><li>முதல் முறையாக REACT கற்க.</li><li>REACT இல் குறியீட்டை எழுத முதல் முறை.</li><li>திறந்த மூல சமூகத்திற்கு திருப்பித் தர முதல் முயற்சி.</li><li>முதல் முறையாக இரவு பகலாக வேலை செய்வது, ஓரிரு நாட்களில் கற்றுக் கொண்டு செயல்படுத்த முயற்சிக்கிறது.</li></ul><br />";
          break;
        case "Spanish":
          content =
            "<b>¿Cuándo fue la última vez que hicimos algo por primera vez?</b><br />¡Aquí está el primero de todo lo que hicimos en los últimos días!<br /><ul><li>Primera vez FOSSATHON</li><li>Primera vez que intento crear una aplicación de interfaz de usuario.</li><li>Primera vez para aprender REACT.</li><li>Primera vez para escribir código en REACT.</li><li>Primer intento de retribuir a la comunidad de código abierto.</li><li>Primera vez trabajando día y noche, intentando aprender e implementar en tan solo un par de días.</li></ul><br />";
          break;
        case "Russian":
          content =
            "<b>Когда мы в последний раз делали что-то в первый раз?</b><br />Вот первое из всего, что мы сделали за последние несколько дней !!<br /><ul><li>Впервые ФОССАТОН</li><li>Первая попытка создания UI-приложения.</li><li>Впервые изучаю РЕАКТ.</li><li>Впервые пишу код в REACT.</li><li>Первая попытка отдать должное сообществу открытого исходного кода.</li><li>Работаю впервые днем ​​и ночью, пытаюсь выучить и внедрить буквально за пару дней.</li></ul>";
          break;
        default:
          content = "content not available!";
          break;
      }
      return resolve(content);
    }, 10);
  });
  return contentPromise;
};

export default {
  title: "React Tab Content View/AdvancedFeatures",
  component: ReactTabContentView,
};

export const TitlesWithoutContent = (args) => (
  <ReactTabContentView
    {...args}
    searchResult={searchResult}
    src={withoutContent}
    advancedMode={true}
  />
);

export const TitlesWithAPIContentWith5SecDelay = (args) => (
  <ReactTabContentView
    {...args}
    searchResult={searchResult}
    src={withoutContent}
    advancedMode={true}
    contentCallback={getContentWithDelay}
  />
);

export const TitlesWithAPIContentWithoutDelay = (args) => (
  <ReactTabContentView
    {...args}
    searchResult={searchResult}
    src={withoutContent}
    advancedMode={true}
    contentCallback={getContentWithoutDelay}
  />
);