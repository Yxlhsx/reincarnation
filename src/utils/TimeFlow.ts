export default function TimeFlow(fun: Function) {
  setInterval(() => {
    fun().s
  }, 1000)
}
