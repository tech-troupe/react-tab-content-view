import React from "react";
import PropTypes from "prop-types";
import ReactTabContentView from "../components/ReactTabContentView";
import ReactJsonView from "react-json-view";

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
      content: {
        topic: {
          topic1:
            "À quand remonte la dernière fois que nous avons fait quelque chose pour la première fois?",
          topic2:
            "Voici le premier de tout ce que nous avons fait ces derniers jours !!",
        },
        description: [
          "Première fois FOSSATHON",
          "Première tentative de création d'une application d'interface utilisateur",
          "Première fois d'écrire du code dans REACT",
          "Première tentative de redonner à la communauté open source.",
          "La première fois à travailler jour et nuit, en essayant d'apprendre et de mettre en œuvre en quelques jours seulement",
        ],
      },
    },
    {
      title: "Latin",
      content: {
        topic: {
          topic1: "Ubi ultimum tempus est quaedam res fecit ut primum?",
          topic2: "Primum omnium in paucis diebus nos !!",
        },
        description: [
          "Primo tempore FOSSATHON",
          "Primo tempore conatur facere in III application.",
          "Prius discere ad agere.",
          "STO in codice prius temporis scribere.",
          "Dare conantur, prius ad fontem aperta est civitas.",
          "Prius tempore working die ac nocte, ut conatur discere, et a modo per effectum deducendi duobus diebus.",
        ],
      },
    },
  ],
};

const reactJsonAttributes = {
  theme: "monokai",
  iconStyle: "circle",
  groupArraysAfterLength: 100,
  indentWidth: 3,
  collapsed: 4,
  displayObjectSize: false,
  collapseStringsAfterLength: 50,
  displayDataTypes: false,
};

export default {
  title:
    "React Tab Content View/Pre-loaded Content Display/Using External Component",
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
    contentDisplayComponent: {
      description: "External Component you want to use to display the content.",
      table: {
        type: {
          summary:
            "react-json-view is the external component used in this interactive demo.",
          detail:
            "https://github.com/mac-s-g/react-json-view is used as a sample display component to display the JSON content in tree" +
            " structure. You can use any such display component instead.",
        },
        defaultValue: {
          summary: "Empty",
          detail:
            "Uses native content rendering of text or markdown passed as content in the source data.",
        },
      },
    },
    contentDisplayAttributes: {
      description: "Attributes you want to pass to above custom component.",
      table: {
        type: {
          summary:
            "Pass a JSON object with key-value list of supported attributes.",
          detail:
            "Exclude the source data needed from the list as it will be passed explicitly by this component to display the content.",
        },
        defaultValue: {
          summary: "Empty",
          detail: "Needed when you are using external display component only.",
        },
      },
    },
  },
};

export const WithoutSubTab = (args) => (
  <ReactTabContentView
    {...args}
    src={externalDisplayComp}
    contentDisplayComponent={ReactJsonView}
    contentDisplayAttributes={reactJsonAttributes}
  />
);

WithoutSubTab.args = {
  src: externalDisplayComp,
  titleDelete: true,
  titleRefreshAll: true,
  contentDisplayComponent: ReactJsonView,
  contentDisplayAttributes: reactJsonAttributes,
};

ReactTabContentView.propTypes = {
  theme: PropTypes.oneOf(["default", "orange"]),
  titleDelete: PropTypes.bool,
  titleRefreshAll: PropTypes.bool,
  src: PropTypes.object.isRequired,
  contentDisplayComponent: PropTypes.object,
  contentDisplayAttributes: PropTypes.array,
};
