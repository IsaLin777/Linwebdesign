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
    let.Address = document.getElementById('Address')
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
    let SN = document.getElementById('SmallNavOnly');

    // 建立ul框架，給予id名稱
    SN.appendChild(ul);

    // 賦予屬性id or class
    ul.setAttribute ("id", "PhoneNav");


}