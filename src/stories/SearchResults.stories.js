import React from "react";
import PropTypes from "prop-types";
import ReactTabContentView from "../components/ReactTabContentView";

const withoutContentNoDefault = {
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

export default {
  title: "React Tab Content View/Search Result Feed",
  component: ReactTabContentView,
  argTypes: {
    src: {
      description:
        "This is input JSON data that you want to render using this component",
      table: {
        type: {
          summary:
            "Core data object should be of array type with 'title' and 'content' to be displayed.",
          detail:
            "Content should be compatible with the display component 'contentDisplayComponent'.",
        },
      },
    },
    titleDelete: {
      description:
        "Allows you to delete a title from view. Set it to 'false' if you don't want to provide this option.",
      table: {
        type: {
          summary:
            "You can remove a title from view by clicking the X mark on the title.",
          detail:
            "This option is to provide flexibility to users avoiding clutter by removing unwanted titles from view. Deleting the" +
            " title will remove it just from the current view and it will not delete the 'src' data.",
        },
        defaultValue: {
          summary: "true",
          detail: "Set it to false to turn it off.",
        },
      },
    },
    titleRefreshAll: {
      description:
        "Allows you to refresh and bring back the deleted titles. You can turn it off if 'titleDelete' above is set to 'false'.",
      table: {
        type: {
          summary: "Restores the deleted titles.",
          detail:
            "Shows refresh button icon on the top right corner of the title section for users to restore the view to initial state",
        },
        defaultValue: {
          summary: "default value is 'true'.",
          detail:
            "Set it to 'false' if you are not providing delete option using 'titleDelete'.",
        },
      },
    },
    searchResult: {
      description:
        "Search result count to be shown as badges against the title. This is a standalone functionality",
    },
  },
};

export const TitlesWithSearchCount = (args) => (
  <ReactTabContentView
    {...args}
    searchResult={searchResult}
    src={withoutContentNoDefault}
  />
);

TitlesWithSearchCount.args = {
  src: withoutContentNoDefault,
  titleDelete: true,
  titleRefreshAll: true,
  searchResult: searchResult,
};

ReactTabContentView.propTypes = {
  theme: PropTypes.oneOf(["default", "orange"]),
  titleDelete: PropTypes.bool,
  titleRefreshAll: PropTypes.bool,
  src: PropTypes.object.isRequired,
  searchResult: PropTypes.array,
};
