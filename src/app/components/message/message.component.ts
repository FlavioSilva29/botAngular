import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { element } from 'protractor'
import {BotService} from '../../services/bot.service'
export interface Message{
  remetente?: string;
  mensagem:string;
  data?:Date
}
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef
  msg:string
  resultados: Message[] = []
  constructor(private chatBot: BotService) {
    this.initBot()
   }

  ngOnInit() {
  }
  initBot() {
    this.resultados = []
    this.chatBot.getResponse('oi')
      .subscribe((lista: any) => {
        lista.result.fulfillment.messages.forEach((element) => {
          this.resultados.push({ remetente: 'bot', mensagem: element.speech, data: lista.timestamp })
        });
      })
  }
  sendMessage() {
    this.resultados.push({ remetente: 'eu', mensagem: this.msg, data: new Date() })
    this.chatBot.getResponse(this.removerAcentos(this.msg))
      .subscribe((lista: any) => {
        lista.result.fulfillment.messages.forEach((element) => {
          this.resultados.push({ remetente: 'bot', mensagem: element.speech, data: lista.timestamp })
        });
      })

    this.msg = '';
  }
  ngAfterViewChecked(){
    this.scrollToBottom()
  }
  scrollToBottom(): void{
    try{
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight
    }catch(err){
      alert(err)
    }
  }
  private removerAcentos(s){
    return s.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
  }
}
