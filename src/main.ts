import Rectangle from './Rectangle'
import Shape from './Shape'

interface Person {
  id: number
  name: string
  date: Date | string
  gender?: 'male' | 'female'

}

function displayPerson (person: Person): void {
  person.gender && console.log(person.gender.substring(0, 2))
}

// displayPerson({
//   id: 123,
//   name: 'Ilia',
//   date: '1994-12-21',
//   gender: 'male'
// })

const MIN_CODE = 32
const MAX_CODE = 127
const ALPHABET_LENGTH = MAX_CODE - MIN_CODE + 1

function cipher (text: string, key: number): string {
  key = getKey(key)
  return Array.from(text).map((symb) => shiftSymbol(symb, key)).join('')
}

function decipher (text: string, key: number): string {
  return cipher(text, -key)
}

function getKey (key: number): number {
  key = key % ALPHABET_LENGTH
  if (key < 0) {
    key = ALPHABET_LENGTH + key
  }
  return key
}

function shiftSymbol (symb: string, key: number): string {
  const newCode = symb.charCodeAt(0) + key
  const shiftedSymb = newCode > MAX_CODE
    ? newCode - ALPHABET_LENGTH
    : newCode
  return String.fromCharCode(shiftedSymb)
}

const shape: Shape = new Rectangle(3, 5)
console.log((shape as Rectangle).height)
