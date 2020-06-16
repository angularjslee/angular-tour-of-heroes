import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  //message: string[] = [];
  message: any[] = [];

  add(message: string){
    this.message.push(message);
  }

  clear(){
    this.message = [];
  }
}
