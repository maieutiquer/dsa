// export const checksum = (fileBytes, result = []) =>
//   fileBytes.length === 0
//     ? result
//     : result.concat(
//         fileBytes.slice(1, fileBytes.at(0) + 1).reduce((a, b) => a + b, 0) %
//           256,
//         fileBytes.at(fileBytes.at(0) + 1) === undefined
//           ? []
//           : checksum(fileBytes.slice(fileBytes.at(0) + 1)),
//       )

// export const checksum = (fileBytes) => {
//     let currentCount =
// }
