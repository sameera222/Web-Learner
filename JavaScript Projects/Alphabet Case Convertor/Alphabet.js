const inputArea = document.getElementById("input");
const caseDD = document.getElementById("case-options");

inputArea.addEventListener("keyup", changeCase);
caseDD.addEventListener("change", changeCase);

function changeCase(){
    const input = inputArea.value;
    const outPut = document.getElementById("output-convert")
    const selectedOption = caseDD.selectedIndex;

    if(selectedOption === 0){
        outPut.value = input.toUpperCase()
    }else if(selectedOption === 1){
        outPut.value = input.toLowerCase()
    }else{
        let i, change, result ="";
        const length = input.length;
        for(let i =0; i < length; i++){
            change = input[i];
        
        if(/[A-Z]/.test(change)) result += change.toLowerCase();

        else if(/[a-z]/.test(change)) result += change.toUpperCase();
        
        else result += change;
        }
     outPut.value = result;
    }

}

// const input_ = document.getElementById("input");
// const case_dd = document.getElementById("case-options");

// input_.addEventListener("keyup", changeCase);
// case_dd.addEventListener("change", changeCase);

// function changeCase() {
//    const input = input_.value;
//    const output = document.getElementById("output");
//    const selectedOption = case_dd.selectedIndex;

//    if (selectedOption === 0) {
//       output.value = input.toUpperCase();
//    } else if (selectedOption === 1) {
//       output.value = input.toLowerCase();
//    } else {
//       let i, ch, result = "";
//       const len = input.length;
//       for (i = 0; i < len; i++) {
//          ch = input[i];
//          if (/[A-Z]/.test(ch)) result += ch.toLowerCase();
//          else if (/[a-z]/.test(ch)) result += ch.toUpperCase();
//          else result += ch;
//       }
//       output.value = result;
//    }
// }
