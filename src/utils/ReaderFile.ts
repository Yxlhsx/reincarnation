// import Log from '@/utils/Log'

// export default class ReaderFile {
//   public static async read(file: Blob): Promise<string> {
//     const reader: FileReader = new FileReader()
//     reader.readAsText(file, 'UTF-8')
//     reader.onload = await function (e: ProgressEvent) {
//       const fr = e.target as FileReader
//       const result: string | undefined = fr.result?.toString()
//       return result || ''
//     }
//   }
// }
