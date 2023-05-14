class TextEditor {
  private text: string;

  constructor() {
    this.text = "";
  }

  public setText(text: string): void {
    this.text = text;
  }

  public getText(): string {
    return this.text;
  }

  public createMemento(): TextEditorMemento {
    return new TextEditorMemento(this.text);
  }

  public restoreMemento(memento: TextEditorMemento): void {
    this.text = memento.getState();
  }
}

class TextEditorMemento {
  private state: string;

  constructor(state: string) {
    this.state = state;
  }

  public getState(): string {
    return this.state;
  }
}

class TextEditorHistory {
  private mementos: TextEditorMemento[];

  constructor() {
    this.mementos = [];
  }

  public pushMemento(memento: TextEditorMemento): void {
    this.mementos.push(memento);
  }

  public popMemento(): TextEditorMemento | undefined {
    return this.mementos.pop();
  }
}

const editor = new TextEditor();
const textEditorHistory = new TextEditorHistory();

editor.setText("Hello, world!");
console.log(editor.getText());

textEditorHistory.pushMemento(editor.createMemento());

editor.setText("Modified text");
console.log(editor.getText());

editor.restoreMemento(textEditorHistory.popMemento()!);
console.log(editor.getText());
