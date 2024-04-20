export class Categorie{
  private _idCat!:number;
  private _nomCat!:String;
  private _descriptionCat!:String;

  constructor() {
    this._idCat=0;
    this._descriptionCat="";
    this._nomCat="";
  }

  get idCat(): number {
    return this._idCat;
  }

  set idCat(value: number) {
    this._idCat = value;
  }

  get nomCat(): String {
    return this._nomCat;
  }

  set nomCat(value: String) {
    this._nomCat = value;
  }

  get descriptionCat(): String {
    return this._descriptionCat;
  }

  set descriptionCat(value: String) {
    this._descriptionCat = value;
  }
}
