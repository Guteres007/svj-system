type EconomicEntity = {
  ico: string;
  obchodniJmeno: string;
  sidlo: {
    kodStatu: string;
    nazevStatu: string;
    kodKraje: number;
    nazevKraje: string;
    kodOkresu: number;
    nazevOkresu: string;
    kodObce: number;
    nazevObce: string;
    kodUlice: number;
    nazevUlice: string;
    cisloDomovni: number;
    kodCastiObce: number;
    cisloOrientacni: number;
    nazevCastiObce: string;
    kodAdresnihoMista: number;
    psc: number;
    textovaAdresa: string;
    standardizaceAdresy: boolean;
    typCisloDomovni: number;
  };
  pravniForma: string;
  financniUrad: string;
  datumVzniku: string;
  datumAktualizace: string;
  icoId: string;
  adresaDorucovaci: {
    radekAdresy1: string;
    radekAdresy2: string;
    radekAdresy3: string;
  };
  seznamRegistraci: {
    stavZdrojeVr: string;
    stavZdrojeRes: string;
    stavZdrojeRzp: string;
    stavZdrojeNrpzs: string;
    stavZdrojeRpsh: string;
    stavZdrojeRcns: string;
    stavZdrojeSzr: string;
    stavZdrojeDph: string;
    stavZdrojeSd: string;
    stavZdrojeIr: string;
    stavZdrojeCeu: string;
    stavZdrojeRs: string;
    stavZdrojeRed: string;
    stavZdrojeMonitor: string;
  };
  primarniZdroj: string;
  dalsiUdaje: Array<{
    obchodniJmeno: Array<{
      obchodniJmeno: string;
      primarniZaznam: boolean;
    }>;
    sidlo: Array<{
      sidlo: {
        kodStatu: string;
        nazevStatu: string;
        kodKraje: number;
        nazevKraje: string;
        kodOkresu: number;
        nazevOkresu: string;
        kodObce: number;
        nazevObce: string;
        kodUlice: number;
        nazevUlice: string;
        cisloDomovni: number;
        kodCastiObce: number;
        cisloOrientacni: number;
        nazevCastiObce: string;
        kodAdresnihoMista: number;
        psc: number;
        textovaAdresa: string;
        standardizaceAdresy: boolean;
        typCisloDomovni: number;
      };
      primarniZaznam: boolean;
    }>;
    pravniForma: string;
    spisovaZnacka?: string;
    datovyZdroj: string;
  }>;
  czNace: string[];
};

export type AresApiResponse = {
  pocetCelkem: number;
  ekonomickeSubjekty: EconomicEntity[];
};
