import React, { Component, PropTypes } from 'react';
import './App.css';
import FirstPage from './mainPage.jpg';
import SecondPage from './secondPage.jpg';
import OtherPage from './otherPage.jpg';

  var pdfConverter = require('jspdf');
  const image2base64 = require('image-to-base64');
class App extends Component {
  constructor(props) {
  super(props);
    this.state = {
      Name:"Jimmy Kaler",
      firstPage:'',
      secondPage:'',
      otherPage:''
    }
  };
  firstPage = () =>{
    image2base64(FirstPage)
        .then(
            (response) => {
                this.setState({firstPage:response});
            }
        );
  }
  secondPage = () =>{
    image2base64(SecondPage)
        .then(
            (response) => {
                this.setState({secondPage:response});
            }
        );
  }
  otherPage = () => {
    image2base64(OtherPage)
        .then(
            (response) => {
                this.setState({otherPage:response})
            }
        )
  }
  componentWillMount(){
    this.firstPage();
    this.secondPage();
    this.otherPage();
  }


  printDocument = () => {
    // console.log('storyboard.png');
    const {firstPage,secondPage,otherPage} = this.state;
              const doc = new pdfConverter('p','pt','a4');
            var fPage = 'data:image/jpeg;base64,'+firstPage;
            var sPage = 'data:image/jpeg;base64,'+secondPage;
            var oPage = 'data:image/jpeg;base64,'+otherPage;
               doc.setFontSize(14);
               doc.setTextColor(40);
               doc.setFontStyle('normal');
               doc.addImage(fPage, 'JPEG', 5, 0, 590, 842);
               doc.setFontSize(14);
               doc.setFont("arial");
               doc.setFontType("normal");
               doc.text(40, 240, 'Production Name:');

               doc.setFontSize(12);
               doc.setFont("arial");
               doc.setFontType("normal");
               var pDescription = "Here will be our production Name.";
               var splitDesc = doc.splitTextToSize(pDescription, 260);
               doc.text(40, 260, splitDesc);

               doc.setFontSize(14);
               doc.setFont("arial");
               doc.setFontType("normal");
               doc.text(40, 370, 'Deadline: 10/11/2017');

               doc.setFontSize(14);
               doc.setFont("arial");
               doc.setFontType("normal");
               doc.text(40, 400, 'Category: My Category');

               doc.setFontSize(14);
               doc.setFont("arial");
               doc.setFontType("normal");
               doc.text(40, 430, 'Total Duration: 5:00');

               doc.setFontSize(14);
               doc.setFont("arial");
               doc.setFontType("normal");
               doc.text(40, 460, 'Objective:');

               doc.setFontSize(12);
               doc.setFont("arial");
               doc.setFontType("normal");
               var oDescription = "Here will be our Objective description. Here will be our Objective description.";
               var splitObj = doc.splitTextToSize(oDescription, 260);
               doc.text(40, 480, splitObj);

               doc.setFontSize(14);
               doc.setFont("arial");
               doc.setFontType("normal");
               doc.text(40, 530, 'Target Audience:');

               doc.setFontSize(12);
               doc.setFont("arial");
               doc.setFontType("normal");
               var tDescription = "Here will be our production description. Here will be our production description.";
               var splitTarg = doc.splitTextToSize(tDescription, 260);
               doc.text(40, 560, splitTarg);

                doc.setFontSize(14);
                doc.setFont("arial");
                doc.setFontType("normal");
                doc.text(40, 600, 'Contributors:');

                doc.setFontSize(12);
                doc.setFont("arial");
                doc.setFontType("normal");
                var cDescription = "Here will be our production description. Here will be our production description.";
                var splitTarg = doc.splitTextToSize(tDescription, 260);
                doc.text(40, 620, splitTarg)

                doc.setFontSize(10);
                doc.setFont("arial");
                doc.setFontType("normal");
                doc.text(40, 680, 'Production Pin: EPIN001');

                doc.setFontSize(10);
                doc.setFont("arial");
                doc.setFontType("normal");
                doc.text(40, 700, 'Storyboard Printed On: 10/12/2018');

                doc.setFontSize(10);
                doc.setFont("arial");
                doc.setFontType("normal");
                doc.text(40, 720, 'By: Jimmy');

                //////////// Seconnd Page////////////

                doc.addPage('a4','p');
                doc.addImage(sPage, 'JPEG', 0, 0, 595, 842);

                doc.setFontSize(20);
                doc.setFont("arial");
                doc.setFontType("bold");
                doc.text(290, 80, 'Storyboard', null, null, 'center');

                doc.setTextColor(100);
                doc.setFontSize(14);
                doc.setFont("arial");
                doc.setFontType("bold");
                doc.text(70, 265, '1. Intro');
                doc.setFontType("normal");
                doc.text(270, 265, '5 sec');

                doc.setTextColor(100);
                doc.setFontSize(14);
                doc.setFont("arial");
                doc.setFontType("normal");
                doc.text(70, 285, 'Title of Scene');

                doc.setTextColor(100);
                doc.setFontSize(14);
                doc.setFont("arial");
                doc.setFontType("normal");
                doc.text(340, 120, 'Description');

                 doc.setFontSize(12);
                doc.setFont("arial");
                doc.setFontType("normal");
                var desc1 = "Here will be our production Name.Here will be our production Name.Here will be our production Name.";
                var splitDesc1 = doc.splitTextToSize(desc1, 220);
                doc.text(340, 140, splitDesc1);

                doc.setTextColor(100);
                doc.setFontSize(14);
                doc.setFont("arial");
                doc.setFontType("bold");
                doc.text(70, 480, '2. Title Card');
                doc.setFontType("normal");
                doc.text(270, 480, 'Duration');

                doc.setTextColor(100);
                doc.setFontSize(14);
                doc.setFont("arial");
                doc.setFontType("normal");
                doc.text(70, 500, 'Title of Scene');

                doc.setTextColor(100);
                doc.setFontSize(14);
                doc.setFont("arial");
                doc.setFontType("normal");
                doc.text(340, 340, 'Description');

                 doc.setFontSize(12);
                doc.setFont("arial");
                doc.setFontType("normal");
                var desc2 = "Here will be our production Name.Here will be our production Name.Here will be our production Name.";
                var splitDesc2 = doc.splitTextToSize(desc2, 220);
                doc.text(340, 360, splitDesc2);


                doc.setTextColor(100);
                doc.setFontSize(14);
                doc.setFont("arial");
                doc.setFontType("bold");
                doc.text(70, 700, '3. Full Video');
                doc.setFontType("normal");
                doc.text(270, 700, 'Duration');

                doc.setTextColor(100);
                doc.setFontSize(14);
                doc.setFont("arial");
                doc.setFontType("normal");
                doc.text(70, 720, 'Title of Scene');

                doc.setTextColor(100);
                doc.setFontSize(14);
                doc.setFont("arial");
                doc.setFontType("normal");
                doc.text(340, 580, 'Description');

                doc.setFontSize(12);
                doc.setFont("arial");
                doc.setFontType("normal");
                var desc3 = "Here will be our production Name.Here will be our production Name.Here will be our production Name.";
                var splitDesc3 = doc.splitTextToSize(desc3, 220);
                doc.text(340, 600, splitDesc3);

                doc.setTextColor(100);
                doc.setFontSize(14);
                doc.setFont("arial");
                doc.setFontType("normal");
                doc.text(340, 660, 'Teleprometer');

                doc.setFontSize(12);
                doc.setFont("arial");
                doc.setFontType("normal");
                var desc4 = "Here will be our production Name.Here will be our production Name.Here will be our production Name.";
                var splitDesc4 = doc.splitTextToSize(desc4, 220);
                doc.text(340, 680, splitDesc4);


                ////////////   Third Page /////////////////


                doc.addPage('a4','p');
                 doc.addImage(oPage, 'JPEG', 0, 0, 595, 842);
                 doc.setTextColor(100);
                doc.setFontSize(14);
                doc.setFont("arial");
                doc.setFontType("bold");
                doc.text(70, 230, '4. Split Screen');
                doc.setFontType("normal");
                doc.text(270, 230, 'Duration');

                doc.setTextColor(100);
                doc.setFontSize(14);
                doc.setFont("arial");
                doc.setFontType("normal");
                doc.text(70, 250, 'Title of Scene');

                doc.setTextColor(100);
                doc.setFontSize(14);
                doc.setFont("arial");
                doc.setFontType("normal");
                doc.text(340, 80, 'Description');

                 doc.setFontSize(12);
                doc.setFont("arial");
                doc.setFontType("normal");
                var desc4 = "Here will be our production Name.Here will be our production Name.Here will be our production Name.";
                var splitDesc4 = doc.splitTextToSize(desc4, 220);
                doc.text(340, 100, splitDesc4);

                doc.setTextColor(100);
                doc.setFontSize(14);
                doc.setFont("arial");
                doc.setFontType("bold");
                doc.text(70, 440, '5. Outro');
                doc.setFontType("normal");
                doc.text(270, 440, 'Duration');

                doc.setTextColor(100);
                doc.setFontSize(14);
                doc.setFont("arial");
                doc.setFontType("normal");
                doc.text(70, 460, 'Title of Scene');

                doc.setTextColor(100);
                doc.setFontSize(14);
                doc.setFont("arial");
                doc.setFontType("normal");
                doc.text(340, 300, 'Description');

                 doc.setFontSize(12);
                doc.setFont("arial");
                doc.setFontType("normal");
                var desc5 = "Here will be our production Name.Here will be our production Name.Here will be our production Name.";
                var splitDesc5 = doc.splitTextToSize(desc5, 220);
                doc.text(340, 320, splitDesc5);


               doc.save("test.pdf");
                  // console.log(result);
            }




      // };
    // doc.setFontSize(22);
   // doc.text(20, 50, 'Park Entry Ticket');
   // doc.setFontSize(16);
   // doc.text(20, 80, 'Address1: Phillaur');
   // doc.text(20, 100, 'Address2: Punjab, India' );
   // doc.text(20, 120, 'Entry Date & time: 10/10/1018');
   // doc.text(20, 140, 'Expiry date & time: 10/12/2018');
   // doc.save("test.pdf");

   //var blob = doc.output("datauristring");

   // doc.output('datauristring');        //returns the data uri string
    // doc.output('datauri');              //opens the data uri in current window
    // doc.output('dataurlnewwindow');     //opens the data uri in new window
    // window.open(doc.output('datauristring'), '_blank');
     // const inputs =  document.getElementById('divToPrint');
     // html2canvas(inputs)
     //   .then((canvas) => {
     //     const imgData = canvas.toDataURL('image/png');
     //     const pdf = new jsPDF();
     //     pdf.addImage(imgData, 'JPEG', 0, 0);
     //     // pdf.output('dataurlnewwindow');
     //     pdf.save("download.pdf");
     //   })
     // ;


  render() {
    return (
      <div className="App">
        <div className="mb5">
          <button onClick={this.printDocument}>Print</button>
        </div>
        <div id="divToPrint" className="mt4" >
          <div>Note: Here the dimensions of div are same as A4</div>
          <div>You Can add any component here</div>

        </div>
      </div>
    );
  }
}

export default App;
