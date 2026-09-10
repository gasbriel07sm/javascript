let qtdSeconds = 3672;

const hours = Math.floor(qtdSeconds / 3600);
qtdSeconds %= 3600;
const minutes = Math.floor(qtdSeconds / 60);
const seconds = Math.floor(qtdSeconds % 60);

console.log(`${hours}h ${minutes}min ${seconds}s`);