
/* HTML DE Kİ ARGÜMANLARA ERİŞİYORUZ START */
const textINPUTdom_degiskeni = document.getElementById("todo_input_id");
const buton_add_yapilacaklar  = document.querySelector("#yesil_ekle_id") ;
const yapilacaklar_List_Dom = document.getElementById("todo_liste_id");
/* HTML DE Kİ ARGÜMANLARA ERİŞİYORUZ END */
let textInput_degeri= "";
let yapilacaklar_list =[];

 

                            /* EYLEMLER START */
// YAPILACAKLAR İNPUT 
textINPUTdom_degiskeni.addEventListener("change",function(deneme){
    textInput_degeri = deneme.target.value;

});
// EKLE BUTONU
buton_add_yapilacaklar.addEventListener("click",yapilacakalara_ekle_funk);

function yapilacakalara_ekle_funk(e){
    e.preventDefault(); 
    yapilacaklar_list.unshift({id : yapilacaklar_list.length + 1,
        todoTitle: textInput_degeri});
        textINPUTdom_degiskeni.value="";

        
    
    console.log("tiklandi");
    listede_goster();


} //    Listye Ekleme

    function listede_goster(){
        let result ="";

        

if(yapilacaklar_list.length===0){
    yapilacaklar_List_Dom.innerHTML = "Liste Boş...";
    return
}

else{
    yapilacaklar_list.forEach((item)=>{

        result += `
         <li class="flex justify-between border 
        px-4 py-3 flex items-center justify-between"
        >
            <span>${item.todoTitle}</span>
            <button class="text-red-400" 
            onclick ="listeden_sil(${item.id})" >Sil</button>
        </li>
       
        `
    })

    yapilacaklar_List_Dom.innerHTML =result;

}

        
    }


    function listeden_sil(silicek_id){
        let silinen_id

            for (let index in yapilacaklar_list){
                if(yapilacaklar_list[index].id==silicek_id){
                    silinen_id = index;
                }

            }

            yapilacaklar_list.splice(silinen_id,1);
            listede_goster();


    }

   function listeyi_temizle(){
    yapilacaklar_list.splice(0,yapilacaklar_list.length)
    listede_goster()
   }


    listede_goster()

