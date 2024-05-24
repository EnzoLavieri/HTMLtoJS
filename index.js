document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  const header = document.createElement("header");
  header.id = "header";
  const h1Header = document.createElement("h1");
  h1Header.textContent = "Squirtle";
  header.appendChild(h1Header);
  body.appendChild(header);

  const nav = document.createElement("nav");
  nav.setAttribute("aria-label", "Navegação principal");
  const ulNav = document.createElement("ul");
  const navItems = [
    { href: "#info-squirtle", text: "Informações sobre Squirtle" },
    { href: "#caracteristicas", text: "Características" },
    { href: "#curiosidades", text: "Curiosidades" },
    { href: "#artigo-squirtle", text: "Artigo sobre Squirtle" },
    { href: "#recursos", text: "Recursos Adicionais" },
    { href: "#evolucao", text: "Evolução" },
    { href: "./toDoList.html", text: "ToDo List" },
  ];
  navItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
    ulNav.appendChild(li);
  });
  nav.appendChild(ulNav);
  body.appendChild(nav);

  const main = document.createElement("main");

  const sectionInfo = document.createElement("section");
  sectionInfo.id = "info-squirtle";
  sectionInfo.setAttribute("aria-labelledby", "info-squirtle-label");
  const h2Info = document.createElement("h2");
  h2Info.id = "info-squirtle-label";
  h2Info.textContent = "Informações sobre Squirtle";
  sectionInfo.appendChild(h2Info);
  const divInfo = document.createElement("div");
  const img1 = document.createElement("img");
  img1.src =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png";
  img1.alt = "Squirtle 1";
  const img2 = document.createElement("img");
  img2.src =
    "https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png";
  img2.alt = "Squirtle 2";
  divInfo.appendChild(img1);
  divInfo.appendChild(img2);
  const pInfo = document.createElement("p");
  pInfo.textContent =
    "Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle.";
  sectionInfo.appendChild(divInfo);
  sectionInfo.appendChild(pInfo);
  main.appendChild(sectionInfo);

  const sectionCaract = document.createElement("section");
  sectionCaract.id = "caracteristicas";
  sectionCaract.setAttribute("aria-labelledby", "caracteristicas-label");
  const h2Caract = document.createElement("h2");
  h2Caract.id = "caracteristicas-label";
  h2Caract.textContent = "Características";
  const pCaract = document.createElement("p");
  pCaract.textContent =
    "Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump.";
  sectionCaract.appendChild(h2Caract);
  sectionCaract.appendChild(pCaract);
  main.appendChild(sectionCaract);

  const sectionCurios = document.createElement("section");
  sectionCurios.id = "curiosidades";
  sectionCurios.setAttribute("aria-labelledby", "curiosidades-label");
  const h2Curios = document.createElement("h2");
  h2Curios.id = "curiosidades-label";
  h2Curios.textContent = "Curiosidades";
  const ulCurios = document.createElement("ul");
  const curiosities = [
    "Squirtle é um dos Pokémon mais populares e adoráveis.",
    'Seu nome deriva das palavras "squirrel" (esquilo) e "turtle" (tartaruga).',
    "Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon.",
  ];
  curiosities.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    ulCurios.appendChild(li);
  });
  sectionCurios.appendChild(h2Curios);
  sectionCurios.appendChild(ulCurios);
  main.appendChild(sectionCurios);

  const articleSquirtle = document.createElement("article");
  articleSquirtle.id = "artigo-squirtle";
  articleSquirtle.setAttribute("aria-labelledby", "artigo-squirtle-label");
  const h2Article = document.createElement("h2");
  h2Article.id = "artigo-squirtle-label";
  h2Article.textContent = "Squirtle: O Amigo Aquático";
  const pArticle1 = document.createElement("p");
  pArticle1.textContent =
    "Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.";
  const pArticle2 = document.createElement("p");
  pArticle2.textContent =
    "Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.";
  const pArticle3 = document.createElement("p");
  pArticle3.textContent =
    "Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas.";
  articleSquirtle.appendChild(h2Article);
  articleSquirtle.appendChild(pArticle1);
  articleSquirtle.appendChild(pArticle2);
  articleSquirtle.appendChild(pArticle3);
  main.appendChild(articleSquirtle);

  const sectionRecursos = document.createElement("section");
  sectionRecursos.id = "recursos";
  sectionRecursos.setAttribute("aria-labelledby", "recursos-label");
  const h2Recursos = document.createElement("h2");
  h2Recursos.id = "recursos-label";
  h2Recursos.textContent = "Recursos Adicionais";
  const ulRecursos = document.createElement("ul");
  const recursos = [
    {
      href: "https://www.pokemon.com/br/pokedex/squirtle",
      text: "Pokédex - Squirtle",
    },
    {
      href: "https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)",
      text: "Bulbapedia - Squirtle",
    },
  ];
  recursos.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.href;
    a.target = "_blank";
    a.textContent = item.text;
    li.appendChild(a);
    ulRecursos.appendChild(li);
  });
  sectionRecursos.appendChild(h2Recursos);
  sectionRecursos.appendChild(ulRecursos);
  main.appendChild(sectionRecursos);

  const sectionEvolucao = document.createElement("section");
  sectionEvolucao.id = "evolucao";
  sectionEvolucao.setAttribute("aria-labelledby", "evolucao-label");
  const h2Evolucao = document.createElement("h2");
  h2Evolucao.id = "evolucao-label";
  h2Evolucao.textContent = "Evoluções";
  const ulEvolucao = document.createElement("ul");
  const evolucoes = [
    {
      href: "./pokemon.html?evolucao=squirtle",
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
      alt: "Squirtle",
      caption: "1. Squirtle",
    },
    {
      href: "./pokemon.html?evolucao=wartortle",
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png",
      alt: "Wartortle",
      caption: "2. Wartortle",
    },
    {
      href: "./pokemon.html?evolucao=blastoise",
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png",
      alt: "Blastoise",
      caption: "3. Blastoise",
    },
  ];
  evolucoes.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.href;
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    const figcaption = document.createElement("figcaption");
    figcaption.textContent = item.caption;
    figure.appendChild(img);
    figure.appendChild(figcaption);
    a.appendChild(figure);
    li.appendChild(a);
    ulEvolucao.appendChild(li);
  });
  sectionEvolucao.appendChild(h2Evolucao);
  sectionEvolucao.appendChild(ulEvolucao);
  main.appendChild(sectionEvolucao);

  body.appendChild(main);

  const footer = document.createElement("footer");
  footer.setAttribute("aria-label", "Rodapé");
  const pCopy = document.createElement("p");
  pCopy.setAttribute("aria-label", "Copyright");
  pCopy.innerHTML =
    "&copy; 2024 Página do Pokémon Squirtle. Todos os direitos reservados.";
  const pTop = document.createElement("p");
  const aTop = document.createElement("a");
  aTop.href = "#header";
  aTop.textContent = "Voltar para o topo";
  pTop.appendChild(aTop);
  const pEmail = document.createElement("p");
  const aEmail = document.createElement("a");
  aEmail.href = "mailto:contato@squirtlepage.com";
  aEmail.textContent = "Contato via e-mail";
  pEmail.appendChild(aEmail);
  const pPhone = document.createElement("p");
  const aPhone = document.createElement("a");
  aPhone.href = "tel:+5555555555";
  aPhone.textContent = "Telefone: (55) 5555-5555";
  pPhone.appendChild(aPhone);
  footer.appendChild(pCopy);
  footer.appendChild(pTop);
  footer.appendChild(pEmail);
  footer.appendChild(pPhone);
  body.appendChild(footer);

  function updateVisitCount() {
    console.log("Visit count updated.");
  }

  function addVisitInfoToFooter() {
    console.log("Visit info added to footer.");
  }

  updateVisitCount();
  addVisitInfoToFooter();
});
