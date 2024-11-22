const input = require('readline-sync')

let a = input.questionInt(`enter the ${1} number : `);
let b = input.questionInt(`enter the ${2} number : `);
let c = input.questionInt(`enter the ${3} number : `);
let d = input.questionInt(`enter the ${4} number : `);
let e = input.questionInt(`enter the ${5} number : `);
let f = input.questionInt(`enter the ${6} number : `);
let g = input.questionInt(`enter the ${7} number : `);
let h = input.questionInt(`enter the ${8} number : `);
if (a < b && a > c && a > d && a > e && a > f && a > g && a > h || a < c && a > b && a > d && a > e && a > f && a > g && a > h || a < d && a > c && a > b && a > e && a > f && a > g && a > h || a < e && a > c && a > d && a > b && a > f && a > g && a > h || a < f && a > c && a > d && a > e && a > b && a > g && a > h || a < g && a > c && a > d && a > e && a > f && a > b && a > h || a < h && a > c && a > d && a > e && a > f && a > g && a > b){
    console.log(a);
}else if(b < a && b > c && b > d && b > e && b > f && b > g && b > h || b < c && b > a && b > d && b > e && b > f && b > g && b > h || b < d && b > c && b > a && b > e && b > f && b > g && b > h || b < e && b > c && b > d && b > a && b > f && b > g && b > h || b < f && b > c && b > d && b > e && b > a && b > g && b > h || b < g && b > c && b > d && b > e && b > f && b > a && b > h || b < h && b > c && b > d && b > e && b > f && b > g && b > a){
    console.log(b);
}else if (c < b && c > a && c > d && c > e && c > f && c > g && c > h || c < a && c > b && c > d && c > e && c > f && c > g && c > h || c < d && c > a && c > b && c > e && c > f && c > g && c > h || c < e && c > a && c > d && c > b && c > f && c > g && c > h || c < f && c > a && c > d && c > e && c > b && c > g && c > h || c < g && c > a && c > d && c > e && c > f && c > b && c > h || c < h && c > a && c > d && c > e && c > f && c > g && c > b){
    console.log(c);
}else if (d < b && d > a && d > d && d > e && c > f && d > g && d > h || d < a && d > b && d > c && d > e && d > f && d > g && d > h || d < c && d > a && d > b && d > e && d > f && d > g && d > h || d < e && d > a && d > c && d > b && d > f && d > g && d > h || d < f && d > a && d > c && d > e && d > b && d > g && d > h || d < g && d > a && d > c && d > e && d > f && d > b && d > h || d < h && d > a && d > c && d > e && d > f && d > g && d > b){
    console.log(d);
}else if (e < b && e > a && e > d && e > c && e > f && e > g && e > h || e < a && e > b && e > d && e > c && e > f && e > g && e > h || e < d && e > a && e > b && e > c && e > f && e > g && e > h || e < c && e > a && e > d && e > b && e > f && e > g && e > h || e < f && e > a && e > d && e > c && e > b && e > g && e > h || e < g && e > a && e > d && e > c && e > f && e > b && e > h || e < h && e > a && e > d && e > c && e > f && e > g && e > b){
    console.log(e);
}else if (f < b && f > a && f > d && f > e && f > c && f > g && f > h || f < a && f > b && f > d && f > e && f > c && f > g && f > h || f < d && f > a && f > b && f > e && f > c && f > g && f > h || f < e && f > a && f > d && f > b && f > c && f > g && f > h || f < c && f > a && f > d && f > e && f > b && f > g && f > h || f < g && f > a && f > d && f > e && f > c && f > b && f > h || f < h && f > a && f > d && f > e && f > c && f > g && f > b){
    console.log(f);
}else if (g < b && g > a && g > d && g > e && g > f && g > c && g > h || g < a && g > b && g > d && g > e && g > f && g > c && g > h || g < d && g > a && g > b && g > e && g > f && g > c && g > h || g < e && g > a && g > d && g > b && g > f && g > c && g > h || g < f && g > a && g > d && g > e && g > b && g > c && g > h || g < c && g > a && g > d && g > e && g > f && g > b && g > h || g < h && g > a && g > d && g > e && g > f && g > c && g > b){
    console.log(g);
}else {
    console.log(h);
}