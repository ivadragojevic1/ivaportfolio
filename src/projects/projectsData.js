import projectOne from "../assets/analogni-sat.PNG";
import projectTwo from "../assets/bmi-kalkulator.PNG";
import projectThree from "../assets/generator-boja.PNG";
import projectFour from "../assets/generator-sifara.PNG";
import projectFive from "../assets/generator-slika.PNG";
import projectSix from "../assets/interaktivna-linija.PNG";
import projectSeven from "../assets/kalendar-projekat.PNG";
import projectEight from "../assets/konvertor-temperatura.PNG";
import projectNine from "../assets/kviz-projekat.PNG";
import projectTen from "../assets/projekat-stoperica.PNG";
import projectEleven from "../assets/vmedicocentar.PNG";

const projects = {
  1: {
    title: "Analog Clock",
    image: projectOne,
    description: (
      <>
        <p>
        The Project Simulating an Analog Clock
        </p>
      </>
    ),
  },
  2: {
    title: "BMI Calculator",
    image:projectTwo,
    description:  (
      <>
        <p>
          Project that calculates your BMI index
        </p>
      </>
    ),
  },
  3: {
    title: "Color generator",
    image:projectThree,
    description: (
      <>
        <p>
          Project that automatically generates colors
        </p>
      </>
    ),
  },
  4: {
    title: "Password generator",
    image: projectFour,
    description: (
      <>
        <p>
          Project that generates passwords based on input size
        </p>
      </>
    ),
  },
  5: {
    title: "Picture generator",
    image:projectFive,
    description: (
      <>
        <p>
          Project that generates pictures based on your favorite colors
        </p>
      </>
    ),
  },
  6: {
    title: "Interactive Line",
    image: projectSix,
    description: (
      <>
        <p>
          Interactive line that automatically loads when you open the page
        </p>
      </>
    ),
  },
  7: {
    title: "Calendar",
    image:projectSeven,
    description: (
      <>
        <p>
          It is pretty well explained, what calendar does
        </p>
      </>
    ),
  },
  8: {
    title: "Temperature Convertor",
    image:projectEight,
    description: (
      <>
        <p>
          Project that converts temperature from Celsius to Fahrenheit
        </p>
      </>
    ),
  },
  9: {
    title: "Quiz",
    image: projectNine,
    description: (
      <>
        <p>
          Project that asks you questions, and you are supposed to answer all the questions correctly
        </p>
      </>
    ),
  },
  10: {
    title: "Stopwatch",
    image: projectTen,
    description: (
      <>
        <p>
          Project that calculates a time when you are doing the same activity
        </p>
      </>
    ),
  },
  11: {
    title: "Medical Clinic Website",
    image: projectEleven,
    description: (
      <>
        <p>
          Project for medical clinic clients, done in 2022
        </p>
      </>
    ),
    demo: "https://vmedicocentar.ba/",
  },
};

export default projects;
