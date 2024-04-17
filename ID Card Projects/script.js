function previewId(){
    let leftPanel= document.querySelector(".left-panel");
    let generateCard= document.querySelector("#generateCard");
    let PreviewCard= document.querySelector("#PreviewCard");
    leftPanel.style.display="none";
    generateCard.style.display="block"; 
    PreviewCard.style.display="none"; 

 }
 document.addEventListener("DOMContentLoaded", function() {
     var employeeDetails = [];

     function updateLivePreview() {
         var name = document.getElementById("name").value || "N/A";
         var collegeName = document.getElementById("collegeName").value;
         var studentId = document.getElementById("studentId").value;
         var course = document.getElementById("course").value;
         var photo = document.getElementById("photo").files[0];
         var photoPreview = document.getElementById("idCardPhoto");
         var textColor = document.getElementById("text-color").value || "#000000";
         var fontFamily = document.getElementById("font-family").value || "Arial";
         var idCardName = document.getElementById("idCardName");
         var idCardStudentId = document.getElementById("idCardStudentId");
         var idCardCourse = document.getElementById("idCardCourse");
         var namePositionTopToBottom = document.getElementById("namePositionTopToBottom").value;
         var namePositionLeftToRight = document.getElementById("namePositionLeftToRight").value;
         var idPositionTopToBottom = document.getElementById("idPositionTopToBottom").value;
         var idPositionLeftToRight = document.getElementById("idPositionLeftToRight").value;
         var coursePositionTopToBottom = document.getElementById("coursePositionTopToBottom").value;
         var coursePositionLeftToRight = document.getElementById("coursePositionLeftToRight").value;
         var template =document.getElementById('template').checked ? true : false ;

         document.getElementById('college-name').innerText = collegeName;
         document.getElementById('idCardName').innerText = name;
         document.getElementById('idCardStudentId').innerText = `Student ID: ${studentId}`;
         document.getElementById('idCardCourse').innerText = `Course: ${course}`;

         if (idCardName) {
             idCardName.textContent = name;
             idCardName.style.color = textColor;
             idCardName.style.fontFamily = fontFamily;
             idCardName.style.top = `${namePositionTopToBottom}px`;
             idCardName.style.left = `${namePositionLeftToRight}px`;
         }
         if (idCardStudentId) {
             idCardStudentId.textContent = studentId;
             idCardStudentId.style.color = textColor;
             idCardStudentId.style.fontFamily = fontFamily;
             idCardStudentId.style.top = `${idPositionTopToBottom}px`;
             idCardStudentId.style.left = `${idPositionLeftToRight}px`;
         }
         if (idCardCourse) {
             idCardCourse.textContent = course;
             idCardCourse.style.color = textColor;
             idCardCourse.style.fontFamily = fontFamily;
             idCardCourse.style.top = `${coursePositionTopToBottom}px`;
             idCardCourse.style.left = `${coursePositionLeftToRight}px`;
         }

         if (photo) {
             var reader = new FileReader();
             reader.onload = function(e) {
                 photoPreview.style.backgroundImage = `url(${e.target.result})`;
             };
             reader.readAsDataURL(photo);
         } else {
             photoPreview.style.backgroundImage = 'none';
         }
     }
     

     document.getElementById("name").addEventListener("input", updateLivePreview);
     document.getElementById("collegeName").addEventListener("input", updateLivePreview);
     document.getElementById("studentId").addEventListener("input", updateLivePreview);
     document.getElementById("course").addEventListener("input", updateLivePreview);
     document.getElementById("photo").addEventListener("change", updateLivePreview);
     document.getElementById("text-color").addEventListener("input", updateLivePreview);
     document.getElementById("font-family").addEventListener("input", updateLivePreview);
     document.getElementById("namePositionTopToBottom").addEventListener("input", updateLivePreview);
     document.getElementById("namePositionLeftToRight").addEventListener("input", updateLivePreview);
     document.getElementById("idPositionTopToBottom").addEventListener("input", updateLivePreview);
     document.getElementById("idPositionLeftToRight").addEventListener("input", updateLivePreview);
     document.getElementById("coursePositionTopToBottom").addEventListener("input", updateLivePreview);
     document.getElementById("coursePositionLeftToRight").addEventListener("input", updateLivePreview);

     document.getElementById("idCardForm").addEventListener("submit", function(event) {
         event.preventDefault();
         var name = document.getElementById("name").value;
         var collegeName = document.getElementById("collegeName").value;
         var studentId = document.getElementById("studentId").value;
         var course = document.getElementById("course").value;
         var photo = document.getElementById("photo").files[0];

         var employee = {
             name: name,
             collegeName: collegeName,
             studentId: studentId,
             course: course,
             photo: photo
         };

         employeeDetails.push(employee);

         document.getElementById("name").value = "";
         document.getElementById("collegeName").value = "";
         document.getElementById("studentId").value = "";
         document.getElementById("course").value = "";
         document.getElementById("photo").value = "";

         
     });

     
 });
 function generatePDF() {
     var element = document.getElementById('idCardContent');

     var opt = {
         margin: 0,
         filename: 'myfile.pdf',
         image: { type: 'jpeg', quality: 1 },
         html2canvas: { scale: 1 },
         jsPDF: { unit: 'in', format: [4.6, 3.01], orientation: 'landscape', precision: '12' } 
     };

     html2pdf().set(opt).from(element).save();
 }
 
 function changeTemplate(templateNumber) {
    let idCardContent = document.getElementById('idCardContent');
    idCardContent.style.backgroundImage = `url(images/template${templateNumber}.png)`;
}

