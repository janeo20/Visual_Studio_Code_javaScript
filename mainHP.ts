import { Cachorro } from "./src/exercicios_herança_polimorfismo/cachorro";
import { Cavalo } from "./src/exercicios_herança_polimorfismo/cavalo";
import { Preguiça } from "./src/exercicios_herança_polimorfismo/preguiça";

let animais = new Cachorro("Raul", 3)

animais.VerCachorro();
animais.Som();
animais.Correr();