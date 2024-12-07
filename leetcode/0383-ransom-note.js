export const canConstruct = function (ransomNote, magazine) {
  const ransomNoteCharHashmap = {}
  for (let char of ransomNote) {
    if (char in ransomNoteCharHashmap) {
      ransomNoteCharHashmap[char] += 1
    } else {
      ransomNoteCharHashmap[char] = 1
    }
  }
  const magazineCharHashmap = {}
  for (let char of magazine) {
    if (char in magazineCharHashmap) {
      magazineCharHashmap[char] += 1
    } else {
      magazineCharHashmap[char] = 1
    }
  }

  for (let char of ransomNote) {
    if (
      !magazineCharHashmap[char] ||
      ransomNoteCharHashmap[char] > magazineCharHashmap[char]
    ) {
      return false
    }
  }

  return true
}
