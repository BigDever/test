import { ComicsContainer } from "./components/Comics/ComicsContainer";

const b = document.getElementById("app")
ComicsContainer().then(res => b.innerHTML = res);




