import React from "react";
import ReactTabContentView from "../components/ReactTabContentView";
import ReactJson from "react-json-view";

const noSubTab = {
  data: [
    {
      title: "English",
      content:
        "<b>When was the last time we did some thing for the first time?</b> <br/> Here is the first of everything we did in the last few days!! <br /><ul><li>First time FOSSATHON</li><li>First time trying to build a UI application.</li><li>First time to learn REACT.</li><li>First time to write code in REACT.</li><li>First attempt to give back to the open source community.</li><li>First time working tirelessly, trying to learn and implement in just a couple of days.</li></ul><br />",
      default: true,
    },
    {
      title: "Tamil",
      content:
        "<b>கடைசியாக எப்போது நாங்கள் முதல் முறையாக ஏதாவது செய்தோம்?</b><br />கடந்த சில நாட்களில் நாங்கள் செய்த எல்லாவற்றிலும் இதுதான் முதல் !!<br><ul><li>முதல் முறையாக FOSSATHON</li><li>முதல் முறையாக UI பயன்பாட்டை உருவாக்க முயற்சிக்கிறது.</li><li>முதல் முறையாக REACT கற்க.</li><li>REACT இல் குறியீட்டை எழுத முதல் முறை.</li><li>திறந்த மூல சமூகத்திற்கு திருப்பித் தர முதல் முயற்சி.</li><li>முதல் முறையாக இரவு பகலாக வேலை செய்வது, ஓரிரு நாட்களில் கற்றுக் கொண்டு செயல்படுத்த முயற்சிக்கிறது.</li></ul><br />",
      default: false,
    },
    {
      title: "Russian",
      content:
        "<b>Когда мы в последний раз делали что-то в первый раз?</b><br />Вот первое из всего, что мы сделали за последние несколько дней !!<br /><ul><li>Впервые ФОССАТОН</li><li>Первая попытка создания UI-приложения.</li><li>Впервые изучаю РЕАКТ.</li><li>Впервые пишу код в REACT.</li><li>Первая попытка отдать должное сообществу открытого исходного кода.</li><li>Работаю впервые днем ​​и ночью, пытаюсь выучить и внедрить буквально за пару дней.</li></ul>",
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
    {
      title: "French",
      content:
        "<b>À quand remonte la dernière fois que nous avons fait quelque chose pour la première fois?</b><br />Voici le premier de tout ce que nous avons fait ces derniers jours !!<br /><ul><li>Première fois FOSSATHON</li><li>Première tentative de création d'une application d'interface utilisateur.</li><li>La première fois pour apprendre REACT.</li><li>Première fois d'écrire du code dans REACT.</li><li>Première tentative de redonner à la communauté open source.</li><li>La première fois à travailler jour et nuit, en essayant d'apprendre et de mettre en œuvre en quelques jours seulement</li></ul><br />",
    },
    {
      title: "Latin",
      content:
        "<b>Ubi ultimum tempus est quaedam res fecit ut primum?</b><br />Primum omnium in paucis diebus nos !!<br /><ul><li>Primo tempore FOSSATHON</li><li>Primo tempore conatur facere in III application.</li><li>Prius discere ad agere.</li><li>STO in codice prius temporis scribere.</li><li>Dare conantur, prius ad fontem aperta est civitas.</li><li>Prius tempore working die ac nocte, ut conatur discere, et a modo per effectum deducendi duobus diebus.</li>",
    },
  ],
};

const withSubTab = {
  data: [
    {
      title: "English",
      content: [
        {
          subtitle: "Synopsis",
          subcontent:
            "<b>When was the last time we did some thing for the first time?</b> <br/> Here is the first of everything we did in the last few days!! <br />",
        },
        {
          subtitle: "Description",
          subcontent:
            "<ul><li>First time FOSSATHON</li><li>First time trying to build a UI application.</li><li>First time to learn REACT.</li><li>First time to write code in REACT.</li><li>First attempt to give back to the open source community.</li><li>First time working tirelessly, trying to learn and implement in just a couple of days.</li></ul><br />",
        },
      ],
      default: true,
    },
    {
      title: "Tamil",
      content: [
        {
          subtitle: "Synopsis",
          subcontent:
            "<b>கடைசியாக எப்போது நாங்கள் முதல் முறையாக ஏதாவது செய்தோம்?</b><br />கடந்த சில நாட்களில் நாங்கள் செய்த எல்லாவற்றிலும் இதுதான் முதல் !!<br><ul><li>முதல் முறையாக FOSSATHON</li>",
        },
        {
          subtitle: "Description",
          subcontent:
            "<li>முதல் முறையாக UI பயன்பாட்டை உருவாக்க முயற்சிக்கிறது.</li><li>முதல் முறையாக REACT கற்க.</li><li>REACT இல் குறியீட்டை எழுத முதல் முறை.</li><li>திறந்த மூல சமூகத்திற்கு திருப்பித் தர முதல் முயற்சி.</li><li>முதல் முறையாக இரவு பகலாக வேலை செய்வது, ஓரிரு நாட்களில் கற்றுக் கொண்டு செயல்படுத்த முயற்சிக்கிறது.</li></ul><br />",
        },
      ],
    },
    {
      title: "Russian",
      content: [
        {
          subtitle: "Synopsis",
          subcontent:
            "<b>Когда мы в последний раз делали что-то в первый раз?</b><br />Вот первое из всего, что мы сделали за последние несколько дней !!<br />",
        },
        {
          subtitle: "Description",
          subcontent:
            "<ul><li>Впервые ФОССАТОН</li><li>Первая попытка создания UI-приложения.</li><li>Впервые изучаю РЕАКТ.</li><li>Впервые пишу код в REACT.</li><li>Первая попытка отдать должное сообществу открытого исходного кода.</li><li>Работаю впервые днем ​​и ночью, пытаюсь выучить и внедрить буквально за пару дней.</li></ul>",
        },
      ],
    },
  ],
};

const externalDisplayComp = {
  data: [
    {
      title: "English",
      content: {
        topic: {
          topic1:
            "When was the last time we did some thing for the first time?",
          topic2:
            "Here is the first of everything we did in the last few days!!",
        },
        description: [
          "First time FOSSATHON",
          "First time trying to build a UI application.",
          "First time to learn REACT.",
          "First time to write code in REACT.",
          "First attempt to give back to the open source community.",
          "First time working tirelessly",
          "trying to learn and implement in just a couple of days.",
        ],
      },
      default: true,
    },
    {
      title: "Tamil",
      content: {
        topic: {
          topic1: "கடைசியாக எப்போது நாங்கள் முதல் முறையாக ஏதாவது செய்தோம்?",
          topic2:
            "கடந்த சில நாட்களில் நாங்கள் செய்த எல்லாவற்றிலும் இதுதான் முதல் !!",
        },
        description: [
          "முதல் முறையாக FOSSATHON",
          "முதல் முறையாக UI பயன்பாட்டை உருவாக்க முயற்சிக்கிறது.",
          "முதல் முறையாக REACT கற்க.",
          "REACT இல் குறியீட்டை எழுத முதல் முறை.",
          "திறந்த மூல சமூகத்திற்கு திருப்பித் தர முதல் முயற்சி.",
          "முதல் முறையாக இரவு பகலாக வேலை செய்வது",
          "ஓரிரு நாட்களில் கற்றுக் கொண்டு செயல்படுத்த முயற்சிக்கிறது.",
        ],
      },
      default: false,
    },
    {
      title: "Russian",
      content: {
        topic: {
          topic1: "Когда мы в последний раз делали что-то в первый раз?",
          topic2:
            "Вот первое из всего, что мы сделали за последние несколько дней !!",
        },
        description: [
          "Впервые ФОССАТОН",
          "Первая попытка создания UI-приложения.",
          "Впервые изучаю РЕАКТ.",
          "Впервые пишу код в REACT.",
          "Первая попытка отдать должное сообществу открытого исходного кода.",
          "Работаю впервые днем и ночью, пытаюсь выучить и внедрить буквально за пару дней.",
        ],
      },
    },
    {
      title: "Hindi",
      content: {
        topic: {
          topic1: "आखिरी बार हमने पहली बार कब कुछ किया था?",
          topic2:
            "यहाँ पिछले कुछ दिनों में हमने जो कुछ किया है, उसमें से पहला है !!",
        },
        description: [
          "पहली बार FOSSATHON",
          "पहली बार UI एप्लिकेशन बनाने की कोशिश कर रहा है।",
          "पहली बार REACT सीखने का।",
          "पहली बार REACT में कोड लिखने के लिए।",
          "ओपन सोर्स समुदाय को वापस देने का पहला प्रयास।",
          "पहली बार दिन-रात काम करना, कुछ ही दिनों में सीखने और लागू करने की कोशिश करना।",
        ],
      },
    },
    {
      title: "Spanish",
      content: {
        topic: {
          topic1: "¿Cuándo fue la última vez que hicimos algo por primera vez?",
          topic2:
            "¡Aquí está el primero de todo lo que hicimos en los últimos días!",
        },
        description: [
          "Primera vez FOSSATHON",
          "Primera vez que intento crear una aplicación de interfaz de usuario.",
          "Primer intento de retribuir a la comunidad de código abierto.",
          "Primera vez trabajando día y noche",
          "intentando aprender e implementar en tan solo un par de días.",
        ],
      },
    },
    {
      title: "Chinese",
      content: {
        topic: {
          topic1: "我们上一次第一次做某事是什么时候",
          topic2: "这是我们最近几天所做的所有事情中的第一项！！",
        },
        description: [
          "第一次FOSSATHON",
          "首次尝试构建UI应用程序。",
          "第一次学习REACT。",
          "第一次用REACT编写代码。",
          "首次尝试回馈开源社区。",
          "白天和黑夜的第一次工作，试图在短短几天内学习和实施。",
        ],
      },
    },
    {
      title: "French",
      content:
      {
        "topic": {
          "topic1": "À quand remonte la dernière fois que nous avons fait quelque chose pour la première fois?",
          "topic2": "Voici le premier de tout ce que nous avons fait ces derniers jours !!"
        },
        "description": [
          "Première fois FOSSATHON",
          "Première tentative de création d'une application d'interface utilisateur",
          "Première fois d'écrire du code dans REACT",
          "Première tentative de redonner à la communauté open source.",
          "La première fois à travailler jour et nuit, en essayant d'apprendre et de mettre en œuvre en quelques jours seulement"
        ]
      },
    },
    {
      title: "Latin",
      content:
      {
        "topic": {
        "topic1": "Ubi ultimum tempus est quaedam res fecit ut primum?",
        "topic2": "Primum omnium in paucis diebus nos !!"
        },
        "description": [
        "Primo tempore FOSSATHON",
        "Primo tempore conatur facere in III application.",
        "Prius discere ad agere.",
        "STO in codice prius temporis scribere.",
        "Dare conantur, prius ad fontem aperta est civitas.",
        "Prius tempore working die ac nocte, ut conatur discere, et a modo per effectum deducendi duobus diebus."
        ]
        },
    },
  ],
};

export default {
  title: "React Tab Content View/BasicFeatures",
  component: ReactTabContentView,
};

export const BasicTitlesNoSubTab = (args) => (
  <ReactTabContentView {...args} src={noSubTab} />
);

export const BasicTitlesWithSubTab = (args) => (
  <ReactTabContentView {...args} src={withSubTab} />
);

export const ContentWithExternalViewerToDisplay = (args) => (
  <ReactTabContentView {...args} src={noSubTab} contentDisplayComponent={ReactJson} />
);
