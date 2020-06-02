let accountInfoList =[];

let oneAccount = (name, balance) => {
return {name, balance};
};


function addAccount(){
    let account = document.getElementById("accountName");
    let deposite = document.getElementById("deposit");
    accountInfoList.push(oneAccount(account.value, deposite.value));
    account.value ='';
    deposite.value ='';
    displayResult();
    
}

var displayResult = function(){
    let result = document.getElementById("textarea");
    let totalResult ='';
for (let i = 0; i < accountInfoList.length; i++) {
    totalResult += `Account name: ${accountInfoList[i].name}    Balance: ${accountInfoList[i].balance} \n`;
};
result.innerHTML = totalResult;
}

