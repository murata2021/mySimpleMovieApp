
$("#formID").on("submit",function(evt){

    evt.preventDefault()

    console.log($("input[name='title']").get(0).value.length)

    if (parseFloat($("input[name='rating']").get(0).value)<=10 && parseInt($("input[name='rating']").get(0).value)>=0 && $("input[name='title']").get(0).value.length>=2){
        $("#display").append(`<li class=${$("input[name='rating']").get(0).value}>${$("input[name='title']").get(0).value} is a nice movie! It has ${$("input[name='rating']").get(0).value} rating  <button type='submit'>delete me</button></li> `)
    }
    else{
        // throw new Error("Invalid Input!")
        alert("Invalid Input:\n\nRating should between 0-10!\nTitle should have at least two characters!")
    }
})


$('#display').on("click","button",function(evt){

    console.log(evt.target.parentElement)
    evt.target.parentElement.remove()
})

$("#applyAlphabetSorting").on("click",function(event){

  
    const currMethod=document.querySelector("#sortByAlphabet").value



    //Sorting for Alphabet

    const mylist = $('#display');
    const listitems = mylist.children('li').get();
    listitems.sort(function(a, b) {
        return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
    })

    if (currMethod==="Ascending"){

     $.each(listitems, function(idx, itm) { mylist.append(itm); });
    }
    else if(currMethod==="Descending"){
        $.each(listitems.reverse(), function(idx, itm) { mylist.append(itm); });
    }
    
})



$("#applyRatingSorting").on("click",function(event){


    const currRatingMethod=document.querySelector("#sortByRating").value


    //Sorting for Rating

    const mylist = $('#display');
    const listitemsForRating = mylist.children('li').get();
    listitemsForRating.sort(function(a, b) {

        return $(a).attr("class").localeCompare($(b).attr("class"),undefined,{numeric:true});
    })

    if (currRatingMethod==="Ascending"){
        $.each(listitemsForRating, function(idx, itm) { mylist.append(itm); });
    }

    else if(currRatingMethod==="Descending"){
        $.each(listitemsForRating.reverse(), function(idx, itm) { mylist.append(itm); });
    }

})




