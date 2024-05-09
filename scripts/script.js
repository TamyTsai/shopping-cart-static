// 將勾選框 全選
function selectAllSkills() {
    var skills = document.querySelectorAll('.skill'); // 抓出所有html選項元素 指定給變數skills(形成一個陣列)

    // for 迴圈
    for (var i = 0; i < skills.length; i++) { // 變數i起始值指定為0，運行條件：變數i的值小於變數skills的長度，每次運行完做的事：將變數i的值+1後 指定回給 i）
        var s = skills[i]; // 將 變數skills陣列中的第i個值 指定給變數s
        s.checked = true;// 把變數s2的checked屬性改為true
        // 也可以不創s變數，直接寫skills[i].checked=true;
        // 第一種寫法會有一個 s 變數可以用，後續如果還要操作的話還可以拿來用
        // 而第二種寫法雖然效果還是可以做到，但後續如果要再操作的話就得再寫一次 skills[i]
        // 所以如果後續不會用到它的話，第二種寫法比較簡潔
    }
}

// 將勾選框 全不選
function unselectAllskills() {
    var skills = document.querySelectorAll('.skill');
    for (var i = 0; i < skills.length; i++) {
      var s = skills[i];
      s.checked = false;
    }
}

// 切換 勾選框 全選、全不選
var Unchecked = true; // 初始頁面是 全不選的狀態，所以這裡設定為true，讓 全選按鈕 被點擊時，先執行if後面的程式碼區塊
function selectedAll_or_UnselectedAll() {
    if (Unchecked) {
      selectAllSkills();
      Unchecked = false;
    // 初始頁面是 全不選的狀態，點擊 全選按鈕 後，呼叫 全選函數，讓勾選框被 全選
    // 接著因為現在已經是 全選狀態，所以把Unchecked改為false
    } else {
      unselectAllskills();
      Unchecked = true;
    // 在 全選狀態 下，點擊 全選按鈕 後，因 全選狀態下Unchecked為false，故會執行此區塊，呼叫 全不選函數，讓勾選框被 全部取消勾選
    // 接著因為現在已經是 全不選狀態，所以把Unchecked改為true，讓下次點擊 全選按鈕時，改為執行if後面的程式碼區塊
    }
  }

// 數量欄位+-按鈕功能
// 根據按下的按鈕改變數量欄位之值
// 根據數量及單價計算小計，並顯示
function addProduct(amount) {
    // var unitPriceField = document.querySelector('#item1UnitPrice'); // 抓出「單價」欄位
    // var unitPrice = parseInt(unitPriceField.innerHEML); // 前面的var unitPriceField = document.querySelector('#item1UnitPrice');會抓到整個html元素（td），而非其中的「250」，所以這裡要抓其中的「250」，並將其轉換為 整數 型態（才能拿來做運算）

    var quantityField = document.querySelector('#item1Quantity'); // 抓出「數量」欄位
    var quantity = parseInt(quantityField.innerHTML); // 前面的var quantityField = document.querySelector('#item1Quantity');會抓到整個html元素（span），而非其中的「0」，所以這裡要抓其中的「0」，並將其轉換為 整數 型態（才能拿來做運算）
    
    var priceField = document.querySelector('#item1Price'); // 抓出「小計」欄位

    quantity = quantity + amount; // 數量欄位的值 加上 本函數傳進來的參數後 再指定給數量欄位的值
    // quantity += amount; 簡寫
    if (quantity < 0){
        quantity = 0;
    } // 控制數量欄位不為負數

    quantityField.innerHTML = quantity;  // 把運算完的結果，餵回給 數量欄位
    // priceField.innerHTML = quantity * unitPrice;
    priceField.innerHTML = quantity * 250;  // 計算總價後，餵回給 小計欄位
}

