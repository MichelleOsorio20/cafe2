import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(public afAuth: AngularFireAuth) { }

  async resetPassword(email:string):Promise<void>{
    try{
      return this.afAuth.auth.sendPasswordResetEmail(email);
    }
    catch(error){console.log(error)}
  }
  async login(email:string, password:string) {
    try{
      const result = await this.afAuth.auth.signInWithEmailAndPassword(
        email, 
        password
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  
  async registrar(email: string, password: string) {
    try{
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    try{
      await this.afAuth.auth.signOut();
    } catch (error) {
      console.log(error);
    }
  }
}
