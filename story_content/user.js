function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6CnvuLK24t4":
        Script1();
        break;
      case "6ZzudcbGNcQ":
        Script2();
        break;
      case "5UpJuPxCOwT":
        Script3();
        break;
      case "62I0WXmWULK":
        Script4();
        break;
      case "6GTObwnoo1I":
        Script5();
        break;
      case "5YGpkp7YtMX":
        Script6();
        break;
      case "6OMdhmci2ep":
        Script7();
        break;
      case "5xTckftBw3n":
        Script8();
        break;
      case "5W0fe8AYbnl":
        Script9();
        break;
      case "6rZ9QnJm4ko":
        Script10();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script8()
{
  $("#tab-customlink").show();
}

function Script9()
{
  $("#tab-customlink").show();
}

function Script10()
{
  window.print();
}

