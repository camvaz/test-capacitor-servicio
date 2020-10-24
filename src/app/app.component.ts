import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "test-audio";
  utterTest: SpeechSynthesisUtterance;
  voices: SpeechSynthesisVoice[];
  synth: SpeechSynthesis;

  async ngOnInit() {
    this.synth = window.speechSynthesis;
    this.voices = await this.setSpeech();
    this.utterTest = new SpeechSynthesisUtterance("Testing");
    this.utterTest.voice = this.voices[48];
  }

  onClickVoice = () => {
    this.synth.speak(this.utterTest);
  };

  setSpeech: () => Promise<SpeechSynthesisVoice[]> = () => {
    return new Promise(function (resolve, reject) {
      let synth = window.speechSynthesis;
      let id;

      id = setInterval(() => {
        if (synth.getVoices().length !== 0) {
          resolve(synth.getVoices());
          clearInterval(id);
        }
      }, 10);
    });
  };
}
