export function gerarDadosCurriculares(disciplinas) {
  const semestresMap = {};

  disciplinas.forEach((disc) => {
    const periodoKey = disc.semestre === 0 ? "Optativas" : `${disc.semestre}º Semestre`;

    if (!semestresMap[periodoKey]) {
      semestresMap[periodoKey] = {
        chTotal: 0,
        disciplinas: [],
      };
    }

    // Parse da carga horária
    const chNumber = parseInt(disc.carga?.replace(/[^\d]/g, ""), 10) || 0;

    semestresMap[periodoKey].disciplinas.push({
      codigo: disc.codigo,
      nome: disc.nome,
      ch: disc.carga?.toUpperCase() || "0H",
      natureza: disc.natureza?.toUpperCase() || "OBRIGATORIA",
    });

    semestresMap[periodoKey].chTotal += chNumber;
  });

  // Formatando carga horária total como string
  Object.values(semestresMap).forEach((sem) => {
    sem.chTotal = `${sem.chTotal}h`;
  });

  return semestresMap;
}