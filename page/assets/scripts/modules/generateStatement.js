
class generateStatement {
  constructor(language) {
    var data_load = "./data/statement_"+language+".html";
    $("#text__statement").load(data_load)
  }
}

export default generateStatement
