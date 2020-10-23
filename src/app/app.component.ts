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

  ngOnInit() {
    this.synth = window.speechSynthesis;
    setTimeout(() => {
      this.voices = this.synth.getVoices();
      this.utterTest = new SpeechSynthesisUtterance("Testing");
      this.utterTest.voice = this.voices[48];
      this.synth.speak(this.utterTest);
      console.log(this.voices);
    }, 10);
    console.log(this.voices, this.synth);
    // this.utterTest = new SpeechSynthesisUtterance("Testing");
  }
}
