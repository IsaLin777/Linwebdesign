// 瀏覽器的控制台 列印語法 console.log (顯示資料)
/* 雙引號(")和單引號(')為字串 */

TestCode ();

// 日期函數 Date 產生新的 Date
var year = new Date ().getFullYear ();
// var now = new Date ();
// var year = now.getFullYear ();

// 年份變數
// var Year = "2022"; 新增上方的日期函數，讓年份會隨著時間遞進自動更新年份，所以註記這行不會變動的定義2022
document.getElementById('Year').textContent = year;

// 設計 方法 function name (參數或空白){程式}
function TestCode (){
    // 變數命名: 英文開頭，英文與數字，底線，javascript的關鍵字不能設定，英文可設定大小寫混用
    // es5版本 var ，不可數字開頭
    // 宣告變數 全域變數
    var one;
    var ONE;
    var One;
    var O_ne;
    var O_01ne;

    // 賦予 值
    console.log(one);
    console.log(ONE);
    console.log("02");


    // 條件判斷 if...else 單一條件
    var NumBer = 12;
    // 顯示條件成立，執行的資料
    if (NumBer < 5){
        console.log ("數字大於10");
    }

    if (NumBer > 10) console.log ("數字大於10");

    if (NumBer > 10) console.log ("數字為:" + NumBer);

    // 顯示條件成立時，執行的資料，或是不成立時，執行的資料
    var Num = 8;
    if (NumBer < Num)
        console.log ("NumBer < Num");
    else 
        console.log ("NumBer < Num 不成立");

}