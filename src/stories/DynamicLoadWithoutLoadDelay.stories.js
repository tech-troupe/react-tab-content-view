import React from "react";
import PropTypes from "prop-types";
import ReactTabContentView from "../index";

const withoutContent = {
  data: [
    {
      title: "Latin",
    },
    {
      title: "Armenian",
    },
    {
      title: "Korean",
    },
    {
      title: "Hebrew",
    },
    {
      title: "Aramaic",
    },
    {
      title: "Chinese",
    },
    {
      title: "Greek",
    },
    {
      title: "Egyptian",
    },
    {
      title: "Sanskrit",
    },
    {
      title: "Tamil",
    },
  ],
};

const getContentWithoutDelay = (title) => {
  const contentPromise = new Promise((resolve) => {
    setTimeout(() => {
      console.log("10ms sec delay");
      let content = "";
      switch (title) {
        case "Latin":
          content =
            "<b>As a script, Latin first appeared in 75 BC. There is also Old Latin that was used before this. Victors of many battles in wars that were waged on the Italian Peninsula spoke Latin. The Roman Empire elected to make Latin its formal language, making it an important language at that time. Latin was the origin of all the Romance languages – Spanish, French, Italian, Portuguese, Catalan and Romanian and many words today, including a number of words in modern-day English. Latin is still around. It remains an official language in the Vatican and in Poland. Millions of people are still learning the language, although it is mainly taught as a course in higher education classes.</b>";
          break;
        case "Armenian":
          content =
            "<b>Armenian belongs to the Indo European language family. Its oldest surviving text is a translation of the Bible that was done in the 5th century. Based on the latest texts that were found, the language likely started in 450 BC. Armenian is still a living language and its first language speakers are about 5 million. Speakers of Armenian are located in Iran, Georgia, Russia and Ukraine.</b>";
          break;
        case "Korean":
          content =
            "<b>The Korean language is considered as one of the oldest living languages in the world. It is a language isolate that came from Proto-Korean and Old Korean. It developed further into Middle Korean to Modern Korean. The Old Korean was used during the period of the Three Kingdoms, where the Unified Silla was the most dominant. During the time China already had an influence in Korean and samples of Old Korean text used Chinese characters that were adopted to the existing Korean language at that time, making it difficult to decipher.</b>";
          break;
        case "Hebrew":
          content =
            "<b>The first script of Hebrew dates back to 1000 BC. The language is more than 3,000 years old. It is an old Semitic language and is declared as Israel’s official language. It was labeled a holy language because it was used mainly for religious texts. It disappeared for a time (from 200 CE to 400 CE) and made a resurgence to become the written and spoken language of the Jews around the world.</b>";
          break;
        case "Aramaic":
          content =
            "<b>The Aramaic language donated plenty of words to Arabic and Hebrew languages. It made it to the list of some of the oldest languages in the world based on the diplomatic documents that were used among Aramaic states from the 10th century BC. The various dialects of modern Aramaic are spoken in several countries today, such as Lebanon, Israel, Syria, Iran, Iraq and other countries in the West such as the United States, Australia, Europe and Russia. Between 579,000 and 1,000,000 people speak Aramaic as their first language.</b>";
          break;
        case "Chinese":
          content =
            "<b>The first script that appeared with Chinese characters was from the 1250 BC. Thus it is more than 3,000 years old. Currently, it is the language with the most number of first language speakers. According to the latest data, about 1.24 billion speak Chinese as their first language in all its variations and dialects. First language speakers of Chinese are located in 37 countries.</b><br />" +
            "<b>Archaic or Old Chinese was the language that was commonly used in the early to the middle parts of the Zhou Dynasty that existed from the 11th to 7th centuries BC. Evidence of Old Chinese texts were seen inscribed on artifacts made of bronze, in Shujing (Classic of History), Shijing (Classic of Poetry) poetry and parts of the Yijing (Classic of Changes or I-Ching).</b><br />" +
            "<b>The development of the Chinese language took thousands of years and several dynasties to complete. Different forms of Chinese are spoken in different parts of China. Today, Mandarin Chinese and Cantonese are the most prominent forms of the language.</b><br />";
          break;
        case "Greek":
          content =
            "<b>Greek made its first appearance in 1450 BC. About 13 million people living in Cyprus, Albania and Greece speak the Greek language. Its long history makes Greek one of the oldest among the languages spoken in Europe.</b><br />" +
            "<b>The language is a branch of the Indo European language family and has about 34 centuries of documents.</b><br />" +
            "<b>The Greek alphabet of the other hand originated from the script used by the Phoenicians. Later, it became the source of the Gothic, Coptic, Armenian, Cyrillic and Latin systems of writing.</b><br />" +
            "<b>The Greek language has historical significance. The original versions of the epic poems Odyssey and Iliad were written in Greek. Many of the foundational documents in Western philosophy, like the works of Aristotle and Plato, logic and mathematics, astronomy and other branches of science were originally written in the language. Koiné Greek was used in writing the Christian Bible’s version of the New Testament</b><br />";
          break;
        case "Egyptian":
          content =
            "<b>Egyptian is considered one of the oldest languages in the world, as it is already about 4,700 years old. Autobiographical writings found on walls of Egyptian tombs were said to be created around 2600 BC to 2000 BC. In Egypt, the language is the country’s oldest language.</b><br />" +
            "<b>Proto-hieroglyphs that were found in the country dates back about 600 years before the appearance of complete texts in Egyptian. A post from a temple gate in Philae that was recently discovered had hieroglyphics that were from the year 396 CE. It was also around this time that written records done in Tamil were found.</b><br />";
          break;
        case "Sanskrit":
          content =
            "<b>Linguist thought the Sanskrit was very influential to several languages in Europe. They also believe that the language came from Tamil. Sanskrit, which is 4,000 years old (some say its 6,000 years of age), used to be the language of the classics in India. Until now, Sanskrit is still an official language in the Indian Peninsula despite its limited use as an everyday language.</b><br />" +
            "<b>Sanskrit first appeared in 2000 BC and hailed as the gods’ language. The principles of the language were used during the construction of the computer’s basic language. It consists of 49 letters and spoken in Uttarakhand, in India’s Himalayan North. The language combines sound vibrations and often used for mantra meditation in an area that is teeming with Hindu temples.</b><br />";
          break;
        case "Tamil":
          content =
            "<b>By order of appearance, Tamil would be considered the world’s oldest language as it is over 5,000 years old, having made its first appearance in 3,000 BC. The literature collection in Tamil, which is a classical language, is very vast. It is also varied. Tamil is very much a living language and thousands of newspapers are still published in the language.</b><br />" +
            "<b>It is believed that Tamil started around 2500 BC.</b><br />" +
            "<b>It is still widely spoken and an official language in Singapore, Sri Lanka. In India, first language speakers live in some 34 territories and states, including Tamil Nadu, Karnataka, Andhra Pradesh, Puducherry, Kerala, Delhi, Gujarat, Goa and Assam.</b><br />";
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
  title: "React Tab Content View/Dynamic Content Load/Without Load Delay",
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

export const WithDefaultTitle = (args) => (
  <ReactTabContentView
    {...args}
    advancedMode={true}
    contentCallback={getContentWithoutDelay}
    defaultTitle={"Tamil"}
  />
);

export const WithoutDefaultTile = (args) => (
  <ReactTabContentView
    {...args}
    advancedMode={true}
    contentCallback={getContentWithoutDelay}
  />
);

WithDefaultTitle.args = {
  src: withoutContent,
  titleDelete: true,
  titleRefreshAll: true,
};

WithoutDefaultTile.args = {
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
