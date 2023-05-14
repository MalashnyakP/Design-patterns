class CPU {
  public freeze(): void {
    console.log('CPU: Freezing...');
  }

  public jump(address: number): void {
    console.log(`CPU: Jumping to address ${address}`);
  }

  public execute(): void {
    console.log('CPU: Executing commands...');
  }
}

class Memory {
  public load(address: number, data: string): void {
    console.log(`Memory: Loading data "${data}" into address ${address}`);
  }
}

class HardDrive {
  public readData(): string {
    return 'Data from hard drive';
  }
}

class ComputerFacade {
  private cpu: CPU;
  private memory: Memory;
  private hardDrive: HardDrive;

  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  public start(): void {
    console.log('ComputerFacade: Starting computer...');
    this.cpu.freeze();
    this.memory.load(0, this.hardDrive.readData());
    this.cpu.jump(0);
    this.cpu.execute();
  }
}

const computer = new ComputerFacade();
computer.start();
