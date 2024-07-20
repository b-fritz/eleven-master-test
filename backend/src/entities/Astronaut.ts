import Planet from "./Planet";

interface Astronaut extends Planet {
  id: number;
  firstname: string;
  lastname: string;
}

export default Astronaut;
