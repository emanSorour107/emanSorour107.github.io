
let oneAccount ={
accountName : '',
depositAmount : '',
}

let accountInfoList =[];

function addAccount(){
    let account = document.getElementById("accountName").value;
    let deposite = document.getElementById("deposit").value;
    let result = document.getElementById("textarea");
    accountInfoList.push(oneAccount.accountName=account , oneAccount.depositAmount=deposite);
    // result.innerHTML = accountInfoList ;
    displayResult();
}

function displayResult(){
for (let i = 0; i < accountInfoList.length; i++) {
accountInfoList[i] = (function(n) {
    return function() { return n}
} )(i);
};
}