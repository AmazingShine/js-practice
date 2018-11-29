// 给定一个字符串，要求把字符串前面的若干个字符移动到字符串的尾部，如把字符串“abcdef”前面的2个字符'a'和'b'移动到字符串的尾部，
// 使得原字符串变成字符串“cdefab”。请写一个函数完成此功能，要求对长度为n的字符串操作的时间复杂度为 O(n)，空间复杂度为 O(1)。

export default function(str,num){
    return str.substring(num) + str.substring(0,num)
}

// function reverseString(str,from,to){
//     while(from < to){
//         let tem = str[from]
//         str[from++] = str[to];
//         s[to--] = from
//     }
// }

// function leftRotateString(str,m){
//     let n = str.length;
//     m %= n;               //若要左移动大于n位，那么和%n 是等价的
//     reverseString(str, 0, m - 1); //反转[0..m - 1]，套用到上面举的例子中，就是X->X^T，即 abc->cba
//     reverseString(str, m, n - 1); //反转[m..n - 1]，例如Y->Y^T，即 def->fed
//     reverseString(str, 0, n - 1); //反转[0..n - 1]，即如整个反转，(X^TY^T)^T=YX，即 cbafed->defabc。
// }

// module.exports = leftRotateString