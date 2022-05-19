export default class Log {
  public static success(msg: string): void {
    console.log(`%c ${msg}`, 'color:green')
  }

  public static successAlert(msg: string): void {
    alert(msg)
    console.log(`%c ${msg}`, 'color:green')
  }

  public static fail(msg: string): void {
    console.log(`%c ${msg}`, 'color:red')
  }

  public static failAlert(msg: string): void {
    alert(msg)
    console.log(`%c ${msg}`, 'color:red')
  }
}
