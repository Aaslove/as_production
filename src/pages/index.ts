import { lazy } from "react";

const Home = lazy(()=> import("./Home.Page"))
const About = lazy(()=> import("./About.Page"))

export {
    Home, About
}