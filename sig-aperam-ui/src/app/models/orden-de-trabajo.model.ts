export class OrdenDeTrabajo {
  public id: string;
  public serieSolicitada: string;
  public espesorSolicitado: number;
  public anchoSolicitado: number;
  public largoSolicitado: number;
  public esmerilado: string;
  public cantidad: number;
  public fecha: any;
  public estado: string;
  public fechaDespacho: any;
  public producto: string;
  public bobina: any;

  public static empty(): OrdenDeTrabajo {
    return new OrdenDeTrabajo({id: '', serieSolicitada: '', anchoSolicitado: 0, largoSolicitado: 0, espesorSolicitado: 0, esmerilado: '',
      cantidad: '', fecha: '', estado: '', fechaDespacho: '', producto: '', bobina: ''});
  }

  constructor(data: any) {
    this.id = data.id;
    this.serieSolicitada = data.serieSolicitada;
    this.anchoSolicitado = data.anchoSolicitado;
    this.largoSolicitado = data.largoSolicitado;
    this.espesorSolicitado = data.espesorSolicitado;
    this.esmerilado = data.esmerilado;
    this.cantidad = data.cantidad;
    this.fecha = data.fecha;
    this.estado = data.estado;
    this.fechaDespacho = data.fechaDespacho;
    this.producto = data.producto;
    this.bobina = data.bobina;
  }
}
