CopyRightContent();
TimeYear ();

function TimeYear (){
    var year = new Date ().getFullYear ();
    document.getElementById('Year').textContent = year;
};

// 新增 html 的標籤與內容

function CopyRightContent(){
    // 宣告變數 在html 內新增 div 標籤
    let div = document.createElement('div');
    div.setAttribute('id',"Address");

    // 在哪個 html 標籤之內新增 div
    let Footer = document.getElementById('Footer');

    // 在footer內，新增div子元素
    Footer.appendChild(div);

    // 後面就只能放純文字
    // div.textcontent = "D STATE 版權宣告 &copy;2020 -";

    // html語法
    // div.innerHTML = "D STATE 版權宣告 &copy;2020 - <span>2022</span>";
    div.innerHTML = 'D STATE 版權宣告 &copy;2020 - <span id = "Year"></span>';
    
    TimeYear();

    // 調整 框架 位置
    // 1.在被選取的元素開頭插入內容prepend()置入被選取元素之中
    // 呼叫要選取的標籤
    let Address = document.getElementById('Address');
    // Address.prepend(div);

    // 3.在被選取的元素之前插入內容 before()置入被選取元素標籤之前
    Address.before(div);

}

SmallNavCon();
// 新增SmallNav的內容
function SmallNavCon(){
    // 新增標籤ul與li
    let ul = document.createElement('ul');
    let li = document.createElement('ul');

    // 在smallNav 內新增，宣告變數
    let SN = document.getElementById('SmallNav');

    // 建立ul框架，給予id名稱
    SN.appendChild(ul);

    // 賦予屬性id or class
    ul.setAttribute ("id", "PhoneNav");
    let PhoneNav = document.getElementById('PhoneNav');

    let Navclass = ['About','VerticalLine','Shop','VerticalLine','message','VerticalLine','Address'];
    let NavCon = ['品牌故事','|','購物說明','|','客服留言','|','門市資訊'];


    // 新增標籤時，程式的運作方式為:先新增標籤，賦予屬性，再指定新增的外框架(此為一個迴圈)
    // 迴圈內的數字7，是因為陣列而產生，故要隨著陣列值的數量而自動增減

    for (let i = 0; i < Navclass.length; i++){
        let li = document.createElement('li');
        // 新增屬性
        li.setAttribute ("class", Navclass [i]);
        // ul內新增li清單
        PhoneNav.appendChild(li);

        // 新增連結 a
        let A = document.createElement('a');
        // 新增屬性 假連結javascript:;
        A.setAttribute ("href","javascript:;");
        // li內新增a連結
        li.appendChild(A);
        // 置入 陣列內容
        A.innerText = NavCon [i];
    }


}

// MenuNav();
// 行動裝置選單
function MenuNav(){
    let MenuNav = document.getElementById('MenuNav');
    // 隱藏手機板選單
    MenuNav.style.display = "none";
}


// PhoneMenuShow();
// function PhoneMenuShow(){
//     let Menu = document.getElementsByClassName('MenuBtn');
//     // 顯示手機板選單內容
//     Menu.style.display = "block";
    
// }


Pageload();
function Pageload(){
    $('header').load("../web/header.html");
}