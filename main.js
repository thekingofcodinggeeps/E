var images = ["https://cdn.myanimelist.net/s/common/uploaded_files/1466575469-a29a16ba3d950f45910ffb899497a9f9.png","https://grist.org/fix/wp-content/uploads/sites/3/2021/09/intersectionality-in-fiction-UPDATED-ILLO.jpg", "https://ahseeit.com/anime/king-include/uploads/2021/02/148778817_406386187092926_5614728022664911692_n-8146675095.jpg", "https://images-na.ssl-images-amazon.com/images/I/61soMCzX+mL.jpg", "https://thumbs.dreamstime.com/b/d-zebra-rainbow-print-letter-e-animal-skin-fur-creative-decorative-character-e-colorful-isolated-white-background-d-zebra-161350304.jpg" ];
var names = ["Cartoons are animated drawings, and so is anime","They both are fictional and have voiced characters.", "They both get memed", "Yeet", "E"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    
    var updatedImage = images[i];
    
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
