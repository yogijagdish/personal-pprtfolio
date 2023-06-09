import { electronicHealthRecord, moneyCalculator, portfolio, trekMonitoringSystem } from "../images/images";

const projects = [
    {
        img:portfolio,
        title: "Portfolio",
        desc: "A simple portfolio website build in React and TailwindCSS to experiment and show case my skills",
        code: "https://github.com/yogijagdish/personal-pprtfolio"
    }, 
    {
        img: moneyCalculator,
        title: "Money Calculator",
        desc: "A web application under construction that solves the money related matters build in react and tailwind for frontend and django and django rest framework for backend",
        code: "https://github.com/yogijagdish/MoneyCalculator"
    },
    {
        img: trekMonitoringSystem,
        title: "Trek Monitoring System",
        desc: "Project build as a 3rd year minor project. It is a hardware and software based project that intends to assist the trekkers with their health, location and emergancy rescue",
        code: "https://github.com/yogijagdish/minor-project"
    },
    {
        img: electronicHealthRecord,
        title: "Electronic Health Record",
        desc: "Final year project build that store and manages the patient and doctors personal and health information electronically trying to make the whole hospital system paperless",
        code: "https://github.com/yogijagdish/Electronic_Health_Record_Management_System_Using_RFID_Card"
    }
]

export default projects