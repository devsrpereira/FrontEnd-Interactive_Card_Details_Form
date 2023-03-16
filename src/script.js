function send_data() {
  /*
    msg error - fild not fill
    Can't be blank.

    msg error - card numbers
    Please verify the card numbers.

    msg error - data exp.
    Please correct the expiration date.
    */
        //   let holder_name = document.querySelector("input#iholder_name");
        //   let tcard_num = document.querySelector("input#icard_number");
        //   let tmm_exp = document.querySelector("input#imm_exp");
        //   let tyy_exp = document.querySelector("input#iyy_exp");
        //   let tcvc = document.querySelector("input#icvc");

        //   //blank tests
        //   if (holder_name.value.length == 0) {
        //     let erro1 = document.querySelector("span.erro_1");
        //     erro1.innerHTML = "Can't be blank.";
        //     erro1.style.display = "block";
        //     window.alert("All fields must be filled.");
        //   } else if (tcard_num.value.length > 16) {
        //     let erro2 = document.querySelector("span.erro_2");
        //     erro2.innerHTML = "Please verify the card numbers.";
        //     erro2.style.display = "block";
        //     window.alert("All fields must be filled.");
        //   } else if (tmm_exp.value.length == 0 || tyy_exp.value.length == 0) {
        //     let erro3 = document.querySelector("span.erro_3");
        //     erro3.innerHTML = "Can't be blank.";
        //     erro3.style.display = "block";
        //     window.alert("All fields must be filled.");
        //   } else if (tcvc.value.length == 0) {
        //     let erro4 = document.querySelector("span.erro_4");
        //     erro4.innerHTML = "Can't be blank.";
        //     erro4.style.display = "block";
        //     window.alert("All fields must be filled.");

    //the card number
  
    let tcard_num = document.querySelector("input#icard_number");
    let spc1 = document.querySelector("div.spc1");
    let spc2 = document.querySelector("div.spc2");
    let spc3 = document.querySelector("div.spc3");
    let spc4 = document.querySelector("div.spc4");

    let card_num = tcard_num.value;

    let part1 = "";
    let part2 = "";
    let part3 = "";
    let part4 = "";

    for (i = 0; i < 16; i++) {
      if (i < 4) {
        part1 += card_num.charAt(i);
      } else if (i < 8) {
        part2 += card_num.charAt(i);
      } else if (i < 12) {
        part3 += card_num.charAt(i);
      } else {
        part4 += card_num.charAt(i);
      }
    }

    spc1.innerHTML = `${part1}`;
    spc2.innerHTML = `${part2}`;
    spc3.innerHTML = `${part3}`;
    spc4.innerHTML = `${part4}`;
    tcard_num.value = "";

    //Card Holder Name
    let card_name = document.querySelector("div.card_name");
    let holder_name = document.querySelector("input#iholder_name");
    card_name.innerHTML = holder_name.value.toUpperCase();
    holder_name.value = "";

    //Exp. Date
    let tmm_exp = document.querySelector("input#imm_exp");
    let mm_exp = tmm_exp.value;
    let tyy_exp = document.querySelector("input#iyy_exp");
    let yy_exp = tyy_exp.value;
    let exp = document.querySelector("div.exp");
    exp.innerHTML = `${mm_exp}/${yy_exp}`;
    tmm_exp.value = "";
    tyy_exp.value = "";

    //CVC Code
    let tcvc = document.querySelector("input#icvc");
    let bck1 = document.querySelector("div.bck1");
    bck1.innerHTML = tcvc.value;
    tcvc.value = "";

    //Continue
    let tks = document.querySelector("aside.tks");
    tks.style.display = "block";
  }

  function new_card() {
    let tcard_num = document.querySelector("input#icard_number");
    let holder_name = document.querySelector("input#iholder_name");
    let tmm_exp = document.querySelector("input#imm_exp");
    let tyy_exp = document.querySelector("input#iyy_exp");
    let tcvc = document.querySelector("input#icvc");
    let spc1 = document.querySelector("div.spc1");
    let spc2 = document.querySelector("div.spc2");
    let spc3 = document.querySelector("div.spc3");
    let spc4 = document.querySelector("div.spc4");
    let card_name = document.querySelector("div.card_name");
    let exp = document.querySelector("div.exp");

    tcard_num.value = "";
    holder_name.value = "";
    tmm_exp.value = "";
    tyy_exp.value = "";
    tcvc.value = "";
    spc1.innerHTML = "0000";
    spc2.innerHTML = "0000";
    spc3.innerHTML = "0000";
    spc4.innerHTML = "0000";
    card_name.innerHTML = "JANE APPLESEED";
    exp.innerHTML = "00/00";

    let tks = document.querySelector("aside.tks");
    tks.style.display = "none";
  }

  function checkCard(num) {
    var msg = Array();
    var tipo = null;

    if (num.length > 16 || num[0] == 0) {
      msg.push("Número de cartão inválido");
    } else {
      var total = 0;
      var arr = Array();

      for (i = 0; i < num.length; i++) {
        if (i % 2 == 0) {
          dig = num[i] * 2;

          if (dig > 9) {
            dig1 = dig.toString().substr(0, 1);
            dig2 = dig.toString().substr(1, 1);
            arr[i] = parseInt(dig1) + parseInt(dig2);
          } else {
            arr[i] = parseInt(dig);
          }

          total += parseInt(arr[i]);
        } else {
          arr[i] = parseInt(num[i]);
          total += parseInt(arr[i]);
        }
      }

      switch (parseInt(num[0])) {
        case 0:
          msg.push("Número incorreto");
          break;
        case 1:
          tipo = "Empresas Aéreas";
          break;
        case 2:
          tipo = "Empresas Aéreas";
          break;
        case 3:
          tipo = "Viagens e Entretenimento";
          if (
            parseInt(num[0] + num[1]) == 34 ||
            parseInt(num[0] + num[1]) == 37
          ) {
            operadora = "Amex";
          }
          if (parseInt(num[0] + num[1]) == 36) {
            operadora = "Diners";
          }
          break;
        case 4:
          tipo = "Bancos e Instituições Financeiras";
          operadora = "visa";
          break;
        case 5:
          if (
            parseInt(num[0] + num[1]) >= 51 &&
            parseInt(num[0] + num[1]) <= 55
          ) {
            operadora = "Mastercard";
          }
          tipo = "Bancos e Instituições Financeiras";
          operadora = "Mastercard";
          break;
        case 6:
          tipo = "Bancos e Comerciais";
          operadora = "";
          break;
        case 7:
          tipo = "Companhias de petróleo";
          operadora = "";
          break;
        case 8:
          tipo = "Companhia de telecomunicações";
          operadora = "";
          break;
        case 9:
          tipo = "Nacionais";
          operadora = "";
          break;
        default:
          msg.push("Número incorreto");
          break;
      }
    }

    if (msg.length > 0) {
      console.log(msg);
    } else {
      console.log(num);

      if (total % 10 == 0) {
        console.log("Cartão válido: (" + total + ")");
        console.log("Tipo: " + tipo);
        console.log("Operadora: " + operadora);
      } else {
        console.log("Cartão inválido: (" + total + ")");
      }
    }
  }

