export default class Log {
  public static success(msg: string): void {
    console.log(`%c ${msg}`, 'color:green')
  }

  public static fail(msg: string): void {
    console.log(`%c ${msg}`, 'color:red')
  }
}
