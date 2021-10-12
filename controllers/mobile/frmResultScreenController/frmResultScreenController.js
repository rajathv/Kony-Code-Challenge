define({

  //Type your controller code here 
  onNavigate: function (res) {
    var cmdstr = res["cmdStr"];
    this.productResult(cmdstr);
  },
  //main function which generates the resultant hexadecimal string from the input
  productResult: function (txtStr) {
    var robotInput = txtStr;
    var pos = 0;
    var blk = false;
    var robotOutputArr = new Array(10);
    for (let i = 0; i < 10; i++) {
      robotOutputArr[i] = 0;
    }
    for (let i = 0; i < robotInput.length; i++) {
      if (robotInput[i] == "P") {
        pos =0;
        blk=true;
      }
      else if (robotInput[i] == "M") {
        if(pos<=15){
          pos=pos+1;
        }
      }
      else if (robotInput[i] == "L") {
        if(blk){
          robotOutputArr[pos] = robotOutputArr[pos]+1;
        }
        blk=false;
        
      }
    }
    var robotOutput = "";
    for (let i = 0; i < 10; i++) {
      robotOutput = robotOutput + robotOutputArr[i].toString(16);
    } 
    this.view.lblResultValue.text= robotOutput.toUpperCase();
  },
  //function to exit application
  applicationExitButton : function(){
    try{
      kony.application.exit();
    }catch(e){
      alert("Exception While getting exiting the application  : " + Error);
    }
  },
  //function to go back to previous form 
  goBackButtonClicked : function(){
	var ntf = new kony.mvc.Navigation("frmLandingScreen");
    ntf.navigate();
  },
  
  
  //test cases
 utcase:function(){
   this.productResult("PMLPMMLPMLPMMLPMMML");
   this.productResult("PLPLPLPLPLPLPLPLPLPL");
   this.productResult("PPPPPPPPPPPPPPPPPPPP");
   this.productResult("LLLLLLLLLLLLLLLLLLLLL");
   this.productResult("MMMMMMMMMMMMMMMMM");
 }
});