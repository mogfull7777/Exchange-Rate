// 1. 박스 2개 만들기
// 2. 드랍다운 리스트
// 3. 환율정보 들고오기

// 4. 드랍다운 리스트에서 아이템 선택하면 바뀜.
// 5. 금액을 입력하면 환전이 된다.
// 6. 드랍다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 환전
// 7. 숫자를 한국어로 읽는 법
// 8. 반대로 밑에서 박스에서 숫자를 바꿔도 위에 박스에 환율이 적용이 된다!

let currencyRatio = {
    USD : {
        KRW : 1244.13,
        USD : 1,
        YEN : 130.57,
        unit : "달러"
    },
    KRW : {
        KRW : 1,
        USD : 0.00080,
        YEN : 0.10,
        unit : "원"
    },
    YEN : {
        KRW : 9.40,
        USD : 0.0075,
        YEN : 1,
        unit : "엔"
    }
}
let fromCurrency = 'USD';
let toCurrency = 'USD';


// console.log(currencyRatio["YEN"]["unit"])

document.querySelectorAll("#from-currency-list a")
.forEach((menu) => menu.addEventListener("click",function(){
    document.getElementById("from-button").textContent=this.textContent;
    fromCurrency = this.textContent;
    convert();
} ));

document.querySelectorAll("#to-currency-list a")
.forEach(menu=>menu.addEventListener("click",function(){
    document.getElementById("to-button").textContent=this.textContent;
    toCurrency = this.textContent;
    convert();
}));

// 1. 키를 입력하는 순간
// 2. 환정이 되어서
// 3. 환전값이 보인다.

function convert(){
    //console.log("key up issue")
    // 1. 환전
    //  얼마를 환정??
    let amount = document.getElementById("form-input").value;
    // console.log("돈", amount)
    // fromCurrency = this.textContent;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];

    document.getElementById("to-input").value = convertedAmount;
}

// 1. 드랍다운 리스트에 값이 바뀔때마다
// 2. 환전을 다시한다.