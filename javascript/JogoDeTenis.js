class JogoDeTenis {
    constructor(NomeJogador1, NomeJogador2) {
        this.NomeJogador1 = NomeJogador1;
        this.NomeJogador2 = NomeJogador2;
        this.PontosJogador1 = 0;
        this.PontosJogador2 = 0;
    }

    ganhouPonto(NomeJogador) {
        NomeJogador === "jogador1" ? this.PontosJogador1++ : this.PontosJogador2++;
    }

    getPontuacao() {
        if (this.estaEmpatado()) {
            return this.getEmpatado();
        } else if (this.temVantagemOuVitoria()) {
            return this.getVantagemOuVitoria();
        } else {
            return this.getPontuacaoNormalDoJogo();
        }
    }

    estaEmpatado() {
        return this.PontosJogador1 === this.PontosJogador2;
    }

    getEmpatado() {
        const empate = ["Love-All", "Fifteen-All", "Thirty-All", "Deuce"];
        return empate[this.PontosJogador1] || empate[3];
    }

    temVantagemOuVitoria() {
        return this.PontosJogador1 >= 4 || this.PontosJogador2 >= 4;
    }

    getVantagemOuVitoria() {
        const resultado = this.PontosJogador1 - this.PontosJogador2;
        if (resultado === 1) return "Vantagem " + this.NomeJogador1;
        if (resultado === -1) return "Vantagem " + this.NomeJogador2;
        return resultado >= 2 ? "Vitória para " + this.NomeJogador1 : "Vitória para " + this.NomeJogador2;
    }

    getPontuacaoNormalDoJogo() {
        const NomePontuacao = ["Love", "Fifteen", "Thirty", "Forty"];
        return NomePontuacao[this.PontosJogador1] + "-" + NomePontuacao[this.PontosJogador1];
    }
}

if (typeof window === "undefined") {
    module.exports = JogoDeTenis;
}
