import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ProductoInterface } from '../models/producto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private afs: AngularFirestore) {
        this.productosCollection = afs.collection<ProductoInterface>('productos');
        this.productos = this.productosCollection.valueChanges();
    }

    private productosCollection: AngularFirestoreCollection<ProductoInterface>;
    private productos: Observable<ProductoInterface[]>;
    private productoDoc: AngularFirestoreDocument<ProductoInterface>;
    private producto: Observable<ProductoInterface>;
    public selectedProducto: ProductoInterface = {};

    getAllProdutos(){
        return this.productos = this.productosCollection.snapshotChanges()
        .pipe(map( changes => {
            return changes.map( action => {
                const data = action.payload.doc.data() as ProductoInterface;
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    }
    addProducto(producto: ProductoInterface): void{
        this.productosCollection.add(producto);
    }
    updateProducto(producto: ProductoInterface): void{
        let idProducto = producto.id;
        this.productoDoc = this.afs.doc<ProductoInterface>(`productos/${idProducto}`);
        this.productoDoc.update(producto);
    }
    deleteProducto(idProducto: string): void{
        this.productoDoc = this.afs.doc<ProductoInterface>(`productos/${idProducto}`);
        this.productoDoc.delete();
    }
}