
(function () {
    "use strict";

    let accountInfoList = [];

    const accountfn = (function() {
       
        return{
        oneAccount: (name, balance) => {
            return { name, balance };
        }
    }
    })();



    window.onload = (function () {
        let butnClick = document.getElementById("createAccount");
        butnClick.onclick = (function () {
            let account = document.getElementById("accountName");
            let deposite = document.getElementById("deposit");
            accountInfoList.push(accountfn.oneAccount(account.value, deposite.value));
            account.value = '';
            deposite.value = '';
            displayResult();
        })
    })

    var displayResult = function () {
        let result = document.getElementById("textarea");
        let totalResult = '';
        for (let i = 0; i < accountInfoList.length; i++) {
            totalResult += `Account name: ${accountInfoList[i].name}    Balance: ${accountInfoList[i].balance} \n`;
        };
        result.innerHTML = totalResult;
    }

})();