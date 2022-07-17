import { dropRight } from "lodash"

declare module 'lodash' {

function multiply(multiple: number,  value: number): number

function reverse(arr:string[]):string[]
function reverse(arr:number[]):number[]

function dropRight(arr:(string|number)[], dropped: number):(string|number)[]
}
