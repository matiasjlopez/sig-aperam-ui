export class OrdenDeCompra {
  public id: string;
  public serie: string;
  public ancho: number;
  public peso: number;
  public espesor: number;

  public static empty(): OrdenDeCompra {
    return new OrdenDeCompra({id: '', serie: '', ancho: 0, peso: 0, espesor: 0});
  }

  constructor(data: any) {
    this.id = data.id;
    this.serie = data.serie;
    this.ancho = data.ancho;
    this.peso = data.peso;
    this.espesor = data.espesor;
  }
}
