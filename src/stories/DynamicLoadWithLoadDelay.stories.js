import React from "react";
import PropTypes from "prop-types";
import ReactTabContentView from "../index";

const withoutContent = {
  data: [
    {
      title: "English",
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
      title: "Chinese",
    },
    {
      title: "Latin",
    },
  ],
};

const getContentWithDelay = (title) => {
  const contentPromise = new Promise((resolve) => {
    setTimeout(() => {
      console.log("3 sec delay");
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
    }, 3000);
  });
  return contentPromise;
};

export default {
  title: "React Tab Content View/Dynamic Content Load/With 3sec Load Delay",
  component: ReactTabContentView,
  argTypes: {
    src: {
      description:
        "This is input JSON data with titles (and no content) that you want to render using this component",
      table: {
        type: {
          summary:
            "Pass the title to be dispayed. Do not pass any content here.",
          detail:
            "With 'advancedMode' set as 'true', component will load the content using the callback function provided, for the" +
            " first time. Content will be cached after first load and it will be subsequently used.",
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
    advancedMode: {
      description:
        "Indicates that the content to be loaded dynamically using the callback provided.",
      table: {
        type: {
          summary: "Enables advanced lazy loading of content upon user click.",
          detail:
            "Do not set this attribute to true when you have the content to render upfront.",
        },
        defaultValue: {
          summary: "false",
          detail:
            "Setting to true mandates a callback function to be passed in 'contentCallback' attribute.",
        },
      },
    },
    contentCallback: {
      description:
        "Callback function that accepts a title and returns a Promise.",
      table: {
        type: {
          summary:
            "Callback function that loads the content for the title passed.",
          detail:
            "Callback function should accept the title passed and return a Promise as response. By default, component " +
            " has a timeout of 10secs before aborting the content load. Users can cancel the load content by using the " +
            " controls provided.It should handle all titles gracefully.",
        },
        defaultValue: {
          summary: "Callback",
          detail: "Mandatory attribute if advanceMode is set as true.",
        },
      },
    },
  },
};

export const WithDefault = (args) => (
  <ReactTabContentView
    {...args}
    advancedMode={true}
    contentCallback={getContentWithDelay}
    defaultTitle={"English"}
  />
);

export const WithoutDefault = (args) => (
  <ReactTabContentView
    {...args}
    advancedMode={true}
    contentCallback={getContentWithDelay}
  />
);

WithDefault.args = {
  src: withoutContent,
  titleDelete: true,
  titleRefreshAll: true,
};

WithoutDefault.args = {
  src: withoutContent,
  titleDelete: true,
  titleRefreshAll: true,
};

ReactTabContentView.propTypes = {
  theme: PropTypes.object,
  titleDelete: PropTypes.bool,
  titleRefreshAll: PropTypes.bool,
  src: PropTypes.object.isRequired,
  contentCallback: PropTypes.func,
  advancedMode: PropTypes.bool,
};
