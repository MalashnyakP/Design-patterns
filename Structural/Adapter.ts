class XMLFormater {
  public format() {
    return `<?xml version="1.0" encoding="UTF-8"?>
                <div>
                    <p>
                        Hello World
                    </p>
                </div>`;
  }
}

class AdapterXMLToHTML {
  private xml: XMLFormater;

  constructor(adaptee) {
    this.xml = adaptee;
  }

  public format() {
    return this.xml.format().split(`\n`).splice(1).join("\n");
  }
}

const adaptee = new XMLFormater();
const adapter = new AdapterXMLToHTML(adaptee);
console.log(adapter.format());
