let links = document.getElementsByTagName("url");
for (let i = 0; i < links.length; i++) {
   let link = document.getElementsByTagName("url")[i];
   let get = link.getAttribute('target');
   let attr = link.getAttribute('link');
   link.addEventListener('click', ()=>{
      if (get == "_blank"){
            window.open(attr, '_blank');
               } else {
               if (get == "_self"){
                  window.open(attr, '_self');
               }
               if (get == "_parent"){
                  window.open(attr, '_parent');
               }
                 if (get == "_top"){
                window.open(attr, '_top');
            }
         }
   })

}
